# Website Serasan Digital

Website company profile & portofolio untuk **Serasan Digital**. HTML, CSS, dan JavaScript murni — tidak perlu proses build, tinggal upload ke GitHub Pages.

## Struktur folder

```
├── index.html
├── assets/
│   ├── css/styles.css
│   ├── js/main.js
│   └── img/            (logo, favicon, ikon)
└── README.md
```

## Cara upload ke GitHub Pages

1. Buat repository baru di GitHub, misalnya `serasan-digital-web`.
2. Upload seluruh isi folder ini (bukan foldernya, tapi isinya) ke repository tersebut — bisa lewat web GitHub ("Add file → Upload files") atau lewat git:
   ```bash
   git init
   git add .
   git commit -m "Website Serasan Digital"
   git branch -M main
   git remote add origin https://github.com/USERNAME/NAMA-REPO.git
   git push -u origin main
   ```
3. Di repository, buka **Settings → Pages**.
4. Pada **Build and deployment**, pilih source **Deploy from a branch**, branch **main**, folder **/ (root)**, lalu **Save**.
5. Tunggu 1–2 menit, website akan aktif di `https://USERNAME.github.io/NAMA-REPO/`.

## Kustomisasi cepat

- **Warna & tipografi**: token warna dan font ada di bagian atas `assets/css/styles.css` (`:root`).
- **Nomor WhatsApp**: cari `wa.me/6282318730331` di `index.html`, ganti dengan nomor lain jika perlu.
- **Tambah/ubah portofolio**: setiap proyek adalah satu blok `<li class="portfolio-item" data-cat="...">` di `index.html` — salin blok yang ada lalu ubah isinya. `data-cat` menentukan filter kategori (`profile`, `catalog`, atau `system`).
- **Logo**: file logo ada di `assets/img/` (`mark-96.png`, `mark-160.png`, `mark-512.png` untuk simbol, `logo-web.png` untuk lockup lengkap).

## Catatan: preview website di kartu Portofolio

Kartu Fugui Construction, BMArtha Global, Bouqetwe Florist, Archapadma, Unibyte Solutions, dan Gudang Mebel menampilkan **live preview** lewat `<iframe>` yang di-scale kecil. Preview hanya muncul setelah file di-hosting (misalnya di GitHub Pages), dan hanya jika situs tujuan tidak memblokir embedding (header `X-Frame-Options` atau plugin keamanan seperti Wordfence). Kalau ada kartu yang tampil kosong, nonaktifkan opsi framing di situs itu, atau ganti `<iframe>` dengan `<img>` screenshot statis seperti kartu Konsulin, SIKENDALI, dan SISMENKEU (gambar ada di `assets/img/`).
