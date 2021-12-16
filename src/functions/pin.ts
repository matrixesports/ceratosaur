/** Pin a stream */
export async function pin(url: string, streamId: string) {
	const data = await (await fetch(`${url}/${streamId}`, {
		method: "POST",
	})).json();

	console.log(data);
}
