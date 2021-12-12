import { Ceramic } from "../types/mod.ts";
import { createStream, getStream } from "./stream.ts";

/**
 * Ceramic function for easy-use all Ceramic methods without put the URL
 * @param {string} url Ceramic database url
 * @returns {Ceramic}
 */
export function ceramic(url: string): Ceramic {
	return {
		getStream: (id: string) => {
			return getStream(`${url}/api/v0/streams`, id);
		},
		createStream: () => {
			return createStream(`${url}/api/v0/streams`);
		},
	};
}
