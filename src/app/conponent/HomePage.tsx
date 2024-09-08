import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
    <div>
        <div>
          <h1 className="text-lg font-bold mb-2 underline underline-offset-2 decoration-[1px]">
            Jibon Roy
          </h1>
          <Link href={"/todo"} className="text-lg font-semibold border-2 border-gray-600 px-4 rounded-md">
            Todo app
            
          </Link>
        </div>
    </div>
  )
}

export default HomePage