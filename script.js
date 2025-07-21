const messages = [
  "Drink some water, please 💧",
  "Time to take a short break, my love 🌸",
  "Have you smiled today? 😘",
  "I love you. Always. Forever 💖",
  "Close your eyes for a moment and breathe 🧘‍♀️"
];

function showMessage() {
  const index = new Date().getHours() % messages.length;
  document.getElementById("message").innerText = messages[index];

  // Show browser notification
  if (Notification.permission === "granted") {
    new Notification("From Shivansh 💌", {
      body: messages[index],
      icon: "assets/image1.jpg"
    });
  }
}

function playVoice() {
  document.getElementById("voice").play();
}

// Ask for notification permission
if (Notification.permission !== "granted") {
  Notification.requestPermission();
}

// Update message every hour
showMessage();
setInterval(showMessage, 60 * 60 * 1000); // every hour

function hidePopup() {
  document.getElementById("welcome-popup").style.display = "none";
}
