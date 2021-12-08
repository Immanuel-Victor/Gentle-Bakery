import { Link } from 'gatsby'
import React from "react"

export default function Navbar() {
  return (
    <nav>
    <h1>Gentle's Bakery</h1>
    <div className="divLinks">
        <Link to="/">Home</Link>
        
        <a href="#products"> About </a>
    </div>
    </nav>
  )
}