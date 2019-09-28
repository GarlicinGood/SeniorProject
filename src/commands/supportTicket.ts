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
        
        console.log(currentUser);
        console.log(messageObject.author);

        var name = `new-channel${guid}`;
        guild.createChannel(name, 'text', [
            {
                id: messageObject.author.id,
                allow: ['VIEW_CHANNEL', 'SEND_TTS_MESSAGES'],
            },
        ]);


        var newChannel = guild.channels.find("name", name);
        var parentChannel = guild.channels.find("id", "627608447046778890");
        
        newChannel.setParent(parentChannel);

        // if (parentChannel != null) {
        //     // newChannel.parentID = parentChannel.id;
        // }

        let helpChannel = parentChannel.id = "627608447046778890";
        newChannel.setParent(`${helpChannel}`)
        
        
        //Adds author of command to channel
        // messageObject.author;


        //Adds admins to text channel
        
        // console.log("testing the support ticket command");
        // console.log(args);
        
    }


}