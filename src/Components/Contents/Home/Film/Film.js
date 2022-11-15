import React from 'react'
import './Film.css'
import { Link } from "react-router-dom";
import Now from './Showing/Now';
// import Cinema from './InfoFilm/Cinema/Cinema';
export default function Film() {
  return (
    <div className='film'>
      <div className='headerFilm'>
        <Link to='/now'><button id='showingFilm'><h1>PHIM ĐANG CHIẾU</h1></button></Link>
        <Link to='/soon'><button id='ComingFilm'><h1>PHIM HAY SẮP CHIẾU</h1></button></Link>
        <Link to='/cinema'><button id='ComingFilm'><h1>CHỌN RẠP CHIẾU</h1></button></Link>


      </div>
      <Now/>
      {/* <div className='allCard'>
        <div className='cardFilm'>
          <Link to='/infofilm'>
            <img className='imgCard' alt='Error' src='https://chieuphimquocgia.com.vn/Content/Images/0016640_0.jpeg' />
          </Link>
          <div className='smallCardFilm'>
            <h3>Tên phim</h3>
            <p>
              Thể loại:
              <br />
              Khởi chiếu:
            </p>
            <Link className='buyTicketCard' to='/infofilm'>
              Đặt vé
            </Link>
          </div>
        </div>
      </div> */}

    </div>
  )
}
