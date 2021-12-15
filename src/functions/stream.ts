import { Stream } from "../types/mod.ts";

/** Get a [Stream](https://developers.ceramic.network/learn/glossary/#streams) */
export async function getStream(
	/** Ceramic database url */
	url: string,
	/** Stream id */
	id: string,
): Promise<Stream> {
	const data = await (await fetch(`${url}/${id}`, {
		method: "GET",
	})).json();

	return data;
}

/** Create a [Stream](https://developers.ceramic.network/learn/glossary/#streams) */
export async function createStream(
	/** Ceramic database url */
	url: string,
	/** Genesis config obj (wip) */
	genesis?: any,
): Promise<Stream> {
	const gens = genesis ? JSON.stringify(genesis) : `
	{
		"header": {
			"controllers": ["did:key:z6MkfZ6S4NVVTEuts8o5xFzRMR8eC6Y1bngoBQNnXiCvhH8H"]
		}
	}`;

	const data = await (await fetch(url, {
		method: "POST",
		body: `{
			"type": 0,
			"genesis": ${gens}
		}`,
		headers: {
			"Content-Type": "application/json",
		},
	})).json();

	return data;
}
