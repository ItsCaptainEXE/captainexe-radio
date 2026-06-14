import { setRPC } from "./rpc.js";

const playlist = [
  {
    title: "Embers",
    url: "https://cdn-captainexe.pages.dev/embers.mp4"
  },
  {
    title: "Afterglow",
    url: "https://cdn-captainexe.pages.dev/afterglow.mp4"
  }
];

const player = document.getElementById("player");
const status = document.getElementById("status");
const npInfo = document.getElementById("np-info");

export function playTrack(index) {
  const track = playlist[index];
  player.src = track.url;
  player.play();
  status.textContent = "Playing";
  npInfo.textContent = `${track.title} — CaptainEXE`;
  setRPC(track.title);
}
