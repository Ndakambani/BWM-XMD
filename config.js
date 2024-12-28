const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VVXY+qSBD9Kze9jzgrYCOjySSLAoIooqiom31ooMFWvoRGxBv/+wYdM5Pcj53lqdN0nzpVdU71d5CkpMAGrkH/O8hyckYUN0taZxj0waAMApyDFvARRaAP5tNw5AuC3xaX5z2GUpe0Y5upFtpIb6enNDOmA2pMB2LCzd/ArQWy0o2I9xvA68hlFX16XfCvY93eVVqu2djh8QpeM0nS6Cj2bM52OpoyfQO3BhGRnCShku1xjHMUGbi2EMm/Rn80rm3H3Bicu12vxzO1zbS78TnBayZRpPbZFi+BsIZJtuPg1+iPd2N1cvQVwYq60KKUHRWjc3AdTDWxa2jTSLvyG7NIJka0etAvSJhgX/dxQgmtv1z30szWFpTJGPVSneTuZJJ0zAMXtZd+5JUruULmgRhHHa+LrxEvL8qAWWxTotfe6oSja9eW5Iu+dtPFQE8XnRJu9WGvtNqR/pm4lT+1cvw/da+UGauIe4TW16XrHKuOc7kUXmVziS65E+gqoa2ZO0afqNuv0VeF+KIcKOVUsjRWSbsyel0xZCp+NFfThVGfTssjgybcJoYf9BEt89+xJGK0HITmWJ5fVWPF+HR+mEy3Y3228KgyTytvk3KWslBFY0Hb8/3QPdkFOTITQZ9ws41KrlEc9C7ZrJd0S4TI2KLW60F6u2d0xLXugz53a4Ech6SgOaIkTe57otgCyD/b2MsxvZcXzGTibCkrtzsMw6qX5DTiwxNmDBFeT7BS0flcX1YKneVZ9QZaIMtTDxcF9jVS0DSvp7goUIgL0P/73qkm6RzHKcVj4oM+4LsdUeS4nsAJ/F/Fn9Ue0QJl2Z8JpqAFgjyNpxj0aV7iFrhfEAW1J8uqpHQHYgfy/JDjBnAgcF2uJ7+qKtekGD+CLkmMC4rirMmsI/Cw+8p2b/+0QIIv9KGfJusO1wIByQu6SsosSpH/FNfzJ/K8tEyoXSfesFngHPTZj21MKUnCosmsTFDu7ckZD5s8QD9AUYFvLeDjM/FwgwfiII3mon2YO+Tkz6TQotexM28qt0+Tx5HADdxAFLyXwOfhC/RF/qX3ysEXzmc95HY8FmMBNOV4WLe580sl9Tq5JKOd6KfHGGE6iwNGpcd6vjXTuxoeEsA59p9VdpF3LLNlesTJb3D3QbpXrFGupPPTqhi6jrDtarKITQV+wn1IC/S/f4zLYeo3eEPO3pjGmgdNt5o4P6ihz8MfBZGg5jSQzJEy+Sbr36bSQpe+/fGNu/f9vSMNnI8pIlHRRJptxqH0Oq8g7pTVdivZkmRIUiPWZwefjnwo3s87kDPxMrGIU49s3ih7Eyc7ZhVUi4vGWCs5Mbaye5gP2Z+BgD6IlLHpQx9XG5deatHpRbAmG89wajjkoXCITkk+zbN6ao8WoQX3gikXZBt6piouik4U6pP6yGXCqN2G0ppTLyttZg2rtybaQ0mfg3VmjD1whKxaYlVd77Hkbqt4t9lquEfZUxXuNnTlhGWQMY6lGe5k5R8OcrYVnImf6COWhcdSWOREG3thGOTVfmNK1XNW3GdV9P5GkHcXP3QXEHwfue8d+c/OfViAvbU+YbwP8V/IbLBBPcZcbo7CFUbF/khJfra5087wZgN3umgfOEmoY4mHrETBrfF2FiEapHkM+qCIXQRaIEIFlT4s/LOpwLZAXEtZZlNEn84HUvNNYQlu/wKWksNGnAgAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Angel di Maria ✨💫",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "ANGEL DI MARIA",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'Angel di Maria ✨💫',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

