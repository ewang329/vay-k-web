import '../styles/globals.css'
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header title={Component.title} />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
