import Link from 'next/link';
import Layout from '../components/layout'
import { useEffect, useState } from "react"
import Categories from '../components/categoriesList'
import {useRouter} from 'next/router'

export default function Home(props) {      
  return (
    <>
      <div className = 'rectangle-block'>      
        <h3>Halo Dunia!</h3>
        <p>Selamat datang di CP.ID, forum CP Indonesia. Di sini kalian bisa bertemu dengan komunitas sesama pecinta CP. Semoga website ini berguna untuk membangun komunitas CP di Indonesia. </p>
      </div>

      <div className = 'rectangle-block'>      
        <h3>Kategori</h3>
        <p>Silahkan memilih kategori yang anda minati:</p>
        <Categories {...props}/>
        {props.role == 'admin' &&           
          (<div>
            <a>Buat kategori baru</a>            
          </div>)
        }
      </div>
    </>
  )
}
