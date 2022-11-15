import React from 'react'
import './Footer.css'
import banner_1 from '../../Img/footer/1920x1080-Pepsi-Back2School.jpg'
import banner_2 from '../../Img/footer/Suat-Khuya-Web.jpg'
import banner_3 from '../../Img/footer/U22-web-1.png'
import backGr_top from '../../Img/footer/footer-cured.png'
import alert from '../../Img/footer/dathongbao-1.png'
import logo from '../../Img/ImgHome/logo.png'


export default function Footer() {
  return (
    <div className='footer'>
      <div className='head_footer'>
        <h1>KHUYẾN MÃI</h1>
        <div>
          <img src={banner_1} />
          <img src={banner_2} />
          <img src={banner_3} />
        </div>

      </div>
      <div className='bd_footer'>
        <div className='imgTop'>
            <img src={logo} />
        </div>
        <div className='content_footer'>

        </div>
        <div className='end'>
          <p>
            © 2015 BHD Star Cineplex
          </p>
        </div>
      </div>
    </div>
  )
}
