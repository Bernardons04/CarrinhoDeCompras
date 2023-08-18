import React, { useContext } from 'react';
import propTypes from 'prop-types';
import formatCurrency from '../../utils/formatCurrency';
import { BsCartDashFill } from 'react-icons/bs'
import './CartItem.css'
import AppContext from '../../context/AppContext';

function CartItem( { data } ) {

  const { id, thumbnail, title, price } = data
  const { cartItems, setCartItems, setQtdCart, setPrecoTotal, precoTotal } = useContext(AppContext)

  const removeItem = () => { 
    let total = precoTotal
    const listaAux = cartItems.filter(element => element.id != id);
    setCartItems(listaAux)
    setQtdCart(cartItems.length-1)
    setPrecoTotal(total -= price)
  }

  return (
    <section className='cartItem'>
      <img 
        src={thumbnail} 
        alt="Imagem do produto" 
        className='cartItemImage'
      />

      <div className='cartItemContent'>
        <h3 className='cartItemTitle'>{title}</h3>
        <h3 className='cartItemPrice'>{formatCurrency(price, 'BRL')}</h3>
        <button
          type='button'
          className='buttonRemoveItem'
          onClick={removeItem}
        >
          <BsCartDashFill />
        </button>
      
      </div>
    </section>
  );
}

export default CartItem

CartItem.propTypes = {
  data: propTypes.object,
}.isRequired;