import { EmbedBuilder, WebhookClient, AttachmentBuilder } from "discord.js";
import * as dotenv from "dotenv";
import fs from "fs";
import path from "path";
import envSelector from "./envSelector";

dotenv.config();

const env = envSelector("develop");

console.log("post runner start");

const webhookClient = new WebhookClient({
  url: env.webhookURL,
});

const buildLogPath = path.join(__dirname, "../buildLog.txt");
const errorLogPath = path.join(__dirname, "../errorLog.txt");

const buildLog = fs.readFileSync(buildLogPath, "utf-8");
const errorLog = fs.readFileSync(errorLogPath, "utf-8");
const embedContents = (content: string) => {
  return new EmbedBuilder().setTitle(content).setDescription(`${time}`);
};

const initDate = new Date().toString().replace("GMT+0000", "GMT+0900");
const parsedDateStr = Date.parse(initDate);
const date = new Date(parsedDateStr);
const kstDate = date.toString();

const time = `날짜  ${(date.getMonth() + 1).toString()}/${date.getDate()}
시간  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}
빌드 타임  ??
`;

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
      // embeds: [embedContents(`${time} 빌드 성공! \n빌드타임 : ??`)],
      embeds: [
        embedContents(`petBook Web Client 빌드 성공 !`).setColor(0x008d62),
      ],
      files: [buildTextAttach],
      content: `빌드 성공\n종료시간 : ${kstDate}`,
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
      embeds: [
        embedContents(`petBook Web Client 빌드 실패`).setColor(0x9b111e),
      ],
      files: [errorTextAttach],
      content: `빌드 실패\n종료시간 : ${kstDate}`,
    })
    .then((d) => d)
    .catch((e) => e);
}
