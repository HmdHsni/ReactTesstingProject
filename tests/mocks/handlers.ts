import { http, HttpResponse } from "msw"
export const handlers = [
    http.get("/categories", () => {
        return HttpResponse.json(
            [{ id: 1, name: "elec" }, { id: 2, name: "it" },]
        )
    }),
    http.get("/products", () => {
        return HttpResponse.json(
            [{ id: 1, name: "product1" }, { id: 2, name: "product2" }, { id: 3, name: "product2" }, { id: 4, name: "product2" }]
        )
    })
]
