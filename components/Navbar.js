import Link from "next/link";

import React from 'react'

function Navbar() {
  return (
    <nav>
<ul className="flex space-x-9 text-xl font-bold justify-center items-center">
  <Link href= "/"><a><li>Home</li></a></Link>
  <Link href= "/about"><a><li>About</li></a></Link>
  <Link href= "/contact"><a><li>Contact</li></a></Link>
  <Link href= "/blog"><a><li>Blog</li></a></Link>
</ul>

</nav>
  )
}

export default Navbar
