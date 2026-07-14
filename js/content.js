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
  },
};

export const LAYER_NAMES = {
  id: { akar: 'Akar', batang: 'Batang', cabang: 'Cabang', daun: 'Daun', buah: 'Buah', intelligence: 'Analytics · AI' },
  en: { akar: 'Roots', batang: 'Trunk', cabang: 'Branches', daun: 'Leaves', buah: 'Fruit', intelligence: 'Analytics · AI' },
};
