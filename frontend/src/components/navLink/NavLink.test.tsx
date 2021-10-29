import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import NavLink from "./index";

test("handles click to toggleActiveView correctly", () => {
  const state: { activeView: "form" | "result" } = { activeView: "form" };
  const handleClick = jest.fn();

  render(
    <NavLink activeView={state.activeView} toggleActiveView={handleClick} />
  );
  fireEvent.click(screen.getByText(/skip/i));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
