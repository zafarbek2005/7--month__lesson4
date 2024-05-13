import React from 'react'
import Product__cart from '../Components/Product__cart/Product__cart'
import { useSelector } from 'react-redux'
const Cardlink = () => {

  const cards = useSelector(s => s.cart.value)
  console.log(cards);

  return (
    <>
  
    <Product__cart carts = {cards}/>
    </>
  )
}

export default Cardlink