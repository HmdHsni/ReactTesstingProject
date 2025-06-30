import { render, screen } from "@testing-library/react";
import ProductList from "../../src/components/ProductList";
import { server } from "../mocks/server";
import { http, HttpResponse } from "msw";
describe("product list", () => {
  it("should render product list", async () => {
    render(<ProductList />);
    const items = await screen.findAllByRole("listitem");
    expect(items.length).toBeGreaterThan(0);
  });
  it("should render no products if data is empty", async () => {
    server.use(http.get("/products", () => HttpResponse.json([])));
    render(<ProductList />);
    const text = await screen.findByText(/No products available./i);
    expect(text).toBeInTheDocument();
  });
});
