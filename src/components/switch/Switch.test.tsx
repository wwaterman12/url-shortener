import React from "react";
import { render, screen } from "@testing-library/react";
import Switch from "./index";

test("shows correct label", () => {
  render(
    <Switch
      options={[
        { label: "Short URL", value: "shortUrl" },
        { label: "Full URL", value: "fullUrl" },
      ]}
      activeValue="shortUrl"
      toggleValue={() => {}}
    />
  );
  expect(screen.queryAllByText("Short URL")).toHaveLength(2);
});

test("shows correct label", () => {
  render(
    <Switch
      options={[
        { label: "Short URL", value: "shortUrl" },
        { label: "Full URL", value: "fullUrl" },
      ]}
      activeValue="fullUrl"
      toggleValue={() => {}}
    />
  );
  expect(screen.queryAllByText("Full URL")).toHaveLength(2);
});
