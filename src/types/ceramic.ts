// deno-lint-ignore-file no-explicit-any

/** Ceramic Handler Object */
export interface Ceramic {
	/** Get stream info in your Ceramic url */
	getStream: (
		/** Id of the Stream */
		id: string
	) => Promise<any>;

	/** Create a Stream in your ceramic url */
	createStream: () => Promise<any>;
}