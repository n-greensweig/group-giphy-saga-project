// import FavoriteItem from "../FavoriteItem/FavoriteItem";
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { Select, Button } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';


function Favorites() {

    const dispatch = useDispatch();
    const favorites = useSelector(store => store.favorites);
    const categories = useSelector(store => store.categories);

    const handleSubmit = (e, id) => {

        e.preventDefault();

        axios.put(`/api/favorites/${id}`, {
            category_id: e.target.value,
        })
            .then(response => {
                dispatch({ type: 'FETCH_CATEGORIES' });
            })
            .catch(error => {
                console.error(error);
                alert('Something went wrong.');
            });

    };

    useEffect(() => {
        console.log('component did mount');
        dispatch({ type: 'FETCH_FAVORITES' })
    }, []);

    return (
        <>
            <div>
                <h1>This is the Favorites List:</h1>
                {
                    favorites.map(favorite => (
                        <>
                            <div key={favorite.id}>
                                <img src={favorite.gif_url} />
                            </div>
                            <form>
                                <Select
                                    onBlur={e => handleSubmit(e, favorite.id)}
                                    sx={{ width: '150px', height: '50px', marginRight: '25px' }}
                                    placeholder='Category'
                                >
                                    <MenuItem value={1}>Wild</MenuItem>
                                    <MenuItem value={2}>Uproarious</MenuItem>
                                    <MenuItem value={3}>Poignant</MenuItem>
                                    <MenuItem value={4}>Felicitous</MenuItem>
                                    <MenuItem value={5}>Whimsical</MenuItem>
                                </Select>
                                <Button variant='outlined' type='submit' sx={{ height: '50px' }}>Set Category</Button>
                            </form>
                        </>
                    ))
                }
            </div>
        </>
    );
}

export default Favorites;