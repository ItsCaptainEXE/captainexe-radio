import { ActivitySDK } from "@discord/embedded-app-sdk";

const discord = new ActivitySDK();

export function setRPC(trackName) {
  discord.setActivity({
    details: `Listening to ${trackName}`,
    state: "By CaptainEXE",
    assets: {
      large_image: "captainexe_radio_logo",
      large_text: "CaptainEXE Radio"
    },
    buttons: [
      {
        label: "Join Discord",
        url: "https://captainexe.vercel.app/discord"
      }
    ]
  });
}
