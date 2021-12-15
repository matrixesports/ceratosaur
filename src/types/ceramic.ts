import { Stream } from "./mod.ts";
import { MultiQuery } from "./mod.ts";

export interface Ceramic {
	/** Get stream info in your Ceramic url */
	getStream: (streanId: string) => Promise<Stream>;
	/** Create a Stream */
	createStream: () => Promise<Stream>;
	/** Get commits of a Stream */
	getCommits: (streamId: string) => Promise<any>;
	/** Make a multiQuery post to a Stream */
	multiQuery: (qeries: MultiQuery[]) => Promise<any>;
}
