import { useState, useEffect, createContext } from 'react'
const DelilahContext = createContext()
import clientAxios from '../config/axios'

const DelilahProvider = ({ children }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await clientAxios('/products')
        setProducts(res.data.products)
      } catch (e) {
        console.log(e)
      }
    }
    getProducts()
  }, [])

  return (
    <DelilahContext.Provider value={{
      products
    }}>
      {children}
    </DelilahContext.Provider>
  )
}

export { DelilahProvider }

export default DelilahContext
