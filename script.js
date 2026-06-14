import { setRPC } from "./main.js";

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

function playTrack(index) {
  const track = playlist[index];
  player.src = track.url;
  status.textContent = "Playing";
  npInfo.textContent = `${track.title} — CaptainEXE`;
  setRPC(track.title);
}

async function playLive() {
  status.textContent = "Checking Live…";

  try {
    const res = await fetch("https://www.youtube.com/@ItsCaptainEXE/live");
    const html = await res.text();

    // Try direct videoId
    let match = html.match(/"videoId":"(.*?)"/);

    // Try /live/VIDEOID
    if (!match) match = html.match(/youtube\.com\/live\/(.*?)"/);

    if (match && match[1]) {
      const videoId = match[1];
      const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

      player.src = embedUrl;
      status.textContent = "Live Stream";
      npInfo.textContent = "CaptainEXE — Live";
      setRPC("Live Stream");
      return;
    }

    status.textContent = "Not Live — Playing Playlist";
    playTrack(0);

  } catch (e) {
    status.textContent = "Error — Playing Playlist";
    playTrack(0);
  }
}

// Auto-load Embers
playTrack(0);
