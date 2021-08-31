import React from 'react'

const Header = () => {
    return (
        <div>
            <h1>React Router Dom Class</h1>
            <ul className="nav">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/profile">Profile</a>
                </li>
            </ul>
        </div>
    )
}

export default Header
