const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="lindo.ndlangamandla99@gmail.com"
global.location="Durban, South frica."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa, Johannesburg";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/0087a0f2c1bc2446e4ce5.png" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ Lindo Tech²²¹-ᴍᴅ" 

global.devs = "27657006860" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "27657006860";





//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_27_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDc4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgODksXG4gICAgICAgIDQzLFxuICAgICAgICAxNzksXG4gICAgICAgIDM4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOSxcbiAgICAgICAgODIsXG4gICAgICAgIDI1LFxuICAgICAgICA3NixcbiAgICAgICAgMjAxLFxuICAgICAgICA1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxLFxuICAgICAgICA1MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjUzLFxuICAgICAgICAzLFxuICAgICAgICA3MyxcbiAgICAgICAgMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzksXG4gICAgICAgIDgzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzcsXG4gICAgICAgIDI4LFxuICAgICAgICA0MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDMwLFxuICAgICAgICA1NSxcbiAgICAgICAgMjksXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyOCxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTYxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDkzLFxuICAgICAgICAxMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzNixcbiAgICAgICAgODIsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDY5LFxuICAgICAgICA4NCxcbiAgICAgICAgODYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTA4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAyMTksXG4gICAgICAgIDY3LFxuICAgICAgICA3MCxcbiAgICAgICAgMjA0LFxuICAgICAgICA2NCxcbiAgICAgICAgMjUwLFxuICAgICAgICA4NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTk2LFxuICAgICAgICAxODAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI2LFxuICAgICAgICAxNyxcbiAgICAgICAgMjQxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2LFxuICAgICAgICA0NixcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTY0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjMxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAzNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDExLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDcxLFxuICAgICAgICAxODcsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDY2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjI0LFxuICAgICAgICA5LFxuICAgICAgICA5MyxcbiAgICAgICAgMjUzLFxuICAgICAgICA2OSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMzUsXG4gICAgICAgIDMzLFxuICAgICAgICAxODksXG4gICAgICAgIDE2OSxcbiAgICAgICAgODUsXG4gICAgICAgIDkxLFxuICAgICAgICA4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzksXG4gICAgICAgIDM1LFxuICAgICAgICAxNDksXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQxLFxuICAgICAgICA0MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTU4LFxuICAgICAgICAxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTUxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDksXG4gICAgICAgIDk3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDQ4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTA1LFxuICBcImFkdlNlY3JldEtleVwiOiBcImI5VVZSSkxNS0xWdnRYSWduL29nMjV2UUZLbnpoMGNMVVNOSEpoc1Z4OFE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlpueDVjM2k4UzY2UWhaeG4zZVdNeWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzM1YzkzOWItM2UyMC00YTk3LWFmMDMtMGRkNWU3YWE0ZTRiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzMyxcbiAgICAgIDI0NCxcbiAgICAgIDE2LFxuICAgICAgMTMwLFxuICAgICAgMTEyLFxuICAgICAgMTI1LFxuICAgICAgMTI4LFxuICAgICAgMTU2LFxuICAgICAgNCxcbiAgICAgIDExOCxcbiAgICAgIDEzOCxcbiAgICAgIDIyNSxcbiAgICAgIDE0MCxcbiAgICAgIDIxOCxcbiAgICAgIDE2NCxcbiAgICAgIDI1NCxcbiAgICAgIDI0MixcbiAgICAgIDksXG4gICAgICAyMjUsXG4gICAgICAyMzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNSxcbiAgICAgIDk2LFxuICAgICAgNjAsXG4gICAgICA1NCxcbiAgICAgIDAsXG4gICAgICA4OSxcbiAgICAgIDY4LFxuICAgICAgMTg5LFxuICAgICAgODAsXG4gICAgICAyNDIsXG4gICAgICAzNyxcbiAgICAgIDE0NixcbiAgICAgIDI0MSxcbiAgICAgIDI4LFxuICAgICAgNTIsXG4gICAgICAxNTcsXG4gICAgICAyMzQsXG4gICAgICAyMjcsXG4gICAgICA3LFxuICAgICAgMTc4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjI4SlFUQzFQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNzY1NzAwNjg2MDozOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkxpbmRva3VobGUgRGVzaWduc1wiLFxuICAgIFwibGlkXCI6IFwiNzQ4Nzg1NjA1NTEwMzY6MzlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTWJZZ3pBUWw4bkp0QVlZTFNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJEbzU4aHV0L1J4am1EcGlmZmtnd01KZGJHNEkyeU10OWZGV3RNakVGNmxJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm11ZHE2Z3BmeVlNSjBlTVJzNFNJY1RVdEtqcndRdGQ3L0lBckJjR0p4ZXFrMlRhSWFteXltQmw0K0diTE9RcmdpNmRJVkpZMXRXRnl3ZjFCQzVFYUNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlRkdURabDBlOFpnNjM4VmlhaUJPaUlBVHBJamZMSGhuWFZOOUpzSG9sVWhVZzMya0dQelRGWFhSTkVoY0NlVyt1RlJsa3pjTGlEUUt2VDNaV0xra2lRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI3NjU3MDA2ODYwOjM5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA4NzAwNDQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOR0pcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5HSi5qc29uIjogIntcImtleURhdGFcIjpcImdiSEwvZGFmUjhVVEFXVVF6M24yWXQrNmZGWndTTmR1a0tlZWE0a1B2VVE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTAwNzIzNzgyLFwiY3VycmVudEluZGV4XCI6MzIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMjddfSxcInRpbWVzdGFtcFwiOlwiMTcxNzEzOTYwOTQ3MFwifSIKfQ=="  // PUT your SESSION_ID 

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Lindo Bot",
  packname: process.env.PACK_NAME || "Prince Oracle",
  botname : process.env.BOT_NAME  || "Lindokuhle Bot",
  ownername:process.env.OWNER_NAME|| "Lindokuhle Designs",



  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
