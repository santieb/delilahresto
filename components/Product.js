import Image from 'next/image'
import useDelilah from '../hooks/useDelilah'

const Product = ({ product }) => {
  const { _id, name, price, description, imgURL } = product

  const { addProduct } = useDelilah()

  return (
    <div className="w-64 bg-white rounded-lg border shadow-md">
      <Image src={imgURL} alt={`${imgURL} image`} width={400} height={300} />
      <div className="p-2">
        <h5 className="mb-1 font-bold tracking-tight text-gray-900">{name}</h5>
        <p className="font-sm text-sm text-gray-700">{description}</p>
        <div className="flex item-center justify-between mt-3">
            <h1 className="text-2xl font-extrabold tracking-tightl">
                ${price}
            </h1>
            <button onClick={() => addProduct(_id)} type="button" className="w-10 h-10 text-base font-medium rounded-full text-white bg-yellow-400 hover:bg-yellow-700">
              +
            </button>
        </div>
      </div>
    </div>
  )
}

export default Product
