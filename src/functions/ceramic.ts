import { Ceramic } from "../types/mod.ts";
import { createStream, getStream } from "./stream.ts";
import { getCommits } from "./commits.ts";

/** Create object for easy-use all functions without url */
export function ceramic(url: string): Ceramic {
	return {
		getStream: (id: string) => {
			return getStream(`${url}/api/v0/streams`, id);
		},
		createStream: () => {
			return createStream(`${url}/api/v0/streams`);
		},
		getCommits: (streamId: string) => {
			return getCommits(`${url}/api/v0/commits`, streamId);
		},
	};
}
