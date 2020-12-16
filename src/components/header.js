import React from 'react'

function header() {
    return (
            <nav>
                <div className="logo">Kardex-sales</div>
                <ul>
                    <li>Home</li>
                    <li>Our Products</li>
                    <li>About Us</li>
                    <li>Contact</li>
                </ul>
                <div className="search">
                    <i className="fa fa-search"></i>
                    <i className="fa fa-shopping-basket"></i>
                </div>
            </nav>
    )
}

export default header
