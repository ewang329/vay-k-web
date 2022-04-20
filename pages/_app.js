import '../styles/globals.css'
import Header from '../components/Header';
import SuperTokensReact from 'supertokens-auth-react'

import { frontendConfig } from '../config/frontendConfig'

if (typeof window !== 'undefined') {
  // we only want to call this init function on the frontend, so we check typeof window !== 'undefined'
  SuperTokensReact.init(frontendConfig())
}

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header title={Component.title} />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
