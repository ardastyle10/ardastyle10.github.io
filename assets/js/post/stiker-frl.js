
// === DATA POST ===
const posts = [
  { statusL: "Public", Like: "likeStik", gambar: "img.jpg", judulLiv: "Judul", author: "Authoer", dateLiv: "2025-11-10", typeCar: "Available", folder: "stik", body: "body.json", window: "window.json", aspekRasio: "auto" },
  
  { statusL: "Public", Like: "likeStik27", gambar: "img.jpg", judulLiv: "BANNER", author: "RACLE LIGHTNING", dateLiv: "2025-11-08", typeCar: "Available", folder: "stik27", body: "body.json", window: "window.json", aspekRasio: "auto" },
  { statusL: "Public", Like: "likeStik26", gambar: "img.png", judulLiv: "Anime", author: "TELEGRAM", dateLiv: "2025-11-04", typeCar: "Available", folder: "stik26", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeStik25", gambar: "img.png", judulLiv: "WINDOW BILED", author: "STYLE HEHE", dateLiv: "2025-10-23", typeCar: "S15", folder: "stik25", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeStik24", gambar: "img.jpg", judulLiv: "PLAT DK", author: "RACLE LIGHNING", dateLiv: "2025-11-02", typeCar: "Available", folder: "stik24", body: "body.json", window: "window.json", aspekRasio: "auto" },
  { statusL: "Public", Like: "likeStik23", gambar: "img.jpg", judulLiv: "ARDA $TYLE", author: "HANJIN", dateLiv: "2025-11-04", typeCar: "Available", folder: "stik23", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeStik22", gambar: "img.jpg", judulLiv: "SUPREME", author: "TPAXAJI", dateLiv: "2025-11-08", typeCar: "Available", folder: "stik22", body: "body.json", window: "window.json", aspekRasio: "auto" },
  { statusL: "Public", Like: "likeStik21", gambar: "img.jpg", judulLiv: "BUSTERCUP", author: "HANJIN", dateLiv: "2025-11-02", typeCar: "Available", folder: "stik21", body: "body.json", window: "window.json", aspekRasio: "auto" },
  { statusL: "Public", Like: "likeStik20", gambar: "img.jpg", judulLiv: "Atap Carbon", author: "Frl.satnic", dateLiv: "2025-11-01", typeCar: "Available", folder: "stik20", body: "body.json", window: "window.json", aspekRasio: "auto" },
  { statusL: "Public", Like: "likeStik19", gambar: "img.png", judulLiv: "Itasha", author: "Roadsidee", dateLiv: "2025-11-07", typeCar: "Available", folder: "stik19", body: "body.json", window: "window.json", aspekRasio: "auto" },
  { statusL: "Public", Like: "likeStik18", gambar: "img.jpg", judulLiv: "ABZAD", author: "fckinglvu.fr", dateLiv: "2025-11-07", typeCar: "Available", folder: "stik18", body: "body.json", window: "window.json", aspekRasio: "auto" },
  { statusL: "Public", Like: "likeStik17", gambar: "img.jpg", judulLiv: "ABZAD", author: "fckinglvu.fr", dateLiv: "2025-11-07", typeCar: "Available", folder: "stik17", body: "body.json", window: "window.json", aspekRasio: "auto" },
  { statusL: "Public", Like: "likeStik16", gambar: "img.jpg", judulLiv: "ABZAD", author: "fckinglvu.fr", dateLiv: "2025-11-07", typeCar: "Available", folder: "stik16", body: "body.json", window: "window.json", aspekRasio: "auto" },
  { statusL: "Public", Like: "likeStik15", gambar: "img.jpg", judulLiv: "Sticker Pack", author: "TAKASHI", dateLiv: "2025-11-02", typeCar: "Available", folder: "stik15", body: "body.json", window: "window.json", aspekRasio: "auto" },
  { statusL: "Public", Like: "likeStik14", gambar: "img.jpg", judulLiv: "Sticker Pack", author: "Discord", dateLiv: "2025-10-30", typeCar: "Available", folder: "stik14", body: "body.json", window: "window.json", aspekRasio: "auto" },
  { statusL: "Public", Like: "likeStik13", gambar: "img.jpg", judulLiv: "MATERNAL", author: "Unknown", dateLiv: "2025-11-03", typeCar: "Available", folder: "stik13", body: "body.json", window: "window.json", aspekRasio: "auto" },
  { statusL: "Public", Like: "likeStik12", gambar: "img.jpg", judulLiv: "Carbon", author: "PSKN SENYAP", dateLiv: "2025-10-31", typeCar: "ALTEZZA", folder: "stik12", body: "body.json", window: "window.json", aspekRasio: "auto" },
  { statusL: "Public", Like: "likeStik11", gambar: "img.jpg", judulLiv: "Night Runner", author: "Alchachofa", dateLiv: "2025-10-19", typeCar: "Available", folder: "stik11", body: "body.json", window: "window.json", aspekRasio: "auto" },
  { statusL: "Public", Like: "likeStik10", gambar: "img.png", judulLiv: "Sticker Pack", author: "IrlCarGallerys", dateLiv: "2025-10-30", typeCar: "Available", folder: "stik10", body: "body.json", window: "window.json", aspekRasio: "auto" },
  { statusL: "Public", Like: "likeStik9", gambar: "img.png", judulLiv: "Logo TikTok", author: "Michael (YT)", dateLiv: "2025-10-29", typeCar: "Available", folder: "stik9", body: "body.json", window: "window.json", aspekRasio: "auto" },
  { statusL: "Public", Like: "likeStik8", gambar: "img.jpg", judulLiv: "Logo Instagram", author: "REBYY x Z", dateLiv: "2025-10-29", typeCar: "Available", folder: "stik8", body: "body.json", window: "window.json", aspekRasio: "auto" },
  { statusL: "Public", Like: "likeStik7", gambar: "img.jpg", judulLiv: "Lampu Belakang", author: "Pastebin", dateLiv: "2025-10-28", typeCar: "GT86", folder: "stik7", body: "body.json", window: "window.json", aspekRasio: "auto" },
  { statusL: "Public", Like: "likeStik6", gambar: "img.jpg", judulLiv: "Banner PSKN SENYAP", author: "PSKN SENYAP", dateLiv: "2025-10-26", typeCar: "ALTEZZA", folder: "stik6", body: "body.json", window: "window.json", aspekRasio: "auto" },
  { statusL: "Public", Like: "likeStik5", gambar: "img.jpg", judulLiv: "Headlight & Taillight", author: "JDM Automotive", dateLiv: "2025-10-23", typeCar: "RX7", folder: "stik5", body: "body.json", window: "window.json", aspekRasio: "auto" },
  { statusL: "Public", Like: "likeStik4", gambar: "img.jpg", judulLiv: "Lampu Belakang Rainbow", author: "SYIFA23", dateLiv: "2025-10-19", typeCar: "GT86", folder: "stik4", body: "body.json", window: "window.json", aspekRasio: "auto" },
  { statusL: "Public", Like: "likeStik3", gambar: "img.png", judulLiv: "MESIN 2JZ", author: "Pastebin", dateLiv: "2025-10-10", typeCar: "S13", folder: "stik3", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeStik2", gambar: "img.jpg", judulLiv: "Sponsor Pack", author: "X", dateLiv: "2025-10-10", typeCar: "Available", folder: "stik2", body: "body.json", window: "window.json", aspekRasio: "auto" },
  { statusL: "Public", Like: "likeStik1", gambar: "img.jpg", judulLiv: "Nitrogen", author: "Salsabila", dateLiv: "2025-09-27", typeCar: "Available", folder: "stik1", body: "body.json", window: "window.json", aspekRasio: "auto" },
  ];

const postContainer = document.getElementById("post-container");

// === BUAT KARTU POST ===
posts.forEach(post => {
  const fileList = [
    { key: "BODY", file: post.body },
    { key: "WINDOW", file: post.window }
  ];

  const fetchPromises = fileList.map(item => {
    return fetch(`stik/${post.folder}/${item.file}`)
      .then(res => res.text())
      .then(text => {
        const cleanText = text.replace(/\r/g, '');
        return { key: item.key, isi: cleanText };
      })
      .catch(() => ({ key: item.key, isi: `Gagal load ${item.file}` }));
  });

  Promise.all(fetchPromises).then(prompts => {
    let bodyContent = "";
    let windowContent = "";

    prompts.forEach(p => {
      const codeId = `prompt-${post.Like}-${p.key}`;
      const block = `
        <div class="bg-black border border-gray-700 rounded-lg overflow-hidden relative w-full mt-2">
          <div class="flex items-center px-3 py-2 bg-zinc-800 border-b border-gray-700">
            <span class="w-3 h-3 bg-gray-400 rounded-full mr-2"></span>
            <span class="w-3 h-3 bg-lime-400 rounded-full mr-2"></span>
            <span class="font-mono text-sm text-white">${p.key}</span>
            <button class="copy-button ms-auto" data-target="${codeId}" title="Copy">
              <i class="fas fa-copy"></i>
            </button>
          </div>
          <pre class="bg-[#1e1e2f] text-white p-2 m-0"><code id="${codeId}" class="language-none">${p.isi}</code></pre>
        </div>
      `;

      if (p.key === "BODY") bodyContent = block;
      if (p.key === "WINDOW") windowContent = block;
    });

    postContainer.innerHTML += `
      <div class="col-xl-3 col-md-6">
        <div class="card position-relative">
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col-lg-4 image-container container-img-badge position-relative">
                <span class="badge badge-soft-success position-absolute badge-kiri">${post.statusL}</span>
                <i class="bi bi-heart heart-icon position-absolute heart-kanan text-success" data-target="${post.Like}"></i>
                <img src="stik/${post.folder}/${post.gambar}" alt="${post.judulLiv}" class="img-fluid mx-auto d-block" style="aspect-ratio: ${post.aspekRasio}; object-fit: cover;">
                <div class="position-absolute bottom-0 start-50 translate-middle-x text-white opacity-25 p-1 fs-10">&copy; <span class="copyright2"></span></div>
                <div class="opacity-75">
                  <div class="profile-badge ms-3">
                    <img src="assets/img/kaiadmin/icon.png" alt="Profile Admin">
                    <span class="copyright2"></span>
                    <i class='bx bxs-badge-check text-info verified'></i>
                  </div>
                </div>
              </div> 
            </div>
            <h5 class="card-title mb-3">${post.judulLiv}</h5>
            <div class="d-flex align-items-center mb-1 text-muted small fw-semibold">
              <i class="bi bi-person-circle me-2"></i>
              <span>Author: ${post.author}</span>
            </div>
            <div class="d-flex align-items-center mb-1 text-muted small fw-semibold">
              <i class="bi bi-calendar3 me-2"></i>
              <span>Date: ${post.dateLiv}</span>
            </div>
            <div class="d-flex align-items-center text-muted small fw-semibold">
              <i class="bi bi-car-front-fill me-2"></i>
              <span>Type Car: ${post.typeCar}</span>
            </div>
            <div class="mt-3 bg-light-subtle rounded-bottom text-center">
              <div class="gap-1 hstack">
                <button class="btn btn-black w-100 toggle-btn" data-target="#collapse-${post.Like}-body">
                  <i class="fa fa-code me-1"></i>Body
                </button>
                <button class="btn btn-black w-100 toggle-btn" data-target="#collapse-${post.Like}-window">
                  <i class="fa fa-code me-1"></i>Window
                </button>
              </div>
              <div class="px-2 w-full my-content mt-2 collapse-content" id="collapse-${post.Like}-body">
                ${bodyContent}
              </div>
              <div class="px-2 w-full my-content mt-2 collapse-content" id="collapse-${post.Like}-window">
                ${windowContent}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  });
});

// === COLLAPSE BODY / WINDOW ===
document.addEventListener("click", (e) => {
  if (e.target.closest(".toggle-btn")) {
    const btn = e.target.closest(".toggle-btn");
    const targetSelector = btn.getAttribute("data-target");
    const target = document.querySelector(targetSelector);

    document.querySelectorAll(".collapse-content").forEach(el => {
      if (el !== target) el.classList.remove("active");
    });

    target.classList.toggle("active");
  }
});

// === COPY TO CLIPBOARD ===
document.addEventListener("click", (e) => {
  if (e.target.closest('.copy-button')) {
    const btn = e.target.closest('.copy-button');
    const targetId = btn.getAttribute('data-target');
    const codeEl = document.getElementById(targetId);
    if (codeEl) {
      navigator.clipboard.writeText(codeEl.innerText.trim()).then(() => {
        btn.innerHTML = '<i class="fas fa-check"></i>';
        setTimeout(() => {
          btn.innerHTML = '<i class="fas fa-copy"></i>';
        }, 1200);
      });
    }
  }
});

// === EVENT LISTENER LIKE ===
document.addEventListener("click", (e) => {
  const heart = e.target.closest(".heart-icon");
  if (heart) {
    const id = heart.getAttribute("data-target");
    console.log("%c\u2764%c Like diklik pada: " + id, "color: #80ff00; font-weight: bold;", "color: black; font-weight: bold;");

    const isLiked = heart.classList.contains("bi-heart-fill");

    if (isLiked) {
      heart.classList.replace("bi-heart-fill", "bi-heart");
      localStorage.setItem(`like-${id}`, "false");
    } else {
      heart.classList.replace("bi-heart", "bi-heart-fill");
      localStorage.setItem(`like-${id}`, "true");
    }
  }
});

// === RESTORE STATUS LIKE ===
window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".heart-icon").forEach(heart => {
    const id = heart.getAttribute("data-target");
    const liked = localStorage.getItem(`like-${id}`) === "true";
    if (liked) {
      heart.classList.replace("bi-heart", "bi-heart-fill");
    }
  });
});