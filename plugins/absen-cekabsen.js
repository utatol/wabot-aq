let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) throw `_*Belom ada yang absen!*_\n\n*${usedPrefix}mulaiabsen* - untuk memulai absen`

    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let absen = conn.absen[id][1]
    let list = absen.map((v, i) => `│ ${i + 1}. @${v.split`@`[0]}`).join('\n')
    conn.reply(m.chat, `*「 ABSEN 」*
Tanggal: ${date}
${conn.absen[id][2]}
━━━━━━━━━━━━━━
Total: ${absen.length}
━━━━━
${list}
━━━━━━━━━━━━━━
`, m, { contextInfo: { mentionedJid: absen } })
}
handler.help = ['cekabsen']
handler.tags = ['absen']
handler.command = /^cekabsen$/i
handler.group = false
module.exports = handler