import '../styles/globals.css'
import Layout from '../components/layout'
import {useState, useEffect} from 'react'

import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
const queryClient = new QueryClient()

export default function MyApp({ Component, pageProps }) { 
  const [username, setUsername] = useState(null);
  const [role, setRole] = useState(null);
  const [token, setToken] = useState(null);
      
  const setUserData = (response) => {
    setUsername(response.username);
    setRole(response.role); 
    setToken(response.token); 
  }
  
  const appProps = {username, role, token, setUserData};

  return (
    <QueryClientProvider client={queryClient}>
      <Layout username={username} role={role}>      
        <Component {...pageProps} {...appProps}/>      
      </Layout>
    </QueryClientProvider>
  )  
}

