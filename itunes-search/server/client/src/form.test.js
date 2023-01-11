import { render } from '@testing-library/react';
import SearchForm from './SearchForm';

test('SearchForm renders correctly', () => {
    const {tree} = render(<SearchForm />);
  expect(tree).toMatchSnapshot();
});
