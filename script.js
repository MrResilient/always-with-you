const messages = [
  "Drink some water, please 💧",
  "Time to take a short break, my love 🌸",
  "Have you smiled today? 😘",
  "I love you. Always. Forever 💖",
  "Close your eyes for a moment and breathe 🧘‍♀️"
];

// Show message based on current hour
function showMessage() {
  const index = new Date().getHours() % messages.length;
  document.getElementById("message").innerText = messages[index];

  // Show browser notification if allowed
  if (Notification.permission === "granted") {
    new Notification("From Shivansh 💌", {
      body: messages[index],
      icon: "assets/us.jpg"
    });
  }
}

// Ask for notification permission on load
if (Notification.permission !== "granted") {
  Notification.requestPermission();
}

// Update message every hour
showMessage();
setInterval(showMessage, 60 * 60 * 1000);

// Show photo on button click
function showPhoto() {
  document.getElementById("photo-section").style.display = "block";
}

// Play voice on button click
function playVoice() {
  const voice = document.getElementById("voice");
  voice.play().catch(() => {
    alert("Please tap again to allow voice playback. Some browsers block autoplay.");
  });
}

// Hide welcome popup
function hidePopup() {
  document.getElementById("welcome-popup").style.display = "none";
}
