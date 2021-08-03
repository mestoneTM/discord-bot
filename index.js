const moment = require('moment')
const Discord = require("discord.js")
const bot = new Discord.Client()
bot.on('message', async message => {
    if (message.content.startsWith(`.help`)) {
        let newEmbed = new Discord.MessageEmbed()
            .setColor('#990000')
            .setTitle('ℂ𝕆𝕄𝕄𝔸ℕ𝔻𝔼𝕊')
            .setURL('https://youtube.com')
            .setDescription(`𝒾𝒸𝒾 𝓉𝓊 𝓉𝓇𝑜𝓊𝓋𝑒𝓇𝒶𝓈 𝓉𝑜𝓊𝓉𝑒 𝓁𝑒𝓈 𝒸𝑜𝓂𝓂𝒶𝓃𝒹𝑒𝓈 𝓊𝓉𝒾𝓁𝑒𝓈 𝒹𝓊 𝒷𝑜𝓉 \n\n\n\n`)


            .addFields({
                name: '.gif',
                value: '𝓂𝑜𝓃𝓉𝓇𝑒 𝓉𝑜𝓊𝓉𝑒 𝓁𝑒𝓈 𝓈𝑜𝓇𝓉𝑒 𝒹𝑒 𝑔𝒾𝒻 𝓊𝓉𝒾𝓁𝒾𝓈𝒶𝒷𝓁𝑒'
            }, {
                name: '.salutation',
                value: '𝓂𝑜𝓃𝓉𝓇𝑒 𝓉𝑜𝓊𝓉 𝓁𝑒𝓈 𝓂𝑒𝓈𝓈𝒶𝑔𝑒 𝒶 𝒹𝒾𝓇𝑒 𝒶𝓊 𝒷𝑜𝓉'
            }, {
                name: '.info',
                value: '𝓂𝑜𝓃𝓉𝓇𝑒 𝓉𝑜𝓊𝓉 𝓁𝑒𝓈 𝓂𝑒𝓈𝓈𝒶𝑔𝑒 𝒶 𝒹𝒾𝓇𝑒 𝒶𝓊 𝒷𝑜𝓉'
            }, {
                name: '.modération',
                value: '𝓂𝑜𝓃𝓉𝓇𝑒 𝓁𝑒𝓈 𝒸𝑜𝓂𝓂𝒶𝓃𝒹𝑒𝓈 𝓅𝑜𝓊𝓇 𝓁𝑒𝓈 𝓈𝓉𝒶𝒻𝒻𝓈'
            }, )

            
            .setImage('https://media4.giphy.com/media/3oEjHKjVoNVsCeMoDe/giphy.gif?cid=ecf05e47931819dd9b06d41e6a262a802e2cb87a727d4ad8&rid=giphy.gif&ct=g')
            .setFooter('HEHE');
        message.channel.send(newEmbed);
    }
});
bot.on('message', async message => {
    if (message.content.startsWith(`.info`)) {
        let newEmbed = new Discord.MessageEmbed()
            .setColor('#008000')
            .setTitle('ℂ𝕆𝕄𝕄𝔸ℕ𝔻𝔼𝕊')
            .setURL('https://youtube.com')
            .setDescription(`𝒾𝒸𝒾 𝓉𝓊 𝓉𝓇𝑜𝓊𝓋𝑒𝓇𝒶𝓈 𝓉𝑜𝓊𝓉𝑒 𝓁𝑒𝓈 𝒸𝑜𝓂𝓂𝒶𝓃𝒹𝑒𝓈 𝓊𝓉𝒾𝓁𝑒𝓈 𝒹𝓊 𝒷𝑜𝓉 \n\n\n\n`)


            .addFields({
                name: '.myinfo',
                value: '𝓜𝓸𝓷𝓽𝓻𝓮 𝓽𝓮𝓼 𝓲𝓷𝓯𝓸𝓻𝓶𝓪𝓽𝓲𝓸𝓷𝓼'
            }, {
                name: '.servinfo',
                value: '𝓜𝓸𝓷𝓽𝓻𝓮 𝓵𝓮𝓼 𝓲𝓷𝓯𝓸𝓻𝓶𝓪𝓽𝓲𝓸𝓷𝓼 𝓭𝓾 𝓼𝓮𝓻𝓿𝓮𝓾𝓻'
            }, )
            .setImage('https://media4.giphy.com/media/8WeatsYCC54TC/giphy.gif?cid=ecf05e47k07ccyggaq2tykjw4r6zjdyvpt1qdrhr0z1o4flz&rid=giphy.gif&ct=g')
            .setFooter('HEHE');
        message.channel.send(newEmbed);
    }
});

bot.on('message', async message => {
    if (message.content.startsWith(`.gif`)) {
        let newEmbed = new Discord.MessageEmbed()
            .setColor('#FF00FF')
            .setTitle('𝔻𝕀𝔽𝔽𝔼ℝ𝔼ℕ𝕋𝕊 𝕋𝕐ℙ𝔼 𝔻𝔼 𝔾𝕀𝔽')
            .setURL('https://youtube.com')
            .setDescription(`𝒾𝒸𝒾 𝓉𝓊 𝓉𝓇𝑜𝓊𝓋𝑒𝓇𝒶𝓈 𝓉𝑜𝓊𝓉 𝓁𝑒𝓈 𝑔𝒾𝒻𝓈 𝒹𝒾𝓈𝓅𝑜 \n\n\n\n`)


            .addFields({
                    name: '.chat',
                    value: '𝑔𝒾𝒻 𝒹𝑒 𝒸𝒽𝒶𝓉'
                }, {
                    name: '.chien',
                    value: '𝑔𝒾𝒻 𝒹𝑒 𝒸𝒽𝒾𝑒𝓃'
                }, {
                    name: '.fuck',
                    value: '𝑔𝒾𝒻 𝒹𝑒 𝒻𝓊𝒸𝓀'
                }, {
                    name: '.fail',
                    value: '𝑔𝒾𝒻 𝒹 𝓊𝓃𝑒 𝓅𝑒𝓇𝓈𝑜𝓃𝓃𝑒 𝓆𝓊𝒾 𝓈𝑒 𝒻𝒶𝒾𝓁'
                },


            )
            .setImage('https://media4.giphy.com/media/l396FvhXOqm20Pogo/giphy.gif?cid=ecf05e4731t9s5hd7hscbwuxauhmxjxzw76f54cius1m1uic&rid=giphy.gif&ct=g')
            .setFooter('HEHE');
        message.channel.send(newEmbed);
    }
});
bot.on('message', message => {
    if (message.content === '.chat') {
        message.channel.send('https://media4.giphy.com/media/A0aEq3RE7OFbi/giphy.gif?cid=ecf05e47oq7khkoh4i9cprzjj1c1ralnm6lq810fbc8ujith&rid=giphy.gif&ct=g')
    }
})
bot.on('message', message => {
    if (message.content === '.chien') {
        message.channel.send('https://media2.giphy.com/media/lPuXFMy8NGg47jUB8T/giphy.gif?cid=ecf05e4782bh2rearupy08wrxge6vysp74dyn7ru45z1jkm3&rid=giphy.gif&ct=g')
    }
})
bot.on('message', message => {
    if (message.content === '.fuck') {
        message.channel.send('https://media4.giphy.com/media/izftaZKwhfs4jT9j3V/giphy.gif?cid=ecf05e475v72zzx053jrzdb9v87uufcluhga956091m50el9&rid=giphy.gif&ct=g')
    }
})
bot.on('message', message => {
    if (message.content === '.fail') {
        message.channel.send('https://media4.giphy.com/media/UsOoz5EYqRxXW/giphy.gif?cid=ecf05e47xocovztwmyhq4i9txf6yw0dwi9pict90kqp4207n&rid=giphy.gif&ct=g')
    }
})
bot.on('message', async message => {
    if (message.content.startsWith(`.salutation`)) {
        let newEmbed = new Discord.MessageEmbed()
            .setColor('#FFFF00')
            .setTitle('𝔸𝕄𝕌𝕊𝔼𝕄𝔼ℕ𝕋')
            .setURL('https://youtube.com')
            .setDescription(`𝓲𝓬𝓲 𝓽𝓾 𝓽𝓻𝓸𝓾𝓿𝓮𝓻𝓪 𝓹𝓵𝓾𝓼 𝓭'𝓮𝓷𝓷𝓾𝓲𝓮 \n\n\n\n`)

            .addField('hey', '𝓵𝓮 𝓫𝓸𝓽 𝓻𝓮𝓹𝓸𝓷𝓭𝓻𝓪')
            .addField('cc', '𝓵𝓮 𝓫𝓸𝓽 𝓻𝓮𝓹𝓸𝓷𝓭𝓻𝓪')
            .addField('trkl', '𝓵𝓮 𝓫𝓸𝓽 𝓻𝓮𝓹𝓸𝓷𝓭𝓻𝓪')
            .addField('wsh', '𝓵𝓮 𝓫𝓸𝓽 𝓻𝓮𝓹𝓸𝓷𝓭𝓻𝓪')
            .setImage('https://media1.giphy.com/media/tczJoRU7XwBS8/giphy.gif?cid=ecf05e47e7lj60z2xryw25pdvxrrlpo88by64b4l6pslz8xl&rid=giphy.gif&ct=g')
            .setFooter('HEHE');
        message.channel.send(newEmbed);
    }
})

bot.on('message', message => {
    if (message.content === 'wsh') {
        message.channel.send('Wshhhhhh saches que tu es bg/blg :)')
    }
})

bot.on('message', message => {
    if (message.content === 'cc') {
        message.channel.send('coucou ,he ,hop!')
    }
})
bot.on('message', message => {
    if (message.content === 'hey') {
        message.channel.send('Heyyy oui,oui je suis là!')
    }
})
bot.on('message', message => {
    if (message.content === 'trkl') {
        message.channel.send('Je peux pas savoir x) et toi tu vas bien?')
    }
})

bot.on('message', async message => {
    if (message.content.startsWith(`.myinfo`)) {
        const myinfo = new Discord.MessageEmbed()
            .setColor('#E67E22')
            .setTitle('𝕋𝔼𝕊 𝕀ℕ𝔽𝕆ℝ𝕄𝔸𝕋𝕀𝕆ℕ𝕊')
            .addField('Membre', message.author.username, true)
            .addField('Tag', message.author.discriminator, true)
            .addField('Date de création du compte', moment(message.author.createdAt).format('[Le] DD/MM/YYYY [à] HH:mm:ss'), true)
            .addField('Date d\'arrivée sur le serveur', moment(message.author.joinedAt).format('[Le] DD/MM/YYYY [à] HH:mm:ss'), true)
            .addField('Date de début de boost', message.author.premiumSince ? moment(member.premiumSince).format('[Le] DD/MM/YYYY [à] HH:mm:ss') : 'Ne boost pas', true)
            .setThumbnail(message.author.displayAvatarURL())
            .setFooter(`ID : ${message.author.id}`)
        message.channel.send(myinfo)
    }
})
bot.on('message', async message => {
    if (message.content.startsWith(".servinfo")) {
        console.log('(ServerInfo) Membre : ' + message.author.username + "#" + message.author.discriminator)
        var server_info = new Discord.MessageEmbed()
            .setColor('#E67E22')
            .setTitle("📌 𝕀ℕ𝔽𝕆ℝ𝕄𝔸𝕋𝕀𝕆ℕ𝕊 𝔻𝕌 𝕊𝔼ℝ𝕍𝔼𝕌ℝ:")
            .addField("📝 Nom du serveur: " + `${message.guild.name}`, `Developper : !!"🚬{ 𝓢𝓪𝓷𝓼𝓥𝓲𝓮 (𝕞𝕖𝕤𝕥𝕠𝕟𝕖)💉
                #7572`)
            .addField("🔗 ID du serveur: ", message.guild.id, true)
            .addField("📅 Date de création du serveur: ", message.guild.createdAt, true)
            .addField("🔗 Nombres de rôles: ", `${message.guild.roles.cache.size}`, true)
            .addField(
                'Links',
                'pour me contacter https://discord.gg/gjfXWYTcHF'
            )
            .setImage('https://media1.giphy.com/media/dnsuLQL7Ioe5xKQ869/200w.webp?cid=ecf05e47qdbrluacl80okqrodd6gttavo8nxj8eurytz9a12&rid=200w.webp&ct=g')
            .setThumbnail('https://cdn.discordapp.com/avatars/827274450969952277/c193601c2926730a04cd39092c14dfe8.png?size=1024')
            .setFooter(message.member.displayName, message.author.displayAvatarURL({
                dynamic: true
            }))
            .setTimestamp()


        message.channel.send(server_info)
    }
})
bot.on('message', async message => {
    if (message.content.startsWith(`.moderation`)) {
        let newEmbed = new Discord.MessageEmbed()
            .setColor('#F1C40F')
            .setTitle('🔥 𝕄𝕆𝔻𝔼ℝ𝔸𝕋𝕀𝕆ℕ:')
            .setDescription(`𝓵𝓮𝓼 𝓬𝓸𝓶𝓶𝓪𝓷𝓭𝓮𝓼 𝓭𝓮 𝓼𝓽𝓪𝓯𝓯𝓼 \n\n\n\n`)

            .addField('.ban', '𝓵𝓮 𝓫𝓸𝓽 𝓫𝓪𝓷𝓷𝓲𝓻𝓪')
            .addField('.kick', '𝓵𝓮 𝓫𝓸𝓽 𝓴𝓲𝓬𝓴𝓮𝓻𝓪')
            .setImage('https://media1.giphy.com/media/tczJoRU7XwBS8/giphy.gif?cid=ecf05e47e7lj60z2xryw25pdvxrrlpo88by64b4l6pslz8xl&rid=giphy.gif&ct=g')
            .setFooter('HEHE');
        message.channel.send(newEmbed);
    }
})
client.login(process.env.TOKEN);
