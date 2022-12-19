import { EmbedBuilder, WebhookClient } from "discord.js";
import * as dotenv from "dotenv";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import envSelector from "./envSelector";

dotenv.config();
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Seoul");

const env = envSelector("develop");

const webhookClient = new WebhookClient({
  url: env.webhookURL,
});

const embedContents = (content: string) => {
  return new EmbedBuilder()
    .setTitle(content)
    .setColor(0xffd400)
    .setDescription(`${time}`);
};

const date = dayjs().tz();

const time = `빌드 시작 : ${(date.month() + 1).toString()}/${date.date()} - ${
  date.hour() < 10 ? "0" + date.hour() : date.hour()
}:${date.minute()}:${date.second()}
마지막으로 업데이트 함 : ??
`;

webhookClient
  .send({
    username: "petBot",
    avatarURL:
      "https://cdn.discordapp.com/app-icons/1044621624864940163/87fe18353f90a7a4c275be945afc14e5.png?size=512",
    embeds: [embedContents(`petBook Web Client 빌드 시작`)],
    content: `빌드중... \n시작시간 : ${date.format("YYYY-MM-DDTHH:mm:ss.SSSZ")}
    `,
  })
  .then((d) => d)
  .catch((e) => e);
