# 🔗 A module for connecting to apis and gateways such as discord

Latest version: `@0.10.1`

-   Fixed unsupported markdown

## 🔗 Contents

1. [🏗 Project Structure](#structure)
1. [👂 Event listener](#listener)
1. [👨‍💻 API Reference](#reference)
1. [📜 Changelog](#changelog)
1. [✅ To do](#todo)

# 🏗 Project structure <a id="structure"></a>

A splitscript project would look like this:

```
functions/
     discord/
          ready/
               start.js
          message/
               create/
                    all.js
main.js
package.json
package-lock.json
```

Example event file

```js
const { discord } = require('splitscript.js');
module.exports = async function (event) {
	console.log(event); // Event data
	await discord.channels.create(
		'969899407229194250', // Guild Id
		{ name: 'test-123' } // Channel Object
	);
};
```

# 👂 Listening to events <a id="listener"></a>

-   _As of beta 0.0.8, discord is the only gateway supported_

To listen to events on discord, use the `discord.listen` function _(in your main file)_:

```js
const { discord } = require('splitscript.js');
discord.listen('TOKEN');
```

There is also an optional `options` parameter, which looks like the following:

```js
{
     presence: {status: "online"}, // Discord presence object
     intents: 513, // Defaults to every intent
}
```

# API Reference <a id="reference"></a>

Respond to events with multiple discord apis

## debug

Find issues in debug mode... _And spam your logs_

```js
splitscript.debug();
```

|   Discord    |         Jump          |
| :----------: | :-------------------: |
|   messages   |   [Jump](#messages)   |
|   channels   |   [Jump](#channels)   |
|    emojis    |    [Jump](#emojis)    |
|   invites    |   [Jump](#invites)    |
| interactions | [Jump](#interactions) |

## discord

```js
const { discord } = require('splitscript.js');
discord.login(TOKEN); // Just for authenticating APIs
discord.listen(TOKEN, {
	presence: OBJ ?? { status: 'online' },
	intents: INT ?? 32767
}); // Authenticate APIs + Listen for events
```

> <a id="identify"> **⚠ not implemented yet** </a>
> Identify `object`:
>
> ```js
> {
> 	*token: DISCORD_BOT_TOKEN, // Authenticate APIs + For listening to events
> 	?APP_ID: STRING // Used for interactions.commands
> }
> ```

### &emsp; messages <a id="messages"></a>

&emsp;&emsp; [messages.reactions](#reactions)

#### &emsp;&emsp;&emsp; create

&emsp;&emsp;&emsp;&emsp; _Creates a message in discord_

```js
await discord.messages.create({
	content: MESSAGE_OBJECT,
	channel_id: CHANNEL_ID
});
await discord.messages.create(MESSAGE_OBJECT, CHANNEL_ID);
```

#### &emsp;&emsp;&emsp; edit

&emsp;&emsp;&emsp;&emsp; _Edits an existing message_

```js
await discord.messages.edit({
	newMessage: DISCORD_MESSAGE_OBJECT,
	message_id: EXISTING_MESSAGE_ID,
	channel_id: EXISTING_CHANNEL_ID
});
await discord.messages.edit(
	DISCORD_MESSAGE_OBJECT,
	EXISTING_MESSAGE_ID,
	EXISTING_CHANNEL_ID
);
```

#### &emsp;&emsp;&emsp; delete

&emsp;&emsp;&emsp;&emsp; _Deletes an existing message_

```js
await discord.messages.delete(MESSAGE_ID, CHANNEL_ID);
```

#### &emsp;&emsp;&emsp; bulkDelete

&emsp;&emsp;&emsp;&emsp; _Deletes an array of messages_

```js
await discord.messages.bulkDelete(CHANNEL_ID, ARRAY_OF_MESSAGE_IDS);
```

#### &emsp;&emsp;&emsp; get

&emsp;&emsp;&emsp;&emsp; _Retrieves a single message_

```js
await discord.messages.get(MESSAGE_ID, CHANNEL_ID);
```

#### &emsp;&emsp;&emsp; list

&emsp;&emsp;&emsp;&emsp; _Lists multiple messages from a channel_

```js
await discord.messages.list(CHANNEL_ID, OPTIONS);
```

&emsp;&emsp;&emsp;&emsp; [OPTIONS](https://discord.com/developers/docs/resources/channel#get-channel-messages)

#### &emsp;&emsp;&emsp; reactions <a id="reactions"></a>

##### &emsp;&emsp;&emsp;&emsp;&emsp; get.all

&emsp;&emsp;&emsp;&emsp;&emsp; _List all reactions for an emoji in a specific channel_

```js
await discord.messages.reactions.get.all({
     message_id: MESSAGE_ID,
     channel_id: CHANNEL_ID,
     emoji: EMOJI // (e.g 😀 or name:id),
     options: {
          after: SNOWFLAKE,
          limit: INTEGER
     } // Optional
})
```

##### &emsp;&emsp;&emsp;&emsp;&emsp; create

&emsp;&emsp;&emsp;&emsp;&emsp; _Adds a reaction to a message_

```js
await discord.messages.reactions.create({
	message_id: MESSAGE_ID,
	channel_id: CHANNEL_ID,
	emoji: EMOJI // (e.g 😀 or name:id),
});
```

##### &emsp;&emsp;&emsp;&emsp;&emsp; delete

###### &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; own

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; _Deletes the bots own reaction from a message_

```js
await discord.messages.reactions.delete.own({
	message_id: MESSAGE_ID,
	channel_id: CHANNEL_ID,
	emoji: EMOJI // (e.g 😀 or name:id)
});
```

###### &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; user

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; _Deletes the reaction of a specific user from a message_

```js
await discord.messages.reactions.delete.user({
	message_id: MESSAGE_ID,
	channel_id: CHANNEL_ID,
	emoji: EMOJI, // (e.g 😀 or name:id)
	user_id: USER_ID
});
```

###### &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; all

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; _Deletes all of the reactions from a message_
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; - Optionally delete all for a specific emoji by adding the emoji
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; parameter

```js
await discord.messages.reactions.delete.all({
	message_id: MESSAGE_ID,
	channel_id: CHANNEL_ID,
	emoji: EMOJI // (e.g 😀 or name:id) // Optional
});
```

### &emsp;channels <a id="channels"></a>

&emsp;&emsp;[Views the discord docs](https://discord.com/developers/docs/resources/channel)

-   &emsp;[channels.invites](#channels-invites)
-   &emsp;[channels.multiple](#channels-multiple)

#### &emsp;&emsp;get

&emsp;&emsp; _Gets a channel information_

```js
await discord.channels.get(CHANNEL_ID);
```

#### &emsp;&emsp;list <a id="channels-list"></a>

&emsp;&emsp; _Get a list of channels from a server_

```js
await discord.channels.list(GUILD_ID);
```

#### &emsp;&emsp;create

&emsp;&emsp; _Creates a new channel_

```js
await discord.channels.create(GUILD_ID, CHANNEL_OBJECT);
```

#### &emsp;&emsp;modify

&emsp;&emsp; _Update a channel_

```js
await discord.channels.modify(CHANNEL_ID, CHANNEL_OBJECT);
```

#### &emsp;&emsp;delete

&emsp;&emsp; _Remove a channel_

```js
await discord.channels.delete(CHANNEL_ID);
```

#### &emsp;&emsp;invites <a id="channels-invites"></a>

##### &emsp;&emsp;&emsp;list

&emsp;&emsp;&emsp; _Get an array of all invites of a channel_

```js
await discord.channels.invites.list(CHANNEL_ID);
```

##### &emsp;&emsp;&emsp;create

&emsp;&emsp;&emsp; _Creates a new invite_

```js
await discord.channels.invites.create(CHANNEL_ID, ?INVITE_OBJECT);
```

#### &emsp;&emsp;multiple <a id="channels-multiple"></a>

##### &emsp;&emsp;&emsp;get

&emsp;&emsp;&emsp; See [channels.list](#channels-list)

##### &emsp;&emsp;&emsp;positions.update

&emsp;&emsp;&emsp; _Edit positions for a set of channel objects_
&emsp;&emsp;&emsp; See https://discord.com/developers/docs/resources/guild#modify-guild-channel-positions

```js
await discord.channels.multiple.positions.update(
	GUILD_ID,
	[
		{
			id: CHANNEL_ID,
			position: ?INTEGER,
			lock_permissions: ?BOOLEAN,
			parent_id: ?SNOWFLAKE
		}
	]
);
```

### &emsp;emojis <a id="emojis"></a>

&emsp;&emsp;[See the discord docs](https://discord.com/developers/docs/resources/emoji)

#### &emsp;&emsp;list

&emsp;&emsp; _Gets a list of emojis in a guild_
&emsp;&emsp; _Returns an array of emoji objects_

```js
await discord.emojis.list(GUILD_ID);
```

#### &emsp;&emsp;get

&emsp;&emsp; _Gets information of a single emoji_
&emsp;&emsp; _Returns an emoji object_

```js
await discord.emojis.get(GUILD_ID, EMOJI_ID);
```

#### &emsp;&emsp;create

&emsp;&emsp; _Adds an emoji to a guild_
&emsp;&emsp; _Returns an emoji object_

```js
await discord.emojis.create(GUILD_ID, EMOJI_OBJECT);
```

#### &emsp;&emsp;modify

&emsp;&emsp; _Edit an existing emoji_
&emsp;&emsp; _Returns an emoji object_

```js
await discord.emojis.modify(GUILD_ID, EMOJI_ID, {
	name: STRING, // New emoji name
	?roles: ARRAY // Array of role ids allowed to use this emoji
});
```

#### &emsp;&emsp;delete

&emsp;&emsp; _Deletes an emoji_

```js
await discord.emojis.delete(GUILD_ID, EMOJI_ID);
```

### &emsp;invites <a id="invites"></a>

&emsp;&emsp;[See the discord docs](https://discord.com/developers/docs/resources/invite)
&emsp;&emsp;See also: [`channels.invites`](#channels-invites)

#### &emsp;&emsp;get

&emsp;&emsp; _Get an invite_

```js
await discord.invites.get(INVITE_CODE, {
	?with_counts: BOOLEAN, // whether the invite should contain approximate member counts
	?with_expiration: BOOLEAN, // whether the invite should contain the expiration date
	?guild_scheduled_event_id: SNOWFLAKE // the guild scheduled event to include with the invite
});
```

#### &emsp;&emsp;delete

&emsp;&emsp; _Delete an invite_

```js
await discord.invites.delete(INVITE_CODE);
```

### &emsp;interactions <a id="interactions"></a>

#### &emsp;&emsp; commands <a id="commands"></a>

##### &emsp;&emsp;&emsp; create

&emsp;&emsp;&emsp; Creates a command

```js
await discord.interactions.commands.create(APP_ID, COMMAND_OBJECT, ?GUILD_ID);
```

##### &emsp;&emsp;&emsp; delete

&emsp;&emsp;&emsp; Deletes a command

```js
await discord.interactions.commands.delete(APP_ID, COMMAND_ID, ?GUILD_ID);
```

##### &emsp;&emsp;&emsp; update

&emsp;&emsp;&emsp; Updates a command

```js
await discord.interactions.commands.update(APP_ID, COMMAND_ID, NEW_COMMAND_OBJECT, ?GUILD_ID);
```

##### &emsp;&emsp;&emsp; list

&emsp;&emsp;&emsp; Lists a command

```js
await discord.interactions.commands.list(APP_ID, ?GUILD_ID, ?WITH_LOCALIZATIONS);
```

##### &emsp;&emsp;&emsp; bulkOverwrite

&emsp;&emsp;&emsp; Update multiple an array of commands

```js
await discord.interactions.commands.bulkOverwrite(APP_ID, [COMMAND_OBJECT], ?GUILD_ID);
```

##### &emsp;&emsp;&emsp; get

&emsp;&emsp;&emsp; Gets a single command

```js
await discord.interactions.commands.get(APP_ID, COMMAND_ID, ?GUILD_ID);
```

#### &emsp;&emsp;&emsp; permissions

##### &emsp;&emsp;&emsp;&emsp; get

&emsp;&emsp;&emsp;&emsp; Gets permissions from command

```js
await discord.interactions.commands.permissions.get(APP_ID, COMMAND_ID, ?GUILD_ID);
```

##### &emsp;&emsp;&emsp;&emsp; update

&emsp;&emsp;&emsp;&emsp; Updates permissions for a command

> ⚠ requires a bearer token with permissions to manage guilds and roles

```js
await discord.interactions.commands.permissions.update(APP_ID, COMMAND_ID, PERMISSIONS, ?GUILD_ID);
```

# 📜 Changelog <a id="changelog"></a>

| Version |                                                            Description                                                            |
| :-----: | :-------------------------------------------------------------------------------------------------------------------------------: |
|  0.0.8  |                                 First stable version. Added [`discord.messages`](#messages) apis                                  |
|  0.1.0  |                                       Added [`discord.messages.reactions`](#reactions) apis                                       |
|  0.1.1  |                                                   Added logs for gateway errors                                                   |
|  0.1.2  |                         Added a debugging mode (`splitscript.debug()`) to find issues and spam your logs                          |
|  0.1.3  |                                            Changed a debug `error` to a `console.log`                                             |
|  0.1.4  |                                             Fixed bug with `discord.messages.create`                                              |
|  0.1.5  |                                     Changed "\" in file paths to "/" to support linux systems                                     |
|  0.1.6  |                           (hopefully) fixed a bug in the gateway where the connection would not be kept                           |
|  0.1.7  | Added JSDoc (for VSCode Intellisense) to [`discord.messages`](#messages)<br>Added [`discord.channels`](#channels) apis (no JSDoc) |
|  0.1.8  |                                                 Added [`discord.emojis`](#emojis)                                                 |
|  0.1.9  |                                                Added [`discord.invites`](#invites)                                                |
| 0.10.0  |     Added [`discord.interactions.commands`](#commands) <br> Changed version number to be semantic (from `0.1.9` => `0.10.0`)      |
| 0.10.1  |                                             Fixed unsupported markdown in `README.md`                                             |
| 0.10.2  |                     Discord bots now stay online 24/7 - closed websocket connections automatically reconnect                      |

# ✅ ToDo <a id="todo"></a>

All: add jsdoc

|      Main API       |                  Function                  |                                      Documentation                                       |
| :-----------------: | :----------------------------------------: | :--------------------------------------------------------------------------------------: |
| [discord](#discord) | `.interactions.`(`responses`, `followups`) | [discord.dev](https://discord.com/developers/docs/interactions/receiving-and-responding) |
| [discord](#discord) |                 `.guilds`                  |            [discord.dev](https://discord.com/developers/docs/resources/guild)            |
| [discord](#discord) |                 `.automod`                 |       [discord.dev](https://discord.com/developers/docs/resources/auto-moderation)       |
| [discord](#discord) |             `.scheduledEvents`             |    [discord.dev](https://discord.com/developers/docs/resources/guild-scheduled-event)    |
| [discord](#discord) |                `.templates`                |       [discord.dev](https://discord.com/developers/docs/resources/guild-template)        |
| [discord](#discord) |                 `.stages`                  |       [discord.dev](https://discord.com/developers/docs/resources/stage-instance)        |
| [discord](#discord) |                `.stickers`                 |           [discord.dev](https://discord.com/developers/docs/resources/sticker)           |
| [discord](#discord) |                  `.user`                   |            [discord.dev](https://discord.com/developers/docs/resources/user)             |
| [discord](#discord) |                `.webhooks`                 |           [discord.dev](https://discord.com/developers/docs/resources/webhook)           |
| [discord](#discord) |             `.listen`/`.login`             |                  Change token property to [identify object](#identify)                   |
