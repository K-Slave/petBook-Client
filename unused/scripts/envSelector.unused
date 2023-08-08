const envSelector = (key: "develop" | "product") => {
  const envObj = {
    channelId: "",
    webhookId: "",
    webhookToken: "",
    webhookURL: "",
  };

  if (key === "develop") {
    envObj.channelId = process.env.TEST_CHANNEL_ID
      ? process.env.TEST_CHANNEL_ID
      : "";
    envObj.webhookId = process.env.TEST_WEBHOOK_ID
      ? process.env.TEST_WEBHOOK_ID
      : "";
    envObj.webhookToken = process.env.TEST_WEBHOOK_TOKEN
      ? process.env.TEST_WEBHOOK_TOKEN
      : "";
    envObj.webhookURL = process.env.TEST_WEBHOOK_URL
      ? process.env.TEST_WEBHOOK_URL
      : "";

    return envObj;
  }

  if (key === "product") {
    envObj.channelId = process.env.PETBOOK_CHANNEL_ID
      ? process.env.PETBOOK_CHANNEL_ID
      : "";
    envObj.webhookId = process.env.PETBOOK_WEBHOOK_ID
      ? process.env.PETBOOK_WEBHOOK_ID
      : "";
    envObj.webhookToken = process.env.PETBOOK_WEBHOOK_TOKEN
      ? process.env.PETBOOK_WEBHOOK_TOKEN
      : "";
    envObj.webhookURL = process.env.PETBOOK_WEBHOOK_URL
      ? process.env.PETBOOK_WEBHOOK_URL
      : "";
    return envObj;
  }

  return envObj;
};

export default envSelector;
