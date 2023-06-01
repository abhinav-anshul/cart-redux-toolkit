import { Fragment } from "react"
import { Navbar } from "./components/Navbar"
import { useSelector, useDispatch } from "react-redux"
import { remove } from "./store/cartSlice"

function Cart() {
  const items = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  const handleRemove = (productId) => {
    dispatch(remove(productId))
  }

  return (
    <>
      <Navbar />
      <main>
        <div>
          {items?.map((i) => (
            <Fragment key={i?.id}>
              <img width={"auto"} height="150" src={i?.image} />
              <div>{i?.title.slice(0, 10)}</div>
              <div>{i?.price}</div>
              <button onClick={() => handleRemove(i?.id)}>Remove</button>
            </Fragment>
          ))}
        </div>
      </main>
    </>
  )
}

export { Cart }
