import { initRPC } from "./rpc.js";
import { playTrack } from "./script.js";

window.playTrack = playTrack;

await initRPC();

playTrack(0);
