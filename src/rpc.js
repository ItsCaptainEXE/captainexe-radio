import { DiscordSDK } from "@discord/embedded-app-sdk";

export const discord = new DiscordSDK(import.meta.env.VITE_DISCORD_CLIENT_ID);

export async function initRPC() {
  await discord.ready();
}

export function setRPC(trackName) {
  discord.setActivity({
    details: `Listening to ${trackName}`,
    state: "By CaptainEXE",
    assets: {
      large_image: "captainexe_radio_logo",
      small_image: "music_icon"
    },
    buttons: [
      {
        label: "Join Discord",
        url: "https://captainexe.vercel.app/discord"
      }
    ]
  });
}
