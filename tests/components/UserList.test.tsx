import { render, screen } from "@testing-library/react";
import { User } from "../../src/entities";
import UserList from "../../src/components/UserList";
describe("UserList component", () => {
  it("should render no user available if user in empty", () => {
    const mockUser: User[] = [];
    render(<UserList users={mockUser} />);
    expect(screen.getByText(/No users available/i)).toBeInTheDocument();
  });
  it("should render user name when users are available", () => {
    const mockUsers: User[] = [
      { id: 1, name: "hamide" },
      //   { id: 2, name: "user2" },
      //   { id: 3, name: "user3" },
    ];
    render(<UserList users={mockUsers} />);
    mockUsers.forEach((user) => {
      expect(screen.getByRole("link", { name: user.name })).toBeInTheDocument();
      expect(screen.getByRole("link", { name: user.name })).toHaveAttribute(
        "href",
        `/users/${user.id}`
      );
    });
  });
});
