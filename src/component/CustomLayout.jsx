"use client"
import { persistor, store } from '@/redux/store'
import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'


const CustomLayout = ({children}) => {
  return (
    <div>
       <Provider store={store}>
        <PersistGate persistor={persistor}> 
          {children}
        </PersistGate>
       </Provider>
    </div>
  )
}

export default CustomLayout