import { BsSearch } from "react-icons/bs"; 
import { AiTwotoneHeart } from "react-icons/ai"; 
import { BiCartAlt } from "react-icons/bi"; 
import React from 'react'
import './Products.scss'
import { useDispatch } from "react-redux";
import { addToCart } from "../../context/cardSlice";

const Products = ({data}) => {
  const dispatch = useDispatch()

    let Products = data?.slice(0,12).map(el => (
        <div className="card" key={el.id}>
        
        <img src={el.images[0]} alt="images" />
        <div className="btns">
           <button onClick={() => dispatch(addToCart(el))}><BiCartAlt /></button>
           <button><AiTwotoneHeart /></button>
           <button><BsSearch /></button>
        </div>
       
       <div className="title">
           <h3>{el.title}</h3>
           <p>$ {el.price}</p>
       </div>

     </div>
    ))

  return (
   <>
   <div className="wrapper conteiner">
        {Products}
   </div>
    



   
   </>
  )
}

export default Products