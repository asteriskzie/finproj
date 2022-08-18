import '../styles/globals.css'
import Layout from '../components/layout'
import {useState, useEffect} from 'react'


export default function MyApp({ Component, pageProps }) { 
  const [name, setName]  = useState(null); 
  
  return (
    <Layout name={name}>      
      <Component {...pageProps} />      
    </Layout>
  )

  // // Use the layout defined at the page level, if available
  // const getLayout = Component.getLayout || ((page) => page)

  // return getLayout(<Component {...pageProps} />)  
}

