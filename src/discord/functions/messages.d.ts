import { Message, User, Emoji } from '../types';
/** Creates a new message */
export function create(message: Message, channel_id: string): Promise<Message>;
/** Updates a message */
export function edit(
	newMessage: Message,
	channel_id: string,
	message_id: string
): Promise<Message>;
/** Delete a single message */
declare function deleteMsg(
	message_id: string,
	channel_id: string
): Promise<null>;
export { deleteMsg as delete };
/** Delete an array of messages */
export function bulkDelete(
	channel_id: string,
	messages: string[]
): Promise<null>;
/** Retrieve a single message */
export function get(message_id: string, channel_id: string): Promise<Message>;
declare type ListOptions = {
	/** Get messages around this message ID */
	around?: string;
	/** Get messages before this message ID */
	before?: string;
	/** Get messages after this message ID */
	after?: string;
	/** Max number of messages to return (1-100) */
	limit?: number;
};

/** Get an array of messages from a channel */
export function list(
	channel_id: string,
	options: ListOptions
): Promise<Message[]>;
type ListReactionOptions = {
	/** Get users after this user ID */
	after?: string;
	/** Max number of users to return (1-100) */
	limit?: number;
};
interface reactions {
	/** Get a list of users that reacted with a specific emoji */
	list: (
		message_id: string,
		channel_id: string,
		emoji: string,
		options?: ListReactionOptions
	) => Promise<User[]>;
	/** Add a reaction to a message */
	create: (
		message_id: string,
		channel_id: string,
		emoji: string
	) => Promise<null>;
	/** Delete reactions */
	delete: deleteR;
}
interface deleteR {
	/** Delete the bots own reaction */
	own: (
		message_id: string,
		channel_id: string,
		emoji: string
	) => Promise<null>;
	/** Delete a users reaction */
	user: (
		message_id: string,
		channel_id: string,
		emoji: string,
		user_id: string
	) => Promise<null>;
	/** Delete all reactions from a message
	 *
	 * Specify `emoji` to delete all reactions of a specific emoji
	 */
	all: (
		message_id: string,
		channel_id: string,
		emoji?: string
	) => Promise<null>;
}

/** Manage reactions */
export const reactions: reactions;
