import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/categories", () => {
    return HttpResponse.json([
      { id: 1, name: "a" },
      { id: 2, name: "b" },
    ]);
  }),
  http.get("/products", () => {
    return HttpResponse.json([
      { id: 1, name: "p1" },
      { id: 2, name: "p2" },
    ]);
  }),
  http.get("/products/id", ({ params }) => {
    const data = [
      { id: 1, name: "product1", price: 10 },
      { id: 2, name: "product2", price: 20 },
    ];
    const id = parseInt(params.id as string);
    const product = data?.find((p) => p.id === id);
    console.log(product, "founded product");
    if (!product) return new HttpResponse(null, { status: 404 });
    return HttpResponse.json(product);
  }),
];
