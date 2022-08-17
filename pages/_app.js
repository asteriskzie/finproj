import '../styles/globals.css'
import Layout from '../components/layout'


export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <main>
        <Component {...pageProps} />
      </main>
    </Layout>

    
  )
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<Component {...pageProps} />)  
}

