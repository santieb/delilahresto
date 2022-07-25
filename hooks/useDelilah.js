import { useContext } from 'react'
import DelilahContext from '../context/DelilahProvider'

const useDelilah = () => {
  return useContext(DelilahContext)
}

export default useDelilah
