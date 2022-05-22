import React from 'react';
import "./Header.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <nav className="header">
      {/* logo on the left */}
      <Router>
          <Link to='/'>
            <img className='header__logo' 
              src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
              alt='amazon logo'/> 
          </Link>     
    </Router>
      {/* search bar  */}
      <div className='header__search'>
        <input type="text" className='header__searchInput' />
        <SearchIcon className='header__searchIcon'/>
      </div>
      
      
      
    </nav>

     
  )
}

export default Header
