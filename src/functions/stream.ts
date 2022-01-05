import { Stream } from "../types/mod.ts";

/** Get a [Stream](https://developers.ceramic.network/learn/glossary/#streams) */
export async function getStream(
	url: string,
	streamId: string,
): Promise<Stream> {
	const data = await (await fetch(`${url}/${streamId}`, {
		method: "GET",
	})).json();

	return data;
}

/** Create a [Stream](https://developers.ceramic.network/learn/glossary/#streams) */
export async function createStream(
	url: string,
): Promise<Stream> {
	const data = await (await fetch(url, {
		method: "POST",
		body: `{
			"type": 0,
			"genesis": {
				"header": {
					"controllers": ["did:key:z6MkfZ6S4NVVTEuts8o5xFzRMR8eC6Y1bngoBQNnXiCvhH8H"]
				}
			}
		}`,
		headers: {
			"Content-Type": "application/json",
		},
	})).json();

	return data;
}
