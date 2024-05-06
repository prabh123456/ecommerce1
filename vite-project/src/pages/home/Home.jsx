import React from 'react'
import Layout from '../../components/layout/Layout'
import Filter from '../../components/filter/Filter'
import Herosection from '../../components/herosection/Herosection'
import Productcard from '../../components/productcard/Productcard'
import Testimonial from '../../components/testimonial/Testimonial'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../../redux/Cartslice'
function Home() {
  const dispatch=useDispatch();
  const cartitem=useSelector((state)=>state.cart)
  console.log(cartitem)
  const addcart=()=>{
    dispatch(addToCart("shirt"));
  }
  const deletecart=()=>{
    dispatch(deleteFromCart("shirt"));
  }
  return (
    <div>
      <Layout>
        <div className='flex gap-5 '>
          <button onClick={()=>addcart()}>ADD</button>
          <button onClick={()=>deletecart()}>DELETE</button>
        </div>
        <Herosection/>
        <Filter />
        <Productcard/>
        <Testimonial/>
      </Layout>
    </div>
  )
}

export default Home
