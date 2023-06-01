import { useEffect } from "react"
import "./App.css"
import { Navbar } from "./components/Navbar"
import { useDispatch, useSelector } from "react-redux"
import { add } from "./store/cartSlice"
import { fetchProducts } from "./store/productSlice"

function Home() {
  const dispatch = useDispatch()
  const { data: products, status } = useSelector((state) => state.product)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  const handleAdd = (i) => {
    dispatch(add(i))
  }

  return (
    <>
      <Navbar />
      {status === "loading" && <h1>Loading...</h1>}
      {status === "error" && <h1>An error has occured</h1>}
      <main>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            justifyItems: "center",
          }}
        >
          {products?.map((i, index) => (
            <div key={index}>
              <img width={"auto"} height="150" src={i?.image} />
              <div>{i?.title.slice(0, 10)}</div>
              <div>{i?.price}</div>
              <button onClick={() => handleAdd(i)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}

export { Home }
