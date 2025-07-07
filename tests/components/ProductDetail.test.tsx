import { render, screen } from "@testing-library/react";
import ProductDetail from "../../src/components/ProductDetail";
import { server } from "../mocks/server";
import { http, HttpResponse } from "msw";

describe("product details", () => {
  it("should show list of  products", async () => {
    render(<ProductDetail productId={1} />);
    expect(await screen.findByText(/product1/i)).toBeInTheDocument();
  });
  it("should show message if product not found", async () => {
    server.use(http.get("/products/1", () => HttpResponse.json(null)));
    render(<ProductDetail productId={1} />);
    expect(
      await screen.findByText(/The given product was not found./i)
    ).toBeInTheDocument();
  });

  it("should show error when product id is invalid", async () => {
    // server.use(
    //   http.get("/products/4", (product) => {
    //     if (!product) return new HttpResponse(null, { status: 404 });
    //   })
    // );
    render(<ProductDetail productId={0} />);
    expect(await screen.findByText(/invalid/i)).toBeInTheDocument();
  });

  it("should return error if data fetching fails", async () => {
    server.use(http.get("/products/1", () => HttpResponse.error()));
    render(<ProductDetail productId={1} />);
    expect(await screen.findByText(/Error/i)).toBeInTheDocument();
  });
});
