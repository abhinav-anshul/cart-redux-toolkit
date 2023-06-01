import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
function Navbar() {
  const items = useSelector((state) => state.cart)
  console.log({ items })
  return (
    <>
      <main>
        <div>
          <NavLink to="/">Home</NavLink>
        </div>
        <div>
          <NavLink to="/cart">Cart {items?.length}</NavLink>
        </div>
      </main>
    </>
  )
}

export { Navbar }
