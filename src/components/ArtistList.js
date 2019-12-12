import React from 'react';

function ArtistListItem(props) {
	const { artist, handleArtistClick } = props;
	const { name } = artist;
	return (
		<li>
			<button className="item" onClick={() => handleArtistClick(artist)}>
				{name}
			</button>
		</li>
	);
}

function ArtistList(props) {
	const { artists, handleArtistClick } = props;
	const artisttList = artists.map(artist => (
		<ArtistListItem
			key={artist.id}
			artist={artist}
			handleArtistClick={handleArtistClick}
		/>
	));
	return <ul id="artist-list">{artisttList}</ul>;
}

export default ArtistList;
