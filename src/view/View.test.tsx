import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store";
import View from "./index";

test("renders title correctly", () => {
  const { getByText } = render(
    <Provider store={store}>
      <View />
    </Provider>
  );

  expect(getByText(/url Shortener/i)).toBeInTheDocument();
});
