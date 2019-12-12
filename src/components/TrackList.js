import React from 'react';

function TrackListItem(props) {
	const { name } = props.track;
	return <li>{name}</li>;
}

function TrackList(props) {
	const { topTracks } = props;
	const trackList = topTracks.map(track => (
		<TrackListItem key={track.id} track={track} />
	));

	return <ol>{trackList}</ol>;
}

export default TrackList;
