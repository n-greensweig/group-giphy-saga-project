import React, { useEffect, useState } from 'react';
import axios from "axios";

const API_KEY = 'wpJF92HnfE6Gz3FjtjYc3yKda5tHyuXn';
const BASE_URL = 'https://api.giphy.com/v1/gifs/search';

function SearchBar() {

    const [gifUrl, setGifUrl] = useState('');

    const endpoint = 'wild';
    const params = {
        api_key: API_KEY,
        q: endpoint,
    };

    const getGifs = () => {
        
        axios.get(BASE_URL, { params })
            .then(response => {
                if (response.status === 200) {
                    const data = response.data;
                    setGifUrl(data.data[0].images.original.url);
                } else {
                    console.error(`Error: ${response.status}`);
                }
            })
            .catch(error => {
                console.error(error);
                alert('Something went wrong.');
            });

    };

    useEffect(() => {
        getGifs();
    }, []);

    return (
        <div>
            {gifUrl && <img src={gifUrl} alt="Random GIF" />} {/* Render the image if gifUrl is not empty */}
        </div>
    )

}

export default SearchBar;