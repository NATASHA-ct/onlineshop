import { BrowserRouter } from "react-router-dom";
import store from "../REDUX/store";
import ProductDetails from "../COMPONENTS/PRODUCTSDETAILS/productdetails";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";

describe("to test the ProductDetails components", () => {
  test("matches the ProductDetails DOM snapshot", () => {
    const tree = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <ProductDetails />
        </Provider>
      </BrowserRouter>
    );
    expect(tree).toMatchSnapshot();
  });
});
