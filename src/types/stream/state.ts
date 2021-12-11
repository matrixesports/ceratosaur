// deno-lint-ignore-file no-explicit-any

export interface State {
	/** State type */
	type: number;
	/** Content of the State */
	content: any;
	log: any;
}