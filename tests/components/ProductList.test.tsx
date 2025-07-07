import {
  findByRole,
  queryByText,
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import ProductList from "../../src/components/ProductList";
import { server } from "../mocks/server";
import { http, HttpResponse, delay } from "msw";

describe("product list fetch data", () => {
  it("should fetch right data", async () => {
    render(<ProductList />);
    const items = await screen.findAllByRole("listitem");
    expect(items.length).toBeGreaterThan(0);
  });
  it("should return no product if length is 0", async () => {
    server.use(http.get("/products", () => HttpResponse.json([])));
    render(<ProductList />);
    const items = await screen.findByText(/No products available/i);
    expect(items).toBeInTheDocument();
  });
  it("should return loading when we have delay", async () => {
    server.use(
      http.get("/products", async () => {
        await delay();
        return HttpResponse.json([]);
      })
    );
    render(<ProductList />);
    expect(await screen.findByText(/Loading/i)).toBeInTheDocument();
  });

  it("should delete loading", async () => {
    await waitForElementToBeRemoved(() => {
      screen.queryByText(/loading/i);
    });
  });
});
