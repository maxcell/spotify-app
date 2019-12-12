import React from 'react';
import TrackList from './TrackList';

export default function ArtistDetailView(props) {
	const { name } = props.artist;
	const { topTracks } = props;
	return (
		<section className="content">
			<h1>{name}</h1>
			<TrackList topTracks={topTracks} />
		</section>
	);
}
