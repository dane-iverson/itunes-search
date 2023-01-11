import React, { useState } from 'react';

// FavouritesList is a functional component that displays a list of favourites
// It takes in an array of favourites and two functions for adding and removing favourites
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

const SearchForm = () => {
  // favourites is an array that stores the user's favourite items
  const [favourites, setFavourites] = useState([]);

  // addToFavourites adds an item to the favourites array
  const addToFavourites = item => {
    setFavourites([...favourites, item]);
  };

  // removeFromFavourites removes an item from the favourites array
  const removeFromFavourites = item => {
    setFavourites(favourites.filter(i => i.trackId !== item.trackId));
  };

  // searchTerm is the term the user wants to search for
  // mediaType is the type of media the user wants to search for (e.g. "music", "movie")
  const [searchTerm, setSearchTerm] = useState('');
  const [mediaType, setMediaType] = useState('all');

  // results is an array that stores the search results
  // error is a string that stores an error message (if there is one)
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  // handleSubmit is called when the user submits the form
  const handleSubmit = async e => {
    // Prevent the default form submission behavior
    e.preventDefault();
    try {
      // Send a GET request to the /search endpoint with the search term and media type
      const res = await fetch(`/search?term=${searchTerm}&media=${mediaType}`, {
        method: 'GET'
      });
      // If the request was not successful, throw an error
      if (!res.ok) {
        throw new Error(`Failed to fetch search results: ${res.statusText}`);
      }
      // If the request was successful, get the search results from the response
      const data = await res.json();
      // Update the state with the search results
      setResults(data.results);
    } catch (err) {
      setError(err.message);
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <FavouritesList
        favourites={favourites}
        addToFavourites={addToFavourites}
        removeFromFavourites={removeFromFavourites}
      />
      <label htmlFor="searchTerm">Search term:</label>
      <input
        type="text"
        id="searchTerm"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <label htmlFor="mediaType">Media type:</label>
      <select
        id="mediaType"
        value={mediaType}
        onChange={e => setMediaType(e.target.value)}
      >
        <option value="all">All</option>
        <option value="movie">Movie</option>
        <option value="podcast">Podcast</option>
        <option value="music">Music</option>
        <option value="audiobook">Audiobook</option>
        <option value="shortFilm">Short Film</option>
        <option value="tvShow">TV Show</option>
        <option value="software">Software</option>
        <option value="ebook">Ebook</option>
      </select>
      <button type="submit">Search</button>
      <hr />
      {error && <p>{error}</p>}
      {results.map(result => (
        <div key={result.trackId} className='results'>
          <h3>{result.trackName}</h3>
          <p>{result.artistName}</p>
          <button onClick={() => addToFavourites(result)}>Add to favourites</button>
        </div>
      ))}
    </form>
  );
};

export default SearchForm && FavouritesList;
