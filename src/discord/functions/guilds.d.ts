import { Guild, GuildPreview, Role } from '../types';
/** Create new guild */
export function create(guild: Partial<Guild>): Promise<Guild>;
/** Returns guild object for given id */
export function get(id: string, with_counts?: boolean): Promise<Guild>;
/** Returns guild preview object for given id */
export function preview(id: string): Promise<GuildPreview>;
/** Modify guild's settings */
export function modify(id: string, guild: Partial<Guild>): Promise<Guild>;
/** Delete guild */
declare function deleteGuild(id: string): Promise<null>;
export { deleteGuild as delete };
