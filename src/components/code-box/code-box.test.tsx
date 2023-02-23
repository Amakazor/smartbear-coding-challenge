import { render } from "@testing-library/react";

import { CodeBox } from "./code-box";

describe("CodeBox", () => {
    it("renders", () => {
        const { container } = render(<CodeBox>code</CodeBox>);

        expect(container.querySelector("code")).toBeInTheDocument();
    });

    it("renders inline", () => {
        const { container } = render(<CodeBox inline>code</CodeBox>);

        expect(container.querySelector("code")).toBeInTheDocument();
        expect(container.querySelector("pre")).not.toBeInTheDocument();
    });

    it("renders not inline", () => {
        const { container } = render(<CodeBox>code</CodeBox>);

        expect(container.querySelector("code")).toBeInTheDocument();
        expect(container.querySelector("pre")).toBeInTheDocument();
    });
});
