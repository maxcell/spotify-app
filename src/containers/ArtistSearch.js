import React, { Component } from 'react';
import TypeAhead from '../components/TypeAhead';
import MusicApi from '../lib/MusicApi';

import { debounce } from 'lodash';

const waitTime = 300; // 300ms

export default class ArtistSearch extends Component {
	state = {
		searchInput: '',
		artists: [],
		isLoading: false,
	};

	componentDidUpdate(_, prevState) {
		if (prevState.searchInput !== this.state.searchInput) {
			if (this.state.searchInput.length > 0) {
				this.debouncedGetArtists(this.state.searchInput);
			}
		}
	}

	handleInputChange = event => {
		const searchInput = event.target.value;

		this.setState({
			searchInput,
			isLoading: true,
		});
	};

	getArtists = async input => {
		const artists = await MusicApi.getArtists(input);
		this.setState({
			artists,
			isLoading: false,
		});
	};

	debouncedGetArtists = debounce(this.getArtists, waitTime);

	render() {
		const { searchInput, artists, isLoading } = this.state;
		const { handleArtistClick } = this.props;

		return (
			<TypeAhead
				searchInput={searchInput}
				artistList={artists}
				handleInputChange={this.handleInputChange}
				handleArtistClick={handleArtistClick}
				isLoading={isLoading}
			/>
		);
	}
}
