import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux/es/exports'
import Login from '../../../../Login/Login'
import './BuyTicket.css'
import Check from './Check/Check'
import Seats from './Seats/Seats'
import Ticket from './Ticket/Ticket'

function BuyTicket(props) {
  const [lsData, GetData] = useState([])
  const [lsSecond, GetDataSecond] = useState([])
  console.log(lsData);
  console.log(lsSecond);
  useEffect(() => {
    props.SentToBuyTicket?.lsSentToBuyTicket1 ? GetData(props.SentToBuyTicket?.lsSentToBuyTicket1) :
      (props.SentToBuyTicket1Films?.lsSentToBuyTicket1Films ? GetData(props.SentToBuyTicket1Films?.lsSentToBuyTicket1Films) : GetData())


    props.SentToBuyTicket2?.lsSentToBuyTicket2 ? GetDataSecond(props.SentToBuyTicket2?.lsSentToBuyTicket2) :
      (props.SentToBuyTicket2Films?.lsSentToBuyTicket2Films ? GetDataSecond(props.SentToBuyTicket2Films?.lsSentToBuyTicket2Films) : GetDataSecond())

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className='box_buyticket'> 
      {
        props.loginRdc.check != null ?
          < div className='box_buyticket'>

            {props.CTickRdc?.bolean ? <div></div> : <Ticket />}
            {props.CTickRdc?.bolean ? <div></div> : <Seats />}
            {props.CTickRdc?.bolean ? <Check /> : <div></div>}
          </div>
          :
          <div className='box_login_check'>
            <Login />
          </div>

      }

    </div >
  )
}
const mapStateToProps = (state, ownProps) => {
  return {
    login: state.login,
    RegisterRdc: state.RegisterRdc,
    loginRdc: state.loginRdc,
    StRdc: state.StRdc,
    TkRdc: state.TkRdc,
    CTickRdc: state.CTickRdc,
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

    SeatSagaFunc: (bl) => {
      dispatch({ type: "SeatSaga", payload: bl })
    },
    TicketSagaFunc: (num) => {
      dispatch({ type: "TicketSaga", payload: num })
    }

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(BuyTicket)
