import React from 'react';
import "./Header.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {useStateValue} from './StateProvider';

function Header() {
  const [{basket}] = useStateValue(); 
  return (
    <nav className="header">
      {/* logo on the left */}
      <Router>
          <Link to='/'>
            <img className='header__logo' 
              src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
              alt='amazon logo'/> 
          </Link>    
               {/* search bar  */}
          <div className='header__search'>
            <input type="text" className='header__searchInput' />
            <SearchIcon className='header__searchIcon'/>
          </div> 
          {/* three links  */} 
          <div className='header__nav'>

            {/* 1st link */}            
            <Link to='/login' className='header__link'>            
            <div className='header__options'>
                  <span className='header__options1'>Hello Tushar</span>
                  <span className='header__options2'>Sign In</span>  
            </div>            
            </Link>
            {/* 2nd link */}            
            <Link to='/login' className='header__link'>            
            <div className='header__options'>
                  <span className='header__options1'>Return</span>
                  <span className='header__options2'> & Order</span>  
            </div>            
            </Link>
            {/* 3rd link */}            
            <Link to='/login' className='header__link'>            
            <div className='header__options'>
                  <span className='header__options1'>Your</span>
                  <span className='header__options2'>Prime</span>  
            </div>            
            </Link>
            <Link to='/checkout'>
              <div className='header__optionBasket'>
                {/* shopping basket */}
                <ShoppingBasketIcon />
                {/* number of items in the basket  */}
                <span className='header__basketCount header__options2'>
                  {/* {basket.length}  */}2
                </span>
              </div>
            </Link>
          </div>
          
      </Router>     
     </nav>  
  )
}

export default Header
