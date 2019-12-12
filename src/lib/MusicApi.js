import Spotify from 'spotify-web-api-js';
import { getAccessToken } from './utils';

let instance = undefined;

/**
 * Class that acts as our interface to our MusicProvider (aka Spotify). Utilizes
 * singleton pattern.
 * @class
 */
class MusicApi {
	constructor() {
		this.spotify = new Spotify();
	}

	/**
	 * Creates a new instance if one isn't found. Also sets access token for spotify
	 * @returns {Object} MusicApi instance
	 */
	static getInstance() {
		if (!instance) {
			instance = new MusicApi();

			getAccessToken().then(accessToken => {
				instance.spotify.setAccessToken(accessToken);
			});
		}
		return instance;
	}

	/**
	 * @param {string} input - Artist's name
	 * @returns {Object[]} Returns an array of objects containing artist information
	 */
	async getArtists(input) {
		const artists = await this.spotify.searchArtists(input);
		const artistList = artists.artists.items;
		return artistList;
	}

	/**
	 * @param {string} artistId - Artist's Id from Spotify API
	 * @param {string} countryCode - String representation of [country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
	 * @returns {Object[]} Returns an array of objects containing artist information
	 */
	async getTopTracksByArtistId(artistId, countryCode) {
		const topTracks = await this.spotify.getArtistTopTracks(
			artistId,
			countryCode
		);
		const topTracksList = topTracks.tracks;
		return topTracksList;
	}
}

export default MusicApi.getInstance();
