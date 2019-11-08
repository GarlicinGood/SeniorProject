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
        var name = `support-ticket-${guid}`;
        guild.createChannel(name, 'text', [
            {
                id: messageObject.author.id,
                allow: ['VIEW_CHANNEL', 'SEND_TTS_MESSAGES'],
            },
        ]);
    }
}
exports.default = testCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VwcG9ydFRpY2tldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9zdXBwb3J0VGlja2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0EsTUFBcUIsV0FBVztJQUFoQztRQUVxQixhQUFRLEdBQUcsZUFBZSxDQUFBO0lBa0MvQyxDQUFDO0lBaENHLElBQUk7UUFDQSxPQUFPLDBDQUEwQyxDQUFDO0lBQ3RELENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUV6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxVQUFVLENBQUMsSUFBYyxFQUFFLGFBQThCLEVBQUUsTUFBc0I7UUFHN0UsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBR2pDLElBQUksS0FBSyxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFDaEMsSUFBSSxXQUFXLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUU5QixJQUFJLElBQUksR0FBRyxrQkFBa0IsSUFBSSxFQUFFLENBQUM7UUFDcEMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFO1lBQzlCO2dCQUNJLEVBQUUsRUFBRSxhQUFhLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQzNCLEtBQUssRUFBRSxDQUFDLGNBQWMsRUFBRSxtQkFBbUIsQ0FBQzthQUMvQztTQUNKLENBQUMsQ0FBQztJQUtQLENBQUM7Q0FHSjtBQXBDRCw4QkFvQ0MifQ==