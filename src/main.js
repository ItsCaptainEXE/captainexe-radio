import { initRPC } from "./rpc.js";
import { playTrack, playLive } from "./script.js";

window.playTrack = playTrack;
window.playLive = playLive;

await initRPC();

playTrack(0);
