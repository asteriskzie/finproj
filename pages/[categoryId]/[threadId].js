import Post from '../../components/post'
import { useRouter } from 'next/router'
import DetailThread from './services/detailThread'
import { useQuery } from 'react-query'
import CreatePost from './services/createPost'

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