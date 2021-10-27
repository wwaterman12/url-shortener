import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store";
import Form from "./index";

describe("handles click to toggleActiveView correctly", () => {
  const handleClick = jest.fn();

  const setup = () => {
    const utils = render(
      <Provider store={store}>
        <Form toggleActiveView={handleClick} />
      </Provider>
    );
    const input1 = utils.getByLabelText("enter-url");
    const input2 = utils.getByLabelText("enter-slug");

    return {
      input1,
      input2,
      ...utils,
    };
  };
  test("It should display error text 1", () => {
    const { input1, getByText } = setup();
    fireEvent.change(input1, { target: { value: "test" } });
    input1.blur();
    expect(getByText(/Must be a valid URL with https/i)).toBeInTheDocument();
  });
  test("It should display error text 2", () => {
    const { input2, getByText } = setup();
    fireEvent.change(input2, { target: { value: "!@$$" } });
    input2.blur();
    expect(getByText(/Must be alpha-numeric characters/i)).toBeInTheDocument();
  });
});
