import React from 'react';

const FavouritesList = ({ favourites, addToFavourites, removeFromFavourites }) => {
    // If there are no favourites, display a message
    if (!favourites || favourites.length === 0) {
      return <p>No favourites to display</p>;
    }
  
    // If there are favourites, display them in a list
    return (
      <div className='favourite'>
        <h2>Favourites</h2>
        {favourites.map(favourite => (
          <div key={favourite.trackId}>
            <h3>{favourite.trackName}</h3>
            <p>{favourite.artistName}</p>
            <button onClick={() => removeFromFavourites(favourite)}>Remove</button>
          </div>
        ))}
      </div>
    );
};

export default FavouritesList;