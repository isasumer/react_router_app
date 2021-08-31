import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <h1>React Router Dom Class</h1>
            <ul className="nav">
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <ul className="nav">
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
            <ul className="nav">
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header
