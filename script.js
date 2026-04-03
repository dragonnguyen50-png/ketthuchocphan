// ================= COUNTDOWN =================
let time = 600; // 10 phút

const timer = document.getElementById("timer");

if (timer) {
  const interval = setInterval(() => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    // format 2 chữ số
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    timer.innerText = `${minutes}:${seconds}`;

    // dưới 1 phút → hiệu ứng
    if (time <= 60) {
      timer.style.color = "red";
      timer.style.transform = "scale(1.2)";
    }

    // hết giờ
    if (time <= 0) {
      clearInterval(interval);
      alert("Hết thời gian!");
    }

    time--;
  }, 1000);
}
