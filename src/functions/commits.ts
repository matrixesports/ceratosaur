// deno-lint-ignore-file no-explicit-any

import { StreamCommits } from "../types/mod.ts";

/** Get commits of a Stream */
export async function getCommits(
	url: string,
	streamId: string,
): Promise<Array<any>> {
	const data: StreamCommits = await (await fetch(`${url}/${streamId}`, {
		method: "GET",
	})).json();

	return data.commits;
}
