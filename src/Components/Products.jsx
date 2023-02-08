import React from 'react'
import useProducts from '../Hooks/useProducts'
import PlaceholderCard from './PlaceholderCard'
import ProductCard from './ProductCard'

const Products = () => {
    const [products, loading] = useProducts()
    
  return (
    <div className="container py-3">
        {loading ? <PlaceholderCard/> : <ProductCard products={products}/>}
    </div>
  )
}

export default Products