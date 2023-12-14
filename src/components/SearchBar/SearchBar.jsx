import React, { useEffect } from 'react';
import axios from "axios";

const API_KEY = 'wpJF92HnfE6Gz3FjtjYc3yKda5tHyuXn';
const BASE_URL = 'https://api.giphy.com/v1/gifs/search';

function SearchBar() {

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
                    console.log(data);
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
        </div>
    )

}

export default SearchBar;