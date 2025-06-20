import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import {useSearchParams} from 'react-router-dom'
import { useEffect } from 'react'
import {toast } from 'react-toastify'
import axios from 'axios'

const Verified = () => {

   const [searchPrams,setSearchParams]=useSearchParams();
   const {navigate, token,backendUrl,setCartItems} = useContext(ShopContext);

const success= searchPrams.get('success');
const orderId= searchPrams.get('orderId');


   const verifyPayment =async () =>{
     try {
        
        if(!token){
            return null;
        }
        const response=await axios.post(backendUrl+'/api/order/verifyStripe',{success,orderId},{headers:{token}})

        if(response.data.success){
            setCartItems({})
            navigate('/orders');
        }else{
            navigate('/cart');
        }
     } catch (error) {
        console.log(error);
        toast.error(error.message);
        
     }
   }



useEffect(()=>{
verifyPayment();
},[token])

  return (
    <div>
      
    </div>
  )
}

export default Verified
