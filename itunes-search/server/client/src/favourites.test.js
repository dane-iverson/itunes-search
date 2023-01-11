import React from 'react';
import { render } from '@testing-library/react';
import FavouritesList from './searchForm';

describe('FavouritesList component', () => {
  it('displays a message when there are no favourites', () => {
    // render the FavouritesList component with an empty array as the 'favourites' prop
    const { queryByText } = render(
      <FavouritesList favourites={[]} />
    );
    // find the element with text 'No favourites to display'
    const noFavouritesMessage = queryByText(/No favourites to display/i);
    // assert that the element is present in the document
    expect(noFavouritesMessage).toBeInTheDocument();
  });
});
