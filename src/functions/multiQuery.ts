import { MultiQuery } from "../types/mod.ts";

/** Post to multiple [Streams](https://developers.ceramic.network/learn/glossary/#streams) */
export async function multiQuery(url: string, queries: MultiQuery[]) {
	const data = await (await fetch(url, {
		body: `{
			"queries": ${queries}
		  }`,
		headers: {
			"Content-Type": "application/json",
		},
		method: "POST",
	})).json();

	return data;
}
