# Inifahmi Portfolio — Vite SPA

## Menjalankan lokal
1. Install Node.js versi LTS.
2. Jalankan `npm install`.
3. Jalankan `npm run dev`.

## Build produksi
Jalankan `npm run build`, lalu `npm run preview` untuk menguji hasil build.

Vercel:
- Framework Preset: Other
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

Semua halaman portofolio menggunakan URL:
- `/`
- `/cashier-management`
- `/clothing-store`
- `/course-platform`
- `/crowd-density`
- `/health-guideapp`
- `/student-monitoring`

Catatan keamanan: obfuscation dan minifikasi hanya mempersulit pembacaan kode browser. Jangan letakkan password, token, API key rahasia, atau logika sensitif di frontend.
