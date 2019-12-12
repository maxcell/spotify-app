import React, { Fragment } from 'react';

export default function SearchBox(props) {
	const { searchInput, handleInputChange, placeholder } = props;
	return (
		<Fragment>
			<label htmlFor="search-box">Search</label>
			<input
				id="search-box"
				type="text"
				placeholder={placeholder}
				value={searchInput}
				onChange={handleInputChange}
			/>
		</Fragment>
	);
}
