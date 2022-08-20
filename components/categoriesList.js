//Returns the category list from API
import Link from 'next/link'
import { useQuery } from 'react-query'

async function fetchCategories() {
  var axios = require('axios');
  var config = {
    method: 'get',
    url: 'https://avatar.ristek.cs.ui.ac.id/category/',
    headers: {
      'Authorization': 'Bearer 62fbcdaa2ea397f8deaa647e'
    }
  };
  const { data } = await axios(config);
  return data;
}

function Categories(props) {
  const { data, error, isLoading, isError } = useQuery('categories', fetchCategories);

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error! {error.message}</div>
  }

  return (
    <ul>
      {data.map((category) => (
        <li key={`category-${category.id}`}>
          <Link href={`/${encodeURIComponent(category.id)}?name=${category.name}`}>
            <a>{category.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Categories