

"use client"

import { Provider } from "react-redux"
import { store } from "../Redux/store"



interface Props{
  children:React.ReactNode
}

const LayOut = ({children}:Props) => {
  return (
    <Provider store={store}>{children}</Provider>
  )
}

export default LayOut