import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { SignIn } from "../pages/auth/sign-in";

// jest.mock("react-router-dom", () => ({
//   ...jest.requireActual("react-router-dom"),
//   useNavigate: jest.fn(),
// }));

describe("SignIn component", () => {
  
  // test("renders sign in form correctly", () => {
  //   const { getByText, getByPlaceholderText } = render(<SignIn />);

  //   expect(getByText("Sign In")).toBeInTheDocument();
  //   expect(
  //     getByText("Enter your email and password to Sign In.")
  //   ).toBeInTheDocument();
  //   expect(getByPlaceholderText("name@mail.com")).toBeInTheDocument();
  //   expect(getByPlaceholderText("********")).toBeInTheDocument();
  //   expect(getByText("I agree the Terms and Conditions")).toBeInTheDocument();
  //   expect(getByText("Sign In")).toBeInTheDocument();
  //   expect(getByText("Subscribe me to newsletter")).toBeInTheDocument();
  //   expect(getByText("Forgot Password")).toBeInTheDocument();
  //   expect(getByText("Not registered?")).toBeInTheDocument();
  //   expect(getByText("Create account")).toBeInTheDocument();
  // });

  // test("handles form submission correctly", () => {
  //   const { getByPlaceholderText, getByText } = render(<SignIn />);

  //   const emailInput = getByPlaceholderText("name@mail.com");
  //   const passwordInput = getByPlaceholderText("********");
  //   const signInButton = getByText("Sign In");

  //   fireEvent.change(emailInput, { target: { value: "test@example.com" } });
  //   fireEvent.change(passwordInput, { target: { value: "password123" } });
  //   fireEvent.click(signInButton);
  // });
});
