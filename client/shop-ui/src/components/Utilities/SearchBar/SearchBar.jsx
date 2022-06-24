import React, { useState } from "react";
import './SearchBar.css';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = (props) => {
    const [ searchQuery, setSearchQuery ] = useState('');

    const handleSendSearchQuery = event => {
        event.preventDefault();
        console.log({searchQuery})
        // make api request to search through items in shop
        // send to main area to filter?
    }

    return(
        <div className='search-bar-container'>
            <form onSubmit={ event => handleSendSearchQuery(event) } >
                <input type='text' 
                    placeholder='Search...'
                    className='search-input'
                    value={ searchQuery }
                    onChange={ event => setSearchQuery(event.target.value) } >
                </input>
                <button type='submit'
                        className='search-btn'>
                            <SearchIcon sx={ { fontSize: 20 } } />
                </button>
            </form>
        </div>
    );
}

export default SearchBar;