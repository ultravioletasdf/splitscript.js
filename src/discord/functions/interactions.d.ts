import {
	Command,
	CommandPermission,
	GuildCommandPermission,
	InteractionCallbackData,
	Message,
} from '../types';

interface permissions {
	/** Get permissions of a command */
	get: (
		command_id: string,
		guild_id?: string
	) => Promise<GuildCommandPermission[] | CommandPermission[]>;
	/** Update permissions for a command */
	update: (
		command_id: string,
		permission: CommandPermission[],
		guild_id?: string
	) => Promise<GuildCommandPermission[] | CommandPermission[]>;
}
interface commands {
	/** Create a command */
	create: (
		/** Command Object */
		command: Partial<Command>,
		/** id of guild to create command in */
		guild_id?: string
	) => Promise<Command>;
	/** Remove a command */
	delete: (
		/** id of command to delete */
		command_id: string,
		/** id of guild command is in */
		guild_id?: string
	) => Promise<null>;
	/** Edit command */
	update: (
		/** id of command to update */
		command_id: string,
		/** command object */
		command: Partial<Command>,
		/** id of guild command is in */
		guild_id?: string
	) => Promise<Command>;
	/** List all commands */
	list: (
		/** guild to list commands for */
		guild_id?: string | null,
		/** Whether to include full localization dictionaries (`name_localizations` and `description_localizations`) in the returned objects, instead of the `name_localized` and `description_localized` fields. Default false. */
		with_localizations?: boolean
	) => Promise<Command[]>;
	/** Update multiple commands */
	bulkOverwrite: (
		/** Array of commands to update */
		commands: Partial<Command[]>[],
		/** id of guild commands are in */
		guild_id?: string
	) => Promise<Command[]>;
	/** Get a command */
	get: (
		/** id of command to get */
		command_id: string,
		/** id of guild command is in */
		guild_id?: string
	) => Promise<Command>;
	permissions: permissions;
}
export const commands: commands;

type InteractionResponse = {
	type: number;
	data?: InteractionCallbackData;
};
/** Manage responses to interactions */
interface responses {
	/** Create response to Interaction */
	create: (
		id: string,
		token: string,
		response: InteractionResponse
	) => Promise<*>;
	/** Returns the initial Interaction response. */
	get: (token: string) => Promise<Message>;
	/** Edits the initial Interaction response.  */
	edit: (
		token: string,
		response: InteractionCallbackData
	) => Promise<Message>;
	/** Deletes the initial Interaction response. */
	delete: (token: string) => Promise<*>;
}
export const responses: responses;
interface followups {
	/** Creates a followup message for interaction */
	create: (token: string, message: Partial<Message>) => Promise<*>;
	/** Get the followup message for an interaction */
	get: (token: string, message_id: string) => Promise<Message>;
	/** Edits a followup message for an interaction. */
	edit: (
		token: string,
		message_id: string,
		message: Partial<Message>
	) => Promise<Message>;
	/** Deletes a followup message for an interaction */
	delete: (token: string, message_id: string) => Promise<null>;
}
export const followups: followups;
