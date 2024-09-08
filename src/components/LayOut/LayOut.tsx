

"use client"

import { Provider } from "react-redux"
import { persistor, store } from "../Redux/store"
import { PersistGate } from "redux-persist/integration/react";



interface Props{
  children:React.ReactNode
}

const LayOut = ({children}:Props) => {
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {children}
    </PersistGate>
  </Provider>
  )
}

export default LayOut