import { useQuery } from 'react-query'
import Link from 'next/link'

async function fetchPosts(thread) {
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

function Posts({threadId}) {
    const { data, error, isLoading, isError } = useQuery('posts', ()=>fetchPosts(threadId));
    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>Error! {error.message}</div>
    }

    return (
        <div>
            {data.data.map((post) => (
                <div className='rectangle-block'>
                    <p>{post.content}</p>
                </div>
            ))}      
        </div>
    );
}

export default Posts