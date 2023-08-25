import yargs from 'yargs'
import cfonts from 'cfonts'
import { fileURLToPath } from 'url'
import { join, dirname } from 'path'
import { createRequire } from 'module'
import { createInterface } from 'readline'
import { setupMaster, fork } from 'cluster'
import { watchFile, unwatchFile } from 'fs'
import server from './keep_alive.js' //bisa di ganti ama yang bawah tinggal tambain //
//import server from './index2.html' //nah yang ini maksut gw yang atas tambah// yang ini hapus//
// https://stackoverflow.com/a/50052194
const { say } = cfonts
const rl = createInterface(process.stdin, process.stdout)
const __dirname = dirname(fileURLToPath(import.meta.url))
const require = createRequire(__dirname) // Bring in the ability to create the 'require' method
const { name, author } = require(join(__dirname, './package.json')) // https://www.stefanjudis.com/snippets/how-to-import-json-files-in-es-modules-node-js/

say('STARTING MODULE PLISS WAIT', { font: 'chrome', align: 'center', gradient: ['blue', 'green'] })
say(`Author: ⚡FᴀᴍɪAɴᴅᴀʀᴀ⚡`, { font: 'console', align: 'center', gradient: ['blue', 'green'] })

say('🤖FᴀᴍɪBᴏᴛᴢᴢᴢ🤖', { font: 'chrome', align: 'center', gradient: ['blue', 'green'] })
say(`WA BOT BY ⚡FᴀᴍɪAɴᴅᴀʀᴀ⚡`, { font: 'console', align: 'center', gradient: ['blue', 'green'] })

setTimeout(grafik, 3000);
//function definition
function grafik() {
say('🤖FᴀᴍɪBᴏᴛᴢᴢᴢ🤖', { font: 'chrome', align: 'center', gradient: ['blue', 'green'] })
say(`Author: ⚡FᴀᴍɪAɴᴅᴀʀᴀ⚡`, { font: 'console', align: 'center', gradient: ['blue', 'green'] })
}
setTimeout(b, 5000);
//function definition
function b() {
say('CEKKING RESOURCE', { font: 'chrome', align: 'center', gradient: ['blue', 'green'] })
say(`Author: AKAZAMD`, { font: 'console', align: 'center', gradient: ['blue', 'green'] })
}
setTimeout(k, 6000);
//function definition
function k() {
say('RESOURCE ACCEPT ✅', { font: 'chrome', align: 'center', gradient: ['blue', 'green'] })
say(`Author: AKAZAMD`, { font: 'console', align: 'center', gradient: ['blue', 'green'] })
}

var isRunning = false
/**
 * Start a js file
 * @param {String} file `path/to/file`
 */
function start(file) {
  if (isRunning) return
  isRunning = true
  let args = [join(__dirname, file), ...process.argv.slice(2)]
  say([process.argv[0], ...args].join(' '), { font: 'console', align: 'center', gradient: ['red', 'magenta'] })
  setupMaster({ exec: args[0], args: args.slice(1) })
  let p = fork()
  p.on('message', data => {
    console.log('[✅RECEIVED]', data)
    switch (data) {
      case 'reset':
        p.process.kill()
        isRunning = false
        start.apply(this, arguments)
        break
      case 'uptime':
        p.send(process.uptime())
        break
    }
  })
  p.on('exit', (_, code) => {
    isRunning = false
    console.error('[❗]Exited with code:', code)
    if (code !== 0) return start(file)
    watchFile(args[0], () => {
      unwatchFile(args[0])
      start(file)
    })
  })
  let opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
  if (!opts['test'])
    if (!rl.listenerCount()) rl.on('line', line => {
      p.emit('message', line.trim())
    })
  // console.log(p)
}
setTimeout(l, 10000);
function l() {
start('main.js')}