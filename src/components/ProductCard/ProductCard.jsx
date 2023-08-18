import React, { useContext } from 'react';
import propTypes from 'prop-types'
import { BsFillCartPlusFill } from 'react-icons/bs';
import './ProductCard.css'
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';

function ProductCard( { data } ) {

  const {price, title, thumbnail} = data;
  const { cartItems, setCartItems, setQtdCart, setPrecoTotal, precoTotal } = useContext(AppContext)

  const handleAddCart = () => {
    let total = precoTotal
    setCartItems([...cartItems, data]);
    setQtdCart(cartItems.length+1)
    setPrecoTotal(total += price)
  }
  return ( 
    <section className='productCard'>
      <img
        src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
        alt="product" 
        className='cardImage'
      />

      <div className="infos">
        <h2 className='cardPrice'>{formatCurrency(price, 'BRL')}</h2>
        <h2 className='cardTitle'>{title}</h2>
      </div>

      <button 
        type='button' 
        className='buttonAddCart'
        onClick={handleAddCart}
      >
        <BsFillCartPlusFill />
      </button>
    </section>
   );
}

export default ProductCard;

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;