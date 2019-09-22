let user = message.mentions.users.first();
let razon = args.slice(1).join(' ');
        
var perms = message.member.hasPermission("BAN_MEMBERS");
if(!perms) return message.channel.send("`Error` `|` No tengo Permisos para banear (debo tener role de administrador).");
        
if (message.mentions.users.size < 1) return message.reply('Debe mencionar a alguien.').catch(console.error);
if(!razon) return message.channel.send('!Escriba una razón!, `b!ban @user#0000 (razon)`');
if (!message.guild.member(user).bannable) return message.reply('No puedo banear al usuario mencionado.');
        
    
message.guild.member(user).ban(razon);
message.channel.send(`**${user.username}**, fue baneado del servidor, razón: ${razon}.`);
