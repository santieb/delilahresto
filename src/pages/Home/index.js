import React, { useState, useEffect } from 'react'
import Product from '../../components/Product/Product'
import Cart from '../../components/Cart/Cart'

const App = ({user}) => {
  const [products, setProducts] = useState()
  const [cart, setCart] = useState([])

  useEffect( () => {
      fetch("https://www.delilahresto.gq/api/products")
      .then(res => res.json())
      .then(data => setProducts(data.products))
  }, [products])

  return ( 
    <div className="flex m-auto py-6 justify-center px-12">
      <div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
          {products && products.map(product => <Product key={product.name} product={product} products={products} cart={cart} setCart={setCart} user={user}/>)}
        </div>
      </div>
      <div className="w-4/12 pl-12 justify-between">
        <Cart cart={cart} setCart={setCart}></Cart>
      </div>
    </div>
  )
}

export default App;
