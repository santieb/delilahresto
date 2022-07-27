import { useState, useEffect, createContext } from 'react'
const DelilahContext = createContext()
import clientAxios from '../config/axios'

const DelilahProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await clientAxios('/products')
        setProducts(res.data.products)
      } catch (err) {
        console.log(err)
      }
    }
    getProducts()
  }, [])

  const addProduct = async (id) => {
    try {
      if (cart.find(product => product._id === id)) {
        alert('This product already added to order')
        return
      }

      const product = products.filter(product => product._id === id)

      setCart([...cart, ...product])
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <DelilahContext.Provider value={{
      products,
      addProduct
    }}>
      {children}
    </DelilahContext.Provider>
  )
}

export { DelilahProvider }

export default DelilahContext
