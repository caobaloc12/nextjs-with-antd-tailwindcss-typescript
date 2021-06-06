import 'styles/global.css'

import axios from 'axios'
import AppLayout from 'components/Layout'
import getConfig from 'next/config'
import { AppProps } from 'next/dist/next-server/lib/router/router'

const { publicRuntimeConfig } = getConfig()

axios.defaults.baseURL = publicRuntimeConfig.apiUrl

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  )
}

export default MyApp
