import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { useStateValue } from './StateProvider'



function Header() {
  const [{ basket, user }] = useStateValue();
  console.log(basket);
  return (
      <nav className="header">
         
              <img
                  src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                  className="header__logo"
                  alt="Logo" />
          
          <div className="header__search">
              <input className="header__searchInput" type="text" />
              <SearchIcon className="header__searchIcon" />
          </div>
          <div className="header__nav">
              {/* <Link to="/login" className="header__link"> */}
                  <div className="header__option">
                      <span className="header__optionLineOne">Hello {user ? user : ",Sign in"}</span>
                      <span className="header__optionLineTwo">Account & {user ? "Out" : "Lists"}</span>
                  </div>
              {/* </Link> */}
              {/* <Link to="/" className="header__link"> */}
                  <div className="header__option">
                      <span className="header__optionLineOne">Returns</span>
                      <span className="header__optionLineTwo">& Orders</span>
                  </div>
              {/* </Link> */}
             
              
                
                {/* <Link to="/checkout" className="header__link"> */}
                    <div className="header__optionBasket">
                    <AddShoppingCartOutlinedIcon />
                        <span className="header__basketCount header__optionLineTwo">
                            {basket ?.length}
                        </span>
                    </div>
                {/* </Link> */}
            </div>
        </nav>
    )
}

export default Header