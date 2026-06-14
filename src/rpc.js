import { DiscordSDK } from "@discord/embedded-app-sdk";

export const discord = new DiscordSDK(import.meta.env.VITE_DISCORD_CLIENT_ID);

export async function initRPC() {
  try {
    await discord.ready();
  } catch {
    console.warn("RPC unavailable outside Discord.");
  }
}

export function setRPC(details) {
  try {
    discord.setActivity({
      details,
      state: "By CaptainEXE",
      assets: {
        large_image: "captainexe_radio_logo",
        small_image: "music_icon"
      },
      buttons: [
        {
          label: "Join VC",
          url: "https://discord.com/channels/@me"
        },
        {
          label: "Dev Discord",
          url: "https://captainexe.vercel.app/discord"
        }
      ]
    });
  } catch {
    console.warn("RPC unavailable outside Discord.");
  }
}
