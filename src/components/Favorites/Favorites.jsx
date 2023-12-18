// import FavoriteItem from "../FavoriteItem/FavoriteItem";
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';



function Favorites(){

    const dispatch = useDispatch();
    const favorites = useSelector(store => store.favorites);

    useEffect(() => {
        console.log('component did mount');
        dispatch({ type: 'FETCH_FAVORITES' })
        console.log("action dispatch");
    }, []); 

return(    
<>
<div>
    <h1>This is the Favorites List:</h1>
    {
        favorites.map(favorite => (
            <div key={favorite.id}>
                <img src={favorite.gif_url} />
                
            </div>    
        ))
    }
</div>
</>
);
}

export default Favorites;