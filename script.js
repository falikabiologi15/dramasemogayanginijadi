const dramas = [
    {
        title: "Love Between Fairy and Devil",
        cn: "苍兰诀",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOBDdtfZlg0GaoCuN_XQpICoZkxcP6nLre5g&s",
        trailer: "https://www.youtube.com/embed/S2O_6v9vEIs"
    },
    {
        title: "Hidden Love",
        cn: "偷偷藏不住",
        img: "https://i.pinimg.com/736x/6c/9e/5e/6c9e5e78e3842cf13e9fcb3cd7148835.jpg",
        trailer: "https://www.youtube.com/embed/U25p_XyM90U"
    },
    {
        title: "Story of Kunning Palace",
        cn: "宁安如梦",
        img: "https://m.media-amazon.com/images/M/MV5BM2M0YWM1MzQtYzAzZS00YzIyLWI0MzAtN2Y2NTBlMmU3MDViXkEyXkFqcGc@._V1_.jpg",
        trailer: "https://www.youtube.com/embed/nU0lKqj8w3w"
    },
    {
        title: "The Untamed",
        cn: "陈情令",
        img: "https://m.media-amazon.com/images/I/71IrlJL6JgL._AC_UF894,1000_QL80_.jpg",
        trailer: "https://www.youtube.com/embed/BfKhREVFLkQ"
    }
];

function init() {
    const grid = document.getElementById('dramaGrid');
    const modal = document.getElementById('trailerModal');
    const iframe = document.getElementById('trailerVideo');
    const closeBtn = document.querySelector('.close-modal');

    // Load Drama
    dramas.forEach(drama => {
        const card = document.createElement('div');
        card.className = 'drama-card';
        card.innerHTML = `
            <div class="card-img" style="background-image: url('${drama.img}')"></div>
            <div class="card-info">
                <p style="color: #d4af37; font-weight: bold;">${drama.cn}</p>
                <p style="font-size: 0.9rem;">${drama.title}</p>
            </div>
        `;
        
        card.onclick = () => {
            iframe.src = drama.trailer + "?autoplay=1";
            document.getElementById('modalTitle').innerText = drama.title;
            modal.style.display = "block";
        };
        
        grid.appendChild(card);
    });

    // Close Modal
    closeBtn.onclick = () => {
        modal.style.display = "none";
        iframe.src = "";
    };

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
            iframe.src = "";
        }
    };
    
    // Logo
    document.getElementById('mainLogo').innerHTML = `
        <div style="line-height:1; cursor:pointer;" onclick="window.scrollTo(0,0)">
            <span style="color:#d4af37; font-size:24px; font-weight:bold; letter-spacing:3px;">影院</span><br>
            <span style="color:#fff; font-size:10px; letter-spacing:2px;">CINEMANDARIN</span>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', init);
