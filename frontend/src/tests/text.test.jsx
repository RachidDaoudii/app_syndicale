// Text.test.js
import React from "react";
import { render } from "@testing-library/react";
import Text from "../pages/text";

// describe("Text component", () => {
//   test('renders "Vite" in an h1 element', () => {
//     // Arrange
//     const { getByText } = render(<Text />);

//     // Act
//     const h1Element = getByText("Vite");

//     // Assert
//     expect(h1Element).toBeInTheDocument();
//   });

//   // You can add more test cases based on your component's behavior
// });

// text.test.js
describe("Example Test Suite", () => {
  test("should pass", () => {
    const { getByText } = render(<Text />);
    const h1Element = getByText("Vite");
    expect(h1Element).toBeInTheDocument();
  });
});
