const Discord = require("discord.js");
  const bot = new Discord.Client();
      bot.on('ready', () => {
          console.log('ONLINE!');
		     

// status 
			 let statuses = [
        "#go", //can add another
        
    ]
    setInterval(function(){
            let status = statuses[Math.floor(Math.random() * statuses.length)];
            bot.user.setActivity(status, {type:"WATCHING"})
    
        }, 1000) 

  
        });



//dm bot cmd

   bot.on("message", message => {
       var prefix = "#";
 
             var args = message.content.substring(prefix.length).split(" ");

       bot.on('message', message => {
                                      if (message.content.split(' ')[0] == '/b')
                                                message.guild.members.forEach( member => {
                                        if (!message.member.hasPermission("ADMINISTRATOR"))  return;
                                         member.send( `${member} ! ` + "**" + message.guild.name + " : ** " + message.content.substr(3));
                                        
                                          message.delete();
            
});
            
});



               if (message.content.startsWith(prefix + "go")) {
                          if (!message.member.hasPermission("ADMINISTRATOR"))  return;
						  
						  
						  let args = message.content.split(" ").slice(1);
                           var argresult = args.join(' '); 
              message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
              m.send(`${argresult}\n ${m}`);
 
})


                          if (!args[1]) {
                            
							
                                 let embed3 = new Discord.RichEmbed()
                                     .setDescription(":white_check_mark:   |   Successfully Sent the Message to all Server Members.")
                                    
                                    .setColor("#00ff33")
                                    .setTitle ('Message Has been Sent.')
									                  .setFooter ("BOT DEVELOPER : DARK#9999 | DISCORD.js")
                                    .setImage('http://bit.ly/36Ske5f');
                                          message.channel.sendEmbed(embed3);
                            
                                        } else {
                            
                                           let embed4 = new Discord.RichEmbed()
                                                            .setDescription(':white_check_mark: | Message has been Successfully Sent to @everyone ')
                                                                .setColor("#99999")
                                                                .setFooter ("BOT DEVELOPER : DARK#9999 | DISCORD.js")
                                                                .setTitle ('Message Has been Sent.')
                                                                
                               
                                                                message.channel.sendEmbed(embed4);
                                                                message.delete();
                            }
                          }
						
//dmhelp


// login token                          
});
bot.login("Njc4NjIyNDQ4MjMyNDMxNjI4.XoLxrA.PHdq3UWskYTqodTWC-miwcZyQ4M");