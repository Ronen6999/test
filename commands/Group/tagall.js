const { tlang } = require('../../lib/scraper')

module.exports = {
    name: 'tagall',
    category: 'group',
    desc: 'Tags every person of group.',
    async exec(citel, Void,args,isGroup) {
        if (!citel.isGroup) return citel.reply(tlang().group);
        if (!isAdmins) return citel.reply(tlang().admin);
        const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat)
      .catch((e) => {}) : "";
      const participants = citel.isGroup ? await groupMetadata.participants : "";
        let textt = `âââȘă đĄïž *Tag All* đĄïž ăâȘââ
âČ *Message :* ${args.join(" ") ? args.join(" ") : "blank"}\n\n`;
        for (let mem of participants) {
            textt += `đ @${mem.id.split("@")[0]}\n`;
        }
        Void.sendMessage(citel.chat, {
            text: textt,
            mentions: participants.map((a) => a.id),
        }, {
            quoted: citel,
        });
    }
 }