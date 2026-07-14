# 🌳 Pohon Ilmu Human Capital — The Knowledge Tree

Aplikasi web interaktif **3D** untuk menggambarkan dan mengajarkan *Human Capital Knowledge Tree* —
memetakan HR bukan sebagai kumpulan fungsi, melainkan sebagai **satu disiplin ilmu**: dari akar
(ilmu dasar) hingga buah (nilai bisnis), sebagai fondasi *People Analytics Body of Knowledge (PABoK)*.

> Sumber konten: dokumen "Pohon Ilmu Human Capital" · Divisi Operasional SDM

## ✨ Fitur

- **Pohon 3D prosedural** (Three.js) — akar, batang + kambium bercahaya yang "mengalirkan pertumbuhan",
  15 cabang domain, kanopi ratusan daun, 8 buah emas, dan **aliran partikel People Analytics · AI · Data**
  yang mengalir dari akar hingga buah.
- **Animasi pohon tumbuh** — saat masuk, pohon tumbuh dari akar → batang → cabang → daun → buah
  (bisa diulang lewat menu *Tumbuhkan Ulang Pohon*).
- **Mode Penjelajahan (tur berpemandu)** — 7 bab dengan kamera sinematik + **narasi suara**
  (tombol pengeras suara, Web Speech API, offline).
- **Ranting interaktif** — klik cabang (mis. *Performance*) → *Buka Ranting* → subdomain
  (KPI, OKR, Calibration…) mekar dari ujung cabang.
- **Jalur Nilai** — klik sebuah buah (mis. *Profitability*) → *Lihat Jalur Nilai* → jalur emas menyala
  dari akar → batang → cabang → buah tersebut.
- **Kuis Pemahaman** — 12 soal (tebak lapisan + pilihan ganda), jawaban benar menyorot lapisan di pohon;
  skor terbaik tersimpan di perangkat (`localStorage`, tetap tanpa database).
- **Simulasi Investasi SDM** — geser slider: investasi turun → daun menguning, buah rontok,
  aliran kecerdasan melemah.
- **Glosarium & pencarian** — cari istilah apa pun (mis. "OKR") → kamera terbang ke node-nya.
- **Model Ilmiah & Peta Jalan** — Model Tiga Dimensi HC + peta jalan HCBoK/HCOS/IHCMIS/PABoK.
- **Unduh Poster (PNG)** — ekspor tampilan pohon untuk slide presentasi.
- **Dwibahasa** — Indonesia / English (menu → English).
- **Mode kiosk** — `?kiosk=1`: tur berjalan otomatis berulang (untuk layar lobby/townhall).
- **Deep-link untuk mengajar** — `?lapisan=akar|batang|cabang|daun|buah|intelligence`.
- **PWA penuh** — dapat di-install ke perangkat, berjalan **100% offline**, tanpa database, tanpa CDN.
- Responsif (desktop & ponsel), menghormati `prefers-reduced-motion`.

## 🚀 Menjalankan

> ⚠️ **Jangan buka `index.html` dengan double-click** — browser memblokir ES Modules dari
> `file://`, sehingga tombol tidak akan berfungsi. Aplikasi harus dilayani lewat server lokal.

**Cara termudah (macOS):** double-click **`Jalankan Aplikasi.command`** — server lokal
dan browser terbuka otomatis.

Atau manual dengan server statis apa pun:

```bash
cd hc-knowledge-tree
python3 -m http.server 8080
# buka http://localhost:8080
```

atau `npx serve`, atau unggah ke Netlify / Vercel / GitHub Pages (butuh HTTPS agar PWA bisa di-install).

## 📁 Struktur

```
index.html            — halaman tunggal + import map
css/style.css         — gaya UI (hutan malam · emas · Fraunces + Plus Jakarta Sans)
js/content.js         — seluruh konten dari dokumen (6 lapisan + 7 bab tur)
js/tree.js            — pembangun pohon 3D prosedural
js/main.js            — scene, kamera, interaksi, UI
vendor/               — Three.js + OrbitControls (lokal, offline)
fonts/                — woff2 lokal
icons/                — ikon PWA (SVG + PNG + maskable)
manifest.webmanifest  — manifest PWA
sw.js                 — service worker (cache-first, offline penuh)
```

Tidak ada proses build, tidak ada dependensi eksternal saat runtime.
