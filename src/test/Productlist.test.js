import { BrowserRouter } from "react-router-dom";
import store from "../REDUX/store";
import ProductList from "../COMPONENTS/PRODUCTSLIST/Productlist";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";

describe("to test the ProductList components", () => {
  test("matches the ProductList DOM snapshot", () => {
    const tree = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <ProductList />
        </Provider>
      </BrowserRouter>
    );
    expect(tree).toMatchSnapshot();
  });
});
