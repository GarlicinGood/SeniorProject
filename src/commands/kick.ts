import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class kick implements IBotCommand {
    private readonly _command = "kick"

    help(): string {
        return "(Admin only command) Kicks mentioned user";
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    runCommand(args: string[], messageObject: Discord.Message, client: Discord.Client): void {

        let mentionedUser = messageObject.mentions.users.first();
        let suppliedReason = args.slice(1).join(" ") || "";
        let kickLog = `${messageObject.author.username} : ${suppliedReason}`;

        messageObject.delete(0);


            //Returns if the author of the message doesn't have an admin role
        if(!messageObject.member.hasPermission("ADMINISTRATOR"))
        {
            messageObject.channel.send(`Get an admin role first ${messageObject.author.username}!`)
                .then(message => {
                    (message as Discord.Message).delete(50000)
                })
            return;
        }

            //Returns if the mentioned user isn't a valid user
        if(!mentionedUser)
        {
            messageObject.channel.send(`That person does not exist ${messageObject.author.username}!`)
            .then(message => {
                (message as Discord.Message).delete(50000)
            })
            return;
        }

        messageObject.guild.member(mentionedUser).kick(kickLog)
        messageObject.channel.send(`${mentionedUser} was kicked for: ${suppliedReason}`)
            .then(console.log)
            .catch(console.error)

    }
}