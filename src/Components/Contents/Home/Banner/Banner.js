import React, { useEffect, useState } from 'react'
import './Banner.css'
import slide_0 from '../../Img/ImgHome/Memento-Mori-1.jpg'
import slide_1 from '../../Img/ImgHome/TKH-website-1920x1080.png'
import slide_2 from '../../Img/ImgHome/App.jpg'
import slide_3 from '../../Img/ImgHome/B2S-WEBSITE.png'
import slide_4 from '../../Img/ImgHome/Vani_BHD_Web-banner-1920x1080@4x-1.jpg'
import slide_5 from '../../Img/ImgHome/1920x1080-10.10.jpg'



export default function Banner() {
  const [count, SetCount] = useState(0)
  const [slide, SetSlide] = useState([slide_0, slide_1, slide_2, slide_3, slide_4, slide_5])
  const SetTimeBanner = () => {
    SetCount(count > slide.length - 2 ? 0 : count + 1)
  }
  useEffect(() => {
    setTimeout(() => {
      SetTimeBanner()
    }, 3000);
  }, [])
  useEffect(() => {
    setTimeout(() => {
      SetTimeBanner()
    }, 3000);
  }, [count])



  return (
    <div className='banner'>
      <div className='onload'>{
        slide.map((n, k) => {
          return (
            <img src={n} key={k} />
          )
        })
      }
      </div>
      <button className='nextSlide' onClick={() => {
        SetCount(count === 0 ? slide.length - 1 : count - 1)
      }}>{'<'}</button>
      <div className='imgSlide'>
        {slide.map((n, k) => {
          if (k === count) {
            return (
              <img src={n} key={k} />
            )
          }
        })}
        <div className='clickSlide'>
          {slide.map((n, k) => { return (k === count ? <span style={{ backgroundColor: 'red' }} key={k} onClick={() => { SetCount(k) }}></span> : <span key={k} onClick={() => { SetCount(k) }}></span>) })}
        </div>
      </div>
      {/* <p>{slide.length}</p> */}
      {/* <p>{slide.map((n, k) => { return (<p key={k}>{n}</p>) })}</p> */}
      <button className='preSlide' onClick={() => {
        SetCount(count > slide.length - 2 ? 0 : count + 1)
      }}>{'>'}</button>
    </div>
  )
}
