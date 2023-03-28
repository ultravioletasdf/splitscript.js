/** Channel Object */
export type Channel = {
	/** id of channel */
	id: string;
	/** type of channel */
	type: number;
	/** id of guild */
	guild_id?: string;
	/** position of channel */
	position?: number;
	/** permission overwrites for members and roles */
	permission_overwrites?: Overwrite[];
	/** name of channel */
	name?: string | null;
	/** topic of channel */
	topic?: string | null;
	/** whether channel is nsfw */
	nsfw?: boolean;
	/** id of last message sent */
	last_message_id?: string | null;
	/** bitrate (in bits) of voice channel */
	bitrate?: number;
	/** user limit of voice channel */
	user_limit?: number;
	/** amound of seconds a user has to wait before sending another message */
	rate_limit_per_user?: number;
	/** recipients of dm */
	recipients?: User[];
	/** icon hash of group dm */
	icon?: string | null;
	/** id of group/thread creator */
	owner_id?: string;
	/** application id of group dm create if bot created */
	application_id?: string;
	/** whether managed by application */
	managed?: boolean;
	/** id of parent category for a guild channel/id of text channel this thread was created in */
	parent_id?: string | null;
	/** when last pinned message was pinned */
	last_pin_timestamp?: string | null;
	/** voice region id of voice channel */
	rtc_region?: string | null;
	/** camera video quality mode of voice channel */
	video_quality_mode?: number;
	/** number of messages in thread */
	message_count?: number;
	/** approximate count of users in thread (max: 50) */
	member_count?: number;
	/** thread-specific fields*/
	thread_metadata?: ThreadMetadata;
	/** thread member object for current user */
	member?: ThreadMember;
	/** default duration of threads before archiving */
	default_auto_archive_duration?: number;
	/** computed permissions for bot in channel (with overwrites) */
	permissions?: string;
	/** channel flags as bitfield */
	flags?: number;
	/** number of messages ever sent in thread */
	total_message_sent?: number;
	/** tags that can be used in forum channel */
	available_tags?: ForumTag[];
	/** ids of tags applied to forum thread */
	applied_tags?: string[];
	/** emoji shown in add reaction button of forum thread */
	default_reaction_emoji?: DefaultReaction | null;
	/** initial rate_limit_per_user for newly created threads */
	default_thread_rate_limit_per_user?: number;
	/** default sort order type used to order forum posts */
	default_sort_order?: number;
	/** default forum layout view used to display forum posts */
	default_forum_layout?: number;
};
/** Overwrite Object */
export type Overwrite = {
	/** role or user id */
	id: string;
	/** either 0 (role) or 1 (member) */
	type: number;
	/** permission bit set to allow */
	allow: string;
	/** permission bit set to deny */
	deny: string;
};
/** User Object */
export type User = {
	/** user's id */
	id: string;
	/** user's username */
	username: string;
	/** user's 4-digit tag */
	discriminator: string;
	/** user's avatar hash */
	avatar: string | null;
	/** whether user is a bot */
	bot?: boolean;
	/** whether user is Offical Discord System user */
	system?: boolean;
	/** whether user has 2fa enabled */
	mfa_enabled?: boolean | null | undefined;
	/** user's banner color as integer representation of hex color */
	accent_color?: number | null | undefined;
	/** user's chosen language option */
	locale?: string;
	/** whether user's email has been verified */
	verified?: boolean;
	/** user's email */
	email?: string | null;
	/** user's flags */
	flags?: number;
	/** type of user's nitro subscription */
	premium_type?: number;
	/** user's public flags */
	public_flags?: number;
};
/** Thread Metadata Object */
export type ThreadMetadata = {
	/** whether thread is archived */
	archived: boolean;
	/** duration of thread before archiving */
	auto_archive_duration: number;
	/** timestamp when thread's archive status was last changed */
	archive_timestamp: string;
	/** whether thread is locked */
	locked: boolean;
	/** whether non-moderators can add other non-moderators to a private thread */
	invitable?: boolean;
	/** timestamp when thread was created */
	create_timestamp?: string | null;
};
/** Thread Member Object */
export type ThreadMember = {
	/** id of thread */
	id?: string;
	/** id of user */
	user_id?: string;
	/** time user last joined thread */
	join_timestamp: string;
	/** any user-thread settings */
	flags: number;
	/** additional information of user */
	member?: GuildMember;
};
/** Forum Tag Object */
export type ForumTag = {
	/** id of tag */
	id: string;
	/** name of tag */
	name: string;
	/** whether tag can only be added to or removed from threads with `MANAGE_THREADS` permission*/
	moderated: boolean;
	/** id of guild's custom emoji */
	emoji_id: string | null;
	/** unicode character of emoji */
	emoji_name: string | null;
};
/** Default Reaction Object */
export type DefaultReaction = {
	/** id of guild custom emoji */
	emoji_id: string | null;
	/** unicode character of emoji */
	emoji_name: string | null;
};
/** Guild Member Object */
export type GuildMember = {
	/** user this guild member represents */
	user?: User;
	/** user's guild nickname */
	nick?: string;
	/** user's guild avatar hash */
	avatar?: string;
	/** array of role object ids */
	roles: string[];
	/** when user joined guild */
	joined_at: string;
	/** when user started boosting guild */
	premium_since?: string | null;
	/** whether user is deafened in voice channels */
	deaf: boolean;
	/** whether user is muted in voice channels */
	mute: boolean;
	/** guild member flags as bit set */
	flags: number;
	/** whether user has passed guild's membership screening requirements */
	pending?: boolean;
	/** total permissions of member in channel */
	permissions?: string;
	/** when user's timeout will expire */
	communication_disable_until?: string | null;
};
/** Invite Object */
export type Invite = {
	/** invite code (unique id) */
	code: string;
	/** guild this invite is for */
	guild?: Guild;
	/** channel this invite is for */
	channel: Channel | null | undefined;
	/** user who created invite */
	inviter?: User;
	/** type of target for this voice channel invite */
	target_type?: number;
	/** user whose stream to display for this voice channel stream invite */
	target_user?: User;
	/** embedded application to open for this voice channel embedded application invite */
	target_application?: Partial<Application>;
	/** approx count of online members */
	approximate_presence_count?: number;
	/** approx count of total members */
	approximate_member_count?: number;
	/** expiration date of this invite */
	expires_at?: string | null;
	/** **deprecated** - stage instance data if there is a public Stage instance in the Stage channel this invite is for */
	stage_instance?: InviteStageInstance;
	/** guild scheduled event data */
	guild_scheduled_event?: GuildScheduledEvent;
};
export type Application = {
	/** the id of the app */
	id: string;
	/** the name of the app */
	name: string;
	/** the icon hash of the app */
	icon: string | null;
	/** the description of the app */
	description: string;
	/** an array of rpc origin urls, if rpc is enabled */
	rpc_origins: string[];
	/** when false only app owner can join the app's bot to guilds */
	bot_public: boolean;
	/** when true the app's bot will only join upon completion of the full oauth2 code grant flow */
	bot_require_code_grant: boolean;
	/** the url of the app's terms of service */
	terms_of_service_url?: string;
	/** the url of the app's privacy policy */
	privacy_policy_url?: string;
	/** partial user object containing info on the owner of the application */
	owner?: Partial<User>;
	/** **deprecated and will be removed** An empty string.*/
	summary: string;
	/** the hex encoded key for verification in interactions and the GameSDK's GetTicket */
	verify_key: string;
	/** if the application belongs to a team, this will be a list of the members of that team */
	team: Team | null;
	/** if this application is a game sold on Discord, this field will be the guild to which it has been linked */
	guild_id?: string;
	/** if this application is a game sold on Discord, this field will be the id of the "Game SKU" that is created, if exists */
	primary_sku_id?: string;
	/** if this application is a game sold on Discord, this field will be the URL slug that links to the store page */
	slug?: string;
	/** the application's default rich presence invite cover image hash */
	cover_image?: string;
	/** the application's public flags */
	flags?: number;
	/** up to 5 tags describing the content and functionality of the application */
	tags?: string[];
	/** settings for the application's default in-app authorization link, if enabled */
	install_params?: InstallParams;
	/** the application's default custom authorization link, if enabled */
	custom_install_url?: string;
	/** the application's role connection verification entry point, which when configured will render the app as a verification method in the guild role verification configuration */
	role_connections_verification_url?: string;
};
export type InstallParams = {
	/** the scopes to add the application to the server with */
	scopes: string[];
	/** the permissions to request for the bot role */
	permissions: string;
};
export type Team = {
	/** a hash of the image of the team's icon */
	icon: string | null;
	/** the unique id of the team */
	id: string;
	/** the members of the team */
	members: TeamMember[];
	/** the name of the team */
	name: string;
	/** the user id of the current team owner */
	owner_user_id: string;
};
export type TeamMember = {
	/** the user's membership state on the team */
	membership_state: number;
	/** will always be ["*"] */
	permissions: string[];
	/** the id of the parent team of which they are a member */
	team_id: string;
	/** the avatar, discriminator, id, and username of the user */
	user: Partial<User>;
};
export type Guild = {
	/** guild id */
	id: string;
	/** guild name */
	name: string;
	/** icon hash */
	icon: string | null;
	/** icon hash, returned in template object */
	icon_hash?: string | null;
	/** splash hash */
	splash: string | null;
	/** discovery splash hash */
	discovery_splash: string | null;
	/** whether user is owner of guild */
	owner?: boolean;
	/** id of owner */
	owner_id: string;
	/** total permissions for user in guild (exluding overwrites) */
	permissions?: string;
	/** **deprecated** - voice region id for guild */
	region?: string | null;
	/** id of afk channel */
	afk_channel_id: string | null;
	/** afk timeout in seconds (60, 300, 900, 1800, or 3600) */
	afk_timeout: number;
	/** whether server widget is enabled */
	widget_enabled?: boolean;
	/** channel id that widget will generate an invite to, or `null` if set to no invite */
	widget_channel_id?: string | null;
	/** verification level required for guild */
	verification_level: number;
	/** default message notifications level */
	default_message_notifications: number;
	/** explicit content filter level */
	explicit_content_filter: number;
	/** roles in guild */
	roles: Role[];
	/** custom guild emojis */
	emojis: Emoji[];
	/** enabled guild features */
	features: string[];
	/** required MFA level for guild */
	mfa_level: number;
	/** application id of guild creator if bot-created */
	application_id: string | null;
	/** id of channel where guild notices (e.g welcome messages and boost events) */
	system_channel_id: string | null;
	/** system channel flags */
	system_channel_flags: number;
	/** id of channel where Community guilds can */
	rules_channel_id: string | null;
	/** max number of presences for guild (`null` always returned, apart from the larges tof guilds) */
	max_presences?: number | null | undefined;
	/** max number of members in guild */
	max_members?: number;
	/** vanity url code for guild */
	vanity_url_code: string | null;
	/** description of guild */
	description: string | null;
	/** banner hash */
	banner: string | null;
	/** premium tier (Server Boost level) */
	premium_tier: number;
	/** number of boosts guild has */
	premium_subscription_count?: number;
	/** preferred locale of Community guild */
	preferred_locale: string;
	/** id of channel where admins and mods recieve notices from discord */
	public_updates_channel_id: string | null;
	/** max number of users in a video channel */
	max_video_channel_users?: number;
	/** approx number of members in guild */
	approximate_member_count?: number;
	/** approx number of non-offline members in guild */
	approximate_presence_count?: number;
	/** welcome screen of a Community guild, shown to new members */
	welcome_screen?: WelcomeScreen;
	/** guild NSFW level */
	nsfw_level: number;
	/** custom guild stickers */
	stickers?: Sticker[];
	/** whether guild has boost progress bar enabled */
	premium_progress_bar_enabled: boolean;
};
export type Role = {
	/** role id */
	id: string;
	/** role name */
	name: string;
	/** integer representation of hex color code */
	color: number;
	/** if role is pinned in user listing */
	hoist: boolean;
	/** role icon hash */
	icon?: string;
	/** role unicode emoji */
	unicode_emoji?: string | null;
	/** position of role */
	position: number;
	/** permission bit set */
	permissions: string;
	/** whether role is managed by an integration */
	managed: boolean;
	/** whether role is mentionable */
	mentionable: boolean;
	/** tags role has */
	tags?: RoleTags;
};
export type RoleTags = {
	/** id of the bot role belongs to */
	bot_id?: string;
	/** id of the integration role belongs to */
	integration_id?: string;
	/** whether this is guild's booster role
	 *
	 * `null` if "true", not present if "false" */
	premium_subscriber?: null;
	/** id of this role's subscription sku and listing */
	subscription_listing_id?: string;
	/** whether role is available for purchase
	 *
	 * `null` if "true", not present if "false" */
	available_for_purchase?: null;
	/** whether role is guild's linked role
	 *
	 *
	 * `null` if "true", not present if "false" */
	guild_connections?: null;
};
export type Emoji = {
	/** emoji id */
	id: string | null;
	/** emoji name */
	name: string | null;
	/** roles allowed to use this emoji */
	roles?: string[];
	/** user that created this emoji */
	user?: User;
	/** whether emoji must be wrapped in colons */
	require_colons?: boolean;
	/** whether emoji is managed */
	managed?: boolean;
	/** whether emoji is animated */
	animated?: boolean;
	/** whether emojican be used */
	available?: boolean;
};
export type WelcomeScreen = {
	/** server description showed in welcome screen */
	description: string | null;
	/** channel shown in welcome screen, up to 5 */
	welcome_channels: WelcomeSreenChannel[];
};
export type WelcomeSreenChannel = {
	/** channel's id */
	channel_id: string;
	/** description shown for channel */
	description: string;
	/** emoji id, if emoji is custom */
	emoji_id: string | null;
	/** emoji name if custom, unicode character if standard, or null if not set */
	emoji_name: string | null;
};
export type Sticker = {
	/** id of sticker */
	id: string;
	/** id of pack the sticker is from */
	pack_id?: string;
	/** name of sticker */
	name: string;
	/** description of sticker */
	description: string | null;
	/** autocomplete/suggestion tags for sticker */
	tags: string;
	/** **deprecated** - previously sticker asset hash, now empty string */
	asset?: string;
	/** type of sticker */
	type: number;
	/** type of sticker format */
	format_type: number;
	/** whether guild sticker can be used */
	available?: boolean;
	/** id of guild that owns this sticker */
	guild_id?: string;
	/** user that uploaded guild sticker */
	user: User;
	/** standard sticker's sort order within its pack */
	sort_value?: number;
};
export type InviteStageInstance = {
	/** members speaking in Stage */
	members: GuildMember[];
	/** number of users in Stage */
	participant_count: number;
	/** number of users speaking in Stage */
	speaker_count: number;
	/** topic of Stage instance */
	topic: string;
};
export type GuildScheduledEvent = {
	/** id of scheduled event */
	id: string;
	/** guild id that scheduled event belongs to */
	guild_id: string;
	/** channel id which scheduled event will be hosted, or `null` if schedule entity type is `EXTERNAL` */
	channel_id: string | null;
	/** id of user that created scheduled event */
	creator_id?: string | null;
	/** name of scheduled event */
	name: string;
	/** description of scheduled event */
	description?: string | null;
	/** time scheduled event will start */
	scheduled_start_time: string;
	/** time scheduled event will end */
	scheduled_end_time: string | null;
	/** privacy level of scheduled content */
	privacy_level: number;
	/** status of scheduled event */
	status: number;
	/** type of scheduled event */
	entity_type: number;
	/** id of entity associated with guild scheduled event */
	entity_id: string | null;
	/** addotional metadata for guild scheduled event */
	entity_metadata: EntityMetadata | null | undefined;
	/** user that created scheduled event */
	creator?: User;
	/** number of users subscribe to scheduled event */
	user_count?: number;
	/** cover image hash */
	image?: string;
};
export type EntityMetadata = {
	/** location of event */
	location?: string;
};
export type GuildPreview = {
	/** guild id */
	id: string;
	/** guild name */
	name: string;
	/** icon hash */
	icon: string | null;
	/** splash hash */
	splash: string | null;
	/** discovery splash hash */
	discovery_splash: string | null;
	/** custom guild emojis */
	emojis: Emoji[];
	/** enabled guild features */
	features: string[];
	/** approx number of members in this guild */
	approximate_member_count: number;
	/** approx number of online members in this guild */
	approximate_presence_count: number;
	/** description for the the guild */
	description: string | null;
	/** custom guild stickers */
	stickers: Sticker[];
};
export type Command = {
	/** snowflake id of command */
	id: string;
	/** type of command */
	type?: number;
	/** id of parent application */
	application_id: string;
	/** guild id of command, if not global */
	guild_id?: string;
	/** name of command */
	name: string;
	/** localization dictionary for `name` field */
	name_localizations: object | null | undefined;
	/** description for `chat_input` commands, empty string for `user` and `message` commands */
	description: string;
	/** localization dictionary for `description` field */
	description_localizations?: object | null | undefined;
	/** params for `chat_input` command, max 25 */
	options?: CommandOption[];
	/**  set of permissions represent as bit set */
	default_member_permissions: string | null;
	/** whether command is available in dms */
	dm_permission?: boolean;
	/** **soon deprecated** - whether command is enabled by default */
	default_permission?: boolean | null | undefined;
	/** whether command is age-restricted */
	nsfw?: boolean;
	/** autoincrementing version id update during substantial record changes */
	version: string;
};
export type CommandOption = {
	/** type of option */
	type: number;
	/** name of option */
	name: string;
	/** localization dictionary for `name` */
	name_localizations?: object | null | undefined;
	/** description of option */
	description: string;
	/** localization dictionary `description` */
	description_localizations?: object | null | undefined;
	/** if param is required or optional */
	required?: boolean;
	/** choices for `string`, `integer` and `number` types for user to pick from, max 25 */
	choices?: CommandOptionChoice[];
	/** if option is subcommand or subcommand group type, nested options will be params */
	options?: CommandOption[];
	/** if opton is channel type, channels shown will be restricted to these types */
	channel_types?: number[];
	/** if option is `integer` or `number`, min value permitted */
	min_value?: number;
	/** if option is `integer` or `number`, max value permitted */
	max_value?: number;
	/** if option is `string`, min allowed length */
	min_length?: number;
	/** if option is `string`, max allowed length */
	max_length?: number;
	/** if autocomplete interactions are enabled for `string`, `integer`, or `number` type option */
	autocomplete?: boolean;
};
export type CommandOptionChoice = {
	/** command option choice name */
	name: string;
	/** localization dictionary for `name` */
	name_localizations?: object | null | undefined;
	/** value for choice */
	value: string | number;
};
export type GuildCommandPermission = {
	/** id of command or application id */
	id: string;
	/** id of application command belongs to */
	application_id: string;
	/** id of guild */
	guild_id: string;
	/** permissions for command in guild */
	permissions: CommandPermission[];
};
export type CommandPermission = {
	/** id of role, user, or channel */
	id: string;
	/** role (`1`), user (`2`), or channel (`3`) */
	type: number;
	/** `true` to allow, `false` to disallow */
	permission: boolean;
};
export type InteractionCallbackData =
	| InteractionCallbackDataMessage
	| InteractionCallbackDataAutocomplete
	| InteractionCallbackDataModal;
export type InteractionCallbackDataMessage = {
	/** whether response is tts */
	tts?: boolean;
	/** message content */
	content?: string;
	/** up to 10 embeds */
	embeds?: Embed[];
	/** allowed mentions */
	allowed_mentions?: AllowedMentions;
	/** messag flags combined as bitfield (only `SUPPRESS_EMBEDS` and `EPHEMERAL` can be set) */
	flags?: number;
	/** message components */
	components?: Component[];
	/** attachment objects with filename and description */
	attachment?: Partial<Attachment>[];
};
export type InteractionCallbackDataAutocomplete = {
	/** autocomplete choices (max of 25 choices) */
	choices: CommandOptionChoice[];
};
export type InteractionCallbackDataModal = {
	/** a developer-defined identifier for the modal, max 100 characters */
	custom_id: string;
	/** the title of the popup modal, max 45 characters */
	title: string;
	/** between 1 and 5 (inclusive) components that make up the modal */
	compontents: Component[];
};
export type Attachment = {
	/** attachment id */
	id: string;
	/** name of file attached */
	filename: string;
	/** description for the file (max 1024 characters) */
	description?: string;
	/** the attachment's media type */
	content_type?: string;
	/** size of file in bytes */
	size: number;
	/** source url of file */
	url: string;
	/** a proxied url of file */
	proxy_url: string;
	/** height of file (if image) */
	height?: number | null;
	/** width of file (if image) */
	width?: number | null;
	/** whether this attachment is ephemeral */
	ephemeral?: boolean;
};
export type Component = ActionRow | Button | SelectMenu | TextInput;
/** An Action Row is a non-interactive container component for other types of components.
 *
 * - *You can have up to 5 Action Rows per message*
 * - *An Action Row cannot contain another Action Row*
 */
export type ActionRow = {
	type: 1;
	components: Component[];
};
/** Buttons are interactive components that render in messages. They can be clicked by users, and send an interaction to your app when clicked.
 *
 * - *Buttons must be sent inside an Action Row*
 * - *An Action Row can contain up to 5 buttons*
 * - *An Action Row containing buttons cannot also contain any select menu components*
 */
export type Button = {
	/** 2 for a button */
	type: 2;
	/** A button style */
	style: 1 | 2 | 3 | 4 | 5;
	/** Text that appears on the button; max 80 characters */
	label?: string;
	/** `name`, `id`, and `animated` */
	emoji?: Partial<Emoji>;
	/** Developer-defined identifier for the button; max 100 characters */
	custom_id?: string;
	/** URL for link-style buttons */
	url?: string;
	/** Whether the button is disabled (defaults to false) */
	disabled?: boolean;
};
/** Text inputs are an interactive component that render on modals. They can be used to collect short-form or long-form text. */
export type TextInput = {
	/** 4 for a text input */
	type: 4;
	/** Developer-defined identifier for the input; max 100 characters */
	custom_id: string;
	/** The Text Input Style ( `1`: Short, `2`: Paragraph) */
	style: 1 | 2;
	/** Label for this component; max 45 characters */
	label: string;
	/** Minimum input length for a text input; min 0, max 4000 */
	min_length?: number;
	/** Maximum input length for a text input; min 1, max 4000 */
	max_length?: number;
	/** Whether this component is required to be filled (defaults to `true`) */
	required?: boolean;
	/** Pre-filled value for this component; max 4000 characters */
	value?: string;
	/** Custom placeholder text if the input is empty; max 100 characters */
	placeholder?: string;
};
/** Select menus are interactive components that allow users to select one or more options from a dropdown list in messages.
 *
 * - *Select menus must be sent inside an Action Row*
 * - *An Action Row can contain only one select menu*
 * - *An Action Row containing a select menu cannot also contain buttons*
 */
export type SelectMenu = {
	/** Type of select menu component (text: `3`, user: `5`, role: `6`, mentionable: `7`, channels: `8`) */
	type: 3 | 5 | 6 | 7 | 8;
	/** ID for the select menu; max 100 characters */
	custom_id: string;
	/** Specified choices in a select menu (only required and available for string selects (type `3`); max 25 */
	options?: SelectOption[];
	/** List of channel types to include in the channel select component (type `8`) */
	channel_types?: 0 | 1 | 2 | 3 | 4 | 5 | 10 | 11 | 12 | 13 | 14 | 15;
	/** Placeholder text if nothing is selected; max 150 characters */
	placeholder?: string;
	/** Minimum number of items that must be chosen (defaults to 1); min 0, max 25 */
	min_values?: number;
	/** Maximum number of items that can be chosen (defaults to 1); max 25 */
	max_values?: number;
	/** Whether select menu is disabled (defaults to `false`) */
	disabled?: boolean;
};
export type SelectOption = {
	/** User-facing name of the option; max 100 characters */
	label: string;
	/** Dev-defined value of the option; max 100 characters */
	value: string;
	/** Additional description of the option; max 100 characters */
	description?: string;
	/** `id`, `name`, and `animated` */
	emoji?: Partial<Emoji>;
	/** Will show this option as selected by default */
	default?: boolean;
};
export type AllowedMentions = {
	/** array of allowed mention types to parse from content */
	parse: string[];
	/** array of role_ids to mention */
	roles: string[];
	/** array of user_ids to mention */
	users: string[];
	/** for replies, whether to mention author of message being replied to */
	replied_user: boolean;
};
export type Embed = {
	/** title of embed */
	title?: string;
	/** type of embed */
	type?: string;
	/** description of embed */
	description?: string;
	/** url of embed */
	url?: string;
	/** ISO8601 timestamp string of embed content */
	timestamp?: string;
	/** color code of embed */
	color?: number;
	/** footer information */
	footer?: EmbedFooter;
	/** image information */
	image?: EmbedMedia;
	/** thumbnail information */
	thumbnail?: EmbedMedia;
	/** video information */
	video?: EmbedMedia;
	/** provider information */
	provider?: EmbedProvider;
	/** author information */
	author?: EmbedAuthor;
	/** fields information */
	fields?: EmbedField[];
};
export type EmbedFooter = {
	/** footer text */
	text: string;
	/** url of footer icon (only supports http(s) and attachments) */
	icon_url?: string;
	/** a proxied url of footer icon */
	proxy_icon_url?: string;
};
export type EmbedMedia = {
	/** source url of media *(for `image`/`thumbnail`: only supports http(s) and attachments)* */
	url: string;
	/** a proxied url of the media */
	proxy_url?: string;
	/** height of media */
	height?: number;
	/** width of media */
	width?: number;
};
export type EmbedProvider = {
	/** name of provider */
	name?: string;
	/** url of provider */
	url?: string;
};
export type EmbedAuthor = {
	/** name of author */
	name: string;
	/** url of author (only supports http(s)) */
	url?: string;
	/** url of author icon (only supports http(s) and attachments) */
	icon_url?: string;
	/** a proxied url of author icon */
	proxy_icon_url?: string;
};
export type EmbedField = {
	/** name of the field */
	name: string;
	/** value of the field */
	value: string;
	/** whether or not this field should display inline */
	inline?: boolean;
};
export type Message = {
	/** id of the message */
	id: string;
	/** id of the channel the message was sent in */
	channel_id: string;
	/** the author of this message (not guaranteed to be a valid user) */
	author: User;
	/** contents of the message */
	content: string;
	/** when this message was sent */
	timestamp: string;
	/** when this message was edited (or null if never) */
	edited_timestamp: string | null;
	/** whether this was a TTS message */
	tts: boolean;
	/** whether this message mentions everyone */
	mention_everyone: boolean;
	/** users specifically mentioned in the message */
	mentions: User[];
	/** roles specifically mentioned in this message */
	mention_roles: string[];
	/** channels specifically mentioned in this message */
	mention_channels?: ChannelMention[];
	/** any attached files */
	attachments: Attachment[];
	/** any embedded content */
	embeds: Embed[];
	/** reactions to the message */
	reactions: Reaction[];
	/** used for validating a message was sent */
	nonce?: number | string;
	/** whether this message is pinned */
	pinned: boolean;
	/** if the message is generated by a webhook, this is the webhook's id */
	webhook_id?: string;
	/** type of message */
	type: number;
	/** sent with Rich Presence-related chat embeds */
	activity?: MessageActivity;
	/** sent with Rich Presence-related chat embeds */
	application?: Partial<Application>;
	/** 	if the message is an Interaction or application-owned webhook, this is the id of the application */
	application_id?: string;
	/** data showing the source of a crosspost, channel follow add, pin, or reply message */
	message_reference?: MessageReference;
	/** message flags combined as a bitfield */
	flags?: number;
	/** the message associated with the message_reference */
	referenced_message?: Message | null;
	/** sent if the message is a response to an Interaction */
	interaction?: MessageInteraction;
	/** the thread that was started from this message, includes thread member object */
	thread?: Channel;
	/** sent if the message contains components like buttons, action rows, or other interactive components */
	components?: Component[];
	/** sent if the message contains stickers */
	sticker_items?: StickerItem[];
	/** **deprecated** - the stickers sent with the message */
	stickers?: Sticker[];
	/** A generally increasing integer (there may be gaps or duplicates) that represents the approximate position of the message in a thread, it can be used to estimate the relative position of the message in a thread in company with `total_message_sent` on parent thread */
	position?: number;
	/** data of the role subscription purchase or renewal that prompted this ROLE_SUBSCRIPTION_PURCHASE message */
	role_subscription_data?: RoleSubscriptionData;
};
export type ChannelMention = {
	/** id of the channel */
	id: string;
	/** id of the guild containing the channel */
	guild_id: string;
	/** the type of channel */
	type: 0 | 1 | 2 | 3 | 4 | 5 | 10 | 11 | 12 | 13 | 14 | 15;
	/** the name of the channel */
	name: string;
};
export type Reaction = {
	/** times this emoji has been used to react */
	count: number;
	/** whether the current user reacted using this emoji */
	me: boolean;
	/** emoji information */
	emoji: Partial<Emoji>;
};
export type MessageActivity = {
	/** type of message activity (`1`: `JOIN`, `2`: `SPECTATE`, `3`: `LISTEN`, `5`: `JOIN_REQUEST`) */
	type: 1 | 2 | 3 | 5;
	/** party_id from a Rich Presence event */
	party_id?: string;
};
export type MessageReference = {
	/** id of the originating message */
	message_id?: string;
	/** id of the originating message's channel */
	channel_id?: string;
	/** id of the originating message's guild */
	guild_id?: string;
	/** when sending, whether to error if the referenced message doesn't exist instead of sending as a normal (non-reply) message, default true */
	fail_if_not_exists?: boolean;
};
export type MessageInteraction = {
	/** ID of the interaction */
	id: string;
	/** Type of interaction (`1`: Ping, `2`: Application Command, `3`: Message Component, `4`: Application Command Autocomplete, `5`: Modal Submit) */
	type: 1 | 2 | 3 | 4 | 5;
	/** Name of the application command, including subcommands and subcommand groups */
	name: string;
	/** User who invoked the interaction */
	user: User;
	/** Member who invoked the interaction in the guild */
	member?: Partial<GuildMember>;
};
export type StickerItem = {
	/** id of the sticker */
	id: string;
	/** name of the sticker */
	name: string;
	/** type of sticker format (`1`: PNG, `2`: APNG, `3`: LOTTIE, `4`: GIF)*/
	format_type: 1 | 2 | 3 | 4;
};
export type RoleSubscriptionData = {
	/** the id of the sku and listing that the user is subscribed to */
	role_subscription_listing_id: string;
	/** the name of the tier that the user is subscribed to */
	tier_name: string;
	/** the cumulative number of months that the user has been subscribed for */
	total_months_subscribed: number;
	/** whether this notification is for a renewal rather than a new purchase */
	is_renewal: boolean;
};
export type Presence = {
	/** Unix time (in milliseconds) of when the client went idle, or null if the client is not idle */
	since: number | null;
	/** User's activities */
	activities: Activity[];
	/** User's new status */
	status: string;
	/** Whether or not the client is afk */
	afk: boolean;
};
export type Activity = {
	/** Activity's name */
	name: string;
	/** Activity type */
	type: 0 | 1 | 2 | 3 | 4 | 5;
	/** Stream URL, is validated when type is 1 */
	url?: string | null;
	/** Unix timestamp (in milliseconds) of when the activity was added to the user's session */
	created_at: number;
	/** Unix timestamps for start and/or end of the game */
	timestamps?: ActivityTimestamps;
	/** Application ID for the game */
	application_id?: string;
	/** What the player is currently doing */
	details?: string | null;
	/** User's current party status */
	state?: string | null;
	/** Emoji used for a custom status */
	emoji?: ActivityEmoji | null;
	/** Information for the current party of the player */
	party?: ActivityParty;
	/** Images for the presence and their hover texts */
	assets?: ActivityAssets;
	/** Secrets for Rich Presence joining and spectating */
	secrets?: ActivitySecrets;
	/** Whether or not the activity is an instanced game session */
	instance?: boolean;
	/** Activity flags ORd together, describes what the payload includes */
	flags?: number;
	/** Custom buttons shown in the Rich Presence (max 2) */
	buttons?: ActivityButton[];
};
export type ActivityTimestamps = {
	/** Unix time (in milliseconds) of when the activity started */
	start?: number;
	/** Unix time (in milliseconds) of when the activity ends */
	end?: number;
};
export type ActivityEmoji = {
	/** Name of the emoji */
	name: string;
	/** ID of the emoji */
	id?: string;
	/** Whether the emoji is animated */
	animated?: boolean;
};
export type ActivityParty = {
	id?: string;
	size?: number[];
};
export type ActivityAssets = {
	large_image?: string;
	/** Text displayed when hovering over the large image of the activity */
	large_text?: string;
	small_image?: string;
	/** Text displayed when hovering over the small image of the activity */
	small_text?: string;
};
export type ActivitySecrets = {
	/** Secret for joining a party */
	join?: string;
	/** Secret for spectating a game */
	spectate?: string;
	/** Secret for a specific instanced match */
	match?: string;
};
export type ActivityButton = {
	/** Text shown on the button (1-32 characters) */
	label: string;
	/** URL opened when clicking the button (1-512 characters) */
	url: string;
};
