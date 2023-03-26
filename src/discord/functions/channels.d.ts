import { Channel, Invite } from '../types';

/** Get a channel */
export function get(id: string): Promise<Channel>;
/** Get a list of channels in a guild */
export function list(guild_id: string): Promise<Channel[]>;
/** Create a channel in a guild */
export function create(
	guild_id: string,
	channel: Partial<Channel>
): Promise<Channel>;
/** Modify a channel */
export function modify(id: string, channel: Partial<Channel>): Promise<Channel>;
/** Delete a channel */
declare function _delete(id: string): Promise<Channel>;
export { _delete as delete };

type CreateInviteBody = {
	/** duration of invite in seconds before expiry, or 0 for never. between 0 and 604800 (7 days) */
	max_age: number;
	/** max number of uses or 0 for unlimited. between 0 and 100 */
	max_uses: number;
	/** whether this invite only grants temporary membership */
	temporary: boolean;
	/** if true, don't try to reuse a similar invite (useful for creating many unique one time use invites) */
	unique: boolean;
	/** the type of target for this voice channel invite */
	target_type: number;
	/** the id of the user whose stream to display for this invite, required if `target_type` is 1, the user must be streaming in the channel */
	target_user_id: string;
	/** the id of the embedded application to open for this invite, required if `target_type` is 2, the application must have the `EMBEDDED` flag	 */
	target_application_id: string;
};
interface invites {
	/** List invites in a channel */
	list: (id: string) => Promise<Invite[]>;
	/** Create invite in a channel */
	create: (id: string, invite: Partial<CreateInviteBody>) => Promise<Invite>;
}
export const invites: invites;
import * as invites from './channels.invites';
export { invites };
