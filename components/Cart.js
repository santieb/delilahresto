import useDelilah from '../hooks/useDelilah'
import ProductPreview from '../components/ProductPreview'

const Cart = () => {
  const { cart } = useDelilah()

  const calculatePriceTotal = () => cart.reduce((acc, product) => acc + product.price * product.amount, 0)

  return (
    <>
      <div className="p-4 bg-white rounded-lg border shadow-md">
        <div className="flex justify-between items-center mb-2">
          <h4 className="text-xl font-bold leading-none text-gray-900 ">Order</h4>
        </div>
        {cart.length === 0
          ? <div className="flow-root">
            <img alt="" src="https://i.pinimg.com/originals/6f/fd/64/6ffd64c5366898c59bbc91d9aec935c3.png"></img>
            <p className="my-4 divide-y divide-gray-200 ">
              The order is empty.
            </p>
        </div>
          : <>
        <div className="flow-root">
          <div role="list" className="divide-y divide-gray-200 ">
            {cart.map(product => <ProductPreview key={product.name} product={product}/>)}
          </div>
        </div>
        <div className="flex justify-between items-center pt-2 pb-6">
          <span className="text-base text-center ">
            Total Price
          </span>
          <span className="text-base px-5 text-yellow-500 text-center ">
          ${calculatePriceTotal()}
          </span>
        </div>
        <form>
          <label htmlFor="countries" name="address2" className="block mb-5 text-sm font-medium text-gray-900 dark:text-gray-400">Select your address:
            <select id="countries" className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="">Select your address</option>
            </select>
          </label>
          <div className="mx-0">
          </div>
        </form>
      </>
      }
      </div>
    </>
  )
}

export default Cart
