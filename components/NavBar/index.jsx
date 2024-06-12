import Link from 'next/link'
import React from 'react'

const NavBar = () => {
    return (
        <header className='header'>
            <Link href="/">
                <h1 className='w-18 h-18 object-contain cursor-pointer'>3D | Folio</h1>
            </Link>
            <nav>
                <ul className='w-[50%] flex text-lg gap-7 font-medium'>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/portfolio">Portfolio</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar