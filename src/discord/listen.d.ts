import { Presence } from './types';
declare type Options = {
	/** Discord Presence Object*/
	presence?: Presence;
	/** Discord intents integer */
	intents?: number;
};
/** Listen to discord events */
declare function connect(token: string, options?: Options): void;
export = connect;
