let WhatsAlexa = require('../events');
let {MessageType} = require('@adiwajshing/baileys');
let fs = require('fs');
let ffmpeg = require('fluent-ffmpeg');
let {execFile} = require('child_process');
let cwebp = require('cwebp-bin');
let Config = require('../config');
let Language = require('../language');
let Lang = Language.getString('sticker');

if (Config.WORKTYPE == 'private') {

    WhatsAlexa.addCommand({pattern: 'sticker', fromMe: true, desc: Lang.STICKER_DESC}, (async (message, match) => {    

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }


        if (message.reply_message === false) return await message.client.sendMessage(message.jid,Lang.NEED_REPLY, MessageType.text);
        var downloading = await message.client.sendMessage(message.jid,Lang.DOWNLOADING,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        if (message.reply_message.video === false && message.reply_message.image) {
            execFile(cwebp, [location, '-o', 'output.webp'], async err => {
                if (err) {
                    throw err;
                }
        
                await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }

        ffmpeg(location)
            .outputOptions(["-y", "-vcodec libwebp", "-lossless 1", "-qscale 1", "-preset default", "-loop 0", "-an", "-vsync 0", "-s 512x512"])
            .save('sticker.webp')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
}
else if (Config.WORKTYPE == 'public') {

    WhatsAlexa.addCommand({pattern: 'sticker', fromMe: false, desc: Lang.STICKER_DESC}, (async (message, match) => {    

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }


        if (message.reply_message === false) return await message.client.sendMessage(message.jid,Lang.NEED_REPLY, MessageType.text);
        var downloading = await message.client.sendMessage(message.jid,Lang.DOWNLOADING,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        if (message.reply_message.video === false && message.reply_message.image) {
            execFile(cwebp, [location, '-o', 'output.webp'], async err => {
                if (err) {
                    throw err;
                }
        
                await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }

        ffmpeg(location)
            .outputOptions(["-y", "-vcodec libwebp", "-lossless 1", "-qscale 1", "-preset default", "-loop 0", "-an", "-vsync 0", "-s 512x512"])
            .save('sticker.webp')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
}

