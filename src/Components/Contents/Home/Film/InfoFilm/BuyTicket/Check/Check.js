import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { connect } from 'react-redux/es/exports'
// import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import './Check.css'

function Check(props) {
    const [price, SetPrice] = useState(10000000)
    const ConvertNumber = (num) => {
        var x = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return x;
    }
    const ConvertNumLetter = (num) => {
        let letters = ''
        while (num >= 0) {
            letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[num % 26] + letters
            num = Math.floor(num / 26) - 1
        }
        return letters
    }

    const ConvertSort = (arr) => {
        var ls = []
        var arraySort = arr.sort(function (a, b) { return a - b })
        arraySort.forEach((v, i) => {
            ls = [...ls, v]
        })
        return ls;
    }

    const ConvertSeatCode = () => {
        var ls = []
        ConvertSort(props.ArrSeatRdc.arrSeat).forEach((v, i) => {
            ls = [...ls, ConvertNumLetter(Math.floor(v / 12)) + `${((v) % 12)}`]
        })
        console.log(ls);
        return ls;
    }
    const ConvertLetterSeat = () => {
        var ls = []
        ConvertSort(props.ArrSeatRdc.arrSeat).forEach((v, i) => {
            ls = [...ls, ConvertNumLetter(Math.floor(v / 12))]
        })
        return ls;
    }

    const ConvertNumSeat = () => {
        var ls = []
        ConvertSort(props.ArrSeatRdc.arrSeat).forEach((v, i) => {
            ls = [...ls, ((v) % 12)]
        })
        return ls;
    }
    const [lsData, GetData] = useState([])
    const [lsSecond, GetDataSecond] = useState([])
    const [lsManage, SetAllData] = useState({
        nameCinema: '',
        addressCinema: '',
        IdCinema: '',
        Idfilm: '',
        bannerFilm: '',
        timeShow: '',
        TimeFilm: '',
        nameFilm: ''

    })
    const UpdateData = () => {
        lsSecond.TitleInCinema ?
            SetAllData(n => {
                return {
                    ...n,
                    nameCinema: lsData.NameCinemaChain,
                    addressCinema: lsData.addressCinema,
                    IdCinema: lsSecond.ApiCinemaId,
                    Idfilm: lsSecond.ApiFilmId,
                    bannerFilm: lsSecond.GraphicUrl,
                    timeShow: lsSecond.OpeningDate,
                    TimeFilm: lsSecond.TimeInCinema,
                    nameFilm: lsSecond.TitleInCinema
                }
            })
            :
            SetAllData(n => {
                return {
                    ...n,
                    nameCinema: lsSecond.Name,
                    addressCinema: lsSecond.Address,
                    IdCinema: lsSecond.Cineplex,
                    Idfilm: lsSecond.Id,
                    bannerFilm: lsData.GraphicUrl,
                    timeShow: lsSecond.ShowTime,
                    TimeFilm: lsSecond.ShowTimeDuration,
                    nameFilm: lsData.Title
                }
            })

    }
    const [cardName, HandleInputcardName] = useState("")
    const [cardNum, HandleInputcardNum] = useState("")
    const [exDate, HandleInputExDate] = useState("")
    const [seatCode, SetSeatCode] = useState([])
    // const Navigate = useNavigate()


    const PayFunc = () => {
        var inp = {
            "email": props.loginEmailRdc.email,
            "cardName": cardName,
            "cardNum": cardNum,
            "exDate": exDate,
            "lsManage": lsManage,
            "seatCode": seatCode

        }
        props.SuccessSagaFunc(inp)
       
        // if (props.SuccessRdc.check === 200) {
        //     Navigate("/success")
        // }

    }
    console.log(lsManage);
    useEffect(() => {
        window.scrollTo(0, 0)

    }, [])

    useEffect(() => {
        props.SentToBuyTicket?.lsSentToBuyTicket1 ? GetData(props.SentToBuyTicket?.lsSentToBuyTicket1) :
            (props.SentToBuyTicket1Films?.lsSentToBuyTicket1Films ? GetData(props.SentToBuyTicket1Films?.lsSentToBuyTicket1Films) : GetData())
        props.SentToBuyTicket2?.lsSentToBuyTicket2 ? GetDataSecond(props.SentToBuyTicket2?.lsSentToBuyTicket2) :
            (props.SentToBuyTicket2Films?.lsSentToBuyTicket2Films ? GetDataSecond(props.SentToBuyTicket2Films?.lsSentToBuyTicket2Films) : GetDataSecond())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    useEffect(() => {
        UpdateData()

    }, [lsData, lsSecond])
    useEffect(() => {
        ConvertLetterSeat()
        ConvertNumSeat()
        ConvertSeatCode()
        SetSeatCode(ConvertSeatCode())

    }, [props.ArrSeatRdc.arrSeat])
    return (
        <div className='box_check'>
            <div className='cart_check'>
                <h1>GI??? H??NG C???A B???N</h1>
                <div className='show_cart_check'>
                    <table>
                        <thead>
                            <tr>
                                <td>Phim:</td>
                                <td>{lsManage.nameFilm}</td>
                            </tr>
                            <tr>
                                <td>R???p:</td>
                                <td>{lsManage.nameCinema}</td>
                            </tr>
                            <tr>
                                <td>?????a ch???:</td>
                                <td>{lsManage.addressCinema}</td>
                            </tr>
                            <tr>
                                <td>Th???i gian:</td>
                                <td style={{ color: "#54ab35" }}>{lsManage.timeShow} | {lsManage.TimeFilm}</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>V??:</td>
                                <td style={{ color: "#54ab35" }}>Adult-2D - {props.TkRdc.num} v??</td>
                            </tr>
                            <tr>
                                <td>V??? tr?? gh???:</td>
                                <td style={{ color: "#54ab35", display: 'flex', flexWrap: 'wrap' }}>
                                    {ConvertLetterSeat().map((v, i) => {
                                        return (
                                            <p key={i} style={{ padding: '5px 5px 5px 0px' }} >{v}-{ConvertNumSeat()[i] * 1 + 1}</p>
                                        )
                                    })}
                                </td>
                            </tr>
                            <tr>
                                <td>T???ng c???ng:</td>
                                <td>{ConvertNumber(props.TkRdc.num * price)} VND</td>
                            </tr>
                        </tbody>

                    </table>
                    <div className='note_check'>
                        <h3>Ch?? ??:</h3>
                        <p>- Qu?? kh??ch vui l??ng ki???m tra l???i th??ng tin tr?????c khi thanh to??n.</p>
                        <p>- V?? mua r???i s??? kh??ng ???????c ?????i ho???c tr??? l???i.</p>
                        <p>- Please check the information before purchasing ticket.</p>
                        <p>- Purchased Ticket can not be changed or refunded.</p>
                    </div>
                    <img src={lsManage.bannerFilm} />
                </div>
            </div>
            <div className='bill'>
                <h1>Xin ch??o {props.loginEmailRdc.email}, vui l??ng nh???p th??ng tin thanh to??n</h1>
                <div className='input_bill'>
                    <p>M?? th???:</p>
                    <input
                        onChange={(e) => {
                            HandleInputcardName(e.target.value)
                        }}
                    />
                    <p>T??n th???:</p>
                    <input
                        onChange={(e) => {
                            HandleInputcardNum(e.target.value.toLocaleUpperCase())
                        }}
                    />
                    <p>Th???i h???n th???:</p>
                    <input
                        onChange={(e) => {
                            HandleInputExDate(e.target.value)
                        }}
                    />
                </div>
                <div className='paybtn'>
                    {
                        cardName != '' &&
                        cardNum != '' &&
                        exDate != '' &&
                        <Link to='/success'><button onClick={() => { PayFunc() }}>Thanh to??n</button></Link>
                    }
                </div>
            </div>
        </div >
    )
}
const mapStateToProps = (state, ownProps) => {
    return {
        SuccessRdc: state.SuccessRdc,
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
export default connect(mapStateToProps, mapDispatchToProps)(Check)
