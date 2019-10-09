import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="main-navigation">
            <h2>
                <Link to='/'>Logo</Link>
            </h2>
            <ul>
                <li>
                    <Link to='/tasks'>Lista Taskow</Link>
                </li>
                <li>
                    <Link to='/about'> O aplikacji</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
