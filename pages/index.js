import Product from '../components/Product'
import useDelilah from '../hooks/useDelilah'
import Layout from '../components/Layout'
import Cart from '../components/Cart'

export default function Home () {
  const { products } = useDelilah()

  return (
    <Layout>
      <div className="flex m-auto py-6 justify-center px-12">
        <div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
            {products && products.map(product => <Product key={product.name} product={product}/>)}
          </div>
        </div>
        <div className="w-4/12 pl-12 justify-between">
          <Cart/>
        </div>
      </div>
    </Layout>
  )
}
