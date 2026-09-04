Berikut adalah file dokumen **prd.md** yang telah menggabungkan seluruh hasil analisis, pembersihan kode warisan, strategi multi-kota, optimasi AEO/GEO blog, komponen interaktif konversi tinggi, hingga standar teknis serah terima untuk tim **Anti Gravity**.

Markdown  
\# PRODUCT REQUIREMENT DOCUMENT (PRD)

| Informasi Proyek | Rincian Spesifikasi |  
| :--- | :--- |  
| **\*\*Nama Proyek\*\*** | Platform Pengadaan B2B & Katalog Digital Seminarkits.id |  
| **\*\*Domain Resmi\*\*** | \`https://seminarkits.id\` |  
| **\*\*Pusat Operasional & Pabrik\*\*** | Perum Bulan Terang Utama, Kota Malang, Jawa Timur (Kodepos 65132\) |  
| **\*\*Arsitektur Web\*\*** | Modular HTML5, Bootstrap 5, Centralized CSS, Vanilla JavaScript |  
| **\*\*Target Pengguna\*\*** | Tim Procurement Perusahaan, Pejabat Pembuat Komitmen (PPK) Instansi/BUMN, Panitia Acara Kampus, Event Organizer (EO) |  
| **\*\*Tujuan Bisnis\*\*** | Peringkat \#1 SEO Multi-Kota, Dominasi AI Overview (AEO/GEO), Konversi Instan WhatsApp Sales, dan Otoritas Vendor PKP Resmi |  
| **\*\*Penerima Dokumen\*\*** | Tim Pengembang & Tim Desain UI/UX (Anti Gravity) |

\---

\#\# 1\. Ringkasan Eksekutif & Value Proposition

Seminarkits.id adalah platform vendor manufaktur dan pengadaan *\*seminar kit custom\**, *\*merchandise promosi\**, dan *\*corporate gift\** B2B dengan pusat produksi terpadu di **\*\*Kota Malang, Jawa Timur\*\***, yang melayani pengiriman ke seluruh kota strategis di Indonesia.

\#\#\# Core Value Proposition (Pilar Pembeda Pasar):  
1\. **\*\*Harga Produsen Tangan Pertama (Direct Manufacturer):\*\*** Efisiensi biaya dari workshop sendiri di Malang tanpa markup perantara reseller.  
2\. **\*\*Kepatuhan Legalitas & Perpajakan B2B:\*\*** Penerbitan Faktur Pajak PPN/PPh resmi, kepemilikan NIB/SIUP aktif, dan kesiapan administrasi tender/LPSE/e-Katalog/SiPLah.  
3\. **\*\*Proteksi Jadwal Acara (*\*SLA Deadline Security\**):\*\*** Garansi barang tiba di alamat pemesan minimal H-3 sebelum jadwal kegiatan dimulai.  
4\. **\*\*Distribusi Logistik Terintegrasi:\*\*** Akses kargo darat Tol Trans-Jawa, kargo kereta (KALOG), dan kargo udara via Bandara Abdulrachman Saleh / Bandara Juanda.

\---

\#\# 2\. Pembersihan Kode Warisan (*\*Legacy Cleanup Tasks\**)

Anti Gravity **\*\*wajib menyelesaikan 4 perbaikan struktural\*\*** pada kode sumber saat ini sebelum memulai pengembangan modul baru:

\[ KODE SUMBER LAMA (KURIKULUM/MEDIA) \] ──► \[ KODE SUMBER BARU (MANUFAKTUR B2B) \]

> 1. Hapus referensi jurnalistik & Dewan Pers 1\. Pasang spesifikasi fisik produk B2B  
> 2. Hapus duplikasi section \#contact & \#faq 2\. Terapkan 1 ID unik per halaman  
> 3. Perbaiki koordinat GEO tag ke Malang 3\. Sinkronkan latitude/longitude Malang  
> 4. Sinkronkan array file di nav script 4\. Arahkan active class ke halaman produk

1\. \*\*Pembersihan Konten (Content Cleaning):\*\*  
   \* Hapus seluruh teks terkait pelatihan jurnalistik, coding AI, Dewan Pers, dan referensi Radar Kediri.  
   \* Ganti deskripsi kartu layanan \*Tumbler, Pulpen, Hampers\* murni dengan spesifikasi fisik barang (Stainless SUS304, grafir laser, sablon rotary, hardbox beludru).  
2\. \*\*Eliminasi Duplikasi ID HTML:\*\*  
   \* Hapus section kembar \`\#contact\` dan \`\#faq\` yang terduplikasi pada dokumen \`index.html\`.  
3\. \*\*Koreksi Data Geografis (Geo Tags):\*\*  
   \* Sesuaikan meta geo tag pada \`\<head\>\` dengan lokasi Malang:  
     \* \`geo.region\`: \`ID-JI\`  
     \* \`geo.placename\`: \`Kota Malang\`  
     \* \`geo.position\` & \`ICBM\`: \`-7.9818, 112.6685\`  
4\. \*\*Pembaruan Script Navigasi:\*\*  
   \* Perbarui array \`servicePages\` di JavaScript bawah agar membaca slug produk baru:  
     \`\['seminar-kit', 'tumbler-custom', 'lanyard-custom', 'agenda-custom', 'pulpen-promosi', 'hampers-corporate', 'merchandise-perusahaan'\]\`.

\---

\#\# 3\. Matriks SEO & Logistik 10 Kota Target

Setiap halaman kota wajib memuat data logistik spesifik dari \*\*Kota Malang\*\* guna mencegah penalti duplikasi konten dari Google (\*Doorway Pages\*):

| Kota Target | URL Slug | Karakteristik Pasar | Estimasi Distribusi dari Malang | Ekspedisi Rekanan Unggulan |  
| :--- | :--- | :--- | :--- | :--- |  
| \*\*Malang (Hub Produksi)\*\* | \`/seminar-kit-malang.html\` | Kampus, Diklat Pemda, Wisuda | \*Same-Day\* / Instan (Kurir Internal / GoSend) | Internal Fleet, J\&T Cargo |  
| \*\*Surabaya\*\* | \`/seminar-kit-surabaya.html\` | Korporat, BUMN, MICE Jawa Timur | 1 Hari / \*Next-Day\* via Tol Malang-Surabaya | Baraka, Laris Kargo, Titipan Kilat |  
| \*\*Semarang\*\* | \`/seminar-kit-semarang.html\` | Kantor Dinas Provinsi, Kawasan Industri | 1–2 Hari via Tol Trans-Jawa / KALOG | KALOG, Baraka, Indah Logistik |  
| \*\*Yogyakarta / Jogja\*\* | \`/seminar-kit-yogyakarta.html\` | Kampus Nasional, Simposium Akademik | 1–2 Hari via Kargo Kereta / Truk Darat | KALOG, Ki8 Express, J\&T Cargo |  
| \*\*Bandung\*\* | \`/seminar-kit-bandung.html\` | Event Kreatif, Perguruan Tinggi, BUMN | 1–2 Hari via Kargo Darat Cepat / Kereta | KALOG, Indah Cargo, Baraka |  
| \*\*Jakarta\*\* | \`/seminar-kit-jakarta.html\` | Kantor Pusat BUMN, Kementerian, Korporasi | 1–2 Hari via Tol Trans-Jawa / Kereta | Baraka Sarana Tama, KALOG, Indah Logistik |  
| \*\*Denpasar / Bali\*\* | \`/seminar-kit-denpasar-bali.html\` | MICE Internasional, Konferensi Pariwisata | 1–2 Hari via Truk Box Lintas Jawa-Bali | Bali Prima, Tiara Mas, Indah Cargo |  
| \*\*Balikpapan\*\* | \`/seminar-kit-balikpapan.html\` | Sektor Migas, Proyek IKN, Konstruksi | Udara: 1–2 Hari \\| Laut: 3–4 Hari | Lion Parcel Cargo, Garuda Cargo, Pelni |  
| \*\*Makassar\*\* | \`/seminar-kit-makassar.html\` | Hub Bisnis Indonesia Timur, Universitas | Udara: 1–2 Hari \\| Laut: 3–5 Hari | Lion Parcel Cargo, Indah Cargo, Kargo Kapal Cepat |  
| \*\*Palembang\*\* | \`/seminar-kit-palembang.html\` | BUMN Pupuk/Tambang, Instansi Sumatera | Darat: 2–3 Hari via Tol Trans-Sumatera | Indah Logistik, Dakota, J\&T Cargo |

\---

\#\# 4\. Segmentasi Halaman Industri (7 Kategori B2B)

                      \[ Seminarkits.id \]  
                              │  
┌──────────────┬──────────────┼──────────────┬──────────────┐  
▼              ▼              ▼              ▼              ▼

\[ BUMN/Dinas \] \[ Korporat \] \[ Kampus/Sekolah \] \[ Olahraga \] \[ Medis & EO \]

* Faktur Pajak \- Welcome Kit \- Tiering Grosir \- Dry-Fit \- White-label  
* Legalitas \- Hardbox Box \- Deadline Kilat \- Medali Logam- Standar Higienis

1\. \*\*Instansi Pemerintah & BUMN (\`/pengadaan-seminar-kit-instansi.html\`):\*\* Ransel laptop bordir, agenda kulit A5, pen metal laser, lanyard kulit. Menampilkan badge PKP, opsi SPK/termin, kompatibilitas LPSE/SiPLah.  
2\. \*\*Perusahaan Swasta & Startup (\`/corporate-gift-perusahaan.html\`):\*\* \*Welcome Kit Box\*, tumbler SUS304 LED suhu, wireless powerbank, polo bordir komputer. Fitur \*Free 3D Mockup\* dan packaging eksklusif.  
3\. \*\*Institusi Pendidikan: Sekolah, Kampus & Yayasan (\`/seminar-kit-kampus-wisuda.html\`):\*\* Tas blacu/spunbond, blocknote spiral, lanyard tisu printing, plakat akrilik. Tabel harga grosir bertingkat (100, 500, 1.000+ pcs).  
4\. \*\*Event Olahraga & Komunitas Luar Ruang (\`/merchandise-event-olahraga.html\`):\*\* Jersey dry-fit sublimasi, medali logam/akrilik, tas serut water-resistant, botol shaker, handuk quick-dry.  
5\. \*\*Sektor Medis, RS & Simposium Ilmiah (\`/seminar-kit-simposium-kedokteran.html\`):\*\* Tas selempang semi-formal, pouch kulit instrumen, tumbler termos vakum, penlight metal, sertifikat folder beludru. Standar kemasan higienis.  
6\. \*\*Event Organizer (EO) & White-label Partner (\`/mitra-vendor-event-organizer.html\`):\*\* Sub-kontrak merchandise event klien pihak ketiga dengan diskon khusus mitra dan sistem \*blind dropshipping\*.  
7\. \*\*Organisasi Kemasyarakatan, LSM & Keagamaan (\`/souvenir-rakernas-ormas.html\`):\*\* Tas serbaguna, buku agenda rakernas, rompi lapangan custom, souvenir muktamar skala ribuan unit.

\---

\#\# 5\. Spesifikasi Komponen Konversi & Interaktivitas UI

\#\#\# A. Dynamic WhatsApp Link Generator (Lead Attribution Tracking)  
Seluruh tombol CTA WhatsApp wajib menangkap konteks halaman dan kota asal calon klien secara otomatis:

\`\`\`javascript  
// Lokasi File: assets/js/lead-tracking.js  
document.addEventListener('DOMContentLoaded', () \=\> {  
  const SALES\_WA\_NUMBER \= '6288989643555'; // Official WA Seminarkits.id

  document.querySelectorAll('.js-wa-trigger').forEach(btn \=\> {  
    btn.addEventListener('click', (e) \=\> {  
      e.preventDefault();  
      const pageTitle \= document.title;  
      const targetCity \= btn.getAttribute('data-city') || 'Nasional';  
      const targetProduct \= btn.getAttribute('data-product') || 'Seminar Kit General';  
        
      const textMessage \= \`Halo Tim Sales Seminarkits.id, saya ingin konsultasi & minta penawaran harga.\\n\\n\` \+  
                          \`• Wilayah Pengiriman: \*${targetCity}\*\\n\` \+  
                          \`• Minat Produk: \*${targetProduct}\*\\n\` \+  
                          \`• Halaman Rujukan: ${window.location.href}\\n\\n\` \+  
                          \`Mohon kirimkan katalog PDF, rincian harga, dan estimasi waktu produksi. Terima kasih.\`;  
                            
      const waUrl \= \`\[https://api.whatsapp.com/send?phone=$\](https://api.whatsapp.com/send?phone=$){SALES\_WA\_NUMBER}\&text=${encodeURIComponent(textMessage)}\`;  
      window.open(waUrl, '\_blank');  
    });  
  });  
});

### **B. Interactive Budget & MOQ Estimator**

Widget interaktif untuk menghitung simulasi harga dan meningkatkan *dwell time* pengunjung:

HTML  
\<\!-- Komponen Budget Estimator \--\>  
\<div class\="card border-0 shadow-sm rounded-4 p-4 my-4 bg-light"\>  
  \<h5 class\="fw-bold text-dark mb-3"\>\<i class\="bi bi-calculator me-2 text-primary"\>\</i\>Simulasi Anggaran Seminar Kit\</h5\>  
  \<div class\="row g-3"\>  
    \<div class\="col-md-5"\>  
      \<label class\="form-label small fw-semibold"\>Pilih Kategori Paket:\</label\>  
      \<select class\="form-select" id\="calcPackage"\>  
        \<option value\="25000" data-name\="Hemat (Spunbond \+ Pen \+ Blocknote)"\>Paket Hemat \- Rp 25.000/set\</option\>  
        \<option value\="65000" data-name\="Standar (Tas Kanvas \+ Tumbler \+ Lanyard)" selected\>Paket Standar \- Rp 65.000/set\</option\>  
        \<option value\="150000" data-name\="Premium (Ransel \+ Agenda Kulit \+ Tumbler SUS304 \+ Pen Laser)"\>Paket Premium \- Rp 150.000/set\</option\>  
      \</select\>  
    \</div\>  
    \<div class\="col-md-4"\>  
      \<label class\="form-label small fw-semibold"\>Jumlah Pesanan (Qty):\</label\>  
      \<input type\="number" class\="form-control" id\="calcQty" value\="100" min\="50" step\="25"\>  
    \</div\>  
    \<div class\="col-md-3 d-flex flex-column justify-content-end"\>  
      \<button class\="btn btn-primary fw-semibold" id\="btnRunCalc"\>Hitung Estimasi\</button\>  
    \</div\>  
  \</div\>  
  \<hr class\="my-3"\>  
  \<div class\="d-flex justify-content-between align-items-center flex-wrap gap-2" id\="calcResultBox"\>  
    \<div\>  
      \<span class\="text-muted small d-block"\>Perkiraan Total Anggaran:\</span\>  
      \<h4 class\="fw-bold text-success mb-0" id\="calcTotalDisplay"\>Rp 6.500.000\</h4\>  
    \</div\>  
    \<a href\="\#" class\="btn btn-success fw-bold px-4 js-wa-trigger" id\="calcWaCta" data-city\="Nasional" data-product\="Kalkulator Estimasi"\>  
      \<i class\="bi bi-whatsapp me-2"\>\</i\>Kunci Harga via WhatsApp  
    \</a\>  
  \</div\>  
\</div\>

\<script\>  
document.getElementById('btnRunCalc')?.addEventListener('click', () \=\> {  
  const basePrice \= parseInt(document.getElementById('calcPackage').value);  
  const qty \= parseInt(document.getElementById('calcQty').value) || 50;  
    
  // Tiering discount logic  
  let discount \= 1.0;  
  if (qty \>= 500) discount \= 0.90; // Diskon 10%  
  else if (qty \>= 200) discount \= 0.95; // Diskon 5%  
    
  const totalPrice \= Math.round(basePrice \* qty \* discount);  
  document.getElementById('calcTotalDisplay').innerText \= 'Rp ' \+ totalPrice.toLocaleString('id-ID');  
});  
\</script\>

### **C. Sticky Mobile Bottom Conversion Bar**

Tambahkan bar navigasi bawah khusus layar mobile (d-lg-none):

HTML  
\<div class\="fixed-bottom d-lg-none bg-white p-2 border-top shadow-lg d-flex gap-2 z-3"\>  
  \<a href\="assets/pdf/katalog-seminarkits-2026.pdf" class\="btn btn-outline-dark flex-fill btn-sm py-2 fw-semibold"\>  
    \<i class\="bi bi-file-earmark-pdf me-1"\>\</i\> Unduh Katalog  
  \</a\>  
  \<a href\="\#" class\="btn btn-success flex-fill btn-sm py-2 fw-bold js-wa-trigger" data-intent\="Sticky Mobile Bar"\>  
    \<i class\="bi bi-whatsapp me-1"\>\</i\> Tanya Harga Admin  
  \</a\>  
\</div\>

### **D. Halaman Legalitas & Trust Badges (/legalitas.html)**

Wajib dibuat untuk memfasilitasi verifikasi vendor B2B/pemerintah:

* Menampilkan NPWP Perusahaan, NIB resmi, dan Surat Pengukuhan Pengusaha Kena Pajak (PKP).  
* Rekening Bank operasional resmi atas nama Perusahaan.  
* Prosedur jaminan retur barang jika terjadi cacat produksi (*Zero Defect SLA*).

## **6\. Standar Konten Master Blog (SEO, AEO & GEO)**

Untuk memastikan setiap artikel blog dikutip oleh mesin pencari generatif (Google AI Overview, Perplexity, Gemini, ChatGPT Search):

\[ Heading H2: Pertanyaan Inti / Topik \]  
                  │  
                  ▼  
\[ BLUF Box: 40-50 Kata Jawaban Padat & Tepat \] ──► AI Overview / Featured Snippet  
                  │  
                  ▼  
\[ Tabel Spesifikasi / Komparasi / Poin Step \]  ──► Generative AI Citation (GEO)

### **Format Head Master Blog (blog-template.html):**

HTML  
\<head\>  
  \<meta charset\="utf-8"\>  
  \<meta content\="width=device-width, initial-scale=1.0" name\="viewport"\>  
  \<title\>{{article\_title}} | Seminarkits.id\</title\>  
  \<meta name\="description" content\="{{article\_meta\_description}}"\>  
  \<link rel\="canonical" href\="\[https://seminarkits.id/\](https://seminarkits.id/){{article\_slug}}.html"\>  
  \<meta name\="robots" content\="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"\>

  \<\!-- GEO Meta Tags (Malang Production Base) \--\>  
  \<meta name\="geo.region" content\="ID-JI"\>  
  \<meta name\="geo.placename" content\="Kota Malang"\>  
  \<meta name\="geo.position" content\="-7.9818;112.6685"\>  
  \<meta name\="ICBM" content\="-7.9818, 112.6685"\>

  \<\!-- Open Graph \--\>  
  \<meta property\="og:locale" content\="id\_ID"\>  
  \<meta property\="og:type" content\="article"\>  
  \<meta property\="og:title" content\="{{article\_title}}"\>  
  \<meta property\="og:description" content\="{{article\_meta\_description}}"\>  
  \<meta property\="og:url" content\="\[https://seminarkits.id/\](https://seminarkits.id/){{article\_slug}}.html"\>  
  \<meta property\="og:site\_name" content\="Seminarkits.id"\>  
  \<meta property\="og:image" content\="\[https://seminarkits.id/assets/img/blog/\](https://seminarkits.id/assets/img/blog/){{article\_image}}.webp"\>  
  \<meta property\="og:image:width" content\="1200"\>  
  \<meta property\="og:image:height" content\="630"\>  
  \<meta name\="twitter:card" content\="summary\_large\_image"\>

  \<\!-- Schema Graph: Article \+ BreadcrumbList \+ FAQPage \--\>  
  \<script type\="application/ld+json"\>  
  {  
    "@context": "\[https://schema.org\](https://schema.org)",  
    "@graph": \[  
      {  
        "@type": "Article",  
        "@id": "\[https://seminarkits.id/\](https://seminarkits.id/){{article\_slug}}.html\#article",  
        "headline": "{{article\_title}}",  
        "description": "{{article\_meta\_description}}",  
        "image": "\[https://seminarkits.id/assets/img/blog/\](https://seminarkits.id/assets/img/blog/){{article\_image}}.webp",  
        "datePublished": "{{publish\_date}}",  
        "dateModified": "{{modified\_date}}",  
        "author": {  
          "@type": "Person",  
          "name": "Tim Procurement Seminarkits.id",  
          "jobTitle": "B2B Merchandise Specialist"  
        },  
        "publisher": {  
          "@type": "Organization",  
          "name": "Seminarkits.id",  
          "logo": {  
            "@type": "ImageObject",  
            "url": "\[https://seminarkits.id/assets/img/logo.webp\](https://seminarkits.id/assets/img/logo.webp)"  
          }  
        }  
      },  
      {  
        "@type": "BreadcrumbList",  
        "@id": "\[https://seminarkits.id/\](https://seminarkits.id/){{article\_slug}}.html\#breadcrumb",  
        "itemListElement": \[  
          { "@type": "ListItem", "position": 1, "name": "Beranda", "item": "\[https://seminarkits.id/\](https://seminarkits.id/)" },  
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "\[https://seminarkits.id/blog.html\](https://seminarkits.id/blog.html)" },  
          { "@type": "ListItem", "position": 3, "name": "{{article\_title}}", "item": "\[https://seminarkits.id/\](https://seminarkits.id/){{article\_slug}}.html" }  
        \]  
      },  
      {  
        "@type": "FAQPage",  
        "@id": "\[https://seminarkits.id/\](https://seminarkits.id/){{article\_slug}}.html\#faq",  
        "mainEntity": \[  
          {  
            "@type": "Question",  
            "name": "{{faq\_question\_1}}",  
            "acceptedAnswer": {  
              "@type": "Answer",  
              "text": "{{faq\_answer\_1}}"  
            }  
          }  
        \]  
      }  
    \]  
  }  
  \</script\>  
\</head\>

## **7\. SEO Teknis, Schema Master & Sitemap Hierarchy**

### **A. Master Schema.org LocalBusiness (Head Layout Beranda & Template Utama)**

HTML  
\<script type\="application/ld+json"\>  
{  
  "@context": "\[https://schema.org\](https://schema.org)",  
  "@type": "LocalBusiness",  
  "name": "Seminarkits.id \- Vendor Seminar Kit Custom",  
  "image": "\[https://seminarkits.id/assets/img/index/Seminar-Kits-Lengkap.webp\](https://seminarkits.id/assets/img/index/Seminar-Kits-Lengkap.webp)",  
  "@id": "\[https://seminarkits.id/\#localbusiness\](https://seminarkits.id/\#localbusiness)",  
  "url": "\[https://seminarkits.id/\](https://seminarkits.id/)",  
  "telephone": "+6288989643555",  
  "email": "officialseminarkits@gmail.com",  
  "priceRange": "Rp 25.000 \- Rp 350.000",  
  "address": {  
    "@type": "PostalAddress",  
    "streetAddress": "Perum Bulan Terang Utama",  
    "addressLocality": "Kota Malang",  
    "addressRegion": "Jawa Timur",  
    "postalCode": "65132",  
    "addressCountry": "ID"  
  },  
  "geo": {  
    "@type": "GeoCoordinates",  
    "latitude": \-7.9818,  
    "longitude": 112.6685  
  },  
  "areaServed": \[  
    { "@type": "City", "name": "Kota Malang" },  
    { "@type": "City", "name": "Surabaya" },  
    { "@type": "City", "name": "Semarang" },  
    { "@type": "City", "name": "Yogyakarta" },  
    { "@type": "City", "name": "Bandung" },  
    { "@type": "City", "name": "Jakarta" },  
    { "@type": "City", "name": "Denpasar" },  
    { "@type": "City", "name": "Balikpapan" },  
    { "@type": "City", "name": "Makassar" },  
    { "@type": "City", "name": "Palembang" }  
  \],  
  "openingHoursSpecification": {  
    "@type": "OpeningHoursSpecification",  
    "dayOfWeek": \["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"\],  
    "opens": "08:00",  
    "closes": "17:00"  
  }  
}  
\</script\>

### **B. Aturan Penamaan Gambar (Image SEO Guidelines)**

Dilarang menggunakan nama file template acak. Seluruh gambar wajib format .webp dengan penamaan semantik:

* Format Benar: paket-seminar-kit-eksklusif-malang.webp, tas-ransel-seminar-bumn-jakarta.webp, tumbler-stainless-sus304-grafir.webp.  
* Format Salah: illustration-15.webp, person-m-9.webp, Header-RK-Institute.webp.

### **C. Struktur Prioritas sitemap.xml**

* **Priority 1.0:** Beranda (/)  
* **Priority 0.9:** Kategori Produk Utama (/seminar-kit.html, /tumbler-custom.html, /lanyard-custom.html, dll.)  
* **Priority 0.8:** 10 Halaman Multi-Kota Target (/seminar-kit-jakarta.html, /seminar-kit-surabaya.html, dll.)  
* **Priority 0.7:** 7 Halaman Segmentasi Industri (/pengadaan-seminar-kit-instansi.html, dll.)  
* **Priority 0.6:** Halaman Panduan & Artikel Blog (/blog-cara-membuat-rab-pengadaan.html, dll.)

## **8\. Kriteria Penerimaan Serah Terima (*Definition of Done*)**

| Modul Pekerjaan | Indikator Keberhasilan (Anti Gravity Acceptance) |
| :---- | :---- |
| **1\. Kebersihan Kode** | File index.html tervalidasi W3C tanpa duplikasi ID \#contact / \#faq, bersih dari seluruh teks jurnalistik/pelatihan. |
| **2\. Modul Multi-Kota (10 Kota)** | Tersedia 10 file halaman kota aktif dengan data logistik kargo unik dari Malang. |
| **3\. Modul Industri (7 Kategori)** | Tersedia 7 landing page industri dengan spesifikasi paket dan portofolio yang relevan. |
| **4\. Integrasi Lead Tracking** | Seluruh tombol WhatsApp di web meneruskan parameter asal halaman & kota ke admin sales secara dinamis. |
| **5\. Validasi Schema SEO** | JSON-LD LocalBusiness, FAQPage, dan Article 100% lolos uji tanpa error di Google Rich Results Test. |
| **6\. Skor Performa Core Web Vitals** | Google PageSpeed Insights: Mobile minimal **85+**, Desktop minimal **95+**. |

