import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class testCommand implements IBotCommand {

    private readonly _command = "supportTicket"

    help(): string {
        return "Creates a private text channel for help.";
    }    
    
    isThisCommand(command: string): boolean {
        
        return command === this._command;
    }
    
    runCommand(args: string[], messageObject: Discord.Message, client: Discord.Client): void {
        
        //Make a new text channel
        let guid = Date.now().toString();
        // messageObject.guild.createChannel(`Test ChanneL: ${guid}`, { type: 'text'});
        
        let guild = messageObject.guild;
        let currentUser = client.user;

        var name = `support-ticket-${guid}`;
        guild.createChannel(name, 'text', [
            {
                id: messageObject.author.id,
                allow: ['VIEW_CHANNEL', 'SEND_TTS_MESSAGES'],
            },
        ]);

        //make sure everyone can't see this channel
        //add person who made this channel
        //rick roll user who made this channel
        
    }


}