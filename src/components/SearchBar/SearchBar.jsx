import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Grid, Paper, Card, CardContent, Typography, CardMedia, Button, Container } from "@mui/material"
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";


const API_KEY = 'wpJF92HnfE6Gz3FjtjYc3yKda5tHyuXn';
const BASE_URL = 'https://api.giphy.com/v1/gifs/search';

function SearchBar() {

    const [gifUrl, setGifUrl] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const params = {
        api_key: API_KEY,
        q: searchTerm,
    };


    const getGifs = (event) => {
        if (searchTerm === '') {
            //do nothing
        } else {
        setSearchTerm(event.target.value)


        axios.get(BASE_URL, { params })
            .then(response => {
                if (response.status === 200) {
                    console.log(searchTerm);
                    const data = response.data.data;
                    setGifUrl(data);
                    console.log(gifUrl);
                } else {
                    console.error(`Error: ${response.status}`);
                }
            })
            .catch(error => {
                console.error(error);
                alert('Something went wrong.');
            });
        }     
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
        <br></br>
        
        <div>
            <Container maxWidth="xl">
                <Grid container spacing={3}>

                    {gifUrl.map((picture, i) => {
                        return (
                            <Grid item xs={12} sm={6} md={3}>
                                <Paper elevation={6}>
                                    <Card
                                        key={i}
                                        className='picture-card'
                                        elevation={6}
                                        sx={{maxWidth:"400px"}}
                                    >
                                    <CardMedia
                                        image={picture.images.fixed_height.url}
                                        alt={picture.title}
                                        sx={{maxHeight: "500px", minHeight:"300px"}}
                                    />
                                    </Card>
                                </Paper>
                            </Grid>    
                    )})}

                </Grid>
            </Container>
        </div>
    </>
    )

}

export default SearchBar;