import { useQuery } from 'react-query'
import Link from 'next/link'

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

export default DetailThread