import { render, screen } from "@testing-library/react";
// import { describe, expect, it } from "vitest";

import Greet from "../../src/components/Greet";

describe("greting component", () => {
  it("login button", () => {
    render(<Greet />);
    // screen.debug();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
