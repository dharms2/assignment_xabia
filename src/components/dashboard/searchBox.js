import React from 'react';

const Search = (props) => (
    <div>
        <span className="quote">“searches for planets and lists them in components that are sized relative to their population on every keypress in the input field” </span>
        <input type="text" placeholder="Search" value={props.searchTxt} onChange={e => props.handleSearch(e)} />
    </div>
);

export default Search;