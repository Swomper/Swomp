let user = message.mentions.users.first();
let razon = args.slice(1).join(' ');

var perms = message.member.hasPermission("KICK_MEMBERS");

if(!perms) return message.channel.send("Perdon pero no tienes permiso..");
if (message.mentions.users.size < 1) return message.reply('!Debes mencionar a un usuario! ').catch(console.error);

if (!razon) return message.channel.send('!Escriba una razón!, `b!kick @user#0000 (razon)`');
if (!message.guild.member(user).kickable) return message.reply('No pude kickear al usuario mencionado...');
     
message.guild.member(user).kick(razon);
message.channel.send(`**${user.username}**, fue kickeado del servidor, La razon: ${razon}.`);
