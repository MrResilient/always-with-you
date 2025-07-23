const messages = [
  "Drink some water, please 💧",
  "Time to take a short break, my love 🌸",
  "Have you smiled today? 😘",
  "I love you. Always. Forever 💖",
  "Close your eyes for a moment and breathe 🧘‍♀️"
];

const floatingMessages = [
  "You’re never alone 💫",
  "I'm proud of you 🫶",
  "You light up my life 🌟",
  "Sending hugs 🌸",
  "You’re my whole world ❤️"
];

function showMessage() {
  const index = new Date().getHours() % messages.length;
  document.getElementById("message").innerText = messages[index];

  if (Notification.permission === "granted") {
    new Notification("From Shivansh 💌", {
      body: messages[index],
      icon: "assets/us.jpg"
    });
  }
}

function rotateFloatingMessage() {
  const msg = floatingMessages[Math.floor(Math.random() * floatingMessages.length)];
  document.getElementById("floatingMsg").innerText = msg;
}

function hidePopup() {
  document.getElementById("welcome-popup").style.display = "none";
}

function showPhoto() {
  document.getElementById("photo-section").style.display = "block";
}

function hidePhoto() {
  document.getElementById("photo-section").style.display = "none";
}

function playVoice() {
  const voice = document.getElementById("voice");
  voice.play().catch(() => {
    alert("Please tap again to allow voice playback. Some browsers block autoplay.");
  });
}

function saveMessageForHer() {
  const message = document.getElementById("herMsg").value.trim();
  if (message !== "") {
    localStorage.setItem("messageForHer", message);
    alert("Your message was saved 💌");
    document.getElementById("herMsg").value = "";
  }
}

function askNotificationDaily() {
  const today = new Date().toISOString().split("T")[0];
  const lastAsked = localStorage.getItem("lastNotificationPrompt");

  if (Notification.permission !== "granted" && lastAsked !== today) {
    const ask = confirm("Can I be with you every hour? 🥺 Please allow notifications.");
    
    if (ask && Notification.permission !== "denied") {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          alert("Yayy! Now I can remind you with love 💖");
        }
      });
    }

    localStorage.setItem("lastNotificationPrompt", today);
  }
}

window.onload = function () {
  const msg = localStorage.getItem("messageForHer");
  if (msg) {
    document.getElementById("hisMsg").value = msg;
  }

  showMessage();
  rotateFloatingMessage();
  askNotificationDaily();
  setInterval(showMessage, 60 * 60 * 1000); // every hour
  setInterval(rotateFloatingMessage, 30000); // every 30 sec
};
