import '../styles/globals.css'
import Weblayout from '../component/Weblayout'
export default function App({ Component, pageProps }) {
  return <Weblayout><Component {...pageProps} /></Weblayout>
}
