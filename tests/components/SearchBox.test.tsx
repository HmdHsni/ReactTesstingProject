import { render, screen } from "@testing-library/react";
import SearchBox from "../../src/components/SearchBox";
import userEvent from "@testing-library/user-event";
describe("SearchBox", () => {
  it("should input in dom", () => {
    render(<SearchBox onChange={vi.fn()} />);

    const input = screen.getByPlaceholderText(/Search.../i);
    expect(input).toBeInTheDocument();
  });
  it("should render onchange 1 times", async () => {
    const user = userEvent.setup();
    const SearchTem = "SearchTem";
    const onChange = vi.fn();
    render(<SearchBox onChange={onChange} />);
    const input = screen.getByPlaceholderText(/Search.../i);
    await user.type(input, "SearchTem{enter}");
    expect(onChange).toHaveBeenCalledWith(SearchTem);
  });
  it("should not render onchange when input is empty", async () => {
    const user = userEvent.setup();

    const onChange = vi.fn();
    render(<SearchBox onChange={onChange} />);
    const input = screen.getByPlaceholderText(/Search.../i);
    await user.type(input, "{enter}");
    expect(onChange).not.toHaveBeenCalled();
  });
});
