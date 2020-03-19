import * as Discord from "discord.js";
import { IBotCommand } from "../api";
import { create } from "domain";

export default class testCommand implements IBotCommand {

    private readonly _command = "supportTicket"

    help(): string {
        return "Creates a private text channel for help.";
    }

    isThisCommand(command: string): boolean {

        return command === this._command;
    }

    runCommand(args: string[], messageObject: Discord.Message, client: Discord.Client): void {
        let guild = messageObject.guild;
        let currentUser = client.user;

        // let botLogs = Discord.Channel.name === "bot-logs"
        // const results = messageObject.channel.fetchMessage(`${botLogs}`)

        // var logsChannel:Discord.TextChannel = guild.channels.find();


        //GuildChannel
        var logsChannel = guild.channels.find(channel => channel.id == "bot-logs");
        var whatever = messageObject.channel;

        whatever.fetchMessage("672635523419865098")
            .then(message => {
                console.log("I found da message")
                
                var id:number = Number(message.content)
                var name = `support-ticket-${id.toString()}`;
                guild.createChannel(
                    name,
                    {
                        type: 'text',
                        permissionOverwrites: [
                            { id: messageObject.author.id, allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'] }
                            // ,{ id: .author.id, deny: ['VIEW_CHANNEL']}
                        ],
                        parent: '642183412907507721'
                    }
                )

                id = id + 1;
                message.edit((id).toString())
            })
            .catch(error => console.log(error))
            ;

            


        // let logChannel = Discord.Channel.name === "bot-logs"
        // messageObject.channel.(`${logChannel}`)
        //     .then(console.log)
        //     .catch(console.error);

        // TODO - Hide channel from everyone else, 
        // parent into support catergory, 
        //assure admins are allowed into text channel, 
        //upload the number to an online database



        //642183412907507721 (<==id of support category)





        //rick roll user who made this channel

    }




}