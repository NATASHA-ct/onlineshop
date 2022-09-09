import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../REDUX/store';
import ProductList from '../COMPONENTS/PRODUCTSLIST/Productlist';

describe('to test the ProductList components', () => {
  test('matches the ProductList DOM snapshot', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <ProductList />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
