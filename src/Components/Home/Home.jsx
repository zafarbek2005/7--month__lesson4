import React,{useState,useEffect} from 'react'
import './Home.scss'
import Banner from '../Banner/Banner'
import axios from '../api'
import Products from '../Products/Products'


const Home = () => {
    const [products, setProducts] = useState(null)
    useEffect(()=>{
        
      axios
        .get("/products")
        .then(res => setProducts(res.data.products))
        .catch(err => console.log(err))
    }, [])

  return (
  <>
  
    <Banner/>
    <Products data={products}/>

    

  
  </>
  )
}

export default Home