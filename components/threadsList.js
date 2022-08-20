import { useQuery } from 'react-query'
import Link from 'next/link'

async function fetchThreads(category) {
  var id = category;
  var axios = require('axios');
  var config = {
    method: 'get',
    url: `https://avatar.ristek.cs.ui.ac.id/category/${id}`,
    headers: {
      'Authorization': 'Bearer 62fbcdaa2ea397f8deaa647e'
    }
  };
  const { data } = await axios(config); 
  return data;
}

function Threads({categoryId}) {  
  const { data, error, isLoading, isError } = useQuery('threads', ()=>fetchThreads(categoryId));
  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error! {error.message}</div>
  }

  if (data.data == null) {
    return <div>No threads yet</div>
  }

  return (
    <div>
      {data.data.map((thread) => (
        <div className='rectangle-block'>
          <Link key={`thread-${thread.id}`} href={`/${encodeURIComponent(categoryId)}/${thread.id}`}>
            <a>{thread.name}</a>
          </Link>          
        </div>
      ))}      
    </div>
  );
}

export default Threads