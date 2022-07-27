const Cart = () => {
  return (
    <>
        <div className="p-4 bg-white rounded-lg border shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-xl font-bold leading-none text-gray-900">Order</h4>
          </div>
          <div className="flow-root">
            <img alt="" src="https://i.pinimg.com/originals/6f/fd/64/6ffd64c5366898c59bbc91d9aec935c3.png" ></img>
            <p className="my-4 divide-y divide-gray-200 dark:divide-gray-700">
              The order is empty.
            </p>
          </div>
        </div>

    </>
  )
}

export default Cart
