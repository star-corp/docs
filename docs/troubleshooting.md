---
template: overrides/main.html
---

# Troubleshooting

## TypeErrors

Javascript
:fontawesome-brands-js:

!!! error "Error: TypeError"

    ``` sh
    node .
    TypeError: Cannot read property 'send' of undefined
    at Object.execute (container/11/netsys/core/commands/help.js:9:19)
    at module.exports (container/11/netsys/core/events/guild/message.js:84:17)
    at Client.emit (events.js:315:20)
    ```

This error can have many meanings to it. The best move to fix this error is to do research behind the error (if other people have experienced it even
if it is not a netSys instance) and or reverse the modifications you made in that file. If it is a core file, reinstall it. If it is a command file,
delete the file, then try again. netSys features a built-in error catcher to prevent a full shutdown of the netSys instance, rather it will "catch" 
the error and respond with an error message with diagnostic information. (Command name, Line Error, and Console Error)
This can be more useful then the console error, as it provides a sample of the direct code in which the error was caught.


## No Response

Javascript
:fontawesome-brands-js:

!!! danger "NOTICE: Reinstalling netSys"
    Reinstalling netSys **will delete all files and modifications.** You should **backup** netSys before resetting or reinstalling netSys.
    If you choose not to backup netSys and reinstall/reset netSys, there is no turning back.

If the bot does not response, check if the instance is running and if the startup message was displayed.

```
Build: Developer Build | depMag Version: depMag2, DM2 - 2.1.4 | netSys Core Version: netSysEmbedded4, NE4 - 4.1.7 | Startup Message: netSys is online! Logged in as: myBot#1131
```

If the startup message was displayed, run -hello-world and if you get a embed response, text response, and console response, it means the bot is functioning.
Check the command you wanted to use before and see if it works, it it doesn't, the command is broken.

If the startup message does not display, there is a critical problem in netSys's Core, reinstall netSys. 

If an invalid token was provided, the bot will display a console warning. Register a bot token on the Discord Developer Panel, input the token in the rules.json and config.json
files, then restart netSys. 

If the bot token is inputted and is valid, and the bot does not display a startup message, nor goes online, or idle, reinstall netSys.