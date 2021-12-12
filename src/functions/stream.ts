import { Stream } from "../types/mod.ts";

/**
 * Get a stream info by url and id
 * @param {string} url Ceramic database url
 * @param {string} id Stream's id
 * @returns {Promise<Stream>}
 */

export async function getStream(url: string, id: string): Promise<Stream> {
	const data = await fetch(`${url}/${id}`, {
		method: "GET",
	});

	return data.json();
}

/**
 * Create a stream in database
 * @param {string} url Ceramic database url
 * @returns {Promise<any>}
 */

export async function createStream(url: string): Promise<Stream> {
	const data = await fetch(url, {
		method: "POST",
		body: `
		{
			"type": 0,
			"genesis": {
				"header": {
					"family": "test",
					"controllers": ["did:key:z6MkfZ6S4NVVTEuts8o5xFzRMR8eC6Y1bngoBQNnXiCvhH8H"]
				}
			}	
		}`,
		headers: {
			"Content-Type": "application/json",
		},
	});

	return await data.json();
}
