import React from 'react';
import SearchBox from './SearchBox';
import ArtistList from './ArtistList';

export default function TypeAhead(props) {
	const {
		searchInput,
		handleInputChange,
		handleArtistClick,
		artistList,
		isLoading,
	} = props;

	const noArtistFound = searchInput.length > 0 && artistList.length <= 0;
	const artistsFound = noArtistFound ? (
		<div>No Artist Found...</div>
	) : (
		<ArtistList handleArtistClick={handleArtistClick} artists={artistList} />
	);
	return (
		<aside className="sidebar">
			<SearchBox
				placeholder={'Search for an Artist'}
				searchInput={searchInput}
				handleInputChange={handleInputChange}
			/>
			{!isLoading && artistsFound}
		</aside>
	);
}
