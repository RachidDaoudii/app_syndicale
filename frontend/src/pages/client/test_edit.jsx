import { render, screen, fireEvent } from "@testing-library/react";
import EditClient from "./edit";

describe("EditClient", () => {
  test("renders EditClient component", () => {
    render(<EditClient />);
    const editClientElement = screen.getByText("Edit Appartement");
    expect(editClientElement).toBeInTheDocument();
  });

  test("handles input change", () => {
    render(<EditClient />);
    const cinInput = screen.getByPlaceholderText("cin");
    fireEvent.change(cinInput, { target: { value: "1234567890" } });
    expect(cinInput.value).toBe("1234567890");
  });

  test("handles form submission", () => {
    render(<EditClient />);
    const submitButton = screen.getByText("edit");
    fireEvent.click(submitButton);
    // Add your assertions for form submission here
  });
});
