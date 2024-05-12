import { BsSearch } from "react-icons/bs"; 
import { AiTwotoneHeart } from "react-icons/ai"; 
import { BiCartAlt } from "react-icons/bi"; 
import React from 'react'
import './Products.scss'

const Products = ({data}) => {

    let Products = data?.slice(18,48).map(el => (
        <div className="card">
        
        <img src={el.images[0]} alt="" />
        <div className="btns">
           <button><BiCartAlt /></button>
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