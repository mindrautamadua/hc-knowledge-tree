// ============================================================
// Konten Pohon Ilmu Human Capital (dwibahasa ID/EN)
// Sumber: "Pohon Ilmu Human Capital — The Human Capital
// Knowledge Tree" · Divisi Operasional SDM
// ============================================================

export const LAYERS = {
  akar: {
    id: 'akar',
    color: '#a9744a',
    tag: { id: 'AKAR · FOUNDATION SCIENCES', en: 'ROOTS · FOUNDATION SCIENCES' },
    title: {
      id: 'Akar — Ilmu-Ilmu Dasar Human Capital',
      en: 'Roots — The Foundation Sciences of Human Capital',
    },
    subtitle: {
      id: 'HR berdiri di atas lima rumpun keilmuan — termasuk hukum & etika yang makin krusial di era analytics. Semakin dalam akarnya, semakin kokoh pohonnya.',
      en: 'HR stands on five families of science — including law & ethics, ever more crucial in the analytics era. The deeper the roots, the stronger the tree.',
    },
    items: [
      { name: 'Behavioral Sciences', detail: { id: 'Psychology · Organizational Behavior · Motivation Theory · Learning Theory', en: 'Psychology · Organizational Behavior · Motivation Theory · Learning Theory' } },
      { name: 'Management & Organization Sciences', detail: { id: 'Organizational Theory · Strategic Management · Leadership Studies · Change Management', en: 'Organizational Theory · Strategic Management · Leadership Studies · Change Management' } },
      { name: 'Quantitative Sciences', detail: { id: 'Statistics · Econometrics · Operations Research · Economics', en: 'Statistics · Econometrics · Operations Research · Economics' } },
      { name: 'Computational & Data Sciences', detail: { id: 'Databases · Machine Learning · AI · Knowledge Graphs', en: 'Databases · Machine Learning · AI · Knowledge Graphs' } },
      { name: 'Law & Ethics', detail: { id: 'Employment Law · Industrial Relations · Data Privacy · Ethics', en: 'Employment Law · Industrial Relations · Data Privacy · Ethics' } },
    ],
  },

  batang: {
    id: 'batang',
    color: '#8a6a3b',
    tag: { id: 'BATANG · THE HUMAN CAPITAL DISCIPLINE', en: 'TRUNK · THE HUMAN CAPITAL DISCIPLINE' },
    title: {
      id: 'Batang — Inti Ilmu, Bukan Sekadar Manajemen',
      en: 'Trunk — The Core Discipline, Not Mere Management',
    },
    subtitle: {
      id: 'Batang adalah inti disiplinnya: Human Capital sebagai satu tubuh pengetahuan yang koheren. Manajemen, strategi, dan tata kelola adalah kambium — lapisan hidup yang mengalirkan pertumbuhan ke seluruh cabang.',
      en: 'The trunk is the core discipline: Human Capital as one coherent body of knowledge. Management, strategy and governance are the cambium — the living layer that channels growth to every branch.',
    },
    items: [
      { name: 'Inti Kayu · Heartwood', detail: { id: 'Human Capital sebagai disiplin ilmu — sintesis seluruh ilmu dasar menjadi satu tubuh pengetahuan yang koheren, sumber tumbuhnya semua cabang.', en: 'Human Capital as a discipline — the synthesis of all foundation sciences into one coherent body of knowledge, the source of every branch.' } },
      { name: 'HC Strategy', detail: { id: 'Kambium — arah dan prioritas Human Capital selaras strategi bisnis.', en: 'Cambium — Human Capital direction and priorities aligned with business strategy.' } },
      { name: 'Governance', detail: { id: 'Kambium — tata kelola, akuntabilitas, dan pengambilan keputusan.', en: 'Cambium — governance, accountability and decision rights.' } },
      { name: 'Organization Design', detail: { id: 'Kambium — struktur organisasi yang menopang strategi.', en: 'Cambium — organization structures that support the strategy.' } },
      { name: 'Operating Model', detail: { id: 'Kambium — cara fungsi HC beroperasi dan melayani bisnis.', en: 'Cambium — how the HC function operates and serves the business.' } },
      { name: 'Process & Policy', detail: { id: 'Kambium — proses dan kebijakan yang konsisten dan adil.', en: 'Cambium — consistent and fair processes and policies.' } },
      { name: 'Service Delivery', detail: { id: 'Kambium — penyampaian layanan HC kepada seluruh karyawan.', en: 'Cambium — delivering HC services to every employee.' } },
    ],
  },

  cabang: {
    id: 'cabang',
    color: '#5c8a3c',
    tag: { id: 'CABANG · FUNCTIONAL DOMAINS', en: 'BRANCHES · FUNCTIONAL DOMAINS' },
    title: {
      id: 'Cabang — 15 Domain Fungsional Human Capital',
      en: 'Branches — 15 Functional Domains of Human Capital',
    },
    subtitle: {
      id: '15 domain pada level abstraksi yang sama — masing-masing berbobot setara, tidak ada yang menjadi sub-domain dari yang lain. Klik sebuah cabang lalu buka rantingnya.',
      en: '15 domains at the same level of abstraction — equal in weight, none a sub-domain of another. Click a branch and unfold its twigs.',
    },
    items: [
      { name: 'Workforce Planning', detail: { id: 'Perencanaan kebutuhan dan komposisi tenaga kerja.', en: 'Planning workforce demand and composition.' } },
      { name: 'Talent Acquisition', detail: { id: 'Menarik dan merekrut talenta yang tepat.', en: 'Attracting and hiring the right talent.' } },
      { name: 'Core HR', detail: { id: 'Administrasi dan data inti kepegawaian.', en: 'Core employee administration and data.' } },
      { name: 'Performance', detail: { id: 'Mengelola dan meningkatkan kinerja.', en: 'Managing and improving performance.' } },
      { name: 'Learning', detail: { id: 'Pembelajaran dan pengembangan berkelanjutan.', en: 'Continuous learning and development.' } },
      { name: 'Talent Management', detail: { id: 'Identifikasi dan pengembangan talenta kunci.', en: 'Identifying and developing key talent.' } },
      { name: 'Rewards', detail: { id: 'Kompensasi, benefit, dan penghargaan.', en: 'Compensation, benefits and recognition.' } },
      { name: 'Employee Relations', detail: { id: 'Hubungan organisasi dengan karyawan.', en: 'The organization–employee relationship.' } },
      { name: 'Industrial Relations', detail: { id: 'Hubungan industrial dan serikat pekerja.', en: 'Industrial and union relations.' } },
      { name: 'Organization Development', detail: { id: 'Pengembangan efektivitas organisasi.', en: 'Developing organizational effectiveness.' } },
      { name: 'Leadership & Succession', detail: { id: 'Kepemimpinan dan perencanaan suksesi.', en: 'Leadership and succession planning.' } },
      { name: 'Culture', detail: { id: 'Budaya dan nilai-nilai organisasi.', en: 'Organizational culture and values.' } },
      { name: 'HSE', detail: { id: 'Health, Safety & Environment.', en: 'Health, Safety & Environment.' } },
      { name: 'HR Operations', detail: { id: 'Operasional layanan HR sehari-hari.', en: 'Day-to-day HR service operations.' } },
      { name: 'Digital Human Capital', detail: { id: 'Digitalisasi seluruh fungsi Human Capital.', en: 'Digitalizing the entire Human Capital function.' } },
    ],
  },

  daun: {
    id: 'daun',
    color: '#7fb069',
    tag: { id: 'DAUN · ORGANIZATIONAL CAPABILITIES', en: 'LEAVES · ORGANIZATIONAL CAPABILITIES' },
    title: {
      id: "Daun — Tempat 'Fotosintesis' Terjadi",
      en: "Leaves — Where 'Photosynthesis' Happens",
    },
    subtitle: {
      id: 'Daun mengubah investasi SDM menjadi kemampuan organisasi — proses inti yang membuat pohon hidup dan berbuah.',
      en: 'Leaves turn people investment into organizational capability — the core process that keeps the tree alive and fruitful.',
    },
    items: [
      { name: 'Skill', detail: { id: 'Keterampilan individu yang terus tumbuh.', en: 'Individual skills that keep growing.' } },
      { name: 'Capability', detail: { id: 'Kapabilitas organisasi menjalankan strategi.', en: 'Organizational capability to execute strategy.' } },
      { name: 'Competency', detail: { id: 'Kompetensi yang terukur dan terstandar.', en: 'Measured, standardized competencies.' } },
      { name: 'Leadership', detail: { id: 'Kepemimpinan di setiap lini.', en: 'Leadership at every level.' } },
      { name: 'Engagement', detail: { id: 'Keterikatan karyawan pada organisasi.', en: 'Employee engagement with the organization.' } },
      { name: 'Collaboration', detail: { id: 'Kolaborasi lintas fungsi.', en: 'Cross-functional collaboration.' } },
      { name: 'Innovation', detail: { id: 'Kapasitas berinovasi berkelanjutan.', en: 'Sustained capacity to innovate.' } },
      { name: 'Agility', detail: { id: 'Kelincahan beradaptasi terhadap perubahan.', en: 'Agility in the face of change.' } },
    ],
  },

  buah: {
    id: 'buah',
    color: '#d4a017',
    tag: { id: 'BUAH · BUSINESS OUTCOMES', en: 'FRUIT · BUSINESS OUTCOMES' },
    title: {
      id: 'Buah — Hasil Akhir yang Sesungguhnya',
      en: 'Fruit — The Real End Results',
    },
    subtitle: {
      id: '“Tujuan Human Capital bukan menghasilkan laporan HR — tetapi menghasilkan nilai bisnis.” Klik sebuah buah lalu lihat jalur nilainya.',
      en: '“The purpose of Human Capital is not to produce HR reports — but to produce business value.” Click a fruit to trace its value path.',
    },
    items: [
      { name: 'Productivity', detail: { id: 'Produktivitas tenaga kerja dan organisasi.', en: 'Workforce and organizational productivity.' } },
      { name: 'Business Growth', detail: { id: 'Pertumbuhan bisnis yang berkelanjutan.', en: 'Sustainable business growth.' } },
      { name: 'Profitability', detail: { id: 'Profitabilitas yang sehat.', en: 'Healthy profitability.' } },
      { name: 'Customer Satisfaction', detail: { id: 'Kepuasan pelanggan sebagai buah layanan manusia.', en: 'Customer satisfaction as the fruit of human service.' } },
      { name: 'Innovation', detail: { id: 'Inovasi produk, layanan, dan proses.', en: 'Product, service and process innovation.' } },
      { name: 'Sustainability', detail: { id: 'Keberlanjutan jangka panjang.', en: 'Long-term sustainability.' } },
      { name: 'ESG', detail: { id: 'Environmental, Social & Governance.', en: 'Environmental, Social & Governance.' } },
      { name: 'Shareholder Value', detail: { id: 'Nilai bagi pemegang saham.', en: 'Value for shareholders.' } },
    ],
  },

  intelligence: {
    id: 'intelligence',
    color: '#4cc9f0',
    tag: { id: 'LAPISAN KECERDASAN · THE INTELLIGENCE LAYER', en: 'THE INTELLIGENCE LAYER' },
    title: {
      id: 'People Analytics — Bukan Cabang, Bukan Akar',
      en: 'People Analytics — Not a Branch, Not a Root',
    },
    subtitle: {
      id: 'People Analytics adalah lapisan kecerdasan yang mengalir ke seluruh pohon — seperti xilem, floem, dan sistem saraf yang menghubungkan setiap bagian. “It is the intelligence layer that enables every Human Capital domain to make evidence-based decisions.”',
      en: 'People Analytics is the intelligence layer flowing through the whole tree — like xylem, phloem and a nervous system connecting every part. “It is the intelligence layer that enables every Human Capital domain to make evidence-based decisions.”',
    },
    items: [
      { name: 'People Analytics', detail: { id: 'AI · Statistics · Insight · Decision Science', en: 'AI · Statistics · Insight · Decision Science' } },
      { name: 'Data', detail: { id: 'Fondasi data yang bersih dan terintegrasi.', en: 'A clean, integrated data foundation.' } },
      { name: 'Technology', detail: { id: 'Platform dan teknologi yang memungkinkan analitik.', en: 'Platforms and technology that enable analytics.' } },
      { name: 'Governance', detail: { id: 'Tata kelola data, privasi, dan etika analitik.', en: 'Data governance, privacy and analytics ethics.' } },
      { name: 'PABoK', detail: { id: 'People Analytics Body of Knowledge — lensa kecerdasan yang melintasi lapis pengetahuan (HCBoK), lapis metode (HCOS · HCAF), dan lapis teknologi (IHCMIS · HC Intelligence Platform).', en: 'People Analytics Body of Knowledge — the intelligence lens crossing the knowledge layer (HCBoK), the method layer (HCOS · HCAF) and the technology layer (IHCMIS · HC Intelligence Platform).' } },
    ],
  },
};

export const LAYER_ORDER = ['akar', 'batang', 'cabang', 'daun', 'buah', 'intelligence'];

// ---- Ranting (subdomain) per cabang -------------------------
// Tiga pertama sesuai dokumen; sisanya pelengkap edukatif standar.
export const RANTING = {
  'Talent Acquisition': ['Employer Branding', 'Candidate Experience', 'Assessment', 'Interview', 'Offer', 'Onboarding'],
  'Learning': ['LMS', 'Competency', 'Certification', 'Learning Path', 'Knowledge Management'],
  'Performance': ['KPI', 'OKR', 'Calibration', 'Reward', 'Coaching'],
  'Workforce Planning': ['Headcount Planning', 'Demand Forecasting', 'Scenario Planning', 'Skills Inventory'],
  'Core HR': ['Employee Data', 'Payroll Admin', 'Time & Attendance', 'Benefits Admin', 'Compliance'],
  'Talent Management': ['Talent Review', '9-Box Grid', 'High-Potential', 'Career Path', 'Mobility'],
  'Rewards': ['Compensation', 'Benefits', 'Incentives', 'Recognition', 'Job Grading'],
  'Employee Relations': ['Grievance Handling', 'Discipline', 'Wellbeing', 'Engagement Survey', 'Exit Management'],
  'Industrial Relations': ['Union Relations', 'PKB / CLA', 'Dispute Resolution', 'Labor Compliance'],
  'Organization Development': ['Org Design', 'Change Management', 'Team Effectiveness', 'Culture Transformation'],
  'Leadership & Succession': ['Leadership Pipeline', 'Succession Planning', 'Executive Assessment', 'Coaching & Mentoring'],
  'Culture': ['Values & Behaviors', 'Rituals', 'Culture Survey', 'Internal Communication'],
  'HSE': ['Safety Management', 'Occupational Health', 'Environment', 'Emergency Response', 'Safety Culture'],
  'HR Operations': ['Shared Services', 'HR Helpdesk', 'SLA Management', 'Document Management'],
  'Digital Human Capital': ['HRIS', 'Employee Self-Service', 'HR Automation', 'Analytics Platform', 'AI Assistant'],
};

// ---- Sub-ilmu tiap rumpun akar (akar besar bercabang) ---------
export const RANTING_AKAR = {
  'Behavioral Sciences': ['Psychology', 'Organizational Behavior', 'Motivation Theory', 'Learning Theory'],
  'Management & Organization Sciences': ['Organizational Theory', 'Strategic Management', 'Leadership Studies', 'Change Management'],
  'Quantitative Sciences': ['Statistics', 'Econometrics', 'Operations Research', 'Economics'],
  'Computational & Data Sciences': ['Databases', 'Machine Learning', 'Artificial Intelligence', 'Knowledge Graphs'],
  'Law & Ethics': ['Employment Law', 'Industrial Relations', 'Data Privacy', 'Ethics'],
};

// ---- Elemen konseptual tambahan: matahari, tanah, enterprise ---
export const EXTRAS = {
  matahari: {
    color: '#ffcf4d',
    name: { id: 'Matahari — Arah & Energi', en: 'The Sun — Direction & Energy' },
    detail: {
      id: 'Visi · Misi · Strategi Bisnis · Organizational Purpose. Tanpa strategi, pohon tidak tahu ke mana harus tumbuh — matahari memberi arah dan energi bagi seluruh pohon.',
      en: 'Vision · Mission · Business Strategy · Organizational Purpose. Without strategy the tree has no direction — the sun gives direction and energy to the whole tree.',
    },
    items: ['Vision', 'Mission', 'Business Strategy', 'Organizational Purpose'],
  },
  tanah: {
    color: '#9c7a4d',
    name: { id: 'Tanah — Konteks', en: 'The Soil — Context' },
    detail: {
      id: 'Society · Culture · Technology · Economy · Regulation · Demography · Environment. Seluruh ilmu Human Capital tumbuh dari konteks ini — akar menyerap makna dari tanahnya.',
      en: 'Society · Culture · Technology · Economy · Regulation · Demography · Environment. All Human Capital science grows from this context — the roots draw meaning from their soil.',
    },
    items: ['Society', 'Culture', 'Technology', 'Economy', 'Regulation', 'Demography', 'Environment'],
  },
  enterprise: {
    color: '#ffd75e',
    name: { id: 'Enterprise Value', en: 'Enterprise Value' },
    detail: {
      id: 'Buah tertinggi. Business Outcomes — Productivity, Growth, Competitive Advantage — bermuara pada Enterprise Value: nilai perusahaan secara utuh. Inilah hubungan eksplisit Human Capital dengan strategi korporasi.',
      en: 'The highest fruit. Business outcomes — Productivity, Growth, Competitive Advantage — culminate in Enterprise Value: the whole worth of the enterprise. This is the explicit link between Human Capital and corporate strategy.',
    },
  },
};

// ---- Tur berpemandu -----------------------------------------
export const TOUR = [
  {
    layer: null,
    tag: { id: 'SATU POHON · ENAM LAPISAN', en: 'ONE TREE · SIX LAYERS' },
    title: { id: 'Ekosistem Pengetahuan Human Capital', en: 'The Human Capital Knowledge Ecosystem' },
    text: {
      id: 'Bayangkan HR bukan sebagai kumpulan fungsi, melainkan satu organisme hidup. Berakar pada ilmu dasar, diperkuat manajemen yang kokoh, bercabang pada fungsi-fungsi HR, berdaun pada outcome manusia, dan berbuah pada nilai bisnis. Nilai mengalir ke atas — dari akar menuju buah.',
      en: 'Imagine HR not as a bundle of functions but as one living organism. Rooted in foundation sciences, strengthened by solid management, branching into HR functions, leafing into human outcomes, and bearing the fruit of business value. Value flows upward — from roots to fruit.',
    },
  },
  {
    layer: null, view: 'matahari',
    tag: { id: 'MATAHARI · ARAH & ENERGI', en: 'THE SUN · DIRECTION & ENERGY' },
    title: { id: 'Matahari — Yang Memberi Pohon Arah', en: 'The Sun — What Gives the Tree Direction' },
    text: {
      id: 'Segala pertumbuhan berawal dari cahaya. Matahari adalah Visi, Misi, Strategi Bisnis, dan Organizational Purpose. Tanpa strategi, pohon tidak tahu ke mana harus tumbuh — dari sinilah seluruh energi berasal.',
      en: 'All growth begins with light. The sun is Vision, Mission, Business Strategy and Organizational Purpose. Without strategy the tree has no direction — this is where all energy comes from.',
    },
  },
  {
    layer: null, view: 'tanah',
    tag: { id: 'TANAH · KONTEKS', en: 'SOIL · CONTEXT' },
    title: { id: 'Tanah — Tempat Akar Berpijak', en: 'Soil — Where the Roots Take Hold' },
    text: {
      id: 'Sebelum akar, ada tanahnya: Society, Culture, Technology, Economy, Regulation, Demography, dan Environment. Seluruh ilmu Human Capital tumbuh dari konteks ini.',
      en: 'Before the roots, there is the soil: Society, Culture, Technology, Economy, Regulation, Demography and Environment. All Human Capital science grows from this context.',
    },
  },
  {
    layer: 'akar',
    tag: { id: 'BAB 1 · AKAR', en: 'CHAPTER 1 · ROOTS' },
    title: { id: 'Semakin Dalam Akarnya, Semakin Kokoh Pohonnya', en: 'The Deeper the Roots, the Stronger the Tree' },
    text: {
      id: 'Lima rumpun keilmuan menopang seluruh pohon: Behavioral, Management & Organization, Quantitative, Computational & Data, serta Law & Ethics — yang makin krusial di era analytics.',
      en: 'Five families of science hold up the whole tree: Behavioral, Management & Organization, Quantitative, Computational & Data, and Law & Ethics — ever more crucial in the analytics era.',
    },
  },
  {
    layer: 'batang',
    tag: { id: 'BAB 2 · BATANG', en: 'CHAPTER 2 · TRUNK' },
    title: { id: 'Batang Adalah Disiplinnya', en: 'The Trunk Is the Discipline' },
    text: {
      id: 'Inti kayu adalah Human Capital sebagai disiplin ilmu. Manajemen bukan batang itu sendiri — melainkan kambium: Strategy, Governance, Organization Design, Operating Model, Process, Policy, dan Service Delivery yang mengalirkan pertumbuhan.',
      en: 'The heartwood is Human Capital as a discipline. Management is not the trunk itself — it is the cambium: Strategy, Governance, Organization Design, Operating Model, Process, Policy and Service Delivery, channeling growth.',
    },
  },
  {
    layer: 'cabang',
    tag: { id: 'BAB 3 · CABANG', en: 'CHAPTER 3 · BRANCHES' },
    title: { id: '15 Domain, Bobot Setara', en: '15 Domains, Equal Weight' },
    text: {
      id: 'Dari Workforce Planning hingga Digital Human Capital — 15 domain fungsional berada pada level abstraksi yang sama, dan setiap cabang terurai lagi menjadi ranting-ranting yang lebih spesifik.',
      en: 'From Workforce Planning to Digital Human Capital — 15 functional domains sit at the same level of abstraction, and every branch unfolds into more specific twigs.',
    },
  },
  {
    layer: 'daun',
    tag: { id: 'BAB 4 · DAUN', en: 'CHAPTER 4 · LEAVES' },
    title: { id: 'Fotosintesis Organisasi', en: 'Organizational Photosynthesis' },
    text: {
      id: 'Daun mengubah cahaya menjadi energi; organisasi mengubah investasi SDM menjadi kapabilitas — Skill, Competency, Leadership, Engagement, Collaboration, Innovation, dan Agility.',
      en: 'Leaves turn light into energy; organizations turn people investment into capability — Skill, Competency, Leadership, Engagement, Collaboration, Innovation and Agility.',
    },
  },
  {
    layer: 'buah',
    tag: { id: 'BAB 5 · BUAH', en: 'CHAPTER 5 · FRUIT' },
    title: { id: 'Hasil Akhir yang Sesungguhnya', en: 'The Real End Results' },
    text: {
      id: 'Tujuan Human Capital bukan menghasilkan laporan HR — tetapi menghasilkan nilai bisnis: Productivity, Growth, Profitability, Customer Satisfaction, Innovation, Sustainability, ESG, dan Shareholder Value.',
      en: 'The purpose of Human Capital is not HR reports — it is business value: Productivity, Growth, Profitability, Customer Satisfaction, Innovation, Sustainability, ESG and Shareholder Value.',
    },
  },
  {
    layer: 'intelligence',
    tag: { id: 'BAB 6 · LAPISAN KECERDASAN', en: 'CHAPTER 6 · THE INTELLIGENCE LAYER' },
    title: { id: 'Aliran yang Menghidupkan Seluruh Pohon', en: 'The Flow That Brings the Whole Tree to Life' },
    text: {
      id: 'Perhatikan partikel cahaya yang mengalir dari akar hingga buah — itulah People Analytics, AI & Data. Bukan cabang, bukan akar, melainkan sistem peredaran kecerdasan: Data → Insight → Decision. Inilah fondasi People Analytics Body of Knowledge (PABoK).',
      en: 'Watch the particles of light flowing from roots to fruit — that is People Analytics, AI & Data. Not a branch, not a root, but a circulatory system of intelligence: Data → Insight → Decision. This is the foundation of the People Analytics Body of Knowledge (PABoK).',
    },
  },
];

// ---- Kuis ----------------------------------------------------
// type 'layer'  : pengguna memilih lapisan yang tepat
// type 'mcq'    : pilihan ganda biasa
export const QUIZ = [
  { type: 'layer', answer: 'intelligence', q: { id: 'People Analytics bukan fungsi HR tersendiri. Di bagian pohon manakah ia hidup?', en: 'People Analytics is not a standalone HR function. Where in the tree does it live?' } },
  { type: 'layer', answer: 'akar', q: { id: 'Statistics, Econometrics, dan Machine Learning menopang HR dari bagian mana?', en: 'Statistics, Econometrics and Machine Learning support HR from which part?' } },
  { type: 'layer', answer: 'cabang', q: { id: 'Talent Acquisition, Rewards, dan HSE adalah contoh dari bagian…', en: 'Talent Acquisition, Rewards and HSE are examples of the…' } },
  { type: 'layer', answer: 'daun', q: { id: 'Engagement dan Agility — kemampuan organisasi hasil “fotosintesis” — berada di…', en: 'Engagement and Agility — organizational capabilities from “photosynthesis” — sit in the…' } },
  { type: 'layer', answer: 'buah', q: { id: 'Productivity, ESG, dan Shareholder Value adalah…', en: 'Productivity, ESG and Shareholder Value are the…' } },
  { type: 'layer', answer: 'batang', q: { id: 'Human Capital sebagai satu disiplin ilmu yang koheren digambarkan sebagai…', en: 'Human Capital as one coherent discipline is depicted as the…' } },
  { type: 'layer', answer: 'cabang', q: { id: 'KPI, OKR, dan Calibration adalah ranting dari cabang Performance. Cabang berada di lapisan…', en: 'KPI, OKR and Calibration are twigs of the Performance branch. Branches live in the…' } },
  { type: 'layer', answer: 'akar', q: { id: 'Employment Law dan Data Privacy — yang makin krusial di era analytics — termasuk rumpun…', en: 'Employment Law and Data Privacy — ever more crucial in the analytics era — belong to the…' } },
  {
    type: 'mcq',
    q: { id: 'Berapa jumlah domain fungsional Human Capital pada cabang pohon?', en: 'How many functional Human Capital domains are on the branches?' },
    options: ['9', '12', '15', '21'],
    correct: 2,
  },
  {
    type: 'mcq',
    q: { id: 'Dalam metafora pohon, manajemen (Strategy, Governance, Operating Model) adalah…', en: 'In the tree metaphor, management (Strategy, Governance, Operating Model) is the…' },
    options: [
      { id: 'Batang itu sendiri', en: 'The trunk itself' },
      { id: 'Kambium — lapisan hidup yang mengalirkan pertumbuhan', en: 'The cambium — the living layer channeling growth' },
      { id: 'Akar', en: 'The roots' },
      { id: 'Buah', en: 'The fruit' },
    ],
    correct: 1,
  },
  {
    type: 'mcq',
    q: { id: 'Urutan aliran nilai pada pohon adalah…', en: 'The order of value flow in the tree is…' },
    options: [
      { id: 'Buah → Daun → Akar', en: 'Fruit → Leaves → Roots' },
      { id: 'Akar → Batang → Cabang → Daun → Buah', en: 'Roots → Trunk → Branches → Leaves → Fruit' },
      { id: 'Batang → Akar → Buah', en: 'Trunk → Roots → Fruit' },
      { id: 'Daun → Cabang → Akar', en: 'Leaves → Branches → Roots' },
    ],
    correct: 1,
  },
  {
    type: 'mcq',
    q: { id: 'PABoK adalah…', en: 'PABoK is…' },
    options: [
      { id: 'Sistem penggajian', en: 'A payroll system' },
      { id: 'Salah satu dari 15 domain fungsional', en: 'One of the 15 functional domains' },
      { id: 'People Analytics Body of Knowledge — lensa kecerdasan lintas lapis', en: 'People Analytics Body of Knowledge — the intelligence lens across layers' },
      { id: 'Nama platform teknologi', en: 'The name of a technology platform' },
    ],
    correct: 2,
  },
];

// ---- Peta jalan / model ilmiah (slide 11-12) ------------------
export const SCIENTIFIC = {
  dims: [
    { n: 'DIMENSI 1', title: 'Knowledge Domains', items: ['Recruitment', 'Performance', 'Learning', 'Reward', 'Talent', 'Culture'] },
    { n: 'DIMENSI 2', title: 'Capability Layer', items: ['Process', 'Technology', 'Governance', 'People', 'Organization'] },
    { n: 'DIMENSI 3', title: 'Intelligence Layer', items: ['People Analytics', 'AI', 'Data', 'Decision Science'] },
  ],
  roadmap: [
    { q: { id: 'Apa itu Human Capital?', en: 'What is Human Capital?' }, t: 'LAPIS PENGETAHUAN', d: 'HCBoK — Human Capital Body of Knowledge · model konseptual: The Human Capital Knowledge Tree' },
    { q: { id: 'Bagaimana dijalankan & distrukturkan?', en: 'How is it run & structured?' }, t: 'LAPIS METODE', d: 'HCOS — Human Capital Operating System · HCAF — Human Capital Architecture Framework' },
    { q: { id: 'Dengan apa diwujudkan?', en: 'What realizes it?' }, t: 'LAPIS TEKNOLOGI', d: 'IHCMIS — Integrated HC Management Information System · HC Intelligence Platform' },
  ],
};

// ---- Teks antarmuka ------------------------------------------
export const STRINGS = {
  id: {
    enter: 'Masuk ke Hutan Pengetahuan',
    tour: 'Mulai Penjelajahan',
    next: 'Lanjut', prev: 'Kembali', finish: 'Selesai',
    hint: 'Seret untuk memutar · gulir untuk memperbesar · klik titik bercahaya',
    menu: 'Menu',
    quiz: 'Kuis Pemahaman',
    sim: 'Simulasi Investasi SDM',
    model: 'Model Ilmiah & Peta Jalan',
    poster: 'Unduh Poster (PNG)',
    regrow: 'Tumbuhkan Ulang Pohon',
    lang: 'English',
    search: 'Cari istilah…',
    searchTitle: 'Glosarium & Pencarian',
    simTitle: 'Simulasi Investasi SDM',
    simDesc: 'Geser untuk melihat apa yang terjadi bila investasi pada manusia dikurangi: daun menguning, buah berguguran, dan aliran kecerdasan melemah.',
    simLow: 'Diabaikan', simHigh: 'Sehat',
    quizScore: 'Skor',
    quizBest: 'Terbaik',
    quizOf: 'dari',
    quizPickLayer: 'Pilih lapisannya:',
    quizCorrect: 'Benar!',
    quizWrong: 'Belum tepat — jawabannya:',
    quizDone: 'Kuis selesai!',
    quizRetry: 'Ulangi Kuis',
    quizClose: 'Tutup',
    valuePath: 'Lihat Jalur Nilai',
    valuePathOn: 'Jalur nilai:',
    ranting: 'Buka Ranting',
    rantingHide: 'Tutup Ranting',
    speak: 'Bacakan narasi',
    speakStop: 'Hentikan suara',
    modelTitle: 'Model Tiga Dimensi Human Capital',
    modelSub: 'Bila dibuat lebih ilmiah: domain pengetahuan, lapisan kapabilitas, dan lapisan kecerdasan bekerja secara simultan.',
    roadmapTitle: 'Peta Jalan: Human Capital Body of Knowledge',
    roadmapSub: 'Tiga lapis menjawab tiga pertanyaan; PABoK adalah lensa kecerdasan yang melintasi ketiganya.',
    growing: 'Pohon sedang tumbuh…',
    noResult: 'Tidak ditemukan. Coba kata lain.',
    toNight: 'Suasana Malam',
    toDay: 'Suasana Siang',
    season: 'Musim',
    seasonSpring: 'Semi — Pertumbuhan',
    seasonSummer: 'Panas — Kapabilitas',
    seasonAutumn: 'Gugur — Panen Nilai',
    seasonWinter: 'Dingin — Refleksi',
  },
  en: {
    enter: 'Enter the Knowledge Forest',
    tour: 'Start the Journey',
    next: 'Next', prev: 'Back', finish: 'Finish',
    hint: 'Drag to rotate · scroll to zoom · click the glowing nodes',
    menu: 'Menu',
    quiz: 'Knowledge Quiz',
    sim: 'People Investment Simulator',
    model: 'Scientific Model & Roadmap',
    poster: 'Download Poster (PNG)',
    regrow: 'Regrow the Tree',
    lang: 'Bahasa Indonesia',
    search: 'Search a term…',
    searchTitle: 'Glossary & Search',
    simTitle: 'People Investment Simulator',
    simDesc: 'Slide to see what happens when investment in people is cut: leaves turn yellow, fruit falls, and the intelligence flow weakens.',
    simLow: 'Neglected', simHigh: 'Healthy',
    quizScore: 'Score',
    quizBest: 'Best',
    quizOf: 'of',
    quizPickLayer: 'Pick the layer:',
    quizCorrect: 'Correct!',
    quizWrong: 'Not quite — the answer is:',
    quizDone: 'Quiz complete!',
    quizRetry: 'Retry Quiz',
    quizClose: 'Close',
    valuePath: 'Trace Value Path',
    valuePathOn: 'Value path:',
    ranting: 'Unfold Twigs',
    rantingHide: 'Fold Twigs',
    speak: 'Read narration aloud',
    speakStop: 'Stop voice',
    modelTitle: 'The Three-Dimensional Human Capital Model',
    modelSub: 'Put more scientifically: knowledge domains, the capability layer and the intelligence layer operate simultaneously.',
    roadmapTitle: 'Roadmap: Human Capital Body of Knowledge',
    roadmapSub: 'Three layers answer three questions; PABoK is the intelligence lens across all of them.',
    growing: 'The tree is growing…',
    noResult: 'No match. Try another word.',
    toNight: 'Night Ambience',
    toDay: 'Day Ambience',
    season: 'Season',
    seasonSpring: 'Spring — Growth',
    seasonSummer: 'Summer — Capability',
    seasonAutumn: 'Autumn — Value Harvest',
    seasonWinter: 'Winter — Reflection',
  },
};

export const LAYER_NAMES = {
  id: { akar: 'Akar', batang: 'Batang', cabang: 'Cabang', daun: 'Daun', buah: 'Buah', intelligence: 'Analytics · AI' },
  en: { akar: 'Roots', batang: 'Trunk', cabang: 'Branches', daun: 'Leaves', buah: 'Fruit', intelligence: 'Analytics · AI' },
};

// ---- Referensi kerangka (badge) -------------------------------
export const REFS = {
  HCBoK: { id: 'Human Capital Body of Knowledge — tubuh pengetahuan HC', en: 'Human Capital Body of Knowledge' },
  HCOS: { id: 'Human Capital Operating System — cara HC dijalankan', en: 'Human Capital Operating System' },
  HCAF: { id: 'Human Capital Architecture Framework — struktur HC', en: 'Human Capital Architecture Framework' },
  PABoK: { id: 'People Analytics Body of Knowledge — lensa kecerdasan', en: 'People Analytics Body of Knowledge' },
  IHCMIS: { id: 'Integrated HC Management Information System', en: 'Integrated HC Management Information System' },
};

// ============================================================
// KNOWLEDGE — konten ensiklopedik per simpul
// Field: def (definisi), why (mengapa penting), refs (kerangka),
// related (simpul terkait), metric (sudut People Analytics).
// `key` diambil otomatis dari RANTING/RANTING_AKAR bila ada.
// Simpul tanpa entri memakai fallback dari `detail`.
// ============================================================
const B = (id, en) => ({ id, en });
export const KNOWLEDGE = {
  // ---------- AKAR: rumpun ilmu ----------
  'Behavioral Sciences': {
    def: B('Ilmu tentang perilaku manusia: psikologi, perilaku organisasi, teori motivasi, dan teori pembelajaran.',
      'The science of human behavior: psychology, organizational behavior, motivation theory, and learning theory.'),
    why: B('Setiap intervensi Human Capital — rekrutmen, pengembangan, retensi — berakar pada pemahaman mengapa manusia bertindak, belajar, dan terlibat.',
      'Every Human Capital intervention — hiring, development, retention — rests on understanding why people act, learn, and engage.'),
    refs: ['HCBoK'], related: ['Culture', 'Learning', 'Performance', 'Engagement'],
    metric: B('Sudut analitik: model prediktif engagement & driver perilaku dari survei dan data interaksi.',
      'Analytics angle: predictive engagement models and behavioral drivers from surveys and interaction data.'),
  },
  'Management & Organization Sciences': {
    def: B('Teori organisasi, manajemen strategis, studi kepemimpinan, dan manajemen perubahan.',
      'Organizational theory, strategic management, leadership studies, and change management.'),
    why: B('Menyediakan cara merancang struktur, strategi, dan tata kelola agar Human Capital selaras dengan arah bisnis.',
      'Provides the means to design structure, strategy, and governance so Human Capital aligns with business direction.'),
    refs: ['HCBoK', 'HCAF'], related: ['Organization Development', 'Leadership & Succession', 'Workforce Planning'],
    metric: B('Sudut analitik: analisis jaringan organisasi (ONA) dan pemodelan efektivitas struktur.',
      'Analytics angle: organizational network analysis (ONA) and structural-effectiveness modeling.'),
  },
  'Quantitative Sciences': {
    def: B('Statistika, ekonometrika, riset operasi, dan ekonomi.',
      'Statistics, econometrics, operations research, and economics.'),
    why: B('Fondasi pengukuran yang membuat People Analytics mungkin — dari uji hipotesis hingga optimasi tenaga kerja.',
      'The measurement foundation that makes People Analytics possible — from hypothesis testing to workforce optimization.'),
    refs: ['PABoK', 'HCBoK'], related: ['People Analytics', 'Rewards', 'Workforce Planning'],
    metric: B('Sudut analitik: regresi driver kinerja, pemodelan kompensasi, dan perencanaan kapasitas.',
      'Analytics angle: performance-driver regression, compensation modeling, and capacity planning.'),
  },
  'Computational & Data Sciences': {
    def: B('Basis data, machine learning, kecerdasan buatan, dan knowledge graph.',
      'Databases, machine learning, artificial intelligence, and knowledge graphs.'),
    why: B('Mesin yang menghidupkan People Analytics dan Digital Human Capital — mengubah data mentah menjadi keputusan.',
      'The engine behind People Analytics and Digital Human Capital — turning raw data into decisions.'),
    refs: ['PABoK', 'IHCMIS'], related: ['Digital Human Capital', 'People Analytics', 'Data'],
    metric: B('Sudut analitik: prediksi attrition, rekomendasi pembelajaran, dan asisten HC berbasis AI.',
      'Analytics angle: attrition prediction, learning recommendations, and AI-based HC assistants.'),
  },
  'Law & Ethics': {
    def: B('Hukum ketenagakerjaan, hubungan industrial, privasi data, dan etika.',
      'Employment law, industrial relations, data privacy, and ethics.'),
    why: B('Makin krusial di era analytics: menjaga keadilan, kepatuhan, dan kepercayaan saat data manusia diolah.',
      'Ever more crucial in the analytics era: safeguarding fairness, compliance, and trust as human data is processed.'),
    refs: ['HCBoK', 'PABoK'], related: ['Industrial Relations', 'Employee Relations', 'Governance'],
    metric: B('Sudut analitik: audit bias & keadilan model, jejak persetujuan data, dan privacy-by-design.',
      'Analytics angle: model bias & fairness audits, data-consent trails, and privacy-by-design.'),
  },

  // ---------- BATANG ----------
  'Human Capital · The Discipline': {
    def: B('Sintesis seluruh ilmu dasar menjadi satu tubuh pengetahuan yang koheren — Human Capital sebagai disiplin, bukan sekadar fungsi manajemen.',
      'The synthesis of all foundation sciences into one coherent body of knowledge — Human Capital as a discipline, not merely a management function.'),
    why: B('Inti kayu yang memberi koherensi; dari sinilah semua cabang fungsional tumbuh. Manajemen, strategi, dan tata kelola adalah kambium yang mengalirkan pertumbuhan.',
      'The heartwood that lends coherence; every functional branch grows from here. Management, strategy, and governance are the cambium channeling growth.'),
    refs: ['HCBoK', 'HCOS', 'HCAF'], related: ['People Analytics', 'Organization Development'],
    metric: B('Sudut analitik: indeks kematangan Human Capital dan ROI investasi SDM.',
      'Analytics angle: Human Capital maturity index and return on people investment.'),
  },

  // ---------- CABANG: 15 domain ----------
  'Workforce Planning': {
    def: B('Merencanakan jumlah, komposisi, dan kapabilitas tenaga kerja agar sesuai kebutuhan strategi ke depan.',
      'Planning the size, mix, and capabilities of the workforce to meet future strategy.'),
    why: B('Menghubungkan strategi bisnis dengan kebutuhan orang — mencegah kekurangan maupun kelebihan talenta.',
      'Links business strategy to people needs — preventing both talent shortfalls and surpluses.'),
    refs: ['HCBoK', 'PABoK'], related: ['Talent Acquisition', 'Talent Management', 'Organization Development'],
    metric: B('Sudut analitik: peramalan kebutuhan headcount, analisis kesenjangan skill, dan perencanaan skenario.',
      'Analytics angle: headcount demand forecasting, skills-gap analysis, and scenario planning.'),
  },
  'Talent Acquisition': {
    def: B('Menarik, menilai, dan merekrut talenta yang tepat — dari employer branding hingga onboarding.',
      'Attracting, assessing, and hiring the right talent — from employer branding to onboarding.'),
    why: B('Kualitas keputusan rekrutmen menentukan mutu seluruh organisasi; kesalahan di sini mahal dan berjangka panjang.',
      'Hiring-decision quality shapes the whole organization; mistakes here are costly and long-lived.'),
    refs: ['HCBoK', 'PABoK'], related: ['Workforce Planning', 'Employer Branding', 'Culture'],
    metric: B('Sudut analitik: quality of hire, time-to-fill, sumber kandidat terbaik, dan prediksi keberhasilan.',
      'Analytics angle: quality of hire, time-to-fill, best candidate sources, and success prediction.'),
  },
  'Core HR': {
    def: B('Administrasi dan data inti kepegawaian: data karyawan, payroll, waktu & kehadiran, benefit, kepatuhan.',
      'Core employee administration and data: employee records, payroll, time & attendance, benefits, compliance.'),
    why: B('Tulang punggung operasional; data inti yang bersih adalah prasyarat semua analitik dan pengambilan keputusan.',
      'The operational backbone; clean core data is the prerequisite for all analytics and decision-making.'),
    refs: ['HCBoK', 'IHCMIS'], related: ['HR Operations', 'Digital Human Capital', 'Rewards'],
    metric: B('Sudut analitik: kualitas & kelengkapan data, akurasi payroll, dan efisiensi proses.',
      'Analytics angle: data quality & completeness, payroll accuracy, and process efficiency.'),
  },
  'Performance': {
    def: B('Mengelola dan meningkatkan kinerja melalui sasaran, umpan balik, kalibrasi, penghargaan, dan coaching.',
      'Managing and improving performance through goals, feedback, calibration, reward, and coaching.'),
    why: B('Menerjemahkan strategi menjadi sasaran individu dan tim, lalu mengubah usaha menjadi hasil.',
      'Translates strategy into individual and team goals, then turns effort into results.'),
    refs: ['HCBoK', 'PABoK'], related: ['Rewards', 'Learning', 'Leadership & Succession'],
    metric: B('Sudut analitik: distribusi kinerja, keadilan kalibrasi, dan korelasi kinerja–outcome bisnis.',
      'Analytics angle: performance distribution, calibration fairness, and performance–business-outcome correlation.'),
  },
  'Learning': {
    def: B('Pembelajaran dan pengembangan berkelanjutan: LMS, kompetensi, sertifikasi, jalur belajar, manajemen pengetahuan.',
      'Continuous learning and development: LMS, competency, certification, learning paths, knowledge management.'),
    why: B('Mesin "fotosintesis" yang mengubah investasi menjadi kapabilitas — sumber daya adaptasi organisasi.',
      'The "photosynthesis" engine turning investment into capability — the organization\'s adaptive resource.'),
    refs: ['HCBoK', 'PABoK'], related: ['Performance', 'Talent Management', 'Capability'],
    metric: B('Sudut analitik: dampak pembelajaran pada kinerja, penyelesaian jalur, dan analitik kesenjangan skill.',
      'Analytics angle: learning impact on performance, path completion, and skills-gap analytics.'),
  },
  'Talent Management': {
    def: B('Mengidentifikasi, mengembangkan, dan menggerakkan talenta kunci — talent review, 9-box, hi-po, jalur karier.',
      'Identifying, developing, and mobilizing key talent — talent review, 9-box, high-potential, career paths.'),
    why: B('Memastikan orang yang tepat berada dan tumbuh pada peran yang tepat, kini dan di masa depan.',
      'Ensures the right people are, and grow, in the right roles — now and in the future.'),
    refs: ['HCBoK', 'PABoK'], related: ['Leadership & Succession', 'Learning', 'Workforce Planning'],
    metric: B('Sudut analitik: prediksi flight-risk hi-po, kesiapan suksesi, dan efektivitas mobilitas.',
      'Analytics angle: high-potential flight-risk prediction, succession readiness, and mobility effectiveness.'),
  },
  'Rewards': {
    def: B('Kompensasi, benefit, insentif, penghargaan, dan penilaian bobot jabatan.',
      'Compensation, benefits, incentives, recognition, and job grading.'),
    why: B('Menyelaraskan imbalan dengan nilai dan kinerja; adil secara internal dan kompetitif secara eksternal.',
      'Aligns reward with value and performance; internally fair and externally competitive.'),
    refs: ['HCBoK', 'PABoK'], related: ['Performance', 'Core HR', 'Culture'],
    metric: B('Sudut analitik: analisis ekuitas bayar (termasuk gap gender), efektivitas insentif, dan benchmarking pasar.',
      'Analytics angle: pay-equity analysis (including gender gap), incentive effectiveness, and market benchmarking.'),
  },
  'Employee Relations': {
    def: B('Mengelola hubungan organisasi–karyawan: keluhan, disiplin, kesejahteraan, survei keterikatan, exit.',
      'Managing the organization–employee relationship: grievances, discipline, wellbeing, engagement surveys, exits.'),
    why: B('Menjaga kepercayaan dan keadilan sehari-hari; kesehatan hubungan menentukan retensi dan reputasi.',
      'Sustains everyday trust and fairness; relationship health drives retention and reputation.'),
    refs: ['HCBoK', 'PABoK'], related: ['Industrial Relations', 'Culture', 'Engagement'],
    metric: B('Sudut analitik: analitik keterikatan, deteksi dini risiko keluar, dan tema keluhan.',
      'Analytics angle: engagement analytics, early attrition-risk detection, and grievance themes.'),
  },
  'Industrial Relations': {
    def: B('Hubungan industrial dengan serikat pekerja: PKB, penyelesaian perselisihan, kepatuhan ketenagakerjaan.',
      'Industrial relations with unions: collective agreements, dispute resolution, labor compliance.'),
    why: B('Menjaga stabilitas dan kepatuhan hubungan kerja kolektif; berakar pada hukum & etika.',
      'Maintains stability and compliance of collective labor relations; rooted in law & ethics.'),
    refs: ['HCBoK'], related: ['Employee Relations', 'Law & Ethics', 'HSE'],
    metric: B('Sudut analitik: tren perselisihan, kepatuhan PKB, dan iklim hubungan industrial.',
      'Analytics angle: dispute trends, collective-agreement compliance, and industrial-relations climate.'),
  },
  'Organization Development': {
    def: B('Mengembangkan efektivitas organisasi: desain organisasi, manajemen perubahan, efektivitas tim, transformasi budaya.',
      'Developing organizational effectiveness: org design, change management, team effectiveness, culture transformation.'),
    why: B('Membentuk cara organisasi bekerja dan berubah agar strategi dapat dieksekusi.',
      'Shapes how the organization works and changes so strategy can be executed.'),
    refs: ['HCBoK', 'HCAF'], related: ['Culture', 'Leadership & Succession', 'Workforce Planning'],
    metric: B('Sudut analitik: kesehatan organisasi, kesiapan perubahan, dan efektivitas tim lintas fungsi.',
      'Analytics angle: organizational health, change readiness, and cross-functional team effectiveness.'),
  },
  'Leadership & Succession': {
    def: B('Membangun kepemimpinan dan pipeline suksesi: pipeline pemimpin, perencanaan suksesi, asesmen eksekutif, coaching.',
      'Building leadership and succession pipelines: leadership pipeline, succession planning, executive assessment, coaching.'),
    why: B('Menjamin keberlanjutan kepemimpinan; kesiapan pemimpin masa depan adalah risiko strategis utama.',
      'Ensures leadership continuity; future-leader readiness is a top strategic risk.'),
    refs: ['HCBoK', 'PABoK'], related: ['Talent Management', 'Learning', 'Leadership'],
    metric: B('Sudut analitik: kedalaman bangku suksesi, kesiapan kandidat, dan dampak program kepemimpinan.',
      'Analytics angle: succession bench depth, candidate readiness, and leadership-program impact.'),
  },
  'Culture': {
    def: B('Budaya dan nilai organisasi: nilai & perilaku, ritual, survei budaya, komunikasi internal.',
      'Organizational culture and values: values & behaviors, rituals, culture surveys, internal communication.'),
    why: B('"Cara kami bekerja" yang tak terlihat namun menentukan; budaya memakan strategi untuk sarapan.',
      'The invisible-yet-decisive "how we work"; culture eats strategy for breakfast.'),
    refs: ['HCBoK', 'PABoK'], related: ['Engagement', 'Employee Relations', 'Organization Development'],
    metric: B('Sudut analitik: pengukuran budaya, kesesuaian nilai–perilaku, dan analitik sentimen internal.',
      'Analytics angle: culture measurement, values–behavior alignment, and internal sentiment analytics.'),
  },
  'HSE': {
    def: B('Health, Safety & Environment: manajemen keselamatan, kesehatan kerja, lingkungan, tanggap darurat, budaya selamat.',
      'Health, Safety & Environment: safety management, occupational health, environment, emergency response, safety culture.'),
    why: B('Melindungi manusia adalah kewajiban etis dan fondasi keberlanjutan; nihil kecelakaan adalah tujuan.',
      'Protecting people is an ethical duty and the foundation of sustainability; zero harm is the goal.'),
    refs: ['HCBoK'], related: ['Culture', 'Sustainability', 'Industrial Relations'],
    metric: B('Sudut analitik: leading vs lagging indicator keselamatan, prediksi insiden, dan indeks budaya selamat.',
      'Analytics angle: leading vs lagging safety indicators, incident prediction, and safety-culture index.'),
  },
  'HR Operations': {
    def: B('Operasional layanan HR sehari-hari: shared services, helpdesk, manajemen SLA, dokumen.',
      'Day-to-day HR service operations: shared services, helpdesk, SLA management, documents.'),
    why: B('Menyampaikan layanan HC secara andal dan efisien; pengalaman karyawan lahir dari operasi yang mulus.',
      'Delivers HC services reliably and efficiently; employee experience is born from smooth operations.'),
    refs: ['HCBoK', 'IHCMIS'], related: ['Core HR', 'Digital Human Capital', 'Employee Relations'],
    metric: B('Sudut analitik: kepatuhan SLA, biaya per layanan, dan analitik pengalaman karyawan.',
      'Analytics angle: SLA compliance, cost per service, and employee-experience analytics.'),
  },
  'Digital Human Capital': {
    def: B('Digitalisasi seluruh fungsi HC: HRIS, self-service, otomasi, platform analitik, asisten AI.',
      'Digitalizing the whole HC function: HRIS, self-service, automation, analytics platform, AI assistant.'),
    why: B('Menjadikan HC terukur, real-time, dan cerdas; jembatan menuju People Analytics dan pengambilan keputusan berbasis bukti.',
      'Makes HC measurable, real-time, and intelligent; the bridge to People Analytics and evidence-based decisions.'),
    refs: ['IHCMIS', 'PABoK'], related: ['People Analytics', 'Core HR', 'HR Operations'],
    metric: B('Sudut analitik: adopsi digital, otomasi proses, dan kematangan platform data.',
      'Analytics angle: digital adoption, process automation, and data-platform maturity.'),
  },

  // ---------- INTELLIGENCE ----------
  'People Analytics': {
    def: B('Lapisan kecerdasan yang menggabungkan AI, statistika, insight, dan decision science untuk seluruh domain HC.',
      'The intelligence layer combining AI, statistics, insight, and decision science across every HC domain.'),
    why: B('Bukan fungsi HR tersendiri, melainkan kemampuan analitik yang memungkinkan setiap domain mengambil keputusan berbasis bukti: Data → Insight → Decision.',
      'Not a standalone HR function, but the analytic capability enabling every domain to decide on evidence: Data → Insight → Decision.'),
    refs: ['PABoK', 'HCBoK', 'IHCMIS'], related: ['Data', 'Technology', 'Governance', 'Digital Human Capital'],
    metric: B('Inilah lensa metrik untuk seluruh pohon — dari quality of hire hingga ROI investasi SDM.',
      'This is the metric lens for the whole tree — from quality of hire to return on people investment.'),
  },

  // ---------- MATAHARI / TANAH / ENTERPRISE ----------
  'Matahari — Arah & Energi': {
    def: B('Sumber arah dan energi pohon: Visi, Misi, Strategi Bisnis, dan Organizational Purpose.',
      'The tree\'s source of direction and energy: Vision, Mission, Business Strategy, and Organizational Purpose.'),
    why: B('Tanpa strategi, pohon tidak tahu ke mana harus tumbuh. Matahari memberi arah pada setiap akar, cabang, dan buah.',
      'Without strategy the tree has no direction. The sun gives direction to every root, branch, and fruit.'),
    refs: ['HCBoK', 'HCOS'], related: ['Human Capital · The Discipline', 'Enterprise Value'],
    metric: B('Sudut analitik: penyelarasan strategi–tenaga kerja dan garis pandang sasaran (goal line-of-sight).',
      'Analytics angle: strategy–workforce alignment and goal line-of-sight.'),
  },
  'The Sun — Direction & Energy': { alias: 'Matahari — Arah & Energi' },
  'Tanah — Konteks': {
    def: B('Konteks tempat akar berpijak: Society, Culture, Technology, Economy, Regulation, Demography, Environment.',
      'The context the roots stand in: Society, Culture, Technology, Economy, Regulation, Demography, Environment.'),
    why: B('Ilmu Human Capital tidak menggantung — ia tumbuh dari konteks. Akar menyerap makna dari tanahnya.',
      'Human Capital science does not float — it grows from context. Roots draw meaning from their soil.'),
    refs: ['HCBoK'], related: ['Law & Ethics', 'Culture', 'ESG'],
    metric: B('Sudut analitik: pemindaian lingkungan (PESTEL), tren demografi tenaga kerja, dan sinyal pasar tenaga kerja.',
      'Analytics angle: environmental scanning (PESTEL), workforce demographic trends, and labor-market signals.'),
  },
  'The Soil — Context': { alias: 'Tanah — Konteks' },
  'Enterprise Value': {
    def: B('Buah tertinggi. Business Outcomes — Productivity, Growth, Competitive Advantage — bermuara pada nilai perusahaan secara utuh.',
      'The highest fruit. Business outcomes — Productivity, Growth, Competitive Advantage — culminate in the whole worth of the enterprise.'),
    why: B('Membuat hubungan Human Capital dengan strategi korporasi menjadi eksplisit: tujuan HC bukan laporan HR, melainkan nilai bisnis.',
      'Makes the link between Human Capital and corporate strategy explicit: the goal of HC is not HR reports, but business value.'),
    refs: ['HCBoK', 'PABoK'], related: ['Productivity', 'Business Growth', 'Profitability', 'Shareholder Value'],
    metric: B('Sudut analitik: ROI modal manusia, kontribusi HC pada EBITDA, dan human-capital value added (HCVA).',
      'Analytics angle: human-capital ROI, HC contribution to EBITDA, and human-capital value added (HCVA).'),
  },

  // ---------- DAUN: 8 kapabilitas organisasi ----------
  'Skill': {
    def: B('Keterampilan individu yang dapat diamati dan terus tumbuh — bahan dasar kapabilitas organisasi.',
      'Observable individual skills that keep growing — the raw material of organizational capability.'),
    why: B('Skill adalah unit terkecil kemampuan; agregasi skill yang tepat pada orang yang tepat menghasilkan kapabilitas.',
      'Skills are the smallest unit of ability; the right skills aggregated in the right people become capability.'),
    refs: ['HCBoK', 'PABoK'], related: ['Learning', 'Competency', 'Capability'],
    metric: B('Sudut analitik: inventaris skill, peta kesenjangan skill, dan skill adjacency untuk reskilling.',
      'Analytics angle: skills inventory, skills-gap maps, and skill adjacency for reskilling.'),
  },
  'Capability': {
    def: B('Kemampuan organisasi menjalankan strategi secara berulang dan andal — kombinasi orang, proses, dan pengetahuan.',
      'The organization\'s repeatable, reliable ability to execute strategy — a blend of people, process, and knowledge.'),
    why: B('Kapabilitas, bukan sekadar sumber daya, yang membedakan pemenang; ia sulit ditiru dan menjadi keunggulan bersaing.',
      'Capability, not mere resources, separates winners; it is hard to imitate and becomes competitive advantage.'),
    refs: ['HCBoK', 'HCAF'], related: ['Organization Development', 'Learning', 'Agility'],
    metric: B('Sudut analitik: pemodelan kematangan kapabilitas dan pemetaan kapabilitas kritis vs strategi.',
      'Analytics angle: capability-maturity modeling and mapping critical capabilities against strategy.'),
  },
  'Competency': {
    def: B('Kombinasi pengetahuan, keterampilan, dan perilaku yang terukur dan terstandar untuk suatu peran.',
      'A measured, standardized blend of knowledge, skills, and behaviors for a role.'),
    why: B('Kompetensi memberi bahasa bersama untuk rekrutmen, pengembangan, dan penilaian — menyatukan seluruh siklus talenta.',
      'Competencies give a shared language for hiring, development, and assessment — unifying the whole talent cycle.'),
    refs: ['HCBoK', 'PABoK'], related: ['Learning', 'Performance', 'Talent Management'],
    metric: B('Sudut analitik: cakupan kompetensi, korelasi kompetensi–kinerja, dan model prediksi kesuksesan peran.',
      'Analytics angle: competency coverage, competency–performance correlation, and role-success prediction models.'),
  },
  'Leadership': {
    def: B('Kemampuan mengarahkan, memberi makna, dan menggerakkan orang menuju tujuan bersama — di setiap lini, bukan hanya puncak.',
      'The ability to give direction and meaning and to move people toward a shared goal — at every level, not only the top.'),
    why: B('Kepemimpinan adalah pengganda; ia menentukan apakah kapabilitas berubah menjadi hasil dan apakah budaya sehat.',
      'Leadership is a multiplier; it decides whether capability turns into results and whether culture stays healthy.'),
    refs: ['HCBoK', 'PABoK'], related: ['Leadership & Succession', 'Culture', 'Engagement'],
    metric: B('Sudut analitik: efektivitas kepemimpinan (umpan balik 360), kesehatan pipeline, dan dampak pemimpin pada retensi tim.',
      'Analytics angle: leadership effectiveness (360 feedback), pipeline health, and leader impact on team retention.'),
  },
  'Engagement': {
    def: B('Keterikatan emosional dan komitmen karyawan pada organisasi dan pekerjaannya.',
      'Employees\' emotional attachment and commitment to the organization and their work.'),
    why: B('Karyawan yang terikat lebih produktif, lebih inovatif, dan lebih bertahan; engagement adalah jembatan menuju outcome bisnis.',
      'Engaged employees are more productive, more innovative, and stay longer; engagement is the bridge to business outcomes.'),
    refs: ['HCBoK', 'PABoK'], related: ['Culture', 'Employee Relations', 'Customer Satisfaction'],
    metric: B('Sudut analitik: eNPS, driver keterikatan, dan hubungan engagement → produktivitas & kepuasan pelanggan (service-profit chain).',
      'Analytics angle: eNPS, engagement drivers, and the engagement → productivity & customer-satisfaction link (service-profit chain).'),
  },
  'Collaboration': {
    def: B('Kemampuan bekerja lintas fungsi dan batas organisasi untuk memecahkan masalah bersama.',
      'The ability to work across functions and organizational boundaries to solve problems together.'),
    why: B('Nilai modern diciptakan di antara silo, bukan di dalamnya; kolaborasi mengubah keahlian tersebar menjadi hasil kolektif.',
      'Modern value is created between silos, not within them; collaboration turns scattered expertise into collective results.'),
    refs: ['HCBoK', 'PABoK'], related: ['Culture', 'Organization Development', 'Innovation'],
    metric: B('Sudut analitik: analisis jaringan organisasi (ONA), pola kolaborasi lintas tim, dan deteksi silo.',
      'Analytics angle: organizational network analysis (ONA), cross-team collaboration patterns, and silo detection.'),
  },
  'Innovation': {
    def: B('Kapasitas menciptakan dan menerapkan gagasan baru yang bernilai — sebagai kemampuan organisasi maupun hasil bisnis.',
      'The capacity to create and apply valuable new ideas — both as an organizational capability and a business outcome.'),
    why: B('Di daun, inovasi adalah kemampuan yang tumbuh dari pembelajaran & keberagaman; di buah, ia menjadi pertumbuhan dan keunggulan bersaing.',
      'As a leaf, innovation is a capability grown from learning & diversity; as a fruit, it becomes growth and competitive advantage.'),
    refs: ['HCBoK', 'PABoK'], related: ['Learning', 'Agility', 'Culture', 'Business Growth'],
    metric: B('Sudut analitik: pipeline gagasan, tingkat implementasi inovasi, dan keberagaman tim sebagai prediktor inovasi.',
      'Analytics angle: idea pipeline, innovation implementation rate, and team diversity as a predictor of innovation.'),
  },
  'Agility': {
    def: B('Kelincahan organisasi merasakan perubahan dan meresponsnya dengan cepat tanpa kehilangan arah.',
      'The organization\'s nimbleness in sensing change and responding fast without losing direction.'),
    why: B('Dalam lingkungan yang tak pasti, kecepatan beradaptasi mengalahkan ukuran; agility menjaga pohon tetap tumbuh saat angin berubah.',
      'In uncertain environments, speed of adaptation beats size; agility keeps the tree growing as the winds change.'),
    refs: ['HCBoK', 'HCAF'], related: ['Organization Development', 'Capability', 'Innovation'],
    metric: B('Sudut analitik: kecepatan adopsi perubahan, waktu re-deploy talenta, dan indeks kesiapan perubahan.',
      'Analytics angle: change-adoption speed, talent re-deployment time, and change-readiness index.'),
  },

  // ---------- BUAH: 8 outcome bisnis ----------
  'Productivity': {
    def: B('Nilai keluaran per satuan masukan tenaga kerja — seberapa efektif energi manusia diubah menjadi hasil.',
      'Output value per unit of workforce input — how effectively human energy is turned into results.'),
    why: B('Produktivitas adalah buah paling langsung dari Human Capital; ia menghubungkan kapabilitas dengan profitabilitas.',
      'Productivity is the most direct fruit of Human Capital; it connects capability to profitability.'),
    refs: ['HCBoK', 'PABoK'], related: ['Performance', 'Capability', 'Enterprise Value'],
    metric: B('Sudut analitik: revenue per FTE, human-capital ROI (HCROI), dan driver produktivitas.',
      'Analytics angle: revenue per FTE, human-capital ROI (HCROI), and productivity drivers.'),
  },
  'Business Growth': {
    def: B('Pertumbuhan pendapatan, pasar, dan skala yang berkelanjutan.',
      'Sustainable growth of revenue, market, and scale.'),
    why: B('Pertumbuhan dibatasi oleh kapasitas talenta; tanpa orang dan kapabilitas yang tepat, peluang tidak dapat dieksekusi.',
      'Growth is bounded by talent capacity; without the right people and capabilities, opportunity cannot be executed.'),
    refs: ['HCBoK', 'PABoK'], related: ['Talent Acquisition', 'Innovation', 'Enterprise Value'],
    metric: B('Sudut analitik: keselarasan rencana pertumbuhan dengan kapasitas talenta dan kesiapan skill pasar baru.',
      'Analytics angle: alignment of growth plans with talent capacity and skill readiness for new markets.'),
  },
  'Profitability': {
    def: B('Kemampuan menghasilkan laba yang sehat dan berkelanjutan.',
      'The ability to generate healthy, sustainable profit.'),
    why: B('Manusia adalah biaya terbesar sekaligus sumber nilai terbesar; mengelola keduanya menentukan margin.',
      'People are the largest cost and the largest source of value; managing both determines margin.'),
    refs: ['HCBoK', 'PABoK'], related: ['Productivity', 'Rewards', 'Enterprise Value'],
    metric: B('Sudut analitik: rasio biaya SDM terhadap pendapatan, laba per FTE, dan efisiensi belanja talenta.',
      'Analytics angle: HC cost-to-revenue ratio, profit per FTE, and talent-spend efficiency.'),
  },
  'Customer Satisfaction': {
    def: B('Kepuasan pelanggan sebagai buah dari layanan manusia yang berkualitas.',
      'Customer satisfaction as the fruit of quality human service.'),
    why: B('Rantai laba-layanan: karyawan yang terikat menciptakan pelanggan yang puas, yang menciptakan nilai bisnis.',
      'The service-profit chain: engaged employees create satisfied customers, who create business value.'),
    refs: ['HCBoK', 'PABoK'], related: ['Engagement', 'Culture', 'Productivity'],
    metric: B('Sudut analitik: korelasi engagement–CSAT/NPS, dan dampak turnover garis depan pada pengalaman pelanggan.',
      'Analytics angle: engagement–CSAT/NPS correlation, and the impact of frontline turnover on customer experience.'),
  },
  'Sustainability': {
    def: B('Kemampuan organisasi bertahan dan menciptakan nilai dalam jangka panjang, secara ekonomi, sosial, dan lingkungan.',
      'The organization\'s ability to endure and create value over the long term — economically, socially, and environmentally.'),
    why: B('Keberlanjutan menuntut tenaga kerja yang sehat, beretensi, dan siap masa depan; modal manusia adalah fondasinya.',
      'Sustainability demands a healthy, retained, future-ready workforce; human capital is its foundation.'),
    refs: ['HCBoK', 'PABoK'], related: ['ESG', 'HSE', 'Culture'],
    metric: B('Sudut analitik: kesiapan skill masa depan, kesehatan retensi, dan indikator keberlanjutan tenaga kerja.',
      'Analytics angle: future-skill readiness, retention health, and workforce sustainability indicators.'),
  },
  'ESG': {
    def: B('Environmental, Social & Governance — kinerja organisasi pada dimensi lingkungan, sosial, dan tata kelola.',
      'Environmental, Social & Governance — organizational performance on environmental, social, and governance dimensions.'),
    why: B('Dimensi "S" dan "G" sebagian besar adalah isu Human Capital: keberagaman, keselamatan, keadilan, dan etika data.',
      'The "S" and "G" dimensions are largely Human Capital issues: diversity, safety, fairness, and data ethics.'),
    refs: ['HCBoK', 'PABoK'], related: ['Sustainability', 'Governance', 'Law & Ethics'],
    metric: B('Sudut analitik: metrik DEI, keselamatan (HSE), pay equity, dan pelaporan sosial berbasis data.',
      'Analytics angle: DEI metrics, safety (HSE), pay equity, and data-driven social reporting.'),
  },
  'Shareholder Value': {
    def: B('Nilai yang tercipta bagi pemegang saham — puncak dari seluruh buah bisnis.',
      'The value created for shareholders — the summit of all business fruit.'),
    why: B('Riset menunjukkan praktik Human Capital yang unggul berkorelasi dengan imbal hasil pemegang saham yang lebih tinggi.',
      'Research shows superior Human Capital practices correlate with higher shareholder returns.'),
    refs: ['HCBoK', 'PABoK'], related: ['Enterprise Value', 'Profitability', 'Productivity'],
    metric: B('Sudut analitik: human-capital value added (HCVA), korelasi praktik HC dengan TSR, dan pelaporan modal manusia.',
      'Analytics angle: human-capital value added (HCVA), correlation of HC practices with TSR, and human-capital reporting.'),
  },
};

// resolusi alias & pencarian entri
export function getKnowledge(name) {
  let k = KNOWLEDGE[name];
  if (k && k.alias) k = KNOWLEDGE[k.alias];
  return k || null;
}
