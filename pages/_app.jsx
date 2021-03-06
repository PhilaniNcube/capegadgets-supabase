import { Fragment, useEffect, useState } from 'react'
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { useRouter } from 'next/router'
import UserProvider from '../Context/AuthContext'
import CartProvider from '../Context/CartContext'
import Navbar from '../components/Layout/Navbar'
import Footer from '../components/Layout/Footer'
import analytics from '../utils/analytics'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient())

  useEffect(() => {
    analytics.page()
  }, [])

  return (
    <Fragment>
      <UserProvider>
        <CartProvider>
          <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
              <Navbar />
              <Component {...pageProps} />
            </Hydrate>
            <Footer />
            <ReactQueryDevtools />
          </QueryClientProvider>
        </CartProvider>
      </UserProvider>
    </Fragment>
  )
}

export default MyApp
