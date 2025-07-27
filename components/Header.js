import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/">Shopee</Link>
        </h1>
        <Link className="cart-icon" to="/cart">
          <img  alt="cart-icon" />
          <div className="cart-items-count">0</div>
        </Link>
      </div>
    </header>
  )
}