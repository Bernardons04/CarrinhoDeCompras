import React, { useContext } from 'react';
import formatCurrency from '../../utils/formatCurrency';
import './Cart.css'
import CartItem from '../CartItem/CartItem';
import AppContext from '../../context/AppContext';

function Cart() {
  const { cartItems, isCartVisible, precoTotal } = useContext(AppContext)

  return (
    <section className={`${isCartVisible ? 'cart' : 'esconderMenu'}`}>
      <div className='cartItems gallery-wrapper'>
        { cartItems.map((cartItem) =>
          <CartItem key={cartItem.id} data={cartItem} />
        )}
      </div>
      <div className='cartResume'>{`${cartItems.length > 0 ? `Total: ${formatCurrency(precoTotal, 'BRL')}` : 'Resumo do Carrinho'}`}</div>
    </section>
  );
}

export default Cart