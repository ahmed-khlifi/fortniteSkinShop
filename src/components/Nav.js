import React from 'react';
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
        <ul>
            <Link to='/' className='nav'>
              <li>Home</li>
            </Link>
            <Link to='/Shop'  className="nav">
                <li>Shop</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;
