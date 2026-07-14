// ============================================================
// tree.js — membangun Pohon Ilmu Human Capital secara prosedural
// ============================================================
import * as THREE from 'three';
import { LAYERS, RANTING } from './content.js';

// ---------- tekstur util ----------
function glowTexture(inner = 'rgba(255,255,255,1)', outer = 'rgba(255,255,255,0)') {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  g.addColorStop(0, inner);
  g.addColorStop(0.35, inner.replace(',1)', ',0.55)'));
  g.addColorStop(1, outer);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 128, 128);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

// tekstur kulit kayu prosedural
function barkTexture() {
  const c = document.createElement('canvas');
  c.width = 256; c.height = 512;
  const x = c.getContext('2d');
  const g = x.createLinearGradient(0, 0, 256, 0);
  g.addColorStop(0, '#6d4c31');
  g.addColorStop(0.5, '#7d5a3a');
  g.addColorStop(1, '#6d4c31');
  x.fillStyle = g;
  x.fillRect(0, 0, 256, 512);
  // alur vertikal gelap (retakan kulit)
  for (let i = 0; i < 46; i++) {
    const bx = Math.random() * 256;
    const wob = 6 + Math.random() * 14;
    x.strokeStyle = `rgba(30,18,8,${0.25 + Math.random() * 0.35})`;
    x.lineWidth = 1 + Math.random() * 3;
    x.beginPath();
    x.moveTo(bx, -10);
    for (let y = 0; y <= 512; y += 32) {
      x.lineTo(bx + Math.sin(y * 0.02 + i) * wob + (Math.random() - 0.5) * 6, y);
    }
    x.stroke();
  }
  // punggung terang
  for (let i = 0; i < 30; i++) {
    const bx = Math.random() * 256;
    x.strokeStyle = `rgba(190,150,105,${0.10 + Math.random() * 0.16})`;
    x.lineWidth = 1 + Math.random() * 2;
    x.beginPath();
    x.moveTo(bx, 0);
    for (let y = 0; y <= 512; y += 40) x.lineTo(bx + Math.sin(y * 0.015 + i * 2) * 9, y);
    x.stroke();
  }
  // bintik lumut halus
  for (let i = 0; i < 260; i++) {
    x.fillStyle = `rgba(${60 + Math.random() * 40},${70 + Math.random() * 40},35,${Math.random() * 0.12})`;
    x.beginPath();
    x.arc(Math.random() * 256, Math.random() * 512, 1 + Math.random() * 3, 0, 7);
    x.fill();
  }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

// tekstur satu helai anak daun sawit (leaflet) — bilah panjang meruncing
function frondLeafletTexture() {
  const c = document.createElement('canvas');
  c.width = 64; c.height = 256;
  const x = c.getContext('2d');
  x.clearRect(0, 0, 64, 256);
  // bilah: lancip di kedua ujung, sedikit melengkung
  x.beginPath();
  x.moveTo(32, 6);
  x.quadraticCurveTo(60, 90, 40, 250);
  x.quadraticCurveTo(32, 254, 24, 250);
  x.quadraticCurveTo(4, 90, 32, 6);
  const g = x.createLinearGradient(0, 0, 64, 0);
  g.addColorStop(0, '#2f6b2c');
  g.addColorStop(0.5, '#4f9440');
  g.addColorStop(1, '#2a5f28');
  x.fillStyle = g;
  x.fill();
  // tulang tengah
  x.strokeStyle = 'rgba(24,58,20,0.7)';
  x.lineWidth = 2;
  x.beginPath();
  x.moveTo(32, 8);
  x.quadraticCurveTo(38, 120, 33, 248);
  x.stroke();
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

// tekstur batang kelapa sawit — pola belah ketupat bekas pangkal pelepah
function palmTrunkTexture() {
  const c = document.createElement('canvas');
  c.width = 256; c.height = 512;
  const x = c.getContext('2d');
  const g = x.createLinearGradient(0, 0, 256, 0);
  g.addColorStop(0, '#5a4326');
  g.addColorStop(0.5, '#6e5533');
  g.addColorStop(1, '#544025');
  x.fillStyle = g;
  x.fillRect(0, 0, 256, 512);
  // grid belah ketupat (bekas potongan pelepah tersusun spiral)
  const cols = 8, rows = 16;
  const cw = 256 / cols, ch = 512 / rows;
  for (let r = 0; r < rows; r++) {
    const shift = (r % 2) * cw * 0.5; // susunan berselang-seling
    for (let cc = -1; cc < cols; cc++) {
      const cx = cc * cw + shift + cw * 0.5;
      const cy = r * ch + ch * 0.5;
      // pangkal pelepah: belah ketupat cembung terang dengan bayangan bawah
      x.beginPath();
      x.moveTo(cx, cy - ch * 0.42);
      x.lineTo(cx + cw * 0.44, cy);
      x.lineTo(cx, cy + ch * 0.42);
      x.lineTo(cx - cw * 0.44, cy);
      x.closePath();
      x.fillStyle = `rgba(122,95,55,${0.5 + Math.random() * 0.3})`;
      x.fill();
      x.strokeStyle = 'rgba(30,20,10,0.55)';
      x.lineWidth = 2;
      x.stroke();
      // kilau di sisi atas belah ketupat
      x.beginPath();
      x.moveTo(cx - cw * 0.44, cy);
      x.lineTo(cx, cy - ch * 0.42);
      x.lineTo(cx + cw * 0.44, cy);
      x.strokeStyle = 'rgba(150,120,75,0.4)';
      x.lineWidth = 1.5;
      x.stroke();
    }
  }
  // serat vertikal halus
  for (let i = 0; i < 120; i++) {
    x.strokeStyle = `rgba(40,28,14,${Math.random() * 0.18})`;
    x.lineWidth = 1;
    const bx = Math.random() * 256;
    x.beginPath();
    x.moveTo(bx, 0);
    x.lineTo(bx + (Math.random() - 0.5) * 8, 512);
    x.stroke();
  }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function labelSprite(text, accent = '#d4a017', opts = {}) {
  const scaleMul = opts.scale || 1;
  const pad = 28, fs = 44;
  const c = document.createElement('canvas');
  const ctx = c.getContext('2d');
  ctx.font = `600 ${fs}px "Plus Jakarta Sans", sans-serif`;
  const w = Math.ceil(ctx.measureText(text).width) + pad * 2;
  const h = fs + pad * 1.4;
  c.width = w; c.height = h;
  const r = h / 2;
  const cx = ctx;
  cx.beginPath();
  cx.roundRect(1, 1, w - 2, h - 2, r);
  cx.fillStyle = 'rgba(8,18,12,0.82)';
  cx.fill();
  cx.lineWidth = 3;
  cx.strokeStyle = accent;
  cx.stroke();
  cx.font = `600 ${fs}px "Plus Jakarta Sans", sans-serif`;
  cx.fillStyle = '#f5f1e6';
  cx.textBaseline = 'middle';
  cx.textAlign = 'center';
  cx.fillText(text, w / 2, h / 2 + 2);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false, opacity: 0 });
  const sp = new THREE.Sprite(mat);
  sp.userData.isLabel = true;
  const base = 0.011 * scaleMul;
  sp.scale.set(w * base, h * base, 1);
  sp.renderOrder = 20;
  return sp;
}

// ---------- pohon ----------
export function buildTree(quality = 'high') {
  const root = new THREE.Group();
  const groups = {};           // per lapisan
  const labels = {};           // sprite label per lapisan
  const interactives = [];     // mesh yang bisa diklik
  const anim = [];             // fungsi update(t, dt)

  for (const k of Object.keys(LAYERS)) {
    groups[k] = new THREE.Group();
    labels[k] = [];
    root.add(groups[k]);
  }

  const softGlow = glowTexture();

  const addNode = (layer, pos, color, size, data, labelYOff = 1.1) => {
    const g = new THREE.Group();
    g.position.copy(pos);
    const core = new THREE.Mesh(
      new THREE.SphereGeometry(size, 20, 20),
      new THREE.MeshStandardMaterial({
        color, emissive: color, emissiveIntensity: 1.6, roughness: 0.35,
      })
    );
    core.userData = { node: data };
    interactives.push(core);
    const halo = new THREE.Sprite(new THREE.SpriteMaterial({
      map: softGlow, color, transparent: true, opacity: 0.5,
      blending: THREE.AdditiveBlending, depthWrite: false,
    }));
    halo.scale.setScalar(size * 6);
    const lb = labelSprite(data.name, data.labelColor || '#d4a017', { scale: data.labelScale || 1 });
    lb.position.y = size + labelYOff;
    labels[layer].push(lb);
    halo.userData.isHalo = true;
    const ph = Math.random() * Math.PI * 2;
    anim.push((t, dt, dims) => {
      const d = dims ? dims[layer] : 1;
      const p = 1 + Math.sin(t * 2 + ph) * 0.12;
      halo.material.opacity = (0.32 + Math.sin(t * 2 + ph) * 0.14) * d;
      core.material.emissiveIntensity = (1.3 * p + (core.userData.hot ? 1.6 : 0)) * d;
      halo.scale.setScalar(size * (5.6 + (core.userData.hot ? 3 : 0)) * p);
    });
    g.add(core, halo, lb);
    groups[layer].add(g);
    return g;
  };

  // ============ TANAH ============
  const groundMat = new THREE.MeshStandardMaterial({
    color: 0x0d1f14, roughness: 1, transparent: true, opacity: 0.62,
    side: THREE.DoubleSide, depthWrite: false,
  });
  const ground = new THREE.Mesh(new THREE.CircleGeometry(70, 72), groundMat);
  ground.rotation.x = -Math.PI / 2;
  root.add(ground);

  const rim = new THREE.Mesh(
    new THREE.RingGeometry(15.5, 16.2, 96),
    new THREE.MeshBasicMaterial({
      color: 0x2f5d3a, transparent: true, opacity: 0.35,
      side: THREE.DoubleSide, blending: THREE.AdditiveBlending, depthWrite: false,
    })
  );
  rim.rotation.x = -Math.PI / 2;
  rim.position.y = 0.03;
  root.add(rim);
  anim.push((t) => { rim.material.opacity = 0.22 + Math.sin(t * 0.8) * 0.12; });

  // ============ AKAR (5 ilmu dasar) ============
  const bark = barkTexture();
  const rootTips = [];
  const akarItems = LAYERS.akar.items;
  const rootMat = new THREE.MeshStandardMaterial({ map: bark, color: 0xb08968, roughness: 0.95 });
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2 + 0.45;
    const rr = 11.5 + (i % 2) * 2.2;
    const tip = new THREE.Vector3(Math.cos(a) * rr, -8.5 - (i % 3) * 1.6, Math.sin(a) * rr);
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 1.2, 0),
      new THREE.Vector3(Math.cos(a) * 3.2, -1.2, Math.sin(a) * 3.2),
      new THREE.Vector3(Math.cos(a) * 7, -4.5, Math.sin(a) * 7),
      tip,
    ]);
    const tube = new THREE.Mesh(new THREE.TubeGeometry(curve, 40, 0.42, 8), rootMat);
    groups.akar.add(tube);
    // akar serabut
    for (let s = 0; s < 3; s++) {
      const p0 = curve.getPointAt(0.35 + s * 0.2);
      const off = new THREE.Vector3((Math.random() - 0.5) * 5, -2 - Math.random() * 3, (Math.random() - 0.5) * 5);
      const sub = new THREE.CatmullRomCurve3([p0, p0.clone().add(off.clone().multiplyScalar(0.5)), p0.clone().add(off)]);
      groups.akar.add(new THREE.Mesh(new THREE.TubeGeometry(sub, 12, 0.12, 6), rootMat));
    }
    rootTips.push({ curve, tip });
    addNode('akar', tip, new THREE.Color('#c98d5a'), 0.55, {
      layer: 'akar', name: akarItems[i].name, detail: akarItems[i].detail, labelColor: '#c98d5a',
    }, 1.3);
  }

  // ============ BATANG (kolumnar khas kelapa sawit) ============
  const TRUNK_H = 18;
  const CROWN = new THREE.Vector3(0, TRUNK_H, 0); // titik tumbuh pelepah
  const trunkPts = [];
  for (let i = 0; i <= 40; i++) {
    const y = (i / 40) * TRUNK_H;
    const u = y / TRUNK_H;
    // pangkal melebar sedikit, badan hampir silindris, menyempit di leher mahkota
    let r = 1.3 + Math.pow(1 - u, 2.6) * 0.85;     // flare di dasar
    r -= Math.max(0, u - 0.86) * 4.8;              // leher tepat di bawah mahkota
    // gelombang halus per "tingkat" bekas pelepah
    r *= 1 + Math.sin(u * 42) * 0.03;
    trunkPts.push(new THREE.Vector2(Math.max(r, 0.55), y));
  }
  const trunkGeo = new THREE.LatheGeometry(trunkPts, 40);
  const palmBark = palmTrunkTexture();
  palmBark.repeat.set(4, 5); // ulang pola belah ketupat
  const trunk = new THREE.Mesh(
    trunkGeo,
    new THREE.MeshStandardMaterial({ map: palmBark, color: 0xa9855c, roughness: 0.92 })
  );
  groups.batang.add(trunk);

  // mahkota (crown shaft) — pangkal pelepah yang membungkus puncak batang
  const crownShaft = new THREE.Mesh(
    new THREE.SphereGeometry(2.1, 20, 16),
    new THREE.MeshStandardMaterial({ color: 0x4a5f2a, roughness: 0.9 })
  );
  crownShaft.scale.set(1, 1.5, 1);
  crownShaft.position.copy(CROWN).add(new THREE.Vector3(0, 0.3, 0));
  groups.batang.add(crownShaft);

  // cincin kambium yang naik — "manajemen mengalirkan pertumbuhan"
  const bandMat = new THREE.MeshBasicMaterial({
    color: 0xd4a017, transparent: true, opacity: 0.55,
    blending: THREE.AdditiveBlending, side: THREE.DoubleSide, depthWrite: false,
  });
  const bands = [];
  for (let i = 0; i < 3; i++) {
    const band = new THREE.Mesh(new THREE.TorusGeometry(1, 0.06, 8, 48), bandMat.clone());
    band.rotation.x = Math.PI / 2;
    groups.batang.add(band);
    bands.push({ mesh: band, off: i / 3 });
  }
  const trunkRadiusAt = (y) => {
    const u = Math.min(Math.max(y / TRUNK_H, 0), 1);
    let r = 1.3 + Math.pow(1 - u, 2.6) * 0.85;
    r -= Math.max(0, u - 0.86) * 4.8;
    return Math.max(r, 0.55);
  };
  anim.push((t, dt, dims) => {
    const d = dims ? dims.batang : 1;
    for (const b of bands) {
      const u = ((t * 0.09 + b.off) % 1);
      const y = u * (TRUNK_H - 0.5) + 0.2;
      b.mesh.position.y = y;
      b.mesh.scale.setScalar(trunkRadiusAt(y) + 0.12);
      b.mesh.material.opacity = 0.55 * Math.sin(u * Math.PI) * d;
    }
  });
  for (const b of bands) b.mesh.userData.isHalo = true;

  // node inti batang (informasi disiplin)
  addNode('batang', new THREE.Vector3(0, 8.2, 2.6), new THREE.Color('#e8c46a'), 0.5, {
    layer: 'batang', name: 'Human Capital — Disiplin Ilmu',
    detail: LAYERS.batang.items[0].detail, labelColor: '#e8c46a', labelScale: 1.1,
  }, 1.2);

  // ============ PELEPAH / FROND (15 domain) ============
  const dummy = new THREE.Object3D();
  const rachisMat = new THREE.MeshStandardMaterial({ color: 0x5f7a30, roughness: 0.85 });
  const branchEnds = [];
  const cabItems = LAYERS.cabang.items;
  const UP = new THREE.Vector3(0, 1, 0);
  const leafletData = []; // {pos, quat, scale, color}
  const leafGreens = ['#3f8a37', '#4f9a40', '#5aa848', '#357f2f', '#68b455', '#2f7028'];

  for (let i = 0; i < 15; i++) {
    const a = (i / 15) * Math.PI * 2 + 0.3;
    const ring = i % 3;                     // 3 lapis: tegak, sedang, menjuntai
    const dir = new THREE.Vector3(Math.cos(a), 0, Math.sin(a));
    const reach = 12.5 + (i % 4) * 1.2;     // panjang jangkauan mendatar
    const apexH = TRUNK_H + 3.8 - ring * 0.9;
    const tipDrop = TRUNK_H - 3.0 - ring * 2.4 - (i % 2) * 0.9;
    // rachis melengkung: keluar-naik → bahu → menjuntai turun
    const P0 = CROWN.clone().add(new THREE.Vector3(0, 0.4, 0));
    const P1 = new THREE.Vector3(dir.x * reach * 0.22, TRUNK_H + 2.4, dir.z * reach * 0.22);
    const P2 = new THREE.Vector3(dir.x * reach * 0.55, apexH, dir.z * reach * 0.55);
    const P3 = new THREE.Vector3(dir.x * reach * 0.85, apexH - 2.2, dir.z * reach * 0.85);
    const tip = new THREE.Vector3(dir.x * reach, tipDrop, dir.z * reach);
    const curve = new THREE.CatmullRomCurve3([P0, P1, P2, P3, tip]);
    // batang pelepah (rachis) meruncing
    const rachis = new THREE.Mesh(new THREE.TubeGeometry(curve, 40, 0.17, 6), rachisMat);
    groups.cabang.add(rachis);

    // anak daun (leaflet) berpasangan sepanjang rachis — bentuk bulu
    const SEG = quality === 'high' ? 26 : 15;
    for (let s = 1; s <= SEG; s++) {
      const u = s / (SEG + 1);
      if (u < 0.1) continue;
      const p = curve.getPointAt(u);
      const tan = curve.getTangentAt(u);
      const side = new THREE.Vector3().crossVectors(tan, UP).normalize();
      const bladeLen = 3.5 * (1 - u * 0.5);          // memendek ke ujung
      const droop = 0.5 + u * 0.5;                    // makin ke ujung makin menukik
      for (const sgn of [1, -1]) {
        const base = side.clone().multiplyScalar(sgn);
        const bladeDir = base.multiplyScalar(Math.cos(droop))
          .addScaledVector(UP, -Math.sin(droop))
          .addScaledVector(tan, 0.35)
          .normalize();
        dummy.position.copy(p).addScaledVector(bladeDir, bladeLen * 0.5);
        const q = new THREE.Quaternion().setFromUnitVectors(UP, bladeDir);
        q.multiply(new THREE.Quaternion().setFromAxisAngle(bladeDir, (Math.random() - 0.5) * 0.5));
        dummy.quaternion.copy(q);
        dummy.scale.set(1, bladeLen / 2.6, 1);
        dummy.updateMatrix();
        leafletData.push({
          matrix: dummy.matrix.clone(),
          color: new THREE.Color(leafGreens[(i + s + (sgn > 0 ? 0 : 3)) % leafGreens.length]),
        });
      }
    }

    branchEnds.push({ curve, end: tip });
    // node domain — dipasang di titik bahu pelepah agar mudah terbaca
    const nodePos = curve.getPointAt(0.62);
    addNode('cabang', nodePos, new THREE.Color('#9fe06a'), 0.4, {
      layer: 'cabang', name: cabItems[i].name, detail: cabItems[i].detail,
      labelColor: '#9fe06a', labelScale: 0.85,
    }, 0.85);
  }

  // ============ DAUN (anak daun sawit + 8 kapabilitas) ============
  const LEAF_N = leafletData.length;
  const leafletTex = frondLeafletTexture();
  const leafMat = new THREE.MeshStandardMaterial({
    map: leafletTex, alphaTest: 0.45, side: THREE.DoubleSide,
    roughness: 0.8, color: 0xffffff,
    emissive: 0x24521c, emissiveIntensity: 0.5,
  });
  // bilah: lebar 0.55, panjang 2.6 (pivot di pangkal, memanjang ke +Y)
  const leafBladeGeo = new THREE.PlaneGeometry(0.55, 2.6).translate(0, 1.3, 0);
  const canopy = new THREE.InstancedMesh(leafBladeGeo, leafMat, Math.max(LEAF_N, 1));
  const leafBaseColors = [];
  for (let i = 0; i < LEAF_N; i++) {
    canopy.setMatrixAt(i, leafletData[i].matrix);
    canopy.setColorAt(i, leafletData[i].color);
    leafBaseColors.push(leafletData[i].color);
  }
  canopy.instanceMatrix.needsUpdate = true;
  groups.daun.add(canopy);

  // hembusan angin lembut pada seluruh mahkota
  anim.push((t) => {
    groups.daun.rotation.z = Math.sin(t * 0.5) * 0.012;
    groups.cabang.rotation.z = Math.sin(t * 0.5) * 0.008;
    groups.cabang.rotation.x = Math.cos(t * 0.42) * 0.006;
  });

  // 8 kapabilitas — di ujung pelepah terpilih
  const daunItems = LAYERS.daun.items;
  for (let i = 0; i < 8; i++) {
    const be = branchEnds[(i * 2) % branchEnds.length];
    const p = be.end.clone().add(new THREE.Vector3(0, 0.9, 0));
    addNode('daun', p, new THREE.Color('#b7e07a'), 0.36, {
      layer: 'daun', name: daunItems[i].name, detail: daunItems[i].detail,
      labelColor: '#b7e07a', labelScale: 0.8,
    }, 0.8);
  }

  // ============ BUAH (8 tandan buah sawit di pangkal mahkota) ============
  const buahItems = LAYERS.buah.items;
  const fruitGroups = [];
  const fruitletGeo = new THREE.SphereGeometry(0.34, 8, 7);
  const fruitletColors = ['#d1440f', '#e35a12', '#b8390d', '#f0741a', '#8f2a0a'];
  const FRUITLET_N = quality === 'high' ? 90 : 55;
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2 + 0.4;
    const dir = new THREE.Vector3(Math.cos(a), 0, Math.sin(a));
    const p = new THREE.Vector3(dir.x * 3.4, TRUNK_H - 2.8 - (i % 2) * 1.0, dir.z * 3.4);

    // peduncle (tangkai tandan) pendek & tebal menuju mahkota
    const top = CROWN.clone().add(dir.clone().multiplyScalar(1.2)).add(new THREE.Vector3(0, -0.6, 0));
    const seg = new THREE.Vector3().subVectors(p, top);
    const stalk = new THREE.Mesh(
      new THREE.CylinderGeometry(0.16, 0.24, seg.length(), 6),
      rachisMat
    );
    stalk.position.copy(top).addScaledVector(seg, 0.5);
    stalk.quaternion.setFromUnitVectors(UP, seg.clone().normalize());
    groups.buah.add(stalk);

    // node inti (penanda interaktif)
    const g = addNode('buah', p, new THREE.Color('#f0721a'), 0.34, {
      layer: 'buah', name: buahItems[i].name, detail: buahItems[i].detail,
      labelColor: '#f4842e', labelScale: 0.95,
    }, 2.4);

    // tandan buah segar (TBS) — gerombolan fruitlet oranye-merah, lonjong & besar
    const bunch = new THREE.InstancedMesh(fruitletGeo, new THREE.MeshStandardMaterial({
      roughness: 0.5, metalness: 0.05,
    }), FRUITLET_N);
    for (let k = 0; k < FRUITLET_N; k++) {
      const v = new THREE.Vector3().randomDirection();
      v.y *= 1.55; // lonjong vertikal
      const rr = 0.95 + Math.random() * 1.15;
      dummy.position.set(v.x * rr, v.y * rr * 0.9 - 0.3, v.z * rr);
      dummy.rotation.set(Math.random() * 3, Math.random() * 3, Math.random() * 3);
      dummy.scale.setScalar(0.85 + Math.random() * 0.6);
      dummy.updateMatrix();
      bunch.setMatrixAt(k, dummy.matrix);
      bunch.setColorAt(k, new THREE.Color(fruitletColors[k % fruitletColors.length]));
    }
    bunch.instanceMatrix.needsUpdate = true;
    g.add(bunch);

    const ph = i * 1.7;
    const y0 = p.y;
    anim.push((t) => { g.position.y = y0 + Math.sin(t * 1.0 + ph) * 0.1; });
    fruitGroups.push({ group: g, name: buahItems[i].name, pos: p.clone(), stalk });
  }

  // ============ INTELLIGENCE LAYER (aliran partikel) ============
  const P_N = quality === 'high' ? 1400 : 600;
  const SAMPLES = 160;
  const flowPaths = [];
  for (let i = 0; i < branchEnds.length; i++) {
    const rt = rootTips[i % rootTips.length];
    const be = branchEnds[i];
    const curve = new THREE.CatmullRomCurve3([
      rt.tip,
      rt.curve.getPointAt(0.5),
      new THREE.Vector3(0, 1, 0),
      new THREE.Vector3(0, 8, 0),
      be.curve.getPointAt(0.05),
      be.curve.getPointAt(0.6),
      be.end,
      be.end.clone().add(new THREE.Vector3(0, 2.5, 0)),
    ]);
    const pts = curve.getSpacedPoints(SAMPLES);
    flowPaths.push(pts);
  }
  const pGeo = new THREE.BufferGeometry();
  const pPos = new Float32Array(P_N * 3);
  const pCol = new Float32Array(P_N * 3);
  const meta = [];
  const cCyan = new THREE.Color('#4cc9f0');
  const cGold = new THREE.Color('#f0c94c');
  const cWhite = new THREE.Color('#eafff7');
  for (let i = 0; i < P_N; i++) {
    const c = Math.random() < 0.62 ? cCyan : (Math.random() < 0.5 ? cGold : cWhite);
    pCol[i * 3] = c.r; pCol[i * 3 + 1] = c.g; pCol[i * 3 + 2] = c.b;
    meta.push({
      path: (Math.random() * flowPaths.length) | 0,
      off: Math.random(),
      speed: 0.035 + Math.random() * 0.05,
    });
  }
  pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
  pGeo.setAttribute('color', new THREE.BufferAttribute(pCol, 3));
  const pMat = new THREE.PointsMaterial({
    size: 0.85, map: softGlow, vertexColors: true, transparent: true,
    opacity: 1, blending: THREE.AdditiveBlending, depthWrite: false,
    sizeAttenuation: true,
  });
  const particles = new THREE.Points(pGeo, pMat);
  particles.frustumCulled = false;
  groups.intelligence.add(particles);
  anim.push((t) => {
    const pos = pGeo.attributes.position.array;
    for (let i = 0; i < P_N; i++) {
      const m = meta[i];
      const u = (m.off + t * m.speed) % 1;
      const f = u * (SAMPLES - 1);
      const i0 = f | 0;
      const frac = f - i0;
      const a = flowPaths[m.path][i0];
      const b = flowPaths[m.path][Math.min(i0 + 1, SAMPLES - 1)];
      pos[i * 3] = a.x + (b.x - a.x) * frac;
      pos[i * 3 + 1] = a.y + (b.y - a.y) * frac;
      pos[i * 3 + 2] = a.z + (b.z - a.z) * frac;
    }
    pGeo.attributes.position.needsUpdate = true;
  });

  // ============ KUNANG-KUNANG & BINTANG ============
  const FF_N = quality === 'high' ? 130 : 60;
  const ffGeo = new THREE.BufferGeometry();
  const ffPos = new Float32Array(FF_N * 3);
  const ffMeta = [];
  for (let i = 0; i < FF_N; i++) {
    ffMeta.push({
      r: 16 + Math.random() * 30,
      a: Math.random() * Math.PI * 2,
      y: 1 + Math.random() * 26,
      sp: 0.05 + Math.random() * 0.12,
      ph: Math.random() * 6.28,
    });
  }
  ffGeo.setAttribute('position', new THREE.BufferAttribute(ffPos, 3));
  const ff = new THREE.Points(ffGeo, new THREE.PointsMaterial({
    size: 0.5, map: softGlow, color: 0xd8e8a0, transparent: true, opacity: 0.75,
    blending: THREE.AdditiveBlending, depthWrite: false,
  }));
  ff.frustumCulled = false;
  root.add(ff);
  anim.push((t) => {
    const pos = ffGeo.attributes.position.array;
    for (let i = 0; i < FF_N; i++) {
      const m = ffMeta[i];
      const a = m.a + t * m.sp;
      pos[i * 3] = Math.cos(a) * m.r;
      pos[i * 3 + 1] = m.y + Math.sin(t * 0.7 + m.ph) * 1.6;
      pos[i * 3 + 2] = Math.sin(a) * m.r;
    }
    ffGeo.attributes.position.needsUpdate = true;
  });

  const ST_N = 500;
  const stGeo = new THREE.BufferGeometry();
  const stPos = new Float32Array(ST_N * 3);
  for (let i = 0; i < ST_N; i++) {
    const v = new THREE.Vector3().randomDirection();
    v.y = Math.abs(v.y) * 0.9 + 0.1;
    v.normalize().multiplyScalar(180 + Math.random() * 60);
    stPos[i * 3] = v.x; stPos[i * 3 + 1] = v.y; stPos[i * 3 + 2] = v.z;
  }
  stGeo.setAttribute('position', new THREE.BufferAttribute(stPos, 3));
  const stars = new THREE.Points(stGeo, new THREE.PointsMaterial({
    size: 1.1, map: softGlow, color: 0xcfe8d8, transparent: true, opacity: 0.5,
    blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true,
  }));
  root.add(stars);

  // ============================================================
  // PERTUMBUHAN — pohon tumbuh dari akar ke buah
  // ============================================================
  const stage = (u, a, b) => Math.max(0.0001, Math.min(1, (u - a) / (b - a)));
  const eOut = (x) => 1 - Math.pow(1 - x, 3);
  let growthU = 1;
  function setGrowth(u) {
    growthU = u;
    groups.akar.scale.setScalar(eOut(stage(u, 0, 0.3)));
    const tu = eOut(stage(u, 0.18, 0.5));
    trunk.scale.set(Math.max(0.0001, Math.min(1, tu * 1.4)), tu, Math.max(0.0001, Math.min(1, tu * 1.4)));
    for (const b of bands) b.mesh.visible = u > 0.5;
    const cu = eOut(stage(u, 0.42, 0.72));
    groups.cabang.scale.setScalar(cu);
    const du = eOut(stage(u, 0.6, 0.9));
    groups.daun.scale.setScalar(du);
    groups.buah.scale.setScalar(eOut(stage(u, 0.75, 1)));
    const iu = stage(u, 0.85, 1);
    groups.intelligence.visible = iu > 0.02;
    pMat.size = 0.85 * iu * healthSize;
  }

  // ============================================================
  // KESEHATAN — simulasi investasi SDM (1 = sehat, 0 = diabaikan)
  // ============================================================
  const cDry = new THREE.Color('#9c7f2e');
  const cDead = new THREE.Color('#6b5423');
  let healthSize = 1;
  function setHealth(h) {
    const tmp = new THREE.Color();
    for (let i = 0; i < LEAF_N; i++) {
      const wither = (1 - h) * (0.55 + 0.45 * ((i * 2654435761) % 100) / 100);
      tmp.copy(leafBaseColors[i]).lerp(wither > 0.75 ? cDead : cDry, Math.min(1, wither * 1.15));
      canopy.setColorAt(i, tmp);
    }
    if (canopy.instanceColor) canopy.instanceColor.needsUpdate = true;
    const alive = Math.round(h * fruitGroups.length);
    fruitGroups.forEach((f, i) => {
      const on = i < alive || h > 0.97;
      f.group.visible = on;
      if (f.stalk) f.stalk.visible = on;
    });
    healthSize = 0.35 + 0.65 * h;
    pMat.size = 0.85 * healthSize * (growthU >= 1 ? 1 : growthU);
    warmHealth.h = h;
  }
  const warmHealth = { h: 1 };

  // ============================================================
  // RANTING — subdomain yang mekar dari ujung cabang
  // ============================================================
  const rantingGroups = new Map(); // nama domain -> group
  function toggleRanting(domainName) {
    const idx = cabItems.findIndex((c) => c.name === domainName);
    if (idx < 0) return false;
    let rg = rantingGroups.get(domainName);
    if (!rg) {
      const subs = RANTING[domainName] || [];
      if (!subs.length) return false;
      rg = new THREE.Group();
      rg.userData.openT = 0;
      rg.userData.open = false;
      const end = branchEnds[idx].end;
      rg.position.copy(end); // pivot di ujung cabang — semua anak relatif terhadap titik ini
      const outward = end.clone().setY(0).normalize();
      const ZERO = new THREE.Vector3(0, 0, 0);
      for (let s = 0; s < subs.length; s++) {
        const a = (s / subs.length) * Math.PI * 2;
        const dir = new THREE.Vector3(
          outward.x * 1.6 + Math.cos(a) * 1.1,
          0.7 + Math.sin(a * 1.7) * 0.9,
          outward.z * 1.6 + Math.sin(a) * 1.1
        ).normalize();
        const tip = dir.multiplyScalar(2.6 + (s % 2) * 0.9); // relatif
        const curve = new THREE.CatmullRomCurve3([
          ZERO.clone(),
          tip.clone().multiplyScalar(0.5).add(new THREE.Vector3(0, 0.4, 0)),
          tip.clone(),
        ]);
        rg.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 10, 0.07, 5), rachisMat));
        const nodeG = new THREE.Group();
        nodeG.position.copy(tip);
        const core = new THREE.Mesh(
          new THREE.SphereGeometry(0.22, 14, 14),
          new THREE.MeshStandardMaterial({ color: 0xcfe8a0, emissive: 0xcfe8a0, emissiveIntensity: 1.4, roughness: 0.4 })
        );
        core.userData = { node: { layer: 'cabang', name: subs[s], detail: { id: `Ranting dari cabang ${domainName}.`, en: `A twig of the ${domainName} branch.` }, labelColor: '#cfe8a0' } };
        interactives.push(core);
        const lb = labelSprite(subs[s], '#cfe8a0', { scale: 0.62 });
        lb.position.y = 0.55;
        lb.userData.isRantingLabel = true;
        nodeG.add(core, lb);
        rg.add(nodeG);
      }
      groups.cabang.add(rg);
      rantingGroups.set(domainName, rg);
      anim.push((t, dt) => {
        const target = rg.userData.open ? 1 : 0;
        rg.userData.openT += (target - rg.userData.openT) * Math.min(dt * 5, 1);
        const s = Math.max(0.0001, rg.userData.openT);
        rg.scale.setScalar(s);
        rg.visible = rg.userData.openT > 0.02;
        rg.traverse((o) => {
          if (o.userData.isRantingLabel) o.material.opacity = rg.userData.openT;
        });
      });
    }
    rg.userData.open = !rg.userData.open;
    return rg.userData.open;
  }
  const isRantingOpen = (name) => !!rantingGroups.get(name)?.userData.open;

  // ============================================================
  // JALUR NILAI — dari akar hingga sebuah buah
  // ============================================================
  let pathMesh = null;
  let pathAnimT = 0;
  function showValuePath(fruitName) {
    clearValuePath();
    const fi = fruitGroups.findIndex((f) => f.name === fruitName);
    if (fi < 0) return null;
    const fruit = fruitGroups[fi];
    // cabang terdekat dengan buah
    let bi = 0, best = 1e9;
    branchEnds.forEach((b, i) => {
      const d = b.end.distanceTo(fruit.pos);
      if (d < best) { best = d; bi = i; }
    });
    const rt = rootTips[fi % rootTips.length];
    const curve = new THREE.CatmullRomCurve3([
      rt.tip,
      rt.curve.getPointAt(0.45),
      new THREE.Vector3(0, 0.8, 0),
      new THREE.Vector3(0, 9, 0),
      branchEnds[bi].curve.getPointAt(0.1),
      branchEnds[bi].end,
      fruit.pos,
    ]);
    pathMesh = new THREE.Mesh(
      new THREE.TubeGeometry(curve, 90, 0.16, 8),
      new THREE.MeshBasicMaterial({
        color: 0xffd75e, transparent: true, opacity: 0.85,
        blending: THREE.AdditiveBlending, depthWrite: false,
      })
    );
    pathMesh.renderOrder = 15;
    root.add(pathMesh);
    pathAnimT = 0;
    return {
      root: LAYERS.akar.items[fi % 5].name,
      branch: cabItems[bi].name,
      fruit: fruitName,
    };
  }
  function clearValuePath() {
    if (pathMesh) { root.remove(pathMesh); pathMesh.geometry.dispose(); pathMesh = null; }
  }
  anim.push((t, dt) => {
    if (!pathMesh) return;
    pathAnimT = Math.min(1, pathAnimT + dt * 0.55);
    const idx = pathMesh.geometry.index.count;
    pathMesh.geometry.setDrawRange(0, Math.floor(idx * eOut(pathAnimT)));
    pathMesh.material.opacity = 0.55 + Math.sin(t * 3.5) * 0.3;
  });

  // ============================================================
  // SIANG / MALAM — sesuaikan elemen kanvas 3D
  // ============================================================
  function setDaytime(day) {
    stars.visible = !day;
    ff.visible = !day;                 // kunang-kunang hanya malam
    if (day) {
      ground.material.color.set('#3f5f2c'); ground.material.opacity = 0.5;
      rim.material.opacity = 0.15;
      leafMat.emissiveIntensity = 0.12; // matahari sudah menerangi; hindari daun terlalu "menyala"
    } else {
      ground.material.color.set('#0d1f14'); ground.material.opacity = 0.62;
      rim.material.opacity = 0.32;
      leafMat.emissiveIntensity = 0.5;
    }
  }

  return {
    root, groups, labels, interactives, anim,
    setGrowth, setHealth, toggleRanting, isRantingOpen,
    showValuePath, clearValuePath, setDaytime,
    hasRanting: (name) => !!RANTING[name],
    isFruit: (name) => fruitGroups.some((f) => f.name === name),
  };
}
