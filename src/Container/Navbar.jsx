import React from 'react'
import './Navbar.css';
export default function Navbar() {
  return (
    <>
    <nav>
        <div className='logo'>MY Library</div>
        <div className='ullist'>
            <ul>
                <li> <a href='/'>Home</a></li>
                <li> <a href='/'>About</a></li>
                <li> <a href='/'>Contact</a></li>
                <li> <a href='/'>Service</a></li>
                <li> <a href='/'>More</a></li>
            </ul>
        </div>
    </nav>
    </>
  )
}
