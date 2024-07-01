import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className="flex justify-center gap-4 py-5 text-lg font-semibold">
            <Link href="/dashboard"><li>Home</li></Link>
            <Link href="/blog"><li>Blog</li></Link>
            <Link href="/about"><li>About</li></Link>
            <Link href="/contact"><li>Contact</li></Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
