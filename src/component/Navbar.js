import React from 'react'
import { Link } from 'gatsby';
const Navbar = () => {
  return (
    <nav>
      <h2>Company</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/test/">Test</Link>
        </li>
        <li>
          <Link to="/example">example</Link>
        </li>
        <li>
          <Link to="/images">Images</Link>
        </li>  
      </ul>
    </nav>
  )
}

export default Navbar
