declare type flags =
	| 'guilds'
	| 'guild_members'
	| 'guild_moderation'
	| 'guild_emojis_and_stickers'
	| 'guild_integrations'
	| 'guild_webhhooks'
	| 'guild_invites'
	| 'guild_voice_states'
	| 'guild_presences'
	| 'guild_messages'
	| 'guild_messages_reactions'
	| 'guild_message_typing'
	| 'direct_messages'
	| 'direct_message_reactions'
	| 'direct_message_typings'
	| 'message_content'
	| 'guild_scheduled_events'
	| 'auto_moderation_configuration'
	| 'auto_moderation_execution';

/** Generate a discord intents integer */
declare function generateIntents(...args: flags[]): number;

export = generateIntents;
