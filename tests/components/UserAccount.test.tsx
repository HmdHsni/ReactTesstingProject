import { render, screen } from "@testing-library/react";
import UserAccount from "../../src/components/UserAccount";
describe("user Acount", () => {
  it("should render name for user", () => {
    const mockUser = { id: 1, name: "hamide" };
    render(<UserAccount user={mockUser} />);
    expect(screen.getByText(mockUser.name));
  });
  it("should render eddit button if user is admin", () => {
    const mockUser = { id: 1, name: "hamide", isAdmin: true };
    render(<UserAccount user={mockUser} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent(/edit/i);
  });
  it("should not render eddit button if user is not admin", () => {
    const mockUser = { id: 1, name: "hamide", isAdmin: false };
    render(<UserAccount user={mockUser} />);
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
});
