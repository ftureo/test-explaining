import { render, screen } from "@testing-library/react";

import { MainPage } from "../components/Main-Page";

beforeEach(() => render(<MainPage />));

describe("Main page is mount", () => {
    it("Must display the title for main page", () => {
        expect(
            screen.getByRole("heading", { name: /simpson quotes/i })
        ).toBeInTheDocument();
    });
});

describe("Quotes List", () => {
    it("Must display 2 quotes", async () => {
        expect(await screen.findAllByRole("listitem")).toHaveLength(3);
    });
});
it("Must contain quote value", () => {
    expect(screen.getByText("Quote 1")).toBeInTheDocument();
    expect(
        screen.getByText("Soy una frase de los simpson?")
    ).toBeInTheDocument();
    expect(
        screen.getByText("Un texto que arruina el test?")
    ).toBeInTheDocument();
});