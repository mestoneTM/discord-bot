const moment = require('moment')
const Discord = require("discord.js")
const bot = new Discord.Client()
bot.on('message', async message => {
    if (message.content.startsWith(`.help`)) {
        let newEmbed = new Discord.MessageEmbed()
            .setColor('#990000')
            .setTitle('βππππΈβπ»πΌπ')
            .setURL('https://youtube.com')
            .setDescription(`πΎπΈπΎ ππ ππππππππΆπ πππππ πππ πΈππππΆππΉππ πππΎπππ πΉπ π·ππ \n\n\n\n`)


            .addFields({
                name: '.gif',
                value: 'ππππππ πππππ πππ πππππ πΉπ ππΎπ» πππΎππΎππΆπ·ππ'
            }, {
                name: '.salutation',
                value: 'ππππππ ππππ πππ πππππΆππ πΆ πΉπΎππ πΆπ π·ππ'
            }, {
                name: '.info',
                value: 'ππππππ ππππ πππ πππππΆππ πΆ πΉπΎππ πΆπ π·ππ'
            }, {
                name: '.modΓ©ration',
                value: 'ππππππ πππ πΈππππΆππΉππ ππππ πππ πππΆπ»π»π'
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
            .setTitle('βππππΈβπ»πΌπ')
            .setURL('https://youtube.com')
            .setDescription(`πΎπΈπΎ ππ ππππππππΆπ πππππ πππ πΈππππΆππΉππ πππΎπππ πΉπ π·ππ \n\n\n\n`)


            .addFields({
                name: '.myinfo',
                value: 'ππΈπ·π½π»π? π½π?πΌ π²π·π―πΈπ»πΆπͺπ½π²πΈπ·πΌ'
            }, {
                name: '.servinfo',
                value: 'ππΈπ·π½π»π? π΅π?πΌ π²π·π―πΈπ»πΆπͺπ½π²πΈπ·πΌ π­πΎ πΌπ?π»πΏπ?πΎπ»'
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
            .setTitle('π»ππ½π½πΌβπΌβππ ππβπΌ π»πΌ πΎππ½')
            .setURL('https://youtube.com')
            .setDescription(`πΎπΈπΎ ππ ππππππππΆπ ππππ πππ ππΎπ»π πΉπΎπππ \n\n\n\n`)


            .addFields({
                    name: '.chat',
                    value: 'ππΎπ» πΉπ πΈπ½πΆπ'
                }, {
                    name: '.chien',
                    value: 'ππΎπ» πΉπ πΈπ½πΎππ'
                }, {
                    name: '.fuck',
                    value: 'ππΎπ» πΉπ π»ππΈπ'
                }, {
                    name: '.fail',
                    value: 'ππΎπ» πΉ πππ ππππππππ πππΎ ππ π»πΆπΎπ'
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
            .setTitle('πΈππππΌππΌβπ')
            .setURL('https://youtube.com')
            .setDescription(`π²π¬π² π½πΎ π½π»πΈπΎπΏπ?π»πͺ πΉπ΅πΎπΌ π­'π?π·π·πΎπ²π? \n\n\n\n`)

            .addField('hey', 'π΅π? π«πΈπ½ π»π?πΉπΈπ·π­π»πͺ')
            .addField('cc', 'π΅π? π«πΈπ½ π»π?πΉπΈπ·π­π»πͺ')
            .addField('trkl', 'π΅π? π«πΈπ½ π»π?πΉπΈπ·π­π»πͺ')
            .addField('wsh', 'π΅π? π«πΈπ½ π»π?πΉπΈπ·π­π»πͺ')
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
        message.channel.send('Heyyy oui,oui je suis lΓ !')
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
            .setTitle('ππΌπ πβπ½πβππΈπππβπ')
            .addField('Membre', message.author.username, true)
            .addField('Tag', message.author.discriminator, true)
            .addField('Date de crΓ©ation du compte', moment(message.author.createdAt).format('[Le] DD/MM/YYYY [Γ ] HH:mm:ss'), true)
            .addField('Date d\'arrivΓ©e sur le serveur', moment(message.author.joinedAt).format('[Le] DD/MM/YYYY [Γ ] HH:mm:ss'), true)
            .addField('Date de dΓ©but de boost', message.author.premiumSince ? moment(member.premiumSince).format('[Le] DD/MM/YYYY [Γ ] HH:mm:ss') : 'Ne boost pas', true)
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
            .setTitle("π πβπ½πβππΈπππβπ π»π ππΌβππΌπβ:")
            .addField("π Nom du serveur: " + `${message.guild.name}`, `Developper : !!"π¬{ π’πͺπ·πΌπ₯π²π? (πππ€π₯π ππ)π
                #7572`)
            .addField("π ID du serveur: ", message.guild.id, true)
            .addField("π Date de crΓ©ation du serveur: ", message.guild.createdAt, true)
            .addField("π Nombres de rΓ΄les: ", `${message.guild.roles.cache.size}`, true)
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
            .setTitle('π₯ πππ»πΌβπΈπππβ:')
            .setDescription(`π΅π?πΌ π¬πΈπΆπΆπͺπ·π­π?πΌ π­π? πΌπ½πͺπ―π―πΌ \n\n\n\n`)

            .addField('.ban', 'π΅π? π«πΈπ½ π«πͺπ·π·π²π»πͺ')
            .addField('.kick', 'π΅π? π«πΈπ½ π΄π²π¬π΄π?π»πͺ')
            .setImage('https://media1.giphy.com/media/tczJoRU7XwBS8/giphy.gif?cid=ecf05e47e7lj60z2xryw25pdvxrrlpo88by64b4l6pslz8xl&rid=giphy.gif&ct=g')
            .setFooter('HEHE');
        message.channel.send(newEmbed);
    }
})
client.login(process.env.TOKEN);
