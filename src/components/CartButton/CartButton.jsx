import React, {useContext} from "react";
import './CartButton.css'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import AppContext from '../../context/AppContext';

function CartButton() {
  const { isCartVisible, setIsCartVisible, qtdCart } = useContext(AppContext)

  return (
    <button 
      type="button" 
      className="cartButton"
      onClick={ () => setIsCartVisible(!isCartVisible)}
    >
      <AiOutlineShoppingCart />
      <span 
        className={`${qtdCart > 0 ? 'cartStatus' : 'esconderCartStatus'}`}   
      >
        {qtdCart}
      </span>
    </button>
  );
}

export default CartButton