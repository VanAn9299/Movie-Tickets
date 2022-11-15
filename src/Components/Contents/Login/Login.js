import React, { useState } from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux/es/exports'
import './Login.css'

function Login(props) {
  const [register, HandleRegister] = useState(false)
  const [email, HandleInputEmail] = useState("")
  const [pass, HandleInputPass] = useState("")
  const LoginFunc = (e) => {
    e.preventDefault()
    var inp = {
      "email": email,
      "pass": pass
    }
    props.LoginSagaFunc(inp)
    props.LoginEmailSagaFunc(email)
    props.UserInfoSagaFunc(email)
    window.localStorage.setItem("email", email);
    window.localStorage.setItem("pass", pass);
  }
  const RegisterFunc = async (e) => {
    e.preventDefault()
    var inp = {
      "email": email,
      "pass": pass
    }
    props.RegisterSagaFunc(inp, HandleRegister)
  }
  // useEffect(() => {
  //   props.loginRdc.check === 200 && localStorage.HandleInputEmail('email', JSON.stringify(email));
  // }, [email]);
  // window.localStorage.setItem("count", count), [count])

  useEffect(() => {
    var inp = {
      "email": window.localStorage.getItem("email", email),
      "pass": window.localStorage.getItem("pass", pass)
    }
    window.localStorage.getItem("email", email)!=='' && props.LoginSagaFunc(inp)
    window.localStorage.getItem("email", email)!=='' && props.LoginEmailSagaFunc(window.localStorage.getItem("email", email))
  }, [])



  return (
    <div className='box_login'>
      <form className='login'>
        {
          register ?
            <h2>Đăng ký thành viên</h2>
            :
            <h2>Đăng Nhập</h2>
        }
        <input placeholder='Email' onChange={(e) => {
          HandleInputEmail(e.target.value)
        }} />
        <input placeholder='Password' onChange={(e) => {
          HandleInputPass(e.target.value)
        }} />
        {
          register ?
            <div className='log_reg'>
              <button onClick={(e) => {
                RegisterFunc(e)
              }}>Đăng ký</button>
              <button onClick={(e) => {
                e.preventDefault()
                HandleRegister(!register)
              }}>Quay lại đăng nhập</button>
            </div>
            :
            <div className='log_reg'>
              <button onClick={(e) => { LoginFunc(e) }}>Đăng nhập</button>
              <button onClick={(e) => {
                e.preventDefault()
                HandleRegister(!register)
              }}>Đăng ký thành viên</button>
            </div>
        }
        {props.RegisterRdc.check != null && <div className='error'>
          {props.RegisterRdc.check === 200 ? <p style={{ color: "green", fontSize: '18px', fontWeight: 'bolder' }}>*Bạn đã đăng ký thành công, vui lòng đăng nhập lại.</p> : <p style={{ color: "red", fontSize: '18px', fontWeight: 'bolder' }}>*Email đã được đăng ký</p>}
        </div>}
        {props.loginRdc.check != null && <div className='error'>
          {props.loginRdc.check !== 200 && <p style={{ color: "red", fontSize: '18px', fontWeight: 'bolder' }}>*Bạn đã nhập sai email hoặc mật khẩu, vui lòng thử lại.</p>}
        </div>}
      </form>
    </div>
  )
}
const mapStateToProps = (state, ownProps) => {
  return {
    login: state.login,
    RegisterRdc: state.RegisterRdc,
    UserRdc: state.UserRdc,
    loginEmailRdc: state.loginEmailRdc,
    loginRdc: state.loginRdc,
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    LoginSagaFunc: (ls) => {
      dispatch({
        type: "LoginSaga", payload: ls
      })
    },
    RegisterSagaFunc: (ls, act) => {
      dispatch({
        type: "RegisterSaga", payload: {
          data: ls,
          act: act
        }
      })
    },
    LoginEmailSagaFunc: (ls) => {
      dispatch({
        type: "LoginEmailSaga", payload: ls
      })
    },
    UserInfoSagaFunc: (ls) => {
      dispatch({ type: "UserInfoSaga", payload: ls })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
