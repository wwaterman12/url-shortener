import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store";
import UrlsList from "./index";

const list = [
  {
    shortUrl: "test_short",
    fullUrl: "test_long",
    slug: "TEST",
  },
  {
    shortUrl: "test_short2",
    fullUrl: "test_long2",
    slug: "TEST2",
  },
];

describe("URLs List", () => {
  test("shows short URL when visible short", () => {
    render(
      <Provider store={store}>
        <UrlsList list={list} visibleUrlType="shortUrl" />
      </Provider>
    );
    expect(screen.queryAllByText("test_short")).toHaveLength(1);
  });

  test("shows long URL when visible is full", () => {
    render(
      <Provider store={store}>
        <UrlsList list={list} visibleUrlType="fullUrl" />
      </Provider>
    );
    expect(screen.queryAllByText("test_long2")).toHaveLength(1);
  });
});
