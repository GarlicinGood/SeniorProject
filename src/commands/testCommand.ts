import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class testCommand implements IBotCommand {

    private readonly _command = "testCommand"

    help(): string {
        return "This does nothing :D";
    }    
    
    isThisCommand(command: string): boolean {
        //3 equals means identical
        return command === this._command;
    }
    
    runCommand(args: string[], messageObject: Discord.Message, client: Discord.Client): void {
        
        //Lets command show if it worked
        messageObject.channel.send("The Command Worked :D");
    }


}