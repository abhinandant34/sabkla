import React from 'react'
import './Header.css'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import {Link} from "react-router-dom";
import { useStateValue } from "./StateProvider";


function Header() {

    const [{ cart }, dispatch] = useStateValue();

    return (
        <div className='header'>
         
      
         <Link to="/">
                    <img  className="header__logo" src="/images/hori_logo.png" />
         </Link>
        

           <div className="header__search">
               
               <input
               className="header__searchInput"
               type="text" />
               <SearchOutlinedIcon className="header__searchIcon" />

           </div>

        <div className="header__alloptions">

        <div className="header__nav">
            
            <Link to="/checkout">
            <div className="header__option">

<span className="header__optionLineOne"><ShoppingCartOutlinedIcon className="header__cartIcon" /></span>
<span className="header__optionLineTwo">{cart?.length}Cart</span>

</div>
            </Link>

        </div>
        <div className="header__nav">
            <div className="header__option">

            <span className="header__optionLineOne"><FavoriteBorderOutlinedIcon className="header__wishlistIcon" /></span>
            <span className="header__optionLineTwo">Wishlist</span>
                
            </div>

        </div>
        <div className="header__nav">
            <Link to='/login'>
            <div className="header__option">

<span className="header__optionLineOne"><PersonOutlineOutlinedIcon className="header__avatarIcon" /></span>
<span className="header__optionLineTwo">SignIn</span>
    
</div>
            </Link>

        </div>

        </div>
                       
        </div>
    )
}

export default Header
