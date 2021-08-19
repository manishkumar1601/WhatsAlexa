const WhatsAlexa = require('../events');
const Config = require('../config');
const {MessageType} = require('@adiwajshing/baileys');
const Language = require('../language');
const Lang = Language.getString('list');

if (Config.WORKTYPE == 'private') {

    WhatsAlexa.addCommand({pattern: 'alexa ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

        if (Config.MENU_LOGO == 'default') {
            
            var image = await axios.get(Config.MENU_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage(message.jid, Buffer.from(image.data), MessageType.image, {mimetype: Mimetype.png, caption: "*🎯 Command:* ```#voicechat```
*📝 Description:* ```Starts to Alexa voice chat.``` 

*🎯 Command:* ```#fullalexa ```
*📝 Description:* ```Activates full functional Alexa features. Turn your account into a ai chatbot!``` 
*⌨️ Example:* ```#fullalexa on / off```

*🎯 Command:* ```#kick ```
*📝 Description:* ```Ban someone in the group. Reply to message or tag a person to use command.``` 

*🎯 Command:* ```#add```
*📝 Description:* ```Adds someone to the group.``` 

*🎯 Command:* ```#promote ```
*📝 Description:* ```Makes any person an admin.``` 

*🎯 Command:* ```#demote ```
*📝 Description:* ```Takes the authority of any admin.``` 

*🎯 Command:* ```#closegc ```
*📝 Description:* ```Mute the group chat. Only the admins can send a message.``` 

*🎯 Command:* ```#opengc ```
*📝 Description:* ```Unmute the group chat. Anyone can send a message.``` 

*🎯 Command:* ```#linkgc ```
*📝 Description:* ```Provides the group's invitation link.``` 

*🎯 Command:* ```#afk ```
*📝 Description:* ```It makes you AFK - Away From Keyboard.``` 

*🎯 Command:* ```#carbon ```
*📝 Description:* ```Uses carbon.sh for Text-to-Image``` 
*⚠️ Warn:* ```Please only type in en and tr character!```

*🎯 Command:* ```#mp4audio```
*📝 Description:* ```Converts video to sound.``` 

*🎯 Command:* ```#imagesticker```
*📝 Description:* ```Converts the sticker to a photo.``` 

*🎯 Command:* ```#termux ```
*📝 Description:* ```Allows to run the command on the server's shell.``` 

*🎯 Command:* ```#filter ```
*📝 Description:* ```It adds a filter. If someone writes your filter, it send the answer. If you just write .filter, it show's your filter list.``` 

*🎯 Command:* ```#stop ```
*📝 Description:* ```Stops the filter you added previously.``` 

*🎯 Command:* ```#welcome```
*📝 Description:* ```It sets the welcome message. If you leave it blank it shows the welcome message.``` 

*🎯 Command:* ```#goodbye```
*📝 Description:* ```Sets the goodbye message. If you leave blank, it show's the goodbye message.``` 

*🎯 Command:* ```#restart```
*📝 Description:* ```Restart WhatsAlexa``` 

*🎯 Command:* ```#shutdown```
*📝 Description:* ```Shutdown WhatsAlexa``` 

*🎯 Command:* ```#dyno```
*📝 Description:* ```Check heroku dyno usage``` 

*🎯 Command:* ```#notes```
*📝 Description:* ```Shows all your existing notes.``` 

*🎯 Command:* ```#save ```
*📝 Description:* ```Reply a message and type .save or just use .save <Your note> without replying``` 

*🎯 Command:* ```#deleteNotes```
*📝 Description:* ```Deletes *all* your saved notes.``` 

*🎯 Command:* ```#kickme```
*📝 Description:* ```It kicks you from the group you are using it in.``` 

*🎯 Command:* ```#pp```
*📝 Description:* ```Makes the profile photo what photo you reply.``` 

*🎯 Command:* ```#block ```
*📝 Description:* ```Block user.``` 

*🎯 Command:* ```#unblock ```
*📝 Description:* ```Unblock user.``` 

*🎯 Command:* ```#jid ```
*📝 Description:* ```Giving user's JID.``` 

*🎯 Command:* ```#qr ```
*📝 Description:* ```It Converts Text To Qr Code``` 

*🎯 Command:* ```#tr```
*📝 Description:* ```It translates with Google Translate. You must reply any message.``` 
*⌨️ Example:* ```.trt tr it (From Turkish to Italian)```

*🎯 Command:* ```#tts ```
*📝 Description:* ```It converts text to sound.``` 

*🎯 Command:* ```#music ```
*📝 Description:* ```Uploads the song you wrote.``` 

*🎯 Command:* ```#video ```
*📝 Description:* ```Downloads video from YouTube.``` 

*🎯 Command:* ```#yt ```
*📝 Description:* ```It searchs on YouTube.``` 

*🎯 Command:* ```#wiki ```
*📝 Description:* ```Searches query on Wikipedia.``` 

*🎯 Command:* ```#image ```
*📝 Description:* ```Searches for related pics on Google.``` 

*🎯 Command:* ```#github ```
*📝 Description:* ```Collects github information from the given username.
⌨️ Example: .github TOXIC-DEVIL``` 

*🎯 Command:* ```#ss ```
*📝 Description:* ```Takes a screenshot from the page in the given link.``` 

*🎯 Command:* ```#simi ```
*📝 Description:* ```Chat with Simi Simi AI Bot.``` 

*🎯 Command:* ```#spdf ```
*📝 Description:* ```Converts a Site into PDF``` 

*🎯 Command:* ```#sticker```
*📝 Description:* ```It converts your replied photo or video to sticker.``` 

*🎯 Command:* ```#alive```
*📝 Description:* ```Does bot work?``` 

*🎯 Command:* ```#sysd```
*📝 Description:* ```Shows the system properties.``` 

*🎯 Command:* ```#tagadmin```
*📝 Description:* ```Tags group admins.``` 

*🎯 Command:* ```#tagall```
*📝 Description:* ```Tags everyone in the group.``` 

*🎯 Command:* ```#textmaker```
*📝 Description:* ```Set of commands to convert text into images.``` 

*🎯 Command:* ```#ttp ```
*📝 Description:* ```Converts text to plain painting.``` 

*🎯 Command:* ```#attp ```
*📝 Description:* ```Adds rainbow effect to the text as a sticker.``` 

*🎯 Command:* ```#emoji ```
*📝 Description:* ```Converts Emoji To Image ( Png ).``` 

*🎯 Command:* ```#unvoice```
*📝 Description:* ```Converts audio to sound recording.``` 

*🎯 Command:* ```#unaudio```
*📝 Description:* ```Converts sound recording to an audio File.``` 

*🎯 Command:* ```#update```
*📝 Description:* ```Checks the update.``` 

*🎯 Command:* ```#weather ```
*📝 Description:* ```Shows the weather.``` 

*🎯 Command:* ```#ping```
*📝 Description:* ```Measures your ping.``` 

*🎯 Command:* ```#short ```
*📝 Description:* ```Shorten the long link.``` 
"})

    }
    else {
            
            var image = await axios.get(Config.MENU_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage(message.jid, Buffer.from(image.data), MessageType.image, {mimetype: Mimetype.png, caption: "*🎯 Command:* ```#voicechat```
*📝 Description:* ```Starts to Alexa voice chat.``` 

*🎯 Command:* ```#fullalexa ```
*📝 Description:* ```Activates full functional Alexa features. Turn your account into a ai chatbot!``` 
*⌨️ Example:* ```#fullalexa on / off```

*🎯 Command:* ```#kick ```
*📝 Description:* ```Ban someone in the group. Reply to message or tag a person to use command.``` 

*🎯 Command:* ```#add```
*📝 Description:* ```Adds someone to the group.``` 

*🎯 Command:* ```#promote ```
*📝 Description:* ```Makes any person an admin.``` 

*🎯 Command:* ```#demote ```
*📝 Description:* ```Takes the authority of any admin.``` 

*🎯 Command:* ```#closegc ```
*📝 Description:* ```Mute the group chat. Only the admins can send a message.``` 

*🎯 Command:* ```#opengc ```
*📝 Description:* ```Unmute the group chat. Anyone can send a message.``` 

*🎯 Command:* ```#linkgc ```
*📝 Description:* ```Provides the group's invitation link.``` 

*🎯 Command:* ```#afk ```
*📝 Description:* ```It makes you AFK - Away From Keyboard.``` 

*🎯 Command:* ```#carbon ```
*📝 Description:* ```Uses carbon.sh for Text-to-Image``` 
*⚠️ Warn:* ```Please only type in en and tr character!```

*🎯 Command:* ```#mp4audio```
*📝 Description:* ```Converts video to sound.``` 

*🎯 Command:* ```#imagesticker```
*📝 Description:* ```Converts the sticker to a photo.``` 

*🎯 Command:* ```#termux ```
*📝 Description:* ```Allows to run the command on the server's shell.``` 

*🎯 Command:* ```#filter ```
*📝 Description:* ```It adds a filter. If someone writes your filter, it send the answer. If you just write .filter, it show's your filter list.``` 

*🎯 Command:* ```#stop ```
*📝 Description:* ```Stops the filter you added previously.``` 

*🎯 Command:* ```#welcome```
*📝 Description:* ```It sets the welcome message. If you leave it blank it shows the welcome message.``` 

*🎯 Command:* ```#goodbye```
*📝 Description:* ```Sets the goodbye message. If you leave blank, it show's the goodbye message.``` 

*🎯 Command:* ```#restart```
*📝 Description:* ```Restart WhatsAlexa``` 

*🎯 Command:* ```#shutdown```
*📝 Description:* ```Shutdown WhatsAlexa``` 

*🎯 Command:* ```#dyno```
*📝 Description:* ```Check heroku dyno usage``` 

*🎯 Command:* ```#notes```
*📝 Description:* ```Shows all your existing notes.``` 

*🎯 Command:* ```#save ```
*📝 Description:* ```Reply a message and type .save or just use .save <Your note> without replying``` 

*🎯 Command:* ```#deleteNotes```
*📝 Description:* ```Deletes *all* your saved notes.``` 

*🎯 Command:* ```#kickme```
*📝 Description:* ```It kicks you from the group you are using it in.``` 

*🎯 Command:* ```#pp```
*📝 Description:* ```Makes the profile photo what photo you reply.``` 

*🎯 Command:* ```#block ```
*📝 Description:* ```Block user.``` 

*🎯 Command:* ```#unblock ```
*📝 Description:* ```Unblock user.``` 

*🎯 Command:* ```#jid ```
*📝 Description:* ```Giving user's JID.``` 

*🎯 Command:* ```#qr ```
*📝 Description:* ```It Converts Text To Qr Code``` 

*🎯 Command:* ```#tr```
*📝 Description:* ```It translates with Google Translate. You must reply any message.``` 
*⌨️ Example:* ```.trt tr it (From Turkish to Italian)```

*🎯 Command:* ```#tts ```
*📝 Description:* ```It converts text to sound.``` 

*🎯 Command:* ```#music ```
*📝 Description:* ```Uploads the song you wrote.``` 

*🎯 Command:* ```#video ```
*📝 Description:* ```Downloads video from YouTube.``` 

*🎯 Command:* ```#yt ```
*📝 Description:* ```It searchs on YouTube.``` 

*🎯 Command:* ```#wiki ```
*📝 Description:* ```Searches query on Wikipedia.``` 

*🎯 Command:* ```#image ```
*📝 Description:* ```Searches for related pics on Google.``` 

*🎯 Command:* ```#github ```
*📝 Description:* ```Collects github information from the given username.
⌨️ Example: .github TOXIC-DEVIL``` 

*🎯 Command:* ```#ss ```
*📝 Description:* ```Takes a screenshot from the page in the given link.``` 

*🎯 Command:* ```#simi ```
*📝 Description:* ```Chat with Simi Simi AI Bot.``` 

*🎯 Command:* ```#spdf ```
*📝 Description:* ```Converts a Site into PDF``` 

*🎯 Command:* ```#sticker```
*📝 Description:* ```It converts your replied photo or video to sticker.``` 

*🎯 Command:* ```#alive```
*📝 Description:* ```Does bot work?``` 

*🎯 Command:* ```#sysd```
*📝 Description:* ```Shows the system properties.``` 

*🎯 Command:* ```#tagadmin```
*📝 Description:* ```Tags group admins.``` 

*🎯 Command:* ```#tagall```
*📝 Description:* ```Tags everyone in the group.``` 

*🎯 Command:* ```#textmaker```
*📝 Description:* ```Set of commands to convert text into images.``` 

*🎯 Command:* ```#ttp ```
*📝 Description:* ```Converts text to plain painting.``` 

*🎯 Command:* ```#attp ```
*📝 Description:* ```Adds rainbow effect to the text as a sticker.``` 

*🎯 Command:* ```#emoji ```
*📝 Description:* ```Converts Emoji To Image ( Png ).``` 

*🎯 Command:* ```#unvoice```
*📝 Description:* ```Converts audio to sound recording.``` 

*🎯 Command:* ```#unaudio```
*📝 Description:* ```Converts sound recording to an audio File.``` 

*🎯 Command:* ```#update```
*📝 Description:* ```Checks the update.``` 

*🎯 Command:* ```#weather ```
*📝 Description:* ```Shows the weather.``` 

*🎯 Command:* ```#ping```
*📝 Description:* ```Measures your ping.``` 

*🎯 Command:* ```#short ```
*📝 Description:* ```Shorten the long link.``` 
"})
     }
    }));
}
else if (Config.WORKTYPE == 'public') {

}
