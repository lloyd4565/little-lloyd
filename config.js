
const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'ad9e14dd7c',
}

// Other
global.owner = ['6282237949722', '6285223036066', '6285691136947', '6282311308506']
global.packname = 'ChiMan Bot'
global.author = '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'
global.sessionName = 'IsmanChanel'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ 𝕾𝖚𝖈𝖈𝖊𝖘𝖘',
    admin: '𝕱𝖎𝖙𝖚𝖗 𝕶𝖍𝖚𝖘𝖚𝖘 𝕬𝖉𝖒𝖎𝖓 𝕲𝖗𝖔𝖚𝖕!',
    botAdmin: '𝕭𝖔𝖙 𝕳𝖆𝖗𝖚𝖘 𝕸𝖊𝖓𝖏𝖆𝖉𝖎 𝕬𝖉𝖒𝖎𝖓 Terlebih 𝕯𝖆𝖍𝖚𝖑𝖚!',
    owner: '𝕱𝖎𝖙𝖚𝖗 𝕶𝖍𝖚𝖘𝖚𝖘 𝕺𝖜𝖓𝖊𝖗 𝕭𝖔𝖙',
    group: '𝕱𝖎𝖙𝖚𝖗 𝕯𝖎𝖌𝖚𝖓𝖆𝖐𝖆𝖓 𝕳𝖆𝖓𝖞𝖆 𝖀𝖓𝖙𝖚𝖐 𝕲𝖗𝖔𝖚𝖕!',
    private: '𝕱𝖎𝖙𝖚𝖗 𝕯𝖎𝖌𝖚𝖓𝖆𝖐𝖆𝖓 𝕳𝖆𝖓𝖞𝖆 𝖀𝖓𝖙𝖚𝖐 𝕻𝖗𝖎𝖛𝖆𝖙𝖊 𝕮𝖍𝖆𝖙!',
    bot: '𝕱𝖎𝖙𝖚𝖗 𝕶𝖍𝖚𝖘𝖚𝖘 𝕻𝖊𝖓𝖌𝖌𝖚𝖓𝖆 𝕹𝖔𝖒𝖔𝖗 𝕭𝖔𝖙',
    wait: '𝕷𝖔𝖆𝖉𝖎𝖓𝖌...',
}
global.thumb = fs.readFileSync('./lib/ismanChnl.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
