import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className="px-5 bg-black py-5 text-white flex items-center justify-between gap-10 sticky top-0">
      <div>
        <Link href={'/'} className="text-3xl font-bold ">TodoApp</Link>
      </div>
      <div className='flex text-white/90'>
        <Link href={'/'} className='px-4 py-2 hover:text-white'>Todos</Link>
        <Link href={'/add'} className='px-4 py-2 hover:text-white'>Add Todo</Link>
      </div>
    </div>
  );
};

export default Navbar;
