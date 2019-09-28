import * as Discord from "discord.js";
import * as ConfigFile from "./config";
import { IBotCommand } from "./api";

const client: Discord.Client = new Discord.Client();

let commands: IBotCommand[] = [];

loadCommands(`${__dirname}/commands`)


client.on("ready", () => {

    //lets us know that the bot is working and online
    console.log("Online Chief!");
})

client.on("message", msg => {

    //Ignores message if it was sent by the bot (stops from responding to itself)
    if (msg.author.bot) { return; }

    //Ignores messages that don't start with the prefix.
    if (!msg.content.startsWith(ConfigFile.config.prefix)) { return; }

    handleCommand(msg);
})

async function handleCommand(msg: Discord.Message) {

    //Split the string into the command and all of the args
    let command = msg.content.split(" ")[0].replace(ConfigFile.config.prefix, "");
    let args = msg.content.split(" ").slice(1);

    //Loops through the loaded commands
    for(const commandClass of commands){

        //attempts to execute code, but logs in case of possible error
        try{

            //Checks if command class is the correct one
            if(!commandClass.isThisCommand(command)){

                //Go to the next iteration of the loop if it isn't the command class.
                continue;
            }

            //pause the execution whilest awaiting code.
            await commandClass.runCommand(args, msg, client);

        }
        catch(exception){

            //If there is an error, it will log the exception
            console.log(exception);
        }
    }


}

function loadCommands(commandsPath: string) {

    //Exit if there are no commands
    if (!ConfigFile.config.commands || (ConfigFile.config.commands as string[]).length === 0) { return; }

    //Loop through all of the commands in the config file
    for (const commandName of ConfigFile.config.commands as string[]) {

        const commandsClass = require(`${commandsPath}/${commandName}`).default;

        const command = new commandsClass() as IBotCommand;

        commands.push(command);
    }
}

client.login(ConfigFile.config.token);