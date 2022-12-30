import { EmbedBuilder, WebhookClient, AttachmentBuilder } from "discord.js";
import * as dotenv from "dotenv";
import fs from "fs";
import path from "path";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import envSelector from "./envSelector";

dotenv.config();
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Seoul");

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

const date = dayjs().tz();

const time = `빌드 종료 : ${(date.month() + 1).toString()}/${date.date()} - ${
  date.hour() < 10 ? "0" + date.hour() : date.hour()
}:${date.minute()}:${date.second()}
빌드 하는데 걸린 시간 : ??
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
      content: `빌드 성공\n종료시간 : ${date.format(
        "YYYY-MM-DDTHH:mm:ss.SSSZ"
      )}`,
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
      content: `빌드 실패\n종료시간 : ${date.format(
        "YYYY-MM-DDTHH:mm:ss.SSSZ"
      )}`,
    })
    .then((d) => d)
    .catch((e) => e);
}
