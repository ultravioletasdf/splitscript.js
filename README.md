<div align="center">

[<img src="https://i.imgur.com/reht9nR.png;" style="padding-bottom:10px;" height="150">](https://www.npmjs.com/package/splitscript.js)

[![](https://img.shields.io/discord/1033343718494847007?color=5865F2&logo=discord&logoColor=white)](https://discord.gg/WJySJ7HdrZ)
![](https://img.shields.io/npm/v/splitscript.js?color=9477CB&label=version)
![](https://img.shields.io/npm/dt/splitscript.js.svg?color=FF6666)
![](https://img.shields.io/bundlephobia/min/splitscript.js?color=FF6666)
![](https://img.shields.io/github/repo-size/infrared-studio/splitscript.js?color=ff6666&label=unpacked%20size)

[<img src="https://i.imgur.com/xUQ8o9P.png" height="75px" style="margin-top:0px;">](https://splitscript.js.org)

</div>

## A tiny discord bot framework

## 🔗 Contents

1. [🏗 Project Structure](#structure)
1. [👂 Event listener](#listener)
1. [📜 Changelog](#changelog)
1. [✅ To do](#todo)

# 🏗 Project structure <a id="structure"></a>

A SplitScript.js project has:

-   a `functions/` folder for listening to events
-   a `files/` folder for managing files with [SplitScript.fs](https://www.npmjs.com/package/splitscript.fs)
-   a main file (e.g: main.js, index.js) for setting up the listener

E.g:

```
functions/
     discord/
          ready/
               start.js
          message/
               create/
                    1.js
		interaction/
			create/
				command.js
index.js
package.json
package-lock.json
```

# 👂 Listening to events <a id="listener"></a>

To listen to events on discord, use the `discord.listen` function in your main file:

```js
const { discord } = require('splitscript.js');
discord.listen('TOKEN', {
	intents: INTEGER
});
```

`intents` must be a valid [discord intent](https://discord.com/developers/docs/topics/gateway#gateway-intents) or the connection will close

## Create event listener

See [the docs](https://splitscript.js.org/docs/discord/events) for a list of event paths
Create a `.js` file with any name in the event path listed above.
In that, put the code:

```js
// functions/discord/path
const { discord } = require('splitscript.js');
module.exports = async function (event) {
	// Run some code
};
```

You can write the code that you want to run in the function.

# 📜 Changelog <a id="changelog"></a>

| Version | Description                                                                                                                                                                                                                               |
| :-----: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  0.0.8  | First stable version. Added [`discord.messages`](#messages) functions                                                                                                                                                                     |
|  0.1.0  | Added [`discord.messages.reactions`](#reactions) functions                                                                                                                                                                                |
|  0.1.1  | Added logs for gateway errors                                                                                                                                                                                                             |
|  0.1.2  | Added a debugging mode (`splitscript.debug()`) to find issues and spam your logs                                                                                                                                                          |
|  0.1.3  | Changed a debug `error` to a `console.log`                                                                                                                                                                                                |
|  0.1.4  | Fixed bug with `discord.messages.create`                                                                                                                                                                                                  |
|  0.1.5  | Changed "\" in file paths to "/" to support linux systems                                                                                                                                                                                 |
|  0.1.6  | (hopefully) fixed a bug in the gateway where the connection would not be kept                                                                                                                                                             |
|  0.1.7  | Added JSDoc (for VSCode Intellisense) to [`discord.messages`](#messages)<br>Added [`discord.channels`](#channels) functions (no JSDoc)                                                                                                    |
|  0.1.8  | Added [`discord.emojis`](#emojis)                                                                                                                                                                                                         |
|  0.1.9  | Added [`discord.invites`](#invites)                                                                                                                                                                                                       |
| 0.10.0  | Added [`discord.interactions.commands`](#commands) <br> Changed version number to be semantic (from `0.1.9` => `0.10.0`)                                                                                                                  |
| 0.10.1  | Fixed unsupported markdown in `README.md`                                                                                                                                                                                                 |
| 0.10.2  | Discord bots now stay online 24/7 - closed websocket connections automatically reconnect                                                                                                                                                  |
| 0.11.0  | Added [`discord.interactions.responses`](#responses)                                                                                                                                                                                      |
| 0.12.0  | Added [`discord.interactions.followups`](#followups)                                                                                                                                                                                      |
| 0.12.1  | Removed object style parameters for [`discord.messages`](#messages) functions <br> Renamed `auth.js` to `variable.js` to fit what it actually does <br> Fixed bugged error handling in [`discord.messages`](#messages) functions          |
| 0.12.2  | Updated imports for variable.js in debug.js                                                                                                                                                                                               |
| 0.13.0  | `application_id` is automatically grabbed from token - interactions functions no longer have `application_id` parameter                                                                                                                   |
| 0.13.1  | Updated `README.md`                                                                                                                                                                                                                       |
| 0.13.2  | Updated `README.md`                                                                                                                                                                                                                       |
| 0.13.3  | Updated `README.md` (fixed issue with centering )                                                                                                                                                                                         |
| 0.14.0  | Swapped from `axios` to a much smaller [`splitscript.https`](https://www.npmjs.com/package/splitscript.https) <br> added some `guilds` functions                                                                                          |
| 0.15.0  | [splitscript.https](https://www.npmjs.com/package/splitscript.https) exported in index.js                                                                                                                                                 |
| 0.15.1  | Added ts declaration files                                                                                                                                                                                                                |
| 0.15.2  | Updated `readme.md` and `package.json`                                                                                                                                                                                                    |
| 0.15.3  | updated `readme.md`                                                                                                                                                                                                                       |
| 0.15.4  | Removed jsdoc for messages.js                                                                                                                                                                                                             |
| 0.16.0  | Added rest of functions for `discord.guilds`                                                                                                                                                                                              |
| 0.17.0  | Added `discord.users` and some `discord.guilds` functions                                                                                                                                                                                 |
| 0.17.1  | Added `discord.guilds.getAuditLog`, `discord.guilds.members.(modifyMe/me)` now `discord.guilds.members.me.(modify/get)`, `discord.guilds.vanity` now `discord.guilds.getVanity`, `discord.guilds.preview` now `discord.guilds.getPreview` |
| 0.18.0  | Added `discord.automod`                                                                                                                                                                                                                   |

# ✅ ToDo <a id="todo"></a>

|       Module        |      Function      |                                   Documentation                                    |
| :-----------------: | :----------------: | :--------------------------------------------------------------------------------: |
| [discord](#discord) |     `.automod`     |    [discord.dev](https://discord.com/developers/docs/resources/auto-moderation)    |
| [discord](#discord) | `.scheduledEvents` | [discord.dev](https://discord.com/developers/docs/resources/guild-scheduled-event) |
| [discord](#discord) |    `.templates`    |    [discord.dev](https://discord.com/developers/docs/resources/guild-template)     |
| [discord](#discord) |     `.stages`      |    [discord.dev](https://discord.com/developers/docs/resources/stage-instance)     |
| [discord](#discord) |    `.stickers`     |        [discord.dev](https://discord.com/developers/docs/resources/sticker)        |
| [discord](#discord) |    `.webhooks`     |        [discord.dev](https://discord.com/developers/docs/resources/webhook)        |
