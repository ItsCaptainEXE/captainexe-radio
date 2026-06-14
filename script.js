const playlist = [
  {
    title: "Embers",
    artist: "CaptainEXE",
    url: "https://www.youtube.com/embed/s51pZ4J1Tu4?autoplay=1"
  },
  {
    title: "Afterglow",
    artist: "CaptainEXE",
    url: "https://www.youtube.com/embed/Z__5BKgQfXQ?autoplay=1"
  }
];

const player = document.getElementById("player");
const status = document.getElementById("status");
const npInfo = document.getElementById("np-info");

async function playLive() {
  status.textContent = "Checking Live Status...";

  try {
    const res = await fetch("https://www.youtube.com/@ItsCaptainEXE/live");
    const html = await res.text();

    // Find the actual live video ID
    const match = html.match(/"videoId":"(.*?)"/);

    if (match && match[1]) {
      const videoId = match[1];
      const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

      player.src = embedUrl;
      status.textContent = "LIVE MODE";
      npInfo.textContent = "CaptainEXE — Livestream";
      return;
    }

    // If no live video found
    status.textContent = "Not Live — Playing Playlist";
    playTrack(0);

  } catch (err) {
    status.textContent = "Error Checking Live — Playing Playlist";
    playTrack(0);
  }
}

function playTrack(index) {
  const track = playlist[index];
  player.src = track.url;
  status.textContent = "Playing";
  npInfo.textContent = `${track.title} — ${track.artist}`;
}

// Auto-load Embers
playTrack(0);
