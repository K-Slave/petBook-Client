import { EmbedBuilder, Events, WebhookClient } from "discord.js";
import readline from "readline";
import * as dotenv from "dotenv";

dotenv.config();

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.on("line", (line) => {
//   console.log(line, "line");
//   rl.close();
// });

// rl.on("close", () => {
//   process.exit();
// });

const webhookClient = new WebhookClient({
  url: "https://discord.com/api/webhooks/1044966698060623902/8SuHHBWIkMPt57e2O4jgGrgbbkPZjJNdkSXFRVJlLLX3MAzB5f_JTKnYn69DgAV4-WCH",
});

// url: process.env.TEST_WEBHOOK_URL as string,
// console.log(process.env.NODE_ENV, "NODE_ENV");
// console.log(process.env.TEST_WEBHOOK_URL, "process.env.TEST_WEBHOOK_URL");

const embed = new EmbedBuilder().setTitle("Hello petBook !").setColor(0x00ffff);

// process.on("worker", () => {
//   console.log("worker evt");
// });

// process.on("exit", () => {
//   console.log("exit evt");
// });

webhookClient
  .send({
    username: "petBot",
    avatarURL:
      "https://cdn.discordapp.com/app-icons/1044621624864940163/87fe18353f90a7a4c275be945afc14e5.png?size=512",
    embeds: [embed],
    content: "hey",
  })
  .then((d) => d)
  .catch((e) => e);
