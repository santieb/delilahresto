import Head from 'next/head'
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta charset="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>Delilah Resto</title>
      </Head>

      <div className='bg-gray-100 min-h-screen'>
      <Header/>
        <div className='container mx-auto'>
          <main className='mt-20'>
            {children}
          </main>
        </div>
      </div>
    </>
  )
}

export default Layout
