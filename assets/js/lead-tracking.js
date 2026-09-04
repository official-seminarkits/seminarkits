/**
 * Seminarkits.id — Dynamic WhatsApp Lead Attribution Tracker
 * Lokasi: assets/js/lead-tracking.js
 * PRD Ref: Bagian 5A — Dynamic WhatsApp Link Generator
 *
 * Penggunaan pada tombol HTML:
 *   <a href="#" class="btn btn-success js-wa-trigger"
 *      data-city="Jakarta"
 *      data-product="Seminar Kit Custom">
 *     Hubungi via WhatsApp
 *   </a>
 */

(function () {
  'use strict';

  const SALES_WA_NUMBER = '6288989643555'; // Nomor WA Resmi Seminarkits.id

  document.addEventListener('DOMContentLoaded', function () {
    attachWaTriggers();
  });

  // Tangani juga klik via event delegation (untuk elemen dinamis)
  document.addEventListener('click', function (e) {
    const btn = e.target.closest('.js-wa-trigger');
    if (btn) {
      e.preventDefault();
      openWhatsApp(btn);
    }
  });

  function attachWaTriggers() {
    document.querySelectorAll('.js-wa-trigger').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        openWhatsApp(btn);
      });
    });
  }

  function openWhatsApp(btn) {
    const pageTitle     = document.title || 'Halaman Seminarkits.id';
    const targetCity    = btn.getAttribute('data-city')    || detectCityFromPage() || 'Nasional';
    const targetProduct = btn.getAttribute('data-product') || detectProductFromPage() || 'Seminar Kit General';
    const intentLabel   = btn.getAttribute('data-intent')  || '';

    const textMessage =
      'Halo Tim Sales Seminarkits.id, saya ingin konsultasi & minta penawaran harga.\n\n' +
      '\u2022 Wilayah Pengiriman: *' + targetCity + '*\n' +
      '\u2022 Minat Produk: *' + targetProduct + '*\n' +
      (intentLabel ? '\u2022 Sumber Klik: ' + intentLabel + '\n' : '') +
      '\u2022 Halaman Rujukan: ' + window.location.href + '\n\n' +
      'Mohon kirimkan katalog PDF, rincian harga, dan estimasi waktu produksi. Terima kasih.';

    const waUrl = 'https://api.whatsapp.com/send?phone=' + SALES_WA_NUMBER +
                  '&text=' + encodeURIComponent(textMessage);

    window.open(waUrl, '_blank', 'noopener,noreferrer');

    // Push event ke Google Analytics / GTM jika tersedia
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'wa_click', {
        event_category: 'Lead',
        event_label: targetCity + ' \u2014 ' + targetProduct,
        page_title: pageTitle
      });
    }
    if (typeof window.dataLayer !== 'undefined') {
      window.dataLayer.push({
        event: 'wa_click',
        city: targetCity,
        product: targetProduct,
        page: window.location.href
      });
    }
  }

  /**
   * Auto-deteksi kota dari URL slug
   * contoh: /seminar-kit-jakarta.html => "Jakarta"
   */
  function detectCityFromPage() {
    const slug = window.location.pathname;
    const cityMap = {
      'jakarta'    : 'Jakarta',
      'surabaya'   : 'Surabaya',
      'bandung'    : 'Bandung',
      'jogja'      : 'Yogyakarta',
      'yogyakarta' : 'Yogyakarta',
      'semarang'   : 'Semarang',
      'malang'     : 'Malang',
      'denpasar'   : 'Denpasar (Bali)',
      'bali'       : 'Denpasar (Bali)',
      'makassar'   : 'Makassar',
      'balikpapan' : 'Balikpapan',
      'palembang'  : 'Palembang'
    };
    for (var key in cityMap) {
      if (slug.indexOf(key) !== -1) return cityMap[key];
    }
    return null;
  }

  /**
   * Auto-deteksi produk dari URL slug
   */
  function detectProductFromPage() {
    const slug = window.location.pathname;
    const productMap = {
      'seminar-kit'        : 'Seminar Kit Custom',
      'tumbler-custom'     : 'Tumbler Stainless Custom',
      'lanyard-custom'     : 'Lanyard Custom',
      'agenda-custom'      : 'Agenda / Blocknote Custom',
      'blocknote-custom'   : 'Blocknote Custom',
      'pulpen-promosi'     : 'Pulpen Promosi Custom',
      'hampers-corporate'  : 'Hampers Corporate',
      'hampers-perusahaan' : 'Hampers Perusahaan',
      'corporate-gift'     : 'Corporate Gift Set',
      'merchandise'        : 'Merchandise Custom',
      'goodie-bag'         : 'Goodie Bag Custom',
      'flashdisk-custom'   : 'Flashdisk Custom',
      'kalender-custom'    : 'Kalender Custom',
      'plakat-custom'      : 'Plakat Custom',
      'souvenir-perusahaan': 'Souvenir Perusahaan',
      'vendor-souvenir'    : 'Vendor Souvenir Kantor',
      'supplier-souvenir'  : 'Supplier Souvenir'
    };
    for (var key in productMap) {
      if (slug.indexOf(key) !== -1) return productMap[key];
    }
    return null;
  }

})();
