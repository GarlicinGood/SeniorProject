"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class kick {
    constructor() {
        this._command = "kick";
    }
    help() {
        return "(Admin only command) Kicks mentioned user";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, messageObject, client) {
        let mentionedUser = messageObject.mentions.users.first();
        let suppliedReason = args.slice(1).join(" ") || "";
        let kickLog = `${messageObject.author.username} : ${suppliedReason}`;
        messageObject.delete(0);
        if (!messageObject.member.hasPermission("ADMINISTRATOR")) {
            messageObject.channel.send(`Get an admin role first ${messageObject.author.username}!`)
                .then(message => {
                message.delete(50000);
            });
            return;
        }
        if (!mentionedUser) {
            messageObject.channel.send(`That person does not exist ${messageObject.author.username}!`)
                .then(message => {
                message.delete(50000);
            });
            return;
        }
        messageObject.guild.member(mentionedUser).kick(kickLog);
        messageObject.channel.send(`${mentionedUser} was kicked for: ${suppliedReason}`)
            .then(console.log)
            .catch(console.error);
    }
}
exports.default = kick;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2ljay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9raWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0EsTUFBcUIsSUFBSTtJQUF6QjtRQUNxQixhQUFRLEdBQUcsTUFBTSxDQUFBO0lBNkN0QyxDQUFDO0lBM0NHLElBQUk7UUFDQSxPQUFPLDJDQUEyQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxVQUFVLENBQUMsSUFBYyxFQUFFLGFBQThCLEVBQUUsTUFBc0I7UUFFN0UsSUFBSSxhQUFhLEdBQUcsYUFBYSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDekQsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ25ELElBQUksT0FBTyxHQUFHLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQyxRQUFRLE1BQU0sY0FBYyxFQUFFLENBQUM7UUFFckUsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUl4QixJQUFHLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLEVBQ3ZEO1lBQ0ksYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsMkJBQTJCLGFBQWEsQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLENBQUM7aUJBQ2xGLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDWCxPQUEyQixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUM5QyxDQUFDLENBQUMsQ0FBQTtZQUNOLE9BQU87U0FDVjtRQUdELElBQUcsQ0FBQyxhQUFhLEVBQ2pCO1lBQ0ksYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsOEJBQThCLGFBQWEsQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLENBQUM7aUJBQ3pGLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDWCxPQUEyQixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUM5QyxDQUFDLENBQUMsQ0FBQTtZQUNGLE9BQU87U0FDVjtRQUVELGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUN2RCxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLGFBQWEsb0JBQW9CLGNBQWMsRUFBRSxDQUFDO2FBQzNFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO2FBQ2pCLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7SUFFN0IsQ0FBQztDQUNKO0FBOUNELHVCQThDQyJ9