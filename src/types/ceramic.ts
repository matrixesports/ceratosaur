import { Stream } from "./mod.ts";

export interface Ceramic {
	/** Get stream info in your Ceramic url */
	getStream: (
		/** Id of the Stream */
		id: string,
	) => Promise<Stream>;

	/** Create a Stream */
	createStream: () => Promise<Stream>;
	/** Get commits of a Stream */
	getCommits: (id: string) => Promise<any>;
}
