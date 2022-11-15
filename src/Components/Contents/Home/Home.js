import React from 'react'
import { useEffect } from 'react'
import Banner from './Banner/Banner'
import Film from './Film/Film'
import './Home.css'

export default function Home() {
  useEffect(()=>{
    // window.location.reload(false);

  },[])
  return (
    <div className='main'>
      <Banner/>
      <Film/>
    </div>
  )
}
