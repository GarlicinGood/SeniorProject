"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class testCommand {
    constructor() {
        this._command = "supportTicket";
    }
    help() {
        return "Creates a private text channel for help.";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, messageObject, client) {
        let guild = messageObject.guild;
        let currentUser = client.user;
        var logsChannel = guild.channels.find(channel => channel.id == "bot-logs");
        var whatever = messageObject.channel;
        whatever.fetchMessage("672635523419865098")
            .then(message => {
            console.log("I found da message");
            var id = Number(message.content);
            var name = `support-ticket-${id.toString()}`;
            guild.createChannel(name, {
                type: 'text',
                permissionOverwrites: [
                    { id: messageObject.author.id, allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'] }
                ],
                parent: '642183412907507721'
            });
            id = id + 1;
            message.edit((id).toString());
        })
            .catch(error => console.log(error));
    }
}
exports.default = testCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VwcG9ydFRpY2tldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9zdXBwb3J0VGlja2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsTUFBcUIsV0FBVztJQUFoQztRQUVxQixhQUFRLEdBQUcsZUFBZSxDQUFBO0lBZ0YvQyxDQUFDO0lBOUVHLElBQUk7UUFDQSxPQUFPLDBDQUEwQyxDQUFDO0lBQ3RELENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUV6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxVQUFVLENBQUMsSUFBYyxFQUFFLGFBQThCLEVBQUUsTUFBc0I7UUFDN0UsSUFBSSxLQUFLLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUNoQyxJQUFJLFdBQVcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBUzlCLElBQUksV0FBVyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxVQUFVLENBQUMsQ0FBQztRQUMzRSxJQUFJLFFBQVEsR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFDO1FBRXJDLFFBQVEsQ0FBQyxZQUFZLENBQUMsb0JBQW9CLENBQUM7YUFDdEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO1lBRWpDLElBQUksRUFBRSxHQUFVLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7WUFDdkMsSUFBSSxJQUFJLEdBQUcsa0JBQWtCLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDO1lBQzdDLEtBQUssQ0FBQyxhQUFhLENBQ2YsSUFBSSxFQUNKO2dCQUNJLElBQUksRUFBRSxNQUFNO2dCQUNaLG9CQUFvQixFQUFFO29CQUNsQixFQUFFLEVBQUUsRUFBRSxhQUFhLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxjQUFjLEVBQUUsZUFBZSxDQUFDLEVBQUU7aUJBRTVFO2dCQUNELE1BQU0sRUFBRSxvQkFBb0I7YUFDL0IsQ0FDSixDQUFBO1lBRUQsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDWixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQTtRQUNqQyxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQ2xDO0lBNEJULENBQUM7Q0FLSjtBQWxGRCw4QkFrRkMifQ==