//  ╔⧉༻ [ 𝐕𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║ We won't be responsible for any kind of ban due to this bot.
//  ║ VoxBot was made for fun purpose and to make group management easier.
//  ║ It's your concern if you spam and gets your account banned.
//  ║ Also, Forks won't be entertained.
//  ║ If you fork this repo and edit plugins, it's your concern for further updates.
//  ║ Forking Repo is fine. But if you edit something we will not provide any help.
//  ║ In short, Fork At Your Own Risk.
//  ║
//  ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ VօxB໐t вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("../../global.js");
const ppath = require("path");
const psname = ppath.basename(__filename);
const pfname = psname.slice(0, -3).toLowerCase();
module.exports = async (VօxB໐t, νℓкhat, update, store) => {
  try {
    if (!VօxB໐t.args) {
      await VօxB໐t.sendMessage(νℓкhat.chat, {
        react: {
          text: "❌",
          key: νℓкhat.key,
        },
      });
      return νℓкhat.reply(
        `*😥Sorry:* _${VօxB໐t.pushname || VօxB໐t.Tname}_

*❌Error* 
> _Could not find any text and code in context!_

*⚡Usage* 
> _${VօxB໐t.prefix}${pfname} text | language-code_`
      );
    }

    let text = "";
    let langCode = "en";
    for (var i = 0; i < VօxB໐t.args.length; i++) {
      if (VօxB໐t.args[i] == `=`) {
        langCode = VօxB໐t.args[i + 1];
        break;
      }
      text += VօxB໐t.args[i] + " ";
    }
    if (text.length > 200) {
      await VօxB໐t.sendMessage(νℓкhat.chat, {
        react: {
          text: "❌",
          key: νℓкhat.key,
        },
      });
      return νℓкhat.reply(
        `*😥Sorry:* _${VօxB໐t.pushname || VօxB໐t.Tname}_

*❌Error* 
> _Total characters should be less than 200!_

*⚡Usage* 
> _${VօxB໐t.prefix}${pfname} text | language-code_`
      );
    } else {
      VօxB໐t.axios({
        method: "get",
        url:
          "https://magneum.vercel.app/api/text2speech?q=" +
          VօxB໐t.args.join(" "),
        headers: {
          accept: "*/*",
          "accept-language": "en-US,en;q=0.9",
          "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
      }).then(async (response) => {
        var mData = response.data;
        console.log(mData);
        return await VօxB໐t.sendMessage(
          νℓкhat.chat,
          {
            audio: { url: mData.meta.url },
            mimetype: "audio/mpeg",
            fileName: "TalkToSpeech" + ".mp3",
            headerType: 4,
            contextInfo: {
              externalAdReply: {
                title: "📢Talk To Speech",
                body: "❣️Made by xhadr.",
                renderLargerThumbnail: true,
                mediaUrl: "https://i.postimg.cc/qBSnwdzq/White.png",
                mediaType: 1,
                thumbnail: await VօxB໐t.getBuffer(
                  "https://i.postimg.cc/qBSnwdzq/White.png"
                ),
                sourceUrl: "https://bit.ly/xhadr",
              },
            },
          },
          { quoted: νℓкhat }
        );
      });
    }
  } catch (error) {
    return VօxB໐t.grab(VօxB໐t, νℓкhat, error);
  }
};
