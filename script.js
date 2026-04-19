// 1. Data Konten Drama
const dramaCollection = [
    {
        title: "Love Between Fairy and Devil",
        cn: "苍兰诀",
        desc: "Kisah cinta abadi antara Raja Iblis dan seorang peri.",
        img: "https://image.tmdb.org/t/p/w500/7Xvj69oM65Z9p9XzC2kS19pXqO5.jpg"
    },
    {
        title: "Hidden Love",
        cn: "偷偷藏不住",
        desc: "Cinta terpendam selama bertahun-tahun yang akhirnya bersemi.",
        img: "https://image.tmdb.org/t/p/w500/m9mNfGZ5e36y5aR7v1f2W2GzR9U.jpg"
    },
    {
        title: "The Untamed",
        cn: "陈情令",
        desc: "Dua kultivator mengungkap misteri kelam masa lalu.",
        img: "https://image.tmdb.org/t/p/w500/xv9Y2k9Wz6C5I0Y7Vv6F6Z6E8P.jpg"
    },
    {
        title: "Story of Kunning Palace",
        cn: "宁安如梦",
        desc: "Kesempatan kedua untuk menebus dosa di masa lalu.",
        img: "https://image.tmdb.org/t/p/w500/7W2m4R5Z6f8z9G6X5y8B8m9K8L.jpg"
    }
];

// 2. Fungsi Mengganti Logo (Menghapus logo.png dan ganti jadi teks)
function createCinematicLogo(elementId) {
    const target = document.getElementById(elementId);
    if(target) {
        target.innerHTML = `
            <div class="logo-container">
                <span class="cn-text">影院</span>
                <span class="en-text">CineMandarin</span>
            </div>
        `;
    }
}

// 3. Fungsi Load Drama ke Grid
function loadDramas() {
    const grid = document.getElementById('dramaGrid');
    if(!grid) return;

    dramaCollection.forEach(drama => {
        const card = document.createElement('div');
        card.className = 'drama-card';
        card.innerHTML = `
            <div class="card-img" style="background-image: url('${drama.img}')"></div>
            <div class="card-info">
                <h3>${drama.cn}</h3>
                <h4 style="font-size:0.9rem">${drama.title}</h4>
                <p>${drama.desc}</p>
            </div>
        `;
        grid.appendChild(card);
    });
}

// 4. Setup Hero Banner (Ambil drama pertama sebagai banner)
function setupHero() {
    const hero = document.getElementById('heroBanner');
    const title = document.getElementById('heroTitle');
    if(hero) {
        hero.style.backgroundImage = `url('https://image.tmdb.org/t/p/original/6S6SDRz7n2Z997Q9q386927976e.jpg')`;
        title.innerText = "Love Like The Galaxy";
    }
}

// Jalankan semua saat halaman siap
document.addEventListener('DOMContentLoaded', () => {
    createCinematicLogo('mainLogo');
    createCinematicLogo('footerLogo');
    setupHero();
    loadDramas();
});
