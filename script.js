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

const liveURL = "https://www.youtube.com/embed/live_stream?channel=UCt0Q0nXh0Gooy2cwrRez2cw&autoplay=1";

const player = document.getElementById("player");
const status = document.getElementById("status");
const npInfo = document.getElementById("np-info");

function playTrack(index) {
  const track = playlist[index];
  player.src = track.url;
  status.textContent = "Playing";
  npInfo.textContent = `${track.title} — ${track.artist}`;
}

function playLive() {
  player.src = liveURL;
  status.textContent = "LIVE MODE";
  npInfo.textContent = "CaptainEXE — Livestream";
}

// Auto-load Embers on start
playTrack(0);
