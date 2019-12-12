export async function getAccessToken() {
	const response = await fetch(
		'https://prince-spotify-app.herokuapp.com/authorize'
	);

	const json = await response.json();

	return json.access_token;
}
