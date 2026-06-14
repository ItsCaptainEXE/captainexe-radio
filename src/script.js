import { setRPC } from "./rpc.js";

const playlist = [
  {
    title: "Embers",
    url: "https://www.youtube.com/embed/s51pZ4J1Tu4?autoplay=1"
  },
  {
    title: "Afterglow",
    url: "https://www.youtube.com/embed/Z__5BKgQfXQ?autoplay=1"
  }
];

const player = document.getElementById("player");
const status = document.getElementById("status");
const npInfo = document.getElementById("np-info");

export function playTrack(index) {
  const track = playlist[index];
  player.src = track.url;
  status.textContent = "Playing";
  npInfo.textContent = `${track.title} — CaptainEXE`;
  setRPC(track.title);
}

export async function playLive() {
  status.textContent = "Checking Live…";

  try {
    const res = await fetch("https://www.youtube.com/@ItsCaptainEXE/live");
    const html = await res.text();

    let match = html.match(/"videoId":"(.*?)"/);
    if (!match) match = html.match(/youtube\.com\/live\/(.*?)"/);

    if (match && match[1]) {
      const videoId = match[1];
      player.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
      status.textContent = "Live Stream";
      npInfo.textContent = "CaptainEXE — Live";
      setRPC("Live Stream");
      return;
    }

    status.textContent = "Not Live — Playing Playlist";
    playTrack(0);

  } catch {
    status.textContent = "Error — Playing Playlist";
    playTrack(0);
  }
}
