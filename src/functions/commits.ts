// deno-lint-ignore-file no-explicit-any

import { StreamCommits } from "../types/mod.ts"

/**
 * Get commits of a Stream
 * @param {string} url Ceramics's url
 * @param {string} streamId Stream's Id
 */

export async function getCommits(url: string, streamId: string): Promise<Array<any>> {
	const data: StreamCommits = await (await fetch(`${url}/${streamId}`, {
		method: "GET",
	})).json();

	return data.commits;
}
