import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

// describe is a block and it can have multiple test cases
describe('Contact us page test cases', () => {

    //we can write name as "test" or we can also write "it"
    it("should load heading contact us component", () => {

        render( < Contact / > );

        const heading = screen.getByRole("heading");

        // Assertion
        expect(heading).toBeInTheDocument();

    });

    test("should load Submit inside Contact component", () => {

        render( < Contact / > );

        const button = screen.getByText("Submit");

        // Assertion
        expect(button).toBeInTheDocument();
    });

    test("should load button inside Contact component", () => {

        render( < Contact / > );

        const button = screen.getByRole("button");

        // Assertion
        expect(button).toBeInTheDocument();
    });

    test("should load input name inside Contact component", () => {

        render( < Contact / > );

        const inputName = screen.getByPlaceholderText("name");

        // Assertion
        expect(inputName).toBeInTheDocument();
    });

    test("Should load 2 input boxes on the Contact component", () => {
        render( < Contact / > );

        const inputBoxes = screen.getAllByRole("textbox");

        // Assertion 
        expect(inputBoxes.length).toBe(2);

    })

});