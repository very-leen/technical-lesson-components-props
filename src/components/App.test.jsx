import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the portfolio information and navigation", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", {
      name: "Liza is a Web Developer from New York",
    })
  ).toBeInTheDocument();
  expect(screen.getByText("I made this!")).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute(
    "href",
    "#home"
  );
  expect(screen.getByRole("link", { name: "Github" })).toHaveAttribute(
    "href",
    "https://github.com/liza"
  );
});
