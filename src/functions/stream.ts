import { Stream } from "../types/mod.ts";

/**
 * Get a stream info by url and id
 * @param {string} url Ceramic database url
 * @param {string} id Stream's id
 * @returns {Promise<Stream>}
 */

export async function getStream(url: string, id: string): Promise<Stream> {
	const data = await (await fetch(`${url}/${id}`, {
		method: "GET",
	})).json();

	return data;
}

/**
 * Create a stream in database
 * @param {string} url Ceramic database url
 * @returns {Promise<any>}
 */

// deno-lint-ignore no-explicit-any
export async function createStream(url: string, genesis?: any): Promise<Stream> {
	const gens = genesis ? JSON.stringify(genesis) : `
	{
		"header": {
			"controllers": ["did:key:z6MkfZ6S4NVVTEuts8o5xFzRMR8eC6Y1bngoBQNnXiCvhH8H"]
		}
	}`

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
