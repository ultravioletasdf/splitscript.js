const flags = {
	guilds: 1 << 0,
	guild_members: 1 << 1,
	guild_moderation: 1 << 2,
	guild_emojis_and_stickers: 1 << 3,
	guild_integrations: 1 << 4,
	guild_webhhooks: 1 << 5,
	guild_invites: 1 << 6,
	guild_voice_states: 1 << 7,
	guild_presences: 1 << 8,
	guild_messages: 1 << 9,
	guild_messages_reactions: 1 << 10,
	guild_message_typing: 1 << 11,
	direct_messages: 1 << 12,
	direct_message_reactions: 1 << 13,
	direct_message_typings: 1 << 14,
	message_content: 1 << 15,
	guild_scheduled_events: 1 << 16,
	auto_moderation_configuration: 1 << 20,
	auto_moderation_execution: 1 << 21
};
module.exports = function () {
	const args = Array.prototype.slice.call(arguments, 0);
	let generatedIntents = 0;
	for (let arg of args) {
		generatedIntents += flags[arg.toLowerCase()];
	}
	return generatedIntents;
};
