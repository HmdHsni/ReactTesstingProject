
import { http, HttpResponse } from 'msw'
 
export const handlers = [
  http.get('/categories', () => {
    return HttpResponse.json(
       [ { id: 1,name:"a" },
     { id: 2,name:"b" }, ]
      
    )
  }),
  http.get('/products',()=>{
    return HttpResponse.json([
        { id: 1,name:"p1" },
     { id: 2,name:"p2" },
      ])
  })
]