import Post from '../../components/post'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import CreatePost from './services/createPost'

async function DetailThread(thread) {
  const id = thread; 
  var axios = require('axios');
  var config = {
      method: 'get',
      url: `https://avatar.ristek.cs.ui.ac.id/thread/${id}`,
      headers: { 
        'Authorization': 'Bearer 62fbcdaa2ea397f8deaa647e'
      }
  };

  const {data} = await axios(config);     
  return data; 
}

export default function Thread(props) {  
  const router = useRouter();
  const { categoryId, threadId } = router.query;

  const { data, error, isLoading, isError } = useQuery('detailThread', () => DetailThread(threadId));
  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error! {error.message}</div>
  }

  return (
    <>
      <h2>{data.name}</h2>
      <div className='starter-post'>
        <Post {...props} post={data.data[0]} />
      </div>  

      <h3>Jawaban</h3>
      {data.data.length > 1 ?
        (
          <div>
            {data.data.map((post) => (
              !post.isStarter && <Post {...props} post={post} />
            ))}
          </div>
        )
        :
        <div className='rectangle-block'>No replies yet</div>
      }
      
      <div className="overlay">
        <CreatePost />        
      </div>

    </>
  );
}

/*
  {data.data.map((post) => (
            !post.isStarter && <div>
              <Post post={post} />
            </div>
          ))} 
        
*/