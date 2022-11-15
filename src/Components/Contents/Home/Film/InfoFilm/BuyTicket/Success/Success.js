import React, { useEffect } from 'react'
import './Success.css'
import { connect } from 'react-redux/es/exports'


function Success(props) {

  console.log(props.UserRdc);
  useEffect(() => {
    window.scrollTo(0, 0)
    window.localStorage.getItem("email") !== ''&& props.UserInfoSagaFunc(window.localStorage.getItem("email"))
   

  }, [])
  return (
    <div className='success_pape'>
      <div className='box_user'>
        <div className='cart_user'>
          <h1>LỊCH SỬ MUA HÀNG</h1>
          {
            props.UserRdc?.lsInfo ?
              props.UserRdc?.lsInfo.ticket.map((n, i) => {
                return (
                  <div className='show_cart_user' key={i}>
                    <table>
                      <thead>
                        <tr>
                          <td>Mã đơn:</td>
                          <td style={{ color: "#54ab35" }}>0{i + 1}</td>
                        </tr>
                        <tr>

                          <td>Phim:</td>
                          <td>{n[0].nameFilm}</td>
                        </tr>
                        <tr>
                          <td>Rạp:</td>
                          <td>{n[0].nameCinema}</td>
                        </tr>
                        <tr>
                          <td>Địa chỉ:</td>
                          <td>{n[0].address}</td>
                        </tr>
                        <tr>
                          <td>Thời gian:</td>
                          <td style={{ color: "#54ab35" }}>{n[0].date} | {n[0].time}</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Vị trí ghế:</td>
                          <td style={{ color: "#54ab35", display: 'flex', flexWrap: 'wrap' }}>
                            {n[0].seatCode}
                          </td>
                        </tr>
                        <tr>
                          <td>Trạng thái:</td>
                          <td style={{ color: "#54ab35" }}>Đã thanh toán</td>
                        </tr>

                      </tbody>
                    </table>
                    <img src={n[0].bannerFilm} alt='EROR' />
                  </div>
                )
              })
              :
              <p>Bạn chưa từng đặt vé!</p>
          }
        </div>
      </div>

    </div>
  )
}
const mapStateToProps = (state, ownProps) => {
  return {
    SuccessRdc: state.SuccessRdc,
    UserRdc: state.UserRdc,
    RegisterRdc: state.RegisterRdc,
    loginRdc: state.loginRdc,
    loginEmailRdc: state.loginEmailRdc,
    StRdc: state.StRdc,
    TkRdc: state.TkRdc,
    CTickRdc: state.CTickRdc,
    ArrSeatRdc: state.ArrSeatRdc,
    SentToBuyTicket: state.SentToBuyTicket,
    SentToBuyTicket2: state.SentToBuyTicket2,
    //cinema
    SentToBuyTicket1Films: state.SentToBuyTicket1Films,
    SentToBuyTicket2Films: state.SentToBuyTicket2Films
    //movie





  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {

    SuccessSagaFunc: (ls) => {
      dispatch({ type: "SuccessSaga", payload: ls })
    },
    UserInfoSagaFunc: (ls) => {
      dispatch({ type: "UserInfoSaga", payload: ls })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Success)