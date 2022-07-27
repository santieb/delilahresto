import clientAxios from '../config/axios'
import { useState, useEffect, createContext } from 'react'
const DelilahContext = createContext()

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

      product[0].amount = 1
      setCart([...cart, ...product])
    } catch (err) {
      console.log(err)
    }
  }

  const checkCart = () => {
    const newCart = cart.filter(products => products.amount !== 0)
    setCart(newCart)
  }

  return (
    <DelilahContext.Provider value={{
      products,
      addProduct,
      cart,
      checkCart
    }}>
      {children}
    </DelilahContext.Provider>
  )
}

export { DelilahProvider }

export default DelilahContext
