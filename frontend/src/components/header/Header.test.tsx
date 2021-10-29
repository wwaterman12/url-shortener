import React from "react";
import { render } from "@testing-library/react";
import Header from "./index";

test("renders title correctly", () => {
  const { getByText } = render(<Header />);

  expect(
    getByText(/A simple, but handy tool for shortening URLs/i)
  ).toBeInTheDocument();
});
