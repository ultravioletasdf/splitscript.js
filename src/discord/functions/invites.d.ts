import { Invite } from '../types';
type GetInviteParams = {
	/** Whether invite should contain approx member counts */
	with_counts?: boolean;
	/** whether invite should contain expiration date */
	with_expiration?: boolean;
	/** guild scheduled event to include with invite */
	guild_scheduled_event_id?: string;
};
/** Return invite object for given code */
export function get(
	invite_code: string,
	params: GetInviteParams
): Promise<Invite>;
/** Delete an invite */
declare function deleteInv(invite_code: string): Promise<Invite>;
export { deleteInv as delete };
