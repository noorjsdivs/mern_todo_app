"use client"

import React from 'react'
import { store } from '../redux/store'
import { Provider } from 'react-redux'

const Layoyt = ({children}:{children:React.ReactNode}) => {
  return (
    <Provider store={store}>{children}</Provider>
  )
}

export default Layoyt