import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setloading] = useState(false);

    useEffect(()=>{
        let unmounted = false
        async function getProducts(){
            try {
                setloading(true)
                let res = await axios.get('/products')
                if(unmounted) return
                if(res.status === 200){
                    setProducts(res.data)
                }
            } catch (error) {
              toast(error.response.data.error)  
            }
            finally{
                setloading(false)
            }
        }
        getProducts()

        return () =>{
            unmounted = true
        }
    }, [])

    return [products, loading]
}

export default useProducts