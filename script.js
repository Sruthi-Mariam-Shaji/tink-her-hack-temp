// SECTION NAVIGATION
function showSection(id) {
  document.querySelectorAll(".section").forEach(sec => {
    sec.classList.remove("active");
  });

  const target = document.getElementById(id);
  if (target) {
    target.classList.add("active");
  }
}

// MOTIVATIONAL QUOTES (AUTO-CHANGING)
const quotes = [
  "You are stronger than you think.",
  "You deserve to feel safe and confident.",
  "Trust yourself. You’ve got this.",
  "You are allowed to take up space.",
  "Your presence matters.",
  "You don’t have to do everything alone.",
  "Courage doesn’t always roar — sometimes it whispers.",
  "You are doing better than you realize."
];

let quoteIndex = Math.floor(Math.random() * quotes.length);
const quoteEl = document.getElementById("quote");

function updateQuote() {
  if (!quoteEl) return;
  quoteEl.innerText = "“" + quotes[quoteIndex] + "”";
  quoteIndex = (quoteIndex + 1) % quotes.length;
}

// Initial quote
updateQuote();

// Change quote every 8 seconds
setInterval(updateQuote, 8000);

// SOS FUNCTION
function sendSOS() {
  const result = document.getElementById("sosResult");
  const whatsapp = document.getElementById("whatsappLink");

  if (!navigator.geolocation) {
    result.innerText = "Geolocation not supported.";
    return;
  }

  result.innerText = "Getting your location…";

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      const mapsLink = `https://www.google.com/maps?q=${lat},${lon}`;
      const message =
        "🚨 EMERGENCY SOS 🚨\n\nI need help.\nLocation:\n" + mapsLink;

      result.innerHTML =
        `📍 Location captured:<br>
         <a href="${mapsLink}" target="_blank">${mapsLink}</a>`;

      whatsapp.href =
        "https://wa.me/?text=" + encodeURIComponent(message);
      whatsapp.style.display = "inline-block";
    },
    () => {
      result.innerText = "Location permission denied.";
    }
  );
}

// ACCOMPANY MODE
function startAccompany() {
  const result = document.getElementById("accompanyResult");
  const whatsapp = document.getElementById("accompanyWhatsapp");

  if (!navigator.geolocation) {
    result.innerText = "Geolocation not supported.";
    return;
  }

  result.innerText = "Starting your walk…";

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      const mapsLink = `https://www.google.com/maps?q=${lat},${lon}`;
      const message =
        "🚶‍♀️ WalkWithHer – Accompany Mode\n\nTrack my walk here:\n" + mapsLink;

      result.innerHTML =
        `📍 Walk started:<br>
         <a href="${mapsLink}" target="_blank">${mapsLink}</a>`;

      whatsapp.href =
        "https://wa.me/?text=" + encodeURIComponent(message);
      whatsapp.style.display = "inline-block";
    },
    () => {
      result.innerText = "Location permission denied.";
    }
  );
}

// FAKE CALL
function startFakeCall() {
  showSection("callScreen");
}

function acceptCall() {
  alert("Call connected 🎧");
}

function endCall() {
  showSection("home");
}