let handler = async (m, { conn }) => {
    let __timers = (new Date - global.DATABASE._data.users[m.sender].lastclaim)
    let _timers = (43200000 - __timers)
    let timers = clockString(_timers) 
    let user = global.DATABASE._data.users[m.sender]
    if (new Date - global.DATABASE._data.users[m.sender].lastclaim > 43200000) {
        conn.reply(m.chat, `Yeay🥳\n\nKamu mengclaim dan mendapatkan *1000* 💵money + *1* 🥤potion 
        + *5* limit dan +500xp`, m)
        user.money += 1000
        user.potion += 1
        user.limit += 5
        user.xp += 500
        user.lastclaim = new Date * 1
    } else conn.reply(m.chat, `silahkan tunggu *${timers}* lagi untuk bisa mengclaim lagi`, m)
}
handler.help = ['claim']
handler.tags = ['rpg']
handler.command = /^claim(xp)?(limit)?|daily$/i

handler.fail = null

module.exports = handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
