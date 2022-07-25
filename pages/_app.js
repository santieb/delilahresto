import '../styles/globals.css'
import { DelilahProvider } from '../context/DelilahProvider'

function MyApp ({ Component, pageProps }) {
  return (
    <DelilahProvider>
      <Component {...pageProps} />
    </DelilahProvider>
  )
}

export default MyApp
