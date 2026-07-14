// ============================================================
// main.js — scene, kamera, interaksi & seluruh fitur UI
// ============================================================
import * as THREE from 'three';
import { OrbitControls } from '../vendor/OrbitControls.js';
import { buildTree } from './tree.js';
import {
  LAYERS, LAYER_ORDER, TOUR, QUIZ, RANTING, RANTING_AKAR, SCIENTIFIC, STRINGS, LAYER_NAMES,
  REFS, getKnowledge,
} from './content.js';

// tunggu font siap agar label kanvas 3D memakai huruf yang benar
await Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 1500))]);

const params = new URLSearchParams(location.search);
const isMobile = matchMedia('(max-width: 768px)').matches || navigator.maxTouchPoints > 2;
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const quality = isMobile ? 'low' : 'high';
const KIOSK = params.has('kiosk');

// ---------- bahasa ----------
let lang = localStorage.getItem('hc-lang') || 'id';
const S = () => STRINGS[lang];
const tt = (v) => (typeof v === 'string' ? v : v?.[lang] ?? v?.id ?? '');

// ---------- renderer / scene ----------
const canvas = document.getElementById('scene');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: !isMobile, alpha: false });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.15;

const scene = new THREE.Scene();

// langit siang: tekstur gradien vertikal (biru → pucat di cakrawala)
function skyGradient() {
  const c = document.createElement('canvas');
  c.width = 16; c.height = 256;
  const x = c.getContext('2d');
  const g = x.createLinearGradient(0, 0, 0, 256);
  g.addColorStop(0, '#3f7fc4');
  g.addColorStop(0.45, '#7fb0dd');
  g.addColorStop(0.78, '#c3ddef');
  g.addColorStop(1, '#e6f0e4');
  x.fillStyle = g;
  x.fillRect(0, 0, 16, 256);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
const SKY_DAY = skyGradient();
const NIGHT_BG = new THREE.Color('#04120b');
scene.fog = new THREE.FogExp2('#04120b', 0.0075);

const camera = new THREE.PerspectiveCamera(46, innerWidth / innerHeight, 0.1, 600);
camera.position.set(38, 16, 52);

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.dampingFactor = 0.06;
controls.minDistance = 8;
controls.maxDistance = 130;
controls.maxPolarAngle = Math.PI * 0.78;
controls.target.set(0, 12, 0);
controls.autoRotate = !reduceMotion;
controls.autoRotateSpeed = 0.45;

const hemi = new THREE.HemisphereLight('#bfe0ff', '#6b8f4a', 1.15);
scene.add(hemi);
const sun = new THREE.DirectionalLight('#fff4e0', 2.1);
sun.position.set(-28, 52, 22);
scene.add(sun);
const fill = new THREE.DirectionalLight('#cfe6ff', 0.8);
fill.position.set(35, 12, 45);
scene.add(fill);
const warm = new THREE.PointLight('#ffb347', 0, 90, 1.8);   // penghangat malam
warm.position.set(0, 20, 0);
scene.add(warm);
const under = new THREE.PointLight('#4cc9f0', 0, 60, 2);    // pendar bawah malam
under.position.set(0, -6, 0);
scene.add(under);

const tree = buildTree(quality);
scene.add(tree.root);

// ---------- siang / malam ----------
let isDay = (localStorage.getItem('hc-scene') || 'day') === 'day';
let warmBase = 0;
function applyScene(day) {
  isDay = day;
  if (day) {
    scene.background = SKY_DAY;
    scene.fog.color.set('#cfe0ee');
    scene.fog.density = 0.006;
    hemi.color.set('#bfe0ff'); hemi.groundColor.set('#6b8f4a'); hemi.intensity = 1.15;
    sun.color.set('#fff4e0'); sun.intensity = 2.1;
    fill.intensity = 0.8;
    warmBase = 0; under.intensity = 0;
    renderer.toneMappingExposure = 1.15;
  } else {
    scene.background = NIGHT_BG;
    scene.fog.color.set('#04120b');
    scene.fog.density = 0.0075;
    hemi.color.set('#9ed6a8'); hemi.groundColor.set('#2a3b24'); hemi.intensity = 0.9;
    sun.color.set('#cfe8ff'); sun.intensity = 1.4;
    fill.intensity = 0.55;
    warmBase = 55; under.intensity = 35;
    renderer.toneMappingExposure = 1.35;
  }
  localStorage.setItem('hc-scene', day ? 'day' : 'night');
  tree.setDaytime(day);
  applySeason(currentSeason); // pertahankan palet musim di atas basis siang/malam
}

// ---------- material per lapisan untuk efek dim ----------
const layerMats = {};
for (const k of Object.keys(tree.groups)) {
  const set = new Set();
  tree.groups[k].traverse((o) => {
    if (o.material && !o.userData.isLabel && !o.userData.isHalo && !o.userData.isRantingLabel) set.add(o.material);
  });
  layerMats[k] = [...set].map((m) => ({ m, baseOpacity: m.opacity ?? 1 }));
}
const dimTarget = {}; const dimNow = {};
for (const k of Object.keys(tree.groups)) { dimTarget[k] = 1; dimNow[k] = 1; }

function setFocus(layerId) {
  const valid = layerId && tree.groups[layerId] ? layerId : null; // matahari/tanah bukan grup layer
  for (const k of Object.keys(tree.groups)) {
    dimTarget[k] = !valid || k === valid ? 1 : 0.13;
    if (valid && k === 'intelligence' && valid !== 'intelligence') dimTarget[k] = 0.3;
  }
  for (const k of Object.keys(tree.labels)) {
    const show = k === valid;
    for (const sp of tree.labels[k]) sp.userData.targetOpacity = show ? 1 : 0;
  }
}
for (const k of Object.keys(tree.labels)) for (const sp of tree.labels[k]) sp.userData.targetOpacity = 0;

// ---------- tween kamera ----------
let camTween = null;
function flyTo(pos, target, dur = 1.9) {
  camTween = {
    t: 0, dur: reduceMotion ? 0.01 : dur,
    p0: camera.position.clone(), p1: new THREE.Vector3(...pos),
    t0: controls.target.clone(), t1: new THREE.Vector3(...target),
  };
}
const ease = (x) => (x < 0.5 ? 4 * x ** 3 : 1 - Math.pow(-2 * x + 2, 3) / 2);

const CAM_VIEWS = {
  home: { pos: [23, 13, 33], target: [0, 12, 0] },
  akar: { pos: [26, -7, 30], target: [0, -5, 0] },
  batang: { pos: [16, 9, 21], target: [0, 8, 0] },
  cabang: { pos: [26, 22, 30], target: [0, 16, 0] },
  daun: { pos: [24, 27, 30], target: [0, 23, 0] },
  buah: { pos: [21, 16, 27], target: [0, 20, 0] },
  intelligence: { pos: [34, 10, 40], target: [0, 11, 0] },
  matahari: { pos: [22, 34, 46], target: [-9, 34, -7] },
  tanah: { pos: [20, 7, 30], target: [0, 1.5, 0] },
};

// ============================================================
// util UI
// ============================================================
const $ = (s) => document.querySelector(s);
const panel = $('#panel');
const reader = $('#reader');
const tourCard = $('#tour-card');
const chips = [...document.querySelectorAll('.chip[data-layer]')];

let activeLayer = null;
let tourIndex = -1;
let hotMesh = null;

// ---------- i18n chrome ----------
function applyStrings() {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-s]').forEach((el) => {
    const key = el.dataset.s;
    if (S()[key]) el.textContent = S()[key];
  });
  $('#search-input').placeholder = S().search;
  chips.forEach((c) => {
    c.querySelector('span').textContent = LAYER_NAMES[lang][c.dataset.layer];
  });
  $('#m-lang span').textContent = S().lang;
  if (typeof updateDayLabel === 'function') updateDayLabel();
  if (typeof updateSeasonLabel === 'function') updateSeasonLabel();
  if (typeof renderCrumbs === 'function') renderCrumbs();
  if (activeLayer) renderPanel(activeLayer);
  if (tourIndex >= 0) renderTour(tourIndex);
}

// ============================================================
// panel lapisan
// ============================================================
function renderPanel(id) {
  const L = LAYERS[id];
  $('#panel-tag').textContent = tt(L.tag);
  $('#panel-tag').style.color = L.color;
  $('#panel-title').textContent = tt(L.title);
  $('#panel-sub').textContent = tt(L.subtitle);
  const list = $('#panel-list');
  list.innerHTML = '';
  for (const it of L.items) {
    const li = document.createElement('li');
    li.innerHTML = `<span class="dot" style="background:${L.color}"></span><div><strong></strong><small></small></div>`;
    li.querySelector('strong').textContent = it.name;
    li.querySelector('small').textContent = tt(it.detail);
    list.appendChild(li);
  }
}

function openLayer(id, { keepTour = false } = {}) {
  if (!keepTour) stopTour();
  activeLayer = id;
  chips.forEach((c) => c.classList.toggle('active', c.dataset.layer === id));
  setFocus(id);
  controls.autoRotate = false;
  const v = CAM_VIEWS[id];
  flyTo(v.pos, v.target);
  hideReader();
  renderPanel(id);
  panel.classList.add('open');
  document.body.classList.add('panel-open');
  crumbs = [{ label: LAYER_NAMES[lang][id], kind: 'layer', id }];
  renderCrumbs();
}

function closeLayer() {
  activeLayer = null;
  chips.forEach((c) => c.classList.remove('active'));
  setFocus(null);
  panel.classList.remove('open');
  document.body.classList.remove('panel-open');
  hideReader();
  tree.clearValuePath();
  controls.autoRotate = !reduceMotion && tourIndex < 0;
  flyTo(CAM_VIEWS.home.pos, CAM_VIEWS.home.target);
  crumbs = [];
  renderCrumbs();
}

chips.forEach((c) => c.addEventListener('click', () => {
  if (activeLayer === c.dataset.layer) closeLayer();
  else openLayer(c.dataset.layer);
}));
$('#panel-close').addEventListener('click', closeLayer);
$('#btn-home').addEventListener('click', () => { stopTour(); closeLayer(); });

// ============================================================
// kartu node
// ============================================================
const H4 = (t) => { const e = document.createElement('h4'); e.textContent = t; return e; };
const P = (t, cls) => { const e = document.createElement('p'); if (cls) e.className = cls; e.textContent = t; return e; };

// membangun konten kaya: KNOWLEDGE bespoke, atau fallback dari detail
function knowledgeFor(data) {
  const k = getKnowledge(data.name);
  const key = k?.key || RANTING[data.name] || RANTING_AKAR[data.name] || null;
  if (k) return {
    def: tt(k.def), why: tt(k.why), refs: k.refs || [], related: k.related || [],
    metric: tt(k.metric), key, caseText: k.case ? tt(k.case) : '', template: k.template || [],
  };
  // fallback
  const siblings = data.layer && LAYERS[data.layer]
    ? LAYERS[data.layer].items.map((i) => i.name).filter((n) => n !== data.name).slice(0, 4)
    : [];
  const defaultRefs = data.layer === 'intelligence' ? ['PABoK', 'HCBoK'] : ['HCBoK'];
  return {
    def: tt(data.detail), why: '', refs: data.parent ? [] : defaultRefs,
    related: data.parent ? [data.parent] : siblings, metric: '', key, caseText: '', template: [],
  };
}

function openReader(data) {
  const accent = data.labelColor || (LAYERS[data.layer]?.color) || '#d4a017';
  reader.style.setProperty('--accent', accent);
  $('#reader-tag').textContent = data.parent
    ? `${LAYER_NAMES[lang][data.layer] || ''} · ${data.parent}`
    : (LAYER_NAMES[lang][data.layer] || '');
  $('#reader-title').textContent = tt(data.name);

  // aksi
  const actions = $('#reader-actions');
  actions.innerHTML = '';
  if (!data.leaf && (data.layer === 'cabang' || data.layer === 'akar') && tree.hasRanting(data.name)) {
    const b = document.createElement('button');
    b.className = 'btn-gold sm';
    b.textContent = tree.isRantingOpen(data.name) ? S().rantingHide : S().ranting;
    b.addEventListener('click', () => {
      const open = tree.toggleRanting(data.name);
      b.textContent = open ? S().rantingHide : S().ranting;
    });
    actions.appendChild(b);
  }
  if (data.layer === 'buah' && tree.isFruit(data.name)) {
    const b = document.createElement('button');
    b.className = 'btn-ghost sm';
    b.textContent = S().valuePath;
    b.addEventListener('click', () => {
      const info = tree.showValuePath(data.name);
      if (info) {
        setFocus(null);
        flyTo(CAM_VIEWS.home.pos, [0, 12, 0], 1.6);
      }
    });
    actions.appendChild(b);
  }

  // tubuh
  const k = knowledgeFor(data);
  const body = $('#reader-body');
  body.innerHTML = '';
  if (k.def) { body.appendChild(H4(lang === 'id' ? 'Definisi' : 'Definition')); body.appendChild(P(k.def)); }
  if (k.why) { body.appendChild(H4(lang === 'id' ? 'Mengapa penting' : 'Why it matters')); body.appendChild(P(k.why, 'muted')); }
  if (k.key && k.key.length) {
    body.appendChild(H4(lang === 'id' ? 'Konsep kunci' : 'Key concepts'));
    const wrap = document.createElement('div'); wrap.className = 'r-chips r-key';
    k.key.forEach((name) => {
      const b = document.createElement('button');
      b.textContent = name;
      b.addEventListener('click', () => jumpToNode(name, data.name));
      wrap.appendChild(b);
    });
    body.appendChild(wrap);
  }
  if (k.metric) {
    body.appendChild(H4(lang === 'id' ? 'Sudut People Analytics' : 'People Analytics angle'));
    body.appendChild(P(k.metric, 'metric'));
  }
  if (k.caseText) {
    body.appendChild(H4(lang === 'id' ? 'Studi kasus' : 'Case study'));
    body.appendChild(P(k.caseText, 'casebox'));
  }
  if (k.template && k.template.length) {
    body.appendChild(H4(lang === 'id' ? 'Template' : 'Templates'));
    const wrap = document.createElement('div'); wrap.className = 'r-chips r-tpl';
    k.template.forEach((t) => {
      const s = document.createElement('span');
      s.className = 'tplbadge'; s.textContent = t;
      wrap.appendChild(s);
    });
    body.appendChild(wrap);
  }
  if (k.refs && k.refs.length) {
    body.appendChild(H4(lang === 'id' ? 'Referensi kerangka' : 'Framework references'));
    const wrap = document.createElement('div'); wrap.className = 'r-chips';
    k.refs.forEach((r) => {
      const span = document.createElement('span');
      span.className = 'refbadge'; span.textContent = r;
      if (REFS[r]) span.title = tt(REFS[r]);
      wrap.appendChild(span);
    });
    body.appendChild(wrap);
  }
  if (k.related && k.related.length) {
    body.appendChild(H4(lang === 'id' ? 'Terkait' : 'Related'));
    const wrap = document.createElement('div'); wrap.className = 'r-chips';
    k.related.forEach((name) => {
      const b = document.createElement('button');
      b.textContent = name;
      b.addEventListener('click', () => jumpToNode(name));
      wrap.appendChild(b);
    });
    body.appendChild(wrap);
  }

  body.scrollTop = 0;
  reader.classList.add('open');
  document.body.classList.add('reader-open');
}
function hideReader() {
  reader.classList.remove('open');
  document.body.classList.remove('reader-open');
  if (hotMesh) { hotMesh.userData.hot = false; hotMesh = null; }
}
// lompat ke simpul lain berdasar nama (dari konsep kunci / terkait)
function jumpToNode(name, parentHint) {
  // buka ranting induk bila perlu agar simpul anak ada
  if (parentHint && tree.hasRanting(parentHint) && !tree.isRantingOpen(parentHint)) tree.toggleRanting(parentHint);
  const attempt = () => {
    const mesh = findNodeMesh(name, parentHint);
    if (mesh) { drillIntoNode(mesh, innerWidth / 2, innerHeight * 0.28); return true; }
    return false;
  };
  if (!attempt()) setTimeout(attempt, 260);
}
$('#reader-close').addEventListener('click', () => { hideReader(); tree.clearValuePath(); });

const ray = new THREE.Raycaster();
const ptr = new THREE.Vector2();
let downAt = null;
canvas.addEventListener('pointerdown', (e) => { downAt = [e.clientX, e.clientY]; });
canvas.addEventListener('pointerup', (e) => {
  if (!downAt) return;
  const dx = e.clientX - downAt[0], dy = e.clientY - downAt[1];
  downAt = null;
  if (dx * dx + dy * dy > 36) return;
  ptr.x = (e.clientX / innerWidth) * 2 - 1;
  ptr.y = -(e.clientY / innerHeight) * 2 + 1;
  ray.setFromCamera(ptr, camera);
  const hits = ray.intersectObjects(tree.interactives, false);
  if (hits.length) {
    drillIntoNode(hits[0].object, e.clientX, e.clientY);
  } else hideReader();
});
canvas.addEventListener('pointermove', (e) => {
  if (isMobile) return;
  ptr.x = (e.clientX / innerWidth) * 2 - 1;
  ptr.y = -(e.clientY / innerHeight) * 2 + 1;
  ray.setFromCamera(ptr, camera);
  canvas.style.cursor = ray.intersectObjects(tree.interactives, false).length ? 'pointer' : 'grab';
});

// ============================================================
// DRILL-DOWN — menjelajah menembus pohon (breadcrumb + zoom)
// ============================================================
const crumbEl = $('#breadcrumb');
const _wp = new THREE.Vector3();
let crumbs = []; // {label, kind:'layer'|'node', id?, name?, parent?, leaf?}

function frameWorldPos(wp, dist) {
  const dir = camera.position.clone().sub(controls.target);
  if (dir.lengthSq() < 0.04) dir.set(1, 0.4, 1);
  dir.normalize();
  const pos = wp.clone().add(dir.multiplyScalar(dist));
  controls.autoRotate = false;
  flyTo([pos.x, pos.y, pos.z], [wp.x, wp.y, wp.z], 1.5);
}
function findNodeMesh(name, parent) {
  let loose = null;
  for (const m of tree.interactives) {
    const n = m.userData.node;
    if (!n || n.name !== name) continue;
    if (parent && n.parent === parent) return m;
    if (!loose) loose = m;
  }
  return loose;
}
function renderCrumbs() {
  crumbEl.innerHTML = '';
  if (!crumbs.length) { crumbEl.classList.remove('show'); return; }
  crumbEl.classList.add('show');
  const home = document.createElement('button');
  home.textContent = lang === 'id' ? 'Pohon' : 'Tree';
  home.addEventListener('click', () => gotoCrumb(-1));
  crumbEl.appendChild(home);
  crumbs.forEach((c, i) => {
    const sep = document.createElement('span'); sep.className = 'sep'; sep.textContent = '›';
    crumbEl.appendChild(sep);
    const b = document.createElement('button');
    b.textContent = c.label;
    if (i === crumbs.length - 1) b.classList.add('current');
    else b.addEventListener('click', () => gotoCrumb(i));
    crumbEl.appendChild(b);
  });
}
function gotoCrumb(i) {
  if (i < 0) { closeLayer(); return; }
  const target = crumbs[i];
  crumbs = crumbs.slice(0, i + 1);
  hideReader(); tree.clearValuePath();
  if (target.kind === 'layer') {
    openLayer(target.id, { fromCrumb: true });
  } else {
    const mesh = findNodeMesh(target.name, target.parent);
    if (mesh) {
      if (mesh.userData.node.parent && !tree.isRantingOpen(mesh.userData.node.parent)) {
        tree.toggleRanting(mesh.userData.node.parent);
      }
      frameWorldPos(mesh.getWorldPosition(_wp), target.leaf ? 8 : 14);
      setFocus(mesh.userData.node.layer);
      openReader(mesh.userData.node);
    }
  }
  renderCrumbs();
}
function drillIntoNode(mesh, x, y) {
  const data = mesh.userData.node;
  if (hotMesh) hotMesh.userData.hot = false;
  hotMesh = mesh; mesh.userData.hot = true;
  // masuk mode jelajah: tutup panel lapisan agar breadcrumb & kartu terlihat
  panel.classList.remove('open');
  document.body.classList.remove('panel-open');
  // buka anak (ranting) bila ada dan node ini bukan daun
  const drillable = !data.leaf && (data.layer === 'cabang' || data.layer === 'akar') && tree.hasRanting(data.name);
  if (drillable && !tree.isRantingOpen(data.name)) tree.toggleRanting(data.name);
  frameWorldPos(mesh.getWorldPosition(_wp), drillable ? 14 : 8);
  if (tourIndex < 0) setFocus(data.layer);
  // breadcrumb
  const arr = [];
  if (tree.groups[data.layer]) {
    arr.push({ label: LAYER_NAMES[lang][data.layer], kind: 'layer', id: data.layer });
    if (data.parent) arr.push({ label: data.parent, kind: 'node', name: data.parent });
    arr.push({ label: tt(data.name), kind: 'node', name: data.name, parent: data.parent, leaf: data.leaf });
  } else {
    // konsep tambahan (matahari/tanah)
    arr.push({ label: tt(data.name), kind: 'node', name: data.name });
  }
  crumbs = arr;
  renderCrumbs();
  if (tree.groups[data.layer]) {
    activeLayer = data.layer;
    chips.forEach((c) => c.classList.toggle('active', c.dataset.layer === data.layer));
  }
  openReader(data);
}

// ============================================================
// narasi suara
// ============================================================
let speakOn = false;
function speak(text) {
  if (!('speechSynthesis' in window)) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = lang === 'id' ? 'id-ID' : 'en-US';
  u.rate = 0.97;
  speechSynthesis.speak(u);
}
function stopSpeak() { if ('speechSynthesis' in window) speechSynthesis.cancel(); }
$('#tour-speak').addEventListener('click', () => {
  speakOn = !speakOn;
  $('#tour-speak').classList.toggle('on', speakOn);
  $('#tour-speak').setAttribute('aria-label', speakOn ? S().speakStop : S().speak);
  if (speakOn && tourIndex >= 0) {
    const st = TOUR[tourIndex];
    speak(`${tt(st.title)}. ${tt(st.text)}`);
  } else stopSpeak();
});

// ============================================================
// tur berpemandu (+ kiosk)
// ============================================================
let kioskTimer = null;
function renderTour(i) {
  const step = TOUR[i];
  $('#tour-tag').textContent = tt(step.tag);
  $('#tour-tag').style.color = step.layer ? LAYERS[step.layer].color : '#d4a017';
  $('#tour-title').textContent = tt(step.title);
  $('#tour-text').textContent = tt(step.text);
  $('#tour-dots').innerHTML = TOUR.map((_, j) => `<span class="${j === i ? 'on' : ''}" data-i="${j}"></span>`).join('');
  $('#tour-prev').disabled = i === 0 && !KIOSK;
  $('#tour-next').textContent = i === TOUR.length - 1 ? S().finish : S().next;
}
function gotoTour(i) {
  tourIndex = i;
  renderTour(i);
  const step = TOUR[i];
  setFocus(step.layer);
  const v = CAM_VIEWS[step.view || step.layer || 'home'] || CAM_VIEWS.home;
  flyTo(v.pos, v.target, 2.4);
  if (speakOn) speak(`${tt(step.title)}. ${tt(step.text)}`);
}
function startTour() {
  panel.classList.remove('open');
  document.body.classList.remove('panel-open');
  activeLayer = null;
  chips.forEach((c) => c.classList.remove('active'));
  hideReader();
  tree.clearValuePath();
  controls.autoRotate = false;
  gotoTour(0);
  tourCard.classList.add('show');
  $('#btn-tour').classList.add('hidden');
  if (KIOSK) {
    clearInterval(kioskTimer);
    kioskTimer = setInterval(() => gotoTour((tourIndex + 1) % TOUR.length), 14000);
  }
}
function stopTour() {
  if (tourIndex < 0) return;
  tourIndex = -1;
  clearInterval(kioskTimer);
  stopSpeak();
  tourCard.classList.remove('show');
  $('#btn-tour').classList.remove('hidden');
}
$('#btn-tour').addEventListener('click', startTour);
$('#tour-close').addEventListener('click', () => { stopTour(); closeLayer(); });
$('#tour-prev').addEventListener('click', () => { if (tourIndex > 0) gotoTour(tourIndex - 1); });
$('#tour-next').addEventListener('click', () => {
  if (tourIndex >= TOUR.length - 1) {
    if (KIOSK) gotoTour(0);
    else { stopTour(); closeLayer(); }
  } else gotoTour(tourIndex + 1);
});
$('#tour-dots').addEventListener('click', (e) => {
  const i = e.target.dataset?.i;
  if (i !== undefined) gotoTour(+i);
});

// ============================================================
// menu
// ============================================================
const menuDrop = $('#menu-drop');
$('#btn-menu').addEventListener('click', (e) => {
  e.stopPropagation();
  const open = menuDrop.classList.toggle('open');
  $('#btn-menu').setAttribute('aria-expanded', open);
});
document.addEventListener('click', (e) => {
  if (!menuDrop.contains(e.target)) menuDrop.classList.remove('open');
});
const closeMenu = () => menuDrop.classList.remove('open');

// ============================================================
// pertumbuhan pohon
// ============================================================
let growAnim = null;
function growTree(dur = 7) {
  tree.setGrowth(0.0001);
  $('#grow-note').classList.add('show');
  growAnim = { t: 0, dur: reduceMotion ? 0.01 : dur };
  camera.position.set(20, -8, 30);
  controls.target.set(0, -2, 0);
  flyTo(CAM_VIEWS.home.pos, CAM_VIEWS.home.target, reduceMotion ? 0.01 : dur + 0.5);
}
$('#m-regrow').addEventListener('click', () => {
  closeMenu();
  stopTour(); closeLayer();
  growTree(6);
});

// ---------- toggle siang / malam ----------
function updateDayLabel() {
  $('#m-day-label').textContent = isDay ? S().toNight : S().toDay;
}
$('#m-day').addEventListener('click', () => {
  closeMenu();
  applyScene(!isDay);
  updateDayLabel();
});

// ---------- musim (living framework) ----------
const SEASON_SCENE = {
  spring: { hemi: '#d4f0d0', ground: '#4f7a34', fog: '#dcecd2', sun: '#fff8e6' },
  summer: { hemi: '#bfe0ff', ground: '#3f5f2c', fog: '#cfe0ee', sun: '#fff4e0' },
  autumn: { hemi: '#ffe6c0', ground: '#6a5a2c', fog: '#ecdcc2', sun: '#ffdca0' },
  winter: { hemi: '#e2ecff', ground: '#5f6f66', fog: '#e2ecf2', sun: '#eef4ff' },
};
const SEASON_ORDER = ['spring', 'summer', 'autumn', 'winter'];
let currentSeason = localStorage.getItem('hc-season') || 'summer';
function updateSeasonLabel() {
  const key = 'season' + currentSeason[0].toUpperCase() + currentSeason.slice(1);
  const el = $('#m-season-label');
  if (el) el.textContent = `${S().season}: ${S()[key]}`;
}
function applySeason(s) {
  currentSeason = s;
  localStorage.setItem('hc-season', s);
  tree.setSeason(s);
  if (isDay) {
    const sc = SEASON_SCENE[s];
    hemi.color.set(sc.hemi); sun.color.set(sc.sun);
    scene.fog.color.set(sc.fog); tree.setGround(sc.ground);
  }
  updateSeasonLabel();
}
$('#m-season').addEventListener('click', () => {
  closeMenu();
  const idx = SEASON_ORDER.indexOf(currentSeason);
  applySeason(SEASON_ORDER[(idx + 1) % SEASON_ORDER.length]);
});

// ============================================================
// kuis
// ============================================================
const quizEl = $('#quiz');
let qOrder = [], qi = 0, qScore = 0, qAnswered = false;
const shuffled = (a) => a.map((v) => [Math.random(), v]).sort((x, y) => x[0] - y[0]).map((x) => x[1]);

function openQuiz() {
  closeMenu();
  qOrder = shuffled(QUIZ);
  qi = 0; qScore = 0;
  quizEl.classList.add('open');
  renderQuiz();
}
function renderQuiz() {
  qAnswered = false;
  $('#quiz-feedback').textContent = '';
  $('#quiz-feedback').className = '';
  $('#quiz-next').style.visibility = 'hidden';
  $('#quiz-next').textContent = S().next;
  const opts = $('#quiz-options');
  opts.innerHTML = '';

  if (qi >= qOrder.length) {
    $('#quiz-progress').textContent = S().quizDone;
    $('#quiz-q').textContent = `${S().quizScore}: ${qScore} ${S().quizOf} ${qOrder.length}`;
    const best = Math.max(qScore, +(localStorage.getItem('hc-quiz-best') || 0));
    localStorage.setItem('hc-quiz-best', best);
    $('#quiz-feedback').textContent = `${S().quizBest}: ${best} ${S().quizOf} ${qOrder.length}`;
    $('#quiz-score').textContent = '';
    $('#quiz-next').style.visibility = 'visible';
    $('#quiz-next').textContent = S().quizRetry;
    return;
  }

  const q = qOrder[qi];
  $('#quiz-progress').textContent = `${qi + 1} ${S().quizOf} ${qOrder.length}`;
  $('#quiz-q').textContent = tt(q.q);
  $('#quiz-score').textContent = `${S().quizScore}: ${qScore}`;

  const finish = (ok, correctLabel) => {
    qAnswered = true;
    if (ok) {
      qScore++;
      $('#quiz-feedback').textContent = S().quizCorrect;
      $('#quiz-feedback').className = 'good';
    } else {
      $('#quiz-feedback').textContent = `${S().quizWrong} ${correctLabel}`;
      $('#quiz-feedback').className = 'bad';
    }
    $('#quiz-score').textContent = `${S().quizScore}: ${qScore}`;
    $('#quiz-next').style.visibility = 'visible';
  };

  if (q.type === 'layer') {
    const p = document.createElement('p');
    p.style.cssText = 'font-size:12px;color:var(--muted);margin-bottom:4px';
    p.textContent = S().quizPickLayer;
    opts.appendChild(p);
    for (const lid of LAYER_ORDER) {
      const b = document.createElement('button');
      b.innerHTML = `<span class="qdot" style="color:${LAYERS[lid].color};background:${LAYERS[lid].color}"></span>`;
      b.append(LAYER_NAMES[lang][lid]);
      b.addEventListener('click', () => {
        if (qAnswered) return;
        const ok = lid === q.answer;
        b.classList.add(ok ? 'correct' : 'wrong');
        opts.querySelectorAll('button').forEach((x) => {
          x.disabled = true;
          if (!ok && x.textContent.trim() === LAYER_NAMES[lang][q.answer]) x.classList.add('correct');
        });
        setFocus(q.answer); // sorot jawaban benar pada pohon
        finish(ok, LAYER_NAMES[lang][q.answer]);
      });
      opts.appendChild(b);
    }
  } else {
    q.options.forEach((opt, oi) => {
      const b = document.createElement('button');
      b.textContent = tt(opt);
      b.addEventListener('click', () => {
        if (qAnswered) return;
        const ok = oi === q.correct;
        b.classList.add(ok ? 'correct' : 'wrong');
        opts.querySelectorAll('button').forEach((x, xi) => {
          x.disabled = true;
          if (xi === q.correct) x.classList.add('correct');
        });
        finish(ok, tt(q.options[q.correct]));
      });
      opts.appendChild(b);
    });
  }
}
$('#m-quiz').addEventListener('click', openQuiz);
$('#quiz-next').addEventListener('click', () => {
  if (qi >= qOrder.length) { qOrder = shuffled(QUIZ); qi = 0; qScore = 0; renderQuiz(); return; }
  qi++;
  setFocus(activeLayer);
  renderQuiz();
});
$('#quiz-close').addEventListener('click', () => { quizEl.classList.remove('open'); setFocus(activeLayer); });

// ============================================================
// pencarian / glosarium
// ============================================================
const searchEl = $('#search');
const searchIndex = [];
for (const lid of Object.keys(LAYERS)) {
  for (const it of LAYERS[lid].items) {
    searchIndex.push({ name: it.name, layer: lid, detail: it.detail });
  }
}
for (const [parent, subs] of Object.entries(RANTING)) {
  for (const s of subs) searchIndex.push({ name: s, layer: 'cabang', parent });
}
for (const [parent, subs] of Object.entries(RANTING_AKAR)) {
  for (const s of subs) searchIndex.push({ name: s, layer: 'akar', parent });
}

function openSearch() {
  searchEl.classList.add('open');
  $('#search-input').value = '';
  renderSearch('');
  setTimeout(() => $('#search-input').focus(), 120);
}
function renderSearch(qs) {
  const ul = $('#search-results');
  ul.innerHTML = '';
  const needle = qs.trim().toLowerCase();
  const list = needle
    ? searchIndex.filter((e) =>
        e.name.toLowerCase().includes(needle) ||
        (e.parent && e.parent.toLowerCase().includes(needle)) ||
        (e.detail && tt(e.detail).toLowerCase().includes(needle)))
    : searchIndex; // tampilkan seluruh glosarium, tanpa batas
  const count = $('#search-count');
  if (count) count.textContent = `${list.length}`;
  if (!list.length) {
    ul.innerHTML = `<li class="empty">${S().noResult}</li>`;
    return;
  }
  for (const e of list) {
    const li = document.createElement('li');
    const b = document.createElement('button');
    b.innerHTML = `<span class="sdot" style="color:${LAYERS[e.layer].color};background:${LAYERS[e.layer].color}"></span>`;
    b.append(e.name);
    const tag = document.createElement('small');
    tag.textContent = e.parent ? e.parent : LAYER_NAMES[lang][e.layer];
    b.appendChild(tag);
    b.addEventListener('click', () => {
      searchEl.classList.remove('open');
      openLayer(e.layer);
      if (e.parent && !tree.isRantingOpen(e.parent)) tree.toggleRanting(e.parent);
      // temukan node 3D-nya
      setTimeout(() => {
        const mesh = tree.interactives.find((m) => m.userData.node?.name === e.name);
        if (mesh) {
          if (hotMesh) hotMesh.userData.hot = false;
          hotMesh = mesh; mesh.userData.hot = true;
          openReader(mesh.userData.node);
        }
      }, e.parent ? 300 : 0);
    });
    li.appendChild(b);
    ul.appendChild(li);
  }
}
$('#btn-search').addEventListener('click', openSearch);
$('#search-close').addEventListener('click', () => searchEl.classList.remove('open'));
$('#search-input').addEventListener('input', (e) => renderSearch(e.target.value));

// ============================================================
// simulasi investasi SDM
// ============================================================
const simCard = $('#sim-card');
$('#m-sim').addEventListener('click', () => { closeMenu(); simCard.classList.toggle('open'); });
$('#sim-close').addEventListener('click', () => {
  simCard.classList.remove('open');
  $('#sim-range').value = 100;
  tree.setHealth(1);
});
$('#sim-range').addEventListener('input', (e) => tree.setHealth(e.target.value / 100));

// ============================================================
// model ilmiah & peta jalan
// ============================================================
const modelEl = $('#model');
function renderModel() {
  const dims = SCIENTIFIC.dims.map((d) => `
    <div class="m-col">
      <header>${d.n}<strong>${d.title}</strong></header>
      <ul>${d.items.map((i) => `<li>${i}</li>`).join('')}</ul>
    </div>`).join('');
  const road = SCIENTIFIC.roadmap.map((r) => `
    <div class="r-item">
      <div><b>${r.t}</b><i>${tt(r.q)}</i></div>
      <p>${r.d}</p>
    </div>`).join('');
  $('#model-body').innerHTML = `
    <p class="eyebrow">${S().modelTitle}</p>
    <h2>${S().modelTitle}</h2>
    <p class="m-sub">${S().modelSub}</p>
    <div class="m-grid">${dims}</div>
    <p class="eyebrow" style="margin-bottom:6px">${S().roadmapTitle}</p>
    <p class="m-sub">${S().roadmapSub}</p>
    <div class="m-road">${road}
      <div class="pabok">PABoK — People Analytics Body of Knowledge · ${lang === 'id' ? 'lensa kecerdasan · melintasi semua lapis' : 'the intelligence lens · across every layer'}</div>
    </div>`;
}
$('#m-model').addEventListener('click', () => { closeMenu(); renderModel(); modelEl.classList.add('open'); });
$('#model-close').addEventListener('click', () => modelEl.classList.remove('open'));

// ============================================================
// unduh poster
// ============================================================
$('#m-poster').addEventListener('click', () => {
  closeMenu();
  renderer.render(scene, camera);
  canvas.toBlob((blob) => {
    if (!blob) return;
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'pohon-ilmu-human-capital.png';
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 4000);
  }, 'image/png');
});

// ============================================================
// bahasa
// ============================================================
$('#m-lang').addEventListener('click', () => {
  closeMenu();
  lang = lang === 'id' ? 'en' : 'id';
  localStorage.setItem('hc-lang', lang);
  stopSpeak();
  applyStrings();
});

// ============================================================
// keyboard
// ============================================================
addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (quizEl.classList.contains('open')) { quizEl.classList.remove('open'); setFocus(activeLayer); return; }
    if (searchEl.classList.contains('open')) { searchEl.classList.remove('open'); return; }
    if (modelEl.classList.contains('open')) { modelEl.classList.remove('open'); return; }
    if (simCard.classList.contains('open')) { simCard.classList.remove('open'); return; }
    if (reader.classList.contains('open')) { hideReader(); tree.clearValuePath(); return; }
    if (tourIndex >= 0) { stopTour(); closeLayer(); return; }
    closeLayer();
  }
  if (tourIndex >= 0 && !quizEl.classList.contains('open')) {
    if (e.key === 'ArrowRight') $('#tour-next').click();
    if (e.key === 'ArrowLeft') $('#tour-prev').click();
  }
});

// ============================================================
// mode awal — langsung ke home dengan animasi pohon tumbuh
// ============================================================
camera.position.set(10, -10, 22);
controls.target.set(0, 6, 0);
const lp = params.get('lapisan');

if (KIOSK) {
  camera.position.set(...CAM_VIEWS.home.pos);
  controls.target.set(...CAM_VIEWS.home.target);
  document.body.classList.add('kiosk');
  startTour();
} else if (lp && LAYERS[lp]) {
  camera.position.set(...CAM_VIEWS.home.pos);
  controls.target.set(...CAM_VIEWS.home.target);
  openLayer(lp);
} else {
  // langsung tumbuh menuju tampilan home
  growTree(7);
}
// deep-link opsional untuk mengajar
if (params.get('season') && SEASON_ORDER.includes(params.get('season'))) currentSeason = params.get('season');
if (params.has('malam')) isDay = false;
if (params.has('siang')) isDay = true;
applyScene(isDay);
applyStrings();

// deep-link ke simpul tertentu (buka reader) — mis. ?node=Learning
if (params.get('node')) {
  const nm = findNodeMesh(params.get('node'));
  if (nm) setTimeout(() => drillIntoNode(nm, innerWidth / 2, innerHeight * 0.3), reduceMotion ? 50 : 800);
}
if (params.get('open') === 'search') setTimeout(openSearch, 120);

// ============================================================
// loop render
// ============================================================
const clock = new THREE.Clock();
function tick() {
  requestAnimationFrame(tick);
  const dt = Math.min(clock.getDelta(), 0.05);
  const t = clock.elapsedTime;

  if (camTween) {
    camTween.t += dt;
    const u = ease(Math.min(camTween.t / camTween.dur, 1));
    camera.position.lerpVectors(camTween.p0, camTween.p1, u);
    controls.target.lerpVectors(camTween.t0, camTween.t1, u);
    if (camTween.t >= camTween.dur) camTween = null;
  }
  controls.update();

  if (growAnim) {
    growAnim.t += dt;
    const u = Math.min(growAnim.t / growAnim.dur, 1);
    tree.setGrowth(Math.max(u, 0.0001));
    if (u >= 1) {
      growAnim = null;
      $('#grow-note').classList.remove('show');
    }
  }

  for (const k of Object.keys(layerMats)) {
    dimNow[k] += (dimTarget[k] - dimNow[k]) * Math.min(dt * 4, 1);
    const d = dimNow[k];
    for (const e of layerMats[k]) {
      e.m.transparent = true;
      e.m.opacity = e.baseOpacity * d;
    }
  }

  for (const fn of tree.anim) fn(t, dt, dimNow);

  for (const k of Object.keys(tree.labels)) {
    for (const sp of tree.labels[k]) {
      const tgt = sp.userData.targetOpacity ?? 0;
      sp.material.opacity += (tgt - sp.material.opacity) * Math.min(dt * 5, 1);
    }
  }

  warm.intensity = warmBase > 0 ? warmBase + Math.sin(t * 1.7) * 8 : 0;
  renderer.render(scene, camera);
}
renderer.setSize(innerWidth, innerHeight);
tick();

addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});

// ---------- PWA ----------
if ('serviceWorker' in navigator && location.protocol !== 'file:') {
  addEventListener('load', () => navigator.serviceWorker.register('./sw.js'));
  // saat SW baru mengambil alih, muat ulang sekali agar aset segar terpakai
  let reloaded = false;
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (reloaded || !navigator.serviceWorker.controller) return;
    reloaded = true;
    location.reload();
  });
}
