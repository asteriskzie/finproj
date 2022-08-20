import { useRouter } from 'next/router'
import Link from 'next/link'
import Threads from '../../components/threadsList'

const Category = (props) => {
  const router = useRouter();   
  const {categoryId, name} = router.query;   

  return (
    <>
      <h2>Kategori {name}</h2>
      <Threads categoryId={categoryId}/>      
    </>
  );
}

export default Category