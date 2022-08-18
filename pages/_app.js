import '../styles/globals.css'
import Layout from '../components/layout'
import {useState, useEffect} from 'react'

export default function MyApp({ Component, pageProps }) { 
  const [username, setUsername] = useState(null);
  const [role, setRole] = useState(null);
  const [token, setToken] = useState(null);
  
  const getUserData = (response) => {
    setUsername(response.username);
    setRole(response.role); 
    setToken(response.token); 
  }

  return (
    <Layout username={username} role={role}>      
      <Component {...pageProps} username={username} role={role} token={token} getUserData={getUserData}/>      
    </Layout>
  )

  // // Use the layout defined at the page level, if available
  // const getLayout = Component.getLayout || ((page) => page)

  // return getLayout(<Component {...pageProps} />)  
}

