import React from 'react'
import { useDispatch } from 'react-redux'
import { incrementCartQuantity , decrementCartQuantity,removeItemFromCart} from '../../context/cardSlice'
import './Product__cart.scss'
import { AiOutlineDelete } from "react-icons/ai";

const Product__cart = ({carts}) => {
  const dispatch = useDispatch()
  let total = carts?.reduce((sum,item) => sum + (item.price * item.quantity ),0)
  let Products = carts?.map(el => (
    <div className="products__items" key={el.id}>
    <div className="product__img">
       <img src= {el.images[0]} width={150}  style={{width:"70px"}} alt="" />
       <p style={{width:"100px"}}>{el.title}</p>
    </div>

   <div className="price_items">


   <div className="price" id='pl'>
      <p>{el.price}</p>
    </div>
  

    <div id='btn2' className="price">
        <button disabled={el.quantity <= 1} onClick={() => dispatch(decrementCartQuantity(el))}>-</button>
        <span>{el.quantity}</span>
        <button onClick={() => dispatch(incrementCartQuantity(el))}>+</button>
    </div>
    
    <div className="price">
      <p>{(el.price * el.quantity).brm()}</p>
    </div>
   
   </div>
   <div className="bt">
      <button onClick={() => dispatch(removeItemFromCart(el))}><AiOutlineDelete /></button>
    </div>
</div>
  ))

  return (
  <>

  <div className="wrapper conteiner">

    <div className="products">
      <div className="tabel__name">

         <div className="dd">
          <p>Products</p>
         </div>

         <div className="tt">
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
         </div>

      </div>

      <div className="">
      {Products}
      </div>
       

    </div>

  <div className="tortal__sum">
    TOTALSUM:{total.brm()}
  </div>



  </div>
  
  
  </>
  )
}

export default Product__cart