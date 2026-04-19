/* --- KONFIGURASI SWIPER COVERFLOW --- */

const swiper = new Swiper('.mySwiper', {
    // Memberikan efek Coverflow (3D miring)
    effect: 'coverflow',
    grabCursor: true, // Kursor berubah jadi tangan saat di atas gambar
    centeredSlides: true, // Slide aktif selalu di tengah
    slidesPerView: 'auto', // Lebar slide otomatis mengikuti CSS (300px)
    loop: true, // Bisa digeser terus menerus tanpa habis
    
    // Pengaturan Autoplay (Geser otomatis)
    autoplay: {
        delay: 3000, // Geser setiap 3 detik
        disableOnInteraction: false, // Tetap autoplay meski sudah disentuh
    },

    // Detail efek Coverflow
    coverflowEffect: {
        rotate: 35, // Kemiringan slide samping (derajat)
        stretch: 0, // Jarak antar slide
        depth: 100, // Kedalaman efek 3D
        modifier: 1, // Perkalian efek
        slideShadows: true, // Memberi bayangan pada slide samping
    },

    // Konfigurasi Titik Navigasi (Pagination)
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Titik bisa diklik untuk pindah slide
    },

    // Navigasi Panah (Opsional, jika kamu ingin menambahkannya nanti)
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Agar halus saat digeser di HP
    breakpoints: {
        320: {
            coverflowEffect: {
                rotate: 20,
                depth: 50,
            }
        },
        768: {
            coverflowEffect: {
                rotate: 35,
                depth: 100,
            }
        }
    }
});
