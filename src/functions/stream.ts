/** Get a stream info by url and id */
export async function getStream(url: string, id: string) {
	const data = await (await fetch(`${url}/${id}`, {
		method: "GET",
	})).json();

	return data;
}

/** Create a Stream */
export async function createStream(url: string) {
	const data = await (await fetch(`${url}`, {
		method: "POST",
		body: 
		`{
			"type": 0,
			"genesis": {
				"header": {
					"family": "test",
					"controllers": ["did:key:z6MkfZ6S4NVVTEuts8o5xFzRMR8eC6Y1bngoBQNnXiCvhH8H"]
				}
			}
		}`,
		headers: {
			"Content-Type": "application/json"
		},
	})).json();

	return data;
}