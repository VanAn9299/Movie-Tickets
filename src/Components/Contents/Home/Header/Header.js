import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import './Header.css'
import { connect } from 'react-redux/es/exports'
import logo from '../../Img/ImgHome/logo.png'
import lineHeader from '../../Img/ImgHome/line-header1.png'
import Login from '../../Login/Login'

function Header(props) {
  const [login, HandleLogin] = useState(false)
  const [user, HandleUser] = useState(false)
  const refreshPage = () => {
    window.localStorage.setItem("email", '');
    window.localStorage.setItem("pass", '');
    window.location.reload(false);
  }
  useEffect(() => {
    login && props.loginRdc.check != null && props.loginRdc.check === 200 && HandleLogin(false)
    console.log(props.loginRdc.check);
  }
  )
  useEffect(() => {
    window.localStorage.getItem("email") !== '' && HandleLogin(true)
  }, [])
  return (
    <div className='header_main'>
      {props.loginRdc.check != null && props.loginRdc.check === 200 &&

        (user ?
          < div className='user_info' onClick={() => { HandleUser(!user) }}>
            <img src='https://www.bhdstar.vn/wp-content/themes/bhd/assets/images/bg-button-menu.jpg' alt='error' />
            <img src='https://www.bhdstar.vn/wp-content/themes/bhd/assets/images/bg-button-menu.jpg' alt='error' />
            <img src='https://www.bhdstar.vn/wp-content/themes/bhd/assets/images/bg-button-menu.jpg' alt='error' />
          </div>
          :
          < div className='user_infoShow' onClick={() => { HandleUser(!user) }}>
            {props.loginEmailRdc?.email&&<h2>{props.loginEmailRdc.email} <span  onClick={() => { HandleUser(!user) }}>{'<'}</span></h2>}
            <Link to='/success'><p>Lịch sử mua hàng</p></Link>
          </div>)

      }
      <div className='header'>
        <a href='/now'><button>Mua vé</button></a>
        <div>
          <a href='/home'>
            <img src={logo} alt='error' />
          </a>

        </div>
        {props.loginRdc.check != null && props.loginRdc.check === 200 ?
          <button onClick={() => {
            refreshPage()
          }}>Đăng xuất</button>
          :
          <button onClick={() => {
            { HandleLogin(!login) }
          }}>Đăng nhập</button>}
        {login && <div className='show_login'>
          <Login />
        </div>}
        <img src={lineHeader} alt='error' />
      </div>
    </div >
  )
}
const mapStateToProps = (state, ownProps) => {
  return {
    login: state.login,
    RegisterRdc: state.RegisterRdc,
    loginRdc: state.loginRdc,
    loginEmailRdc: state.loginEmailRdc,

  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {

    OffLoginSagaFunc: (act) => {
      dispatch({ type: "OffLoginSaga", payload: { act: act } })
    },
    UserInfoSagaFunc: (ls) => {
      dispatch({ type: "UserInfoSaga", payload: ls })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)