import { Ceramic, MultiQuery } from "../types/mod.ts";
import { createStream, getStream } from "./stream.ts";
import { getCommits } from "./commits.ts";
import { multiQuery } from "./multiQuery.ts";

/** Create object for easy-use all functions without url */
export function ceramic(url: string): Ceramic {
	return {
		getStream: (streamId: string) => {
			return getStream(new URL("api/v0/streams", url).href, streamId);
		},
		createStream: () => {
			return createStream(new URL("api/v0/streams", url).href);
		},
		getCommits: (streamId: string) => {
			return getCommits(new URL("api/v0/commits", url).href, streamId);
		},
		multiQuery: (queries: MultiQuery[]) => {
			return multiQuery(
				new URL("api/v0/multiqueries", url).href,
				queries,
			);
		},
	};
}
