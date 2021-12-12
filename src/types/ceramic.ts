// deno-lint-ignore-file no-explicit-any

import { Stream } from "./mod.ts";

/** Ceramic Handler Object */
export interface Ceramic {
	/** Get stream info in your Ceramic url */
	getStream: (
		/** Id of the Stream */
		id: string,
	) => Promise<Stream>;

	/** Create a Stream in your ceramic url */
	createStream: () => Promise<Stream>;

	getCommits: (id: string) => Promise<any>
}
