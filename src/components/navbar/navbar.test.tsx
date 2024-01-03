import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Navbar from "./navbar.tsx";
import { BrowserRouter } from "react-router-dom";

describe("Navbar Component", () => {
  // // Basic Rendering
  // test('renders Navbar component', () => {
  //   render(<Navbar />, { wrapper: BrowserRouter });
  //   expect(screen.getByText(/logo/i)).toBeTruthy();
  // });

  // Interaction Test
  test("opens menu on menu icon click", () => {
    render(<Navbar />, { wrapper: BrowserRouter });
    const appBar = screen.getByTestId("AppBar");
    expect(appBar).toBeTruthy();
  });

  // Add more tests as per the suggestions above
});
