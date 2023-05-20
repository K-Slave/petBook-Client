import { WebhookClient } from "discord.js";
import * as dotenv from "dotenv";
import path from "path";
import fs from "fs";
import envSelector from "./envSelector";

dotenv.config();

const env = envSelector("develop");

const webhookClient = new WebhookClient({
  url: env.webhookURL,
});

const buildLogPath = path.join(__dirname, "buildLog.txt");
const buildLog = fs.readFileSync(buildLogPath, "utf-8");

if (buildLog.includes("success")) {
  webhookClient
    .send({
      username: "petBot",
      avatarURL:
        "https://cdn.discordapp.com/app-icons/1044621624864940163/87fe18353f90a7a4c275be945afc14e5.png?size=512",
      content: "vercel updated",
    })
    .then((d) => d)
    .catch((e) => e);
}
