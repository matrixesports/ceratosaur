export async function getStream(url: string, id: string) {
	const data = await fetch(`${url}/${id}`, {
		method: "GET",
	});

	const json = await data.json();

	return json;
}