import { EmbedBuilder, WebhookClient, AttachmentBuilder } from "discord.js";
import * as dotenv from "dotenv";
import fs from "fs";
import path from "path";

dotenv.config();

const webhookClient = new WebhookClient({
  url: "https://discord.com/api/webhooks/1044966698060623902/8SuHHBWIkMPt57e2O4jgGrgbbkPZjJNdkSXFRVJlLLX3MAzB5f_JTKnYn69DgAV4-WCH",
});

// url: process.env.TEST_WEBHOOK_URL as string,
// console.log(process.env.NODE_ENV, "NODE_ENV");
// console.log(process.env.TEST_WEBHOOK_URL, "process.env.TEST_WEBHOOK_URL");

const buildLogPath = path.join(__dirname, "../buildLog.txt");
const errorLogPath = path.join(__dirname, "../errorLog.txt");

const buildLog = fs.readFileSync(buildLogPath, { encoding: "utf-8" });
const errorLog = fs.readFileSync(errorLogPath, { encoding: "utf-8" });

const embedContents = (content: string) => {
  return new EmbedBuilder().setTitle(content).setColor(0x00ffff);
};

const date = new Date();

const time = `${date.getFullYear()}년 ${date.getMonth()}월 ${date.getDay()}일 ${date.getHours()}시 ${date.getMinutes()}분 ${date.getSeconds()}초`;

if (buildLog.includes("success")) {
  const buildTextAttach = new AttachmentBuilder(
    Buffer.from(buildLog, "utf-8"),
    { name: "buildLog.txt" }
  );

  webhookClient
    .send({
      username: "petBot",
      avatarURL:
        "https://cdn.discordapp.com/app-icons/1044621624864940163/87fe18353f90a7a4c275be945afc14e5.png?size=512",
      embeds: [embedContents(`${time} 넥스트 빌드 종료 \n빌드타임 : ??`)],
      files: [buildTextAttach],
      content: `종료시간 : ${new Date().toISOString()}`,
    })
    .then((d) => d)
    .catch((e) => e);
} else {
  const errorTextAttach = new AttachmentBuilder(
    Buffer.from(errorLog, "utf-8"),
    { name: "errorLog.txt" }
  );

  webhookClient
    .send({
      username: "petBot",
      avatarURL:
        "https://cdn.discordapp.com/app-icons/1044621624864940163/87fe18353f90a7a4c275be945afc14e5.png?size=512",
      embeds: [embedContents(`${time} 넥스트 빌드 종료`)],
      files: [errorTextAttach],
    })
    .then((d) => d)
    .catch((e) => e);
}
