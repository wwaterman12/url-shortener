import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store";
import LatestUrl from "./index";

describe("LatestUrl Component", () => {
  render(
    <Provider store={store}>
      <LatestUrl />
    </Provider>
  );

  test("Does not render without latestUrl", () => {
    expect(screen.queryAllByAltText(/Your short URL:/i)).toHaveLength(0);
  });
});
