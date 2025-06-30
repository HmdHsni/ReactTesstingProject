import { render, screen } from "@testing-library/react";
import ExpandableText from "../../src/components/ExpandableText";
import userEvent from "@testing-library/user-event";
describe("ExpandableText", () => {
  it("should render text if characters less than 255", () => {
    render(<ExpandableText text="example test" />);
    expect(screen.getByText("example test")).toBeInTheDocument();
  });
  it("should render showMore button if text more than 255", () => {
    const text = "a".repeat(256);
    const trunctedTxt = text.substring(0, 255) + "...";
    render(<ExpandableText text={trunctedTxt} />);
    expect(screen.getByText(trunctedTxt)).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent(/more/i);
  });
  it("should render less butoon when user click ", async () => {
    const user = userEvent.setup();
    const text = "a".repeat(256);
    const trunctedTxt = text.substring(0, 255) + "...";
    render(<ExpandableText text={trunctedTxt} />);
    const lessbtn = screen.getByRole("button");
    await user.click(lessbtn);
    expect(screen.getByRole("button")).toHaveTextContent(/less/i);
  });
});
