import Link from 'next/link';
import Layout from '../components/layout'
//import NestedLayout from '../components/nested-layout'

export default function Home(props) {  
  const categories = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton']; //nanti pakai reactQuery 

  return (
    <>
      <div className = 'rectangle-block'>      
        <h3>Halo Dunia!</h3>
        <p>Selamat datang di CP.ID, forum CP Indonesia. Di sini kalian bisa bertemu dengan komunitas sesama pecinta CP. Semoga website ini berguna untuk membangun komunitas CP di Indonesia. </p>
      </div>
      <div className = 'rectangle-block'>      
        <h3>Kategori</h3>
        <p>Silahkan memilih kategori yang anda minati :D</p>
        <ul>
          {categories.map((category) => (
            <li>
              <Link href='/category'><a>{category}</a></Link>
            </li>
          ))}
        </ul>              
      </div>
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}