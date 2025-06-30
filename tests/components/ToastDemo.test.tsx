import { render, screen } from "@testing-library/react";
import ToastDemo from "../../src/components/ToastDemo";
import userEvent from "@testing-library/user-event";
import { Toaster } from "react-hot-toast";
describe("Toast Demo", () => {
  it("should render toast", async () => {
    render(
      <>
        <ToastDemo />
        <Toaster />
      </>
    );
    // screen.debug();
    const user = userEvent.setup();
    const btn = await screen.findByRole("button");
    await user.click(btn);
    const toast = await screen.findByText(/success/i);
    expect(toast).toBeInTheDocument();
  });
});
