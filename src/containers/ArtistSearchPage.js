import React, { Component, Fragment } from 'react';
import MusicApi from '../lib/MusicApi';
import ArtistDetailView from '../components/ArtistDetailView';
import ArtistSearch from './ArtistSearch';

export default class ArtistSearchPage extends Component {
	state = {
		selectedArtist: null,
		topTracks: [],
	};

	handleArtistClick = async selectedArtist => {
		const topTracks = await MusicApi.getTopTracksByArtistId(
			selectedArtist.id,
			'US'
		);
		this.setState({
			selectedArtist,
			topTracks,
		});
	};

	render() {
		const { selectedArtist, topTracks } = this.state;
		return (
			<Fragment>
				<header>
					<h1>Artist Search Page</h1>
				</header>
				<ArtistSearch handleArtistClick={this.handleArtistClick} />
				{!!selectedArtist && (
					<ArtistDetailView artist={selectedArtist} topTracks={topTracks} />
				)}
			</Fragment>
		);
	}
}
