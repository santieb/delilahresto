import useDelilah from '../hooks/useDelilah'

const ProductPreview = ({ product }) => {
  const { cart, checkCart } = useDelilah()
  const { _id, name, price, amount, imgURL } = product

  const addProduct = (id) => {
    cart.map(product => product._id === id ? product.amount++ : product)
    checkCart()
  }

  const subtractProduct = (id) => {
    cart.map(products => product._id === id ? products.amount-- : products)
    checkCart()
  }

  return (
    <div className="py-2 sm:py-3">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img className="w-8 h-8 rounded" src={imgURL} alt=""></img>
        </div>
          <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate">
            {name}
          </p>
          <p className="text-sm text-gray-500 truncate">
            ${price * amount}
          </p>
        </div>
        <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
          <div className="items-center text-gray-900 flex direction-row py-4 space-x-2 mx-10 text-sm font-medium text-right whitespace-nowrap  ">
            <button onClick={() => subtractProduct(_id)}>-</button>
              <p>{amount}</p>
            <button onClick={() => addProduct(_id)}>+</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPreview
