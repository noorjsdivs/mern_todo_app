import React from 'react'
import { twMerge } from 'tailwind-merge'
//type define for typescript
interface props{
    children:React.ReactNode;
    className?: string;
}

export default function Container({children,className}:props) {
    const newClassName = twMerge('max-w-screen-xl mx-auto px-4 lg:px-0 ',className)
  return (
    <div className={newClassName}>
      {children}
    </div>
  )
}
