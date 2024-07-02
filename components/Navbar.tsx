import Link from 'next/link'
import React from 'react'



const Navbar = () => {
  return (
    <div>
      <nav className='py-5'>
        
        <ul className="flex justify-center gap-4 text-lg font-semibold text-[#C1121F]">
       
            <Link href="/"><li>Home</li></Link>
            <Link href="/blog"><li>Blog</li></Link>
            <Link href="/about"><li>About</li></Link>
            <Link href="/contact"><li>Contact</li></Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
