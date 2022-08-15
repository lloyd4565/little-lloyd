
 /**

   * Create By Dika Ardnt.

   * Contact Me on wa.me/6288292024190

   * Follow https://github.com/DikaArdnt

*/

const fs = require('fs')

const chalk = require('chalk')

// Website Api

global.APIs = {

	zenz: 'https://zenzapis.xyz',

}

// Apikey Website Api

global.APIKeys = {

	'https://zenzapis.xyz': '8d851a96f8',

}

// Other

global.owner = ['27799400929']

global.premium = ['27799400929']

global.packname = 'Rukia Md'

global.author = 'WhatsApp Bot'

global.sessionName = 'rukia'

global.prefa = ['','!','.','🐦','🐤','🗿']

global.sp = '⭔'

global.mess = {

    success: '✓ Success',

    admin: 'Group Admin Special Features!',

    botAdmin: 'Bots Must Be Admins First!',

    owner: 'Bot owner Special Features',

    group: 'Features Used Only For Groups!',

    private: 'Features Used Only For Private Chat!',

    bot: 'Bot owner Special Features',

    wait: 'Loading...',

    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',

}

global.limitawal = {

    premium: "Infinity",

    free: 100

}

global.thumb = fs.readFileSync('./lib/isman.jpg')

global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)

fs.watchFile(file, () => {

	fs.unwatchFile(file)

	console.log(chalk.redBright(`Update'${__filename}'`))

	delete require.cache[file]

	require(file)

})






