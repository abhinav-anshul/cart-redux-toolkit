import { createSlice } from "@reduxjs/toolkit"

const initialState = []

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload)
    },
    remove(state, action) {
      state = state.filter((i) => i.id != action.payload)
      return state
    },
  },
})

export const add = cartSlice.actions.add
export const remove = cartSlice.actions.remove
export const cartReducer = cartSlice.reducer
