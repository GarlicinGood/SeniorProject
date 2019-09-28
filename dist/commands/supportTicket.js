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
        let guid = Date.now().toString();
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
        let helpChannel = parentChannel.id = "627608447046778890";
        newChannel.setParent(`${helpChannel}`);
    }
}
exports.default = testCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VwcG9ydFRpY2tldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9zdXBwb3J0VGlja2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0EsTUFBcUIsV0FBVztJQUFoQztRQUVxQixhQUFRLEdBQUcsZUFBZSxDQUFBO0lBeUQvQyxDQUFDO0lBdkRHLElBQUk7UUFDQSxPQUFPLDBDQUEwQyxDQUFDO0lBQ3RELENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUV6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxVQUFVLENBQUMsSUFBYyxFQUFFLGFBQThCLEVBQUUsTUFBc0I7UUFHN0UsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBR2pDLElBQUksS0FBSyxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFDaEMsSUFBSSxXQUFXLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUU5QixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRWxDLElBQUksSUFBSSxHQUFHLGNBQWMsSUFBSSxFQUFFLENBQUM7UUFDaEMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFO1lBQzlCO2dCQUNJLEVBQUUsRUFBRSxhQUFhLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQzNCLEtBQUssRUFBRSxDQUFDLGNBQWMsRUFBRSxtQkFBbUIsQ0FBQzthQUMvQztTQUNKLENBQUMsQ0FBQztRQUdILElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNuRCxJQUFJLGFBQWEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztRQUVwRSxVQUFVLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBTXBDLElBQUksV0FBVyxHQUFHLGFBQWEsQ0FBQyxFQUFFLEdBQUcsb0JBQW9CLENBQUM7UUFDMUQsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLFdBQVcsRUFBRSxDQUFDLENBQUE7SUFZMUMsQ0FBQztDQUdKO0FBM0RELDhCQTJEQyJ9