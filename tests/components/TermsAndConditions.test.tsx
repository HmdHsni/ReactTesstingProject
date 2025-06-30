import { render, screen } from "@testing-library/react";
import TermsAndConditions from "../../src/components/TermsAndConditions";
import userEvent from "@testing-library/user-event";
describe("TermsAndConditions", () => {
  const renderComponent = () => {
    render(<TermsAndConditions />);
    return {
      heading: screen.getByRole("heading"),
      checkBox: screen.getByRole("checkbox"),
      btn: screen.getByRole("button", { name: /Submit/i }),
      button: screen.getByRole("button", { name: "Submit" }),
    };
  };
  it("should render correct items and texts", () => {
    const { heading, checkBox, btn } = renderComponent();
    // render(<TermsAndConditions />);
    // const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Terms & Conditions");
    // const checkBox = screen.getByRole("checkbox");
    expect(checkBox).toBeInTheDocument();
    expect(checkBox).not.toBeChecked();
    // const btn = screen.getByRole("button", { name: /Submit/i });
    expect(btn).toBeInTheDocument();
    expect(btn).toBeDisabled();
  });
  it("should enable btn  when user intraction", async () => {
    const user = userEvent.setup();
    const { checkBox, button } = renderComponent();
    // render(<TermsAndConditions />);
    // const checkBox = screen.getByRole("checkbox");
    // const button = screen.getByRole("button", { name: "Submit" });
    await user.click(checkBox);
    // expect(button).toHaveAttribute("disabled");
    expect(button).toBeEnabled();
  });
});
