// ================= BÀI 1 =================
const products = [
  { name: "iPhone 15", price: "20.000.000đ" },
  { name: "Samsung S23", price: "18.000.000đ" },
  { name: "Macbook Air", price: "25.000.000đ" },
  { name: "Tai nghe Sony", price: "3.000.000đ" },
  { name: "Chuột Logitech", price: "500.000đ" }
];

const productDiv = document.getElementById("products");

if (productDiv) {
  const error = document.getElementById("error");

  function render(list) {
    productDiv.innerHTML = list.map(p => `
      <div class="card">
        <h3>${p.name}</h3>
        <p>${p.price}</p>
      </div>
    `).join("");
  }

  render(products);

  document.getElementById("search").addEventListener("input", (e) => {
    const value = e.target.value.trim().toLowerCase();

    const filtered = products.filter(p =>
      p.name.toLowerCase().includes(value)
    );

    error.innerText = filtered.length === 0 ? "❌ Không tìm thấy" : "";
    render(filtered);
  });
}


// ================= BÀI 2 =================
const form = document.getElementById("form");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const agree = document.getElementById("agree").checked;
    const msg = document.getElementById("msg");

    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const passValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);

    if (!name || !emailValid || !passValid || !agree) {
      msg.innerText = "❌ Dữ liệu không hợp lệ!";
      msg.style.color = "red";
      return;
    }

    localStorage.setItem("user", JSON.stringify({ name, email }));

    msg.innerText = "✅ Đăng ký thành công!";
    msg.style.color = "green";

    form.reset();
  });
}


// ================= BÀI 3 =================
const timerEl = document.getElementById("timer");

if (timerEl) {
  let time = 600;
  let interval = setInterval(() => {
    let m = Math.floor(time / 60);
    let s = time % 60;

    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    timerEl.innerText = `${m}:${s}`;

    if (time <= 60) {
      timerEl.classList.add("danger");
    }

    if (time <= 0) {
      clearInterval(interval);
      document.getElementById("modal").style.display = "flex";
    }

    time--;
  }, 1000);
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
