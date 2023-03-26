import { Emoji } from '../types';
/** Returns list of emojis in guild */
export function list(guild_id: string): Promise<Emoji[]>;
/** Return emoji object for give guild and emoji ids */
export function get(guild_id: string, emoji_id: string): Promise<Emoji>;
type CreateEmojiParams = {
	/** name of emoji */
	name: string;
	/** 128x128 emoji image as Data URI scheme*/
	image: string;
	/** roles allowed to use emoji */
	roles: string[];
};
/** Create new emoji for guild */
export function create(
	guild_id: string,
	emoji: CreateEmojiParams
): Promise<Emoji>;

type ModifyEmojiParams = {
	/** name of emoji */
	name: string;
	/** roles allowed to use emoji */
	roles: ?string[];
};
/** Modify given emoji */
export function modify(
	guild_id: string,
	emoji_id: string,
	emoji: ModifyEmojiParams
): Promise<Emoji>;
/** Delete given emoji */
export function deleteEmoji(guild_id: string, emoji_id: string);
