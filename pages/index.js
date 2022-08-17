import Link from 'next/link';
import Layout from '../components/layout'
//import NestedLayout from '../components/nested-layout'

export default function Home() {
  console.log("inside Home")
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
          <li>
            <Link href='/category'>
              <a>Kategori 1</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a>Kategori 2</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a>Kategori 3</a>
            </Link>
          </li>
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