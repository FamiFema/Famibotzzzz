/*
𝐀𝐮𝐭𝐡𝐨𝐫 : AKAZA_MD
base kannabot
fitur gabungan dari
cheemsbot
naomd
claramd
na md
van
kontributor pada project gw kagak ada gw gabungin sendiri
*/

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone'
import { group } from 'console'
import PhoneNumber from 'awesome-phonenumber'

/*============= WAKTU =============*/
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
    let wktugeneral = `${wibh}:${wibm}:${wibs}`
    
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

/*============= MAIN INFO =============*/
global.owner = [['6285726333147','⚡FᴀᴍɪAɴᴅᴀʀᴀ⚡', true]]
global.mods = []
global.prems = ['62857263331472']
global.nomorbot = '62857263331472'
global.nomorown = '6285726333147'
global.nomorwa = '0'
global.site = '              '

/*============= WATERMARK =============*/
global.readMore = readMore
global.author = '⚡FᴀᴍɪAɴᴅᴀʀᴀ⚡'
global.namebot = '🤖FᴀᴍɪBᴏᴛᴢᴢᴢ🤖'
global.wm = '🤖FᴀᴍɪBᴏᴛᴢᴢᴢ🤖 BY ⚡FᴀᴍɪAɴᴅᴀʀᴀ⚡'
global.watermark = wm
global.botdate = `⫹⫺ DATE: ${week} ${date}\n⫹⫺ 𝗧𝗶𝗺𝗲: ${wktuwib}`
global.bottime = `T I M E : ${wktuwib}`
global.stickpack = `Sticker Dibuat dengan ${namebot}\ngithub.com/Aal-oss\n\nAKAZA_MDV65\n${owner}`
global.stickauth = `🤖FᴀᴍɪBᴏᴛᴢᴢᴢ🤖 BY ⚡FᴀᴍɪAɴᴅᴀʀᴀ⚡`
global.week = `${week} ${date}`
global.wibb = `${wktuwib}`

/*============= OWNER INFO =============*/
global.nameown1= '⚡FᴀᴍɪAɴᴅᴀʀᴀ⚡'
global.nameown2 = '⚡FᴀᴍɪAɴᴅᴀʀᴀ⚡'
/*============= MEDIA LINK =============*/
global.Linkgc = 'Bentar'
global.lynk = ''


//*============= SOSMED =============*/
global.sig = '-'
global.sgh = 'https://github.com/Aal-oss' //github
global.sgc = '-' //group whatsapp
global.sdc = '-' //discord
global.snh = '-'

/*============= DONASI =============*/
global.pdana = '-'
global.povo = '-'
global.pgopay = '085726333147'
global.plinkaja = '-' //link aja
global.ppulsa = '085726333147'
global.ppulsa2 = '085726333147'
global.psaweria = '-'


/*============= TAMPILAN =============*/
global.ListHargaSewa = '├ 5 Hari IDR 5.000\n├ 7 Hari IDR 7.000\n├ 15+5 Hari IDR 12.000\n├ 30 Hari IDR 20.000'
global.LyAtas1 = '☰ ━━━ ❨'
global.LyAtas2 = '❩ ━━┄┈ •⟅'
global.Ly = '┃'
global.lybwh = '┗━━┈┈ ⳻⳻'
global.sym = '◈▻'
global.sym2 = '➭'
global.dmenut = 'ଓ═┅═━–〈' //top
global.dmenub = '┊↬' //body
global.dmenub2 = '┊' //body for info cmd on Default menu
global.dmenuf = '┗––––––––––✦' //footer
global.dashmenu = '┅═┅═❏ *HALAMAN UTAMA* ❏═┅═┅'
global.cmenut = '❏––––––『' //top
global.cmenuh = '』––––––' //header
global.cmenub = '┊✦ ' //body
global.cmenuf = '┗━═┅═━––––––๑\n' //footer
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     '
global.pmenus = '✦'
global.htki = '––––––『' // Hiasan Titile (KIRI)
global.htka = '』––––––' // Hiasan Title  (KANAN)
global.lopr = 'Ⓟ' //LOGO PREMIUM ON MENU.JS
global.lolm = 'Ⓛ' //LOGO LIMIT/FREE ON MENU.JS
global.htjava = '⫹⫺'    //hiasan Doang :v
global.hsquere = ['⛶','❏','⫹⫺']

/*============= RESPON =============*/
global.stiker_wait = '⏳Mohon Tunggu...'
global.wait = '⏳Mohon Tunggu...'
global.eror = '⚠️ERROR⚠️'

/*============= RESPON GAME =============*/
global.benar = '✅ BETUL'
global.salah = '❌ SALAH'
global.dikit = "Dikit Lagi, Semangat!!"


/*============= RPG GAME =============*/
global.multiplier = 100 // The higher, The harder levelup
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      agility: '🤸‍♂️',
      arc: '🏹',
      armor: '🥼',
      bank: '🏦',
      bibitanggur: '🍇',
      bibitapel: '🍎',
      bibitjeruk: '🍊',
      bibitmangga: '🥭',
      bibitpisang: '🍌',
      bow: '🏹',
      bull: '🐃',
      cat: '🐈',
      chicken: '🐓',
      common: '📦',
      cow: '🐄',
      crystal: '🔮',
      darkcrystal: '♠️',
      diamond: '💎',
      dog: '🐕',
      dragon: '🐉',
      elephant: '🐘',
      emerald: '💚',
      exp: '✉️',
      fishingrod: '🎣',
      fox: '🦊',
      gems: '🍀',
      giraffe: '🦒',
      gold: '👑',
      health: '❤️',
      horse: '🐎',
      intelligence: '🧠',
      iron: '⛓️',
      keygold: '🔑',
      keyiron: '🗝️',
      knife: '🔪',
      legendary: '🗃️',
      level: '🧬',
      limit: '🌌',
      lion: '🦁',
      magicwand: '⚕️',
      mana: '🪄',
      money: '💵',
      mythic: '🗳️',
      pet: '🎁',
      petFood: '🍖',
      pickaxe: '⛏️',
      pointxp: '📧',
      potion: '🥤',
      rock: '🪨',
      snake: '🐍',
      stamina: '⚡',
      strength: '🦹‍♀️',
      string: '🕸️',
      superior: '💼',
      sword: '⚔️',
      tiger: '🐅',
      trash: '🗑',
      uncommon: '🎁',
      upgrader: '🧰',
      wood: '🪵'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}


/*============= WEB API KEY =============*/
global.openai = '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'  //api key bisa didapatkan dari https://openai.com/api/
global.org = 'org-SkdWOWprhQzjp45mdP6Yg6Q0'  //openAI Organization name
global.lolkey = 'd08ee7b5f60be15286356e40' //buy API at https://api.lolhuman.xyz
global.lankey = 'HYoauZFG' //buy API at https://api.lannn.me/
global.botcahx = 'ueaAzx8P' //https://api.botcahx.live/
global.uptime = 'u2216792-9a23a0f8d019389b5caec37f' // Masukin APIKEY uptimerobot kamu disini ===== https://uptimerobot.com/dashboard?ref=website-header#mySettings
global.xzn = 'Akaza' //daftar sendiri jika key habis https://xzn.wtf/
global.xyro = 'AdKElWTHbd' //https://api.xyroinee.xyz/
global.ryzen = 'd2d8bf10'
//kalo mau work ambil apikei di https://api.ryzendesu.com/
global.hugging = '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'
//kalo ini mah no limit
global.APIs = {
  // name: 'https://website'
  lol: 'https://api.lolhuman.xyz',
  xzn : 'https://xzn.wtf',
  xyro : 'https://api.xyroinee.xyz' //web api terserah ganti apa aja (buat welcome sama leave gc)
}

global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.lolhuman.xyz': 'd08ee7b5f60be15286356e40',
  'https://xzn.wtf': 'Akaza',
}

/*============= OTHER =============*/
global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.dpdf = 'application/pdf'
global.drtf = 'text/rtf'
//OPTIONS
global.optsnsfw = true // Untuk mematikan Dan Menyalakan Nsfw
global.premnsfw = true // Nsfw Mode Premium?
global.thumb = 'https://telegra.ph/file/1d4fd6e113c69c7546590.jpg' //Main Thumbnail
global.imagebot = 'https://telegra.ph/file/1d4fd6e113c69c7546590.jpg'
global.giflogo = 'https://telegra.ph/file/1d4fd6e113c69c7546590.jpg'
global.thumbs = ['https://telegra.ph/file/1d4fd6e113c69c7546590.jpg']
global.thumbnailUrl = [
  'https://telegra.ph/file/1d4fd6e113c69c7546590.jpg'
]
global.fotonya1 = 'https://telegra.ph/file/1d4fd6e113c69c7546590.jpg' //ganti jadi foto bot mu
global.fotonya2 = 'https://telegra.ph/file/1d4fd6e113c69c7546590.jpg' //ini juga ganti 
global.flaaa2 = [
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=",
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=",
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=",
 "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=",
 "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text="
]
global.fla = [
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=",
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=",
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=",
 "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=",
 "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text="
]
global.hwaifu = ['https://telegra.ph/file/a7ac2b46f82ef7ea083f9.jpg']
global.thumblvlup = [
  'https://telegra.ph/file/1d4fd6e113c69c7546590.jpg',
  'https://telegra.ph/file/6bc4e87932d7ea57b79ef.jpg',
  'https://telegra.ph/file/bc2302ee38daa46c094ea.jpg',
  'https://telegra.ph/file/c552a9fb2848811247f82.jpg'
]

global.dtu = 'INSTAGRAM'
global.urlnya = "-"
global.dtc = 'CALL OWNER'
global.phn = '08572333147'


/*============= JANGAN DIUBAH =============*/
global.fsizedoc = '99999999999999'
global.fpagedoc = '999'
global.thumbdoc = 'https://telegra.ph/file/1d4fd6e113c69c7546590.jpg'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
