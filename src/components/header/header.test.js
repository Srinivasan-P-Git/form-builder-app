import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Header from "./header.component";

test("render header element", () => {
  expect.assertions(1);
  const { getByText } = render(<Header />);
  expect(getByText("Form Builder")).toBeInTheDocument();
});
