import { EmbedBuilder, WebhookClient } from "discord.js";
import * as dotenv from "dotenv";
import envSelector from "./envSelector";

dotenv.config();

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

const initDate = new Date().toString().replace("GMT+0000", "GMT+0900");
const parsedDateStr = Date.parse(initDate);
const date = new Date(parsedDateStr);
const kstDate = date.toString();

const time = `날짜  ${(date.getMonth() + 1).toString()}/${date.getDate()}
시간  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}
마지막 업데이트  ??
`;

webhookClient
  .send({
    username: "petBot",
    avatarURL:
      "https://cdn.discordapp.com/app-icons/1044621624864940163/87fe18353f90a7a4c275be945afc14e5.png?size=512",
    embeds: [embedContents(`petBook Web Client 빌드 시작`)],
    content: `빌드중... \n시작시간 : ${kstDate}
    `,
  })
  .then((d) => d)
  .catch((e) => e);
