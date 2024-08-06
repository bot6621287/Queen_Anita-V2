//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "ASIA/COLOMBO";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "94711772458";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "TRUE ";
global.wlcm = process.env.WELCOME || "TRUE ";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "TRUE ";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUpFS0xoQjdsaUptd05qMEFZaFNmdXZ5LzZQQ3BPZUtkeTZJbW1kSjFFWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNUI0cmV0bjlCQ0xDeGQ4RGJIRVBicDVyQzhtVmR6OFlTL0Q1RStLSHpXQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVUEpwcmFzWXQ4c09tOXBLNmt1N3ArV0VLOHRUc080aWkzSHRuTXJ5MUZnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpQTFkNmZ0b0ljNHNNMVlIU1lmUE53dlB3K1RTN3ZiaFZLUVh3alZ0Y2lFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNLU3lhank5RVd4c3pwdmFRUnVWK0syQnRDc3NJTmlHK1htUEMrcFhvMk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhjbVhtMCtnbkNYZ2FZNFdUWUFrT0x4ZEJBSFpOR1grZTltMERGWGpKeW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0xGdW5sZWtmTDFxb3E4ZmNFamhFc1hDMmtxSjdReVpmZFQvYjFubERXYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUmZNcXdiSDF6ZXlrdTkzNjEyWlR2S2NYZGtyR0tFMmpEZVloS1AxWm1sUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImY3TW94cTNmeERORWxhUzlOUThLdnloL0dKR0phQ3AwLzdQN2QyVGdGS1pEZWdZdGk1MjY2SzZzdjhWMFZBcmpSN0dPMWR0NUhFampmVCtYTzROeUNnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTksImFkdlNlY3JldEtleSI6ImV5d0RmYXdVMUFEY2tvR2VDK1UwRlBWSmpmZThIRGJhYVN5YzRId3huRFE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InpaSVQ0YlpNVHRPelFZbF93WFZQcnciLCJwaG9uZUlkIjoiMDAyNmUxOTQtNzM0OC00Yzg3LWIzMDAtMzJlOWQxNDgxZmM5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldBZGlJcGVDa1Voc2pKNjJkcU1QOENRb3lhUT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3Sjk3aFVJV1JoUHZiTU5HeFg1S2g2U3F3Ujg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVkY4SzVHRFciLCJtZSI6eyJpZCI6Ijk0NzExNzcyNDU4OjE3QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPVHgzOTBHRUxYRnhyVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ5RUo1Y012L1MrTjhNNDFuUWtpRGZnZ0JZSnpLaFFaK0pORjRJdmhrejAwPSIsImFjY291bnRTaWduYXR1cmUiOiI5T0Q2VUVuL3RRSDVZc3NvMDJ3WEcwaUpUL2RkT1NVT3gzSy9tWVY2VUc0Sm9RL2syTW1ZTkNQVDhpT2V1c3VXREFsblFub2lXeFBWSXRmUncxU01EUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQ1dTWWJvVVhEVWRKSGVNbjQ0SkoxWmZNVE1hQ3RaTEtJOG9xa1ZvRHJnVHRCQVlGUjg2aWZlSENmTXdvMUt2NUdaWlhDNG1Ma0YrV3hVY3VqbzFCQmc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcxMTc3MjQ1ODoxN0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjaENlWERMLzB2amZET05aMEpJZzM0SUFXQ2N5b1VHZmlUUmVDTDRaTTlOIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyOTE3NTcxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUQxWiJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`NITTAVA-V2™`",
  author: process.env.PACK_AUTHER || "NITTAVA MD" ,
  packname: process.env.PACK_NAME || "NITTAVA MD",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "TASHINDU MANURANGA" ,
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "NITTAVA ").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
