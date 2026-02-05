document.addEventListener("DOMContentLoaded", function () {

  const name = localStorage.getItem("name") || "My Love";
  const msg = localStorage.getItem("message") || "Will you be my Valentine? 💖";

  document.getElementById("greet").innerText = `Hey ${name} 💕`;
  document.getElementById("customMsg").innerText = msg;


  document.getElementById("noBtn").addEventListener("click", function () {
    alert("Wrong answer 😌 Choose again ❤️");
  });

  document.getElementById("yesBtn").addEventListener("click", function () {
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.6 }
    });

    localStorage.setItem("playMusic", "yes");

    setTimeout(() => {
      window.location.href = "./love.html";
    }, 1500);
  });

});
