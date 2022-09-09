import { BrowserRouter } from "react-router-dom";
import store from "../REDUX/store";
import Productcard from "../COMPONENTS/PRODUCTCARD/Productcard";
import { Provider } from "react-redux";
import renderer from 'react-test-renderer';

describe("to test the Productcard components", () => {
  test("matches the Productcard DOM snapshot", () => {
    const tree = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <Productcard />
        </Provider>
      </BrowserRouter>
    );
    expect(tree).toMatchSnapshot();
  });
});
