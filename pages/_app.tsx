import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import "primereact/resources/themes/mdc-light-deeppurple/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import '../styles/globals.scss'
import Layout from '../components/layout/layout'

export default function App({ Component, pageProps }: AppProps) {

  const [isUserLogged, setIsUserLogged] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter();

  const checkIsUserLogged = () => {
    const token = localStorage.getItem('tkn');
    setIsUserLogged(Boolean(token));
    if (!token) {
      router.push(`/sign-in`);
    }
    setIsLoading(false);
  }

  const handleLogout = () => {
    localStorage.removeItem('tkn');
    setIsUserLogged(false);
    router.push(`/sign-in`);
  }

  useEffect(checkIsUserLogged, [router.pathname]);

  if (isLoading) {
    return <div>Loading...</div>
  }

  return <Provider store={store}>
    {isUserLogged ? (
      <Layout onLogout={handleLogout}>
        <Component {...pageProps} />
      </Layout>) :
      <>
        <Component {...pageProps} />
      </>}
  </Provider>
}
