import React, { useEffect, useState } from 'react';
import axios from "axios";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";


const API_KEY = 'wpJF92HnfE6Gz3FjtjYc3yKda5tHyuXn';
const BASE_URL = 'https://api.giphy.com/v1/gifs/search';

function SearchBar() {

    const [gifUrl, setGifUrl] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const params = {
        api_key: API_KEY,
        q: searchTerm,
    };


    const getGifs = (event) => {
        console.log(event.target.value)
        setSearchTerm(event.target.value)


        axios.get(BASE_URL, { params })
            .then(response => {
                if (response.status === 200) {
                    console.log(searchTerm);
                    const data = response.data;
                    setGifUrl(data.data[0].images.original.url);
                    console.log(data.data[0].images.original.url);
                } else {
                    console.error(`Error: ${response.status}`);
                }
            })
            .catch(error => {
                console.error(error);
                alert('Something went wrong.');
            });

           

    };


    // useEffect(() => {
    //     getGifs();
    // }, []);
    
    // ^^ not sure if we need this


    return (
    <>
        <div>
            <form onSubmit= {getGifs}>
                <TextField
                    id="search-bar"
                    className="text"
                    label="Enter a search word!"
                    onChange= {event => {setSearchTerm(event.target.value)}}
                    variant="outlined"
                    placeholder="Search..."
                    size="medium"
                />
                <IconButton type="submit" aria-label="search">
                    <SearchIcon style={{ fill: "green" }} />
                </IconButton>
        </form>
        </div>

        <div>
            {gifUrl && <img src={gifUrl} alt="Random GIF" />} {/* Render the image if gifUrl is not empty */}
        </div>
    </>
    )

}

export default SearchBar;






















