import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { connect } from 'react-redux/es/exports'
import './Ticket.css'


function Ticket(props) {
    const [count, SetCount] = useState(0)
    const [price, SetPrice] = useState(10000000)
    const ConvertNumber = (num) => {
        var x = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return x;
    }
    const [lsData, GetData] = useState([])
    const [lsSecond, GetDataSecond] = useState([])
    console.log(lsData);
    console.log(lsSecond);
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
    console.log(lsManage);
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
    const formatDMY = (dt) => {
        var date = new Date(dt * 1000);
        let dayWeek = date.toLocaleString('en-us', { weekday: 'short' });
        let day = date.getDate();
        let month = date.toLocaleString('default', { month: 'short' });
        let year = date.getFullYear();
        day = day < 10 ? `0${day}` : day;
        var strTime = `${dayWeek}, ${day} ${month}, ${year}`;
        return strTime;
    };
    // slice(start, end)

    return (
        <div className='box_ticket'>
            <div className='head_ticket'>
                <p>Ch???n v??</p>
                <p>Ch???n gh???</p>
                <p>X??c nh???n</p>
                <p>?????t v?? th??nh c??ng</p>
            </div>
            <div className='title_film'>
                <div className='head_title_film'>
                    <img src={lsManage.bannerFilm} />
                    <h3>{lsManage.nameFilm}</h3>
                    <p> Showing on {lsManage.timeShow}  <br /> {lsManage.TimeFilm}</p>

                    <p>{lsManage.nameCinema}</p>
                </div>
                <div className='cart'>
                    <h1>GI??? H??NG C???A B???N</h1>
                    <table>
                        <thead>
                            <tr>
                                <td>{lsManage.nameFilm}</td>
                                <td></td>
                                <td>{ConvertNumber(count * price)} VND</td>
                            </tr>
                        </thead>
                        <tbody>
                            {count > 0 && <tr>
                                <td>Adult-2D</td>
                                <td style={{ color: "#54ab35" }}>{count} v??</td>
                                <td>{ConvertNumber(price)} VND</td>
                            </tr>}
                            <tr>
                                <td>T???ng c???ng</td>
                                <td></td>
                                <td>{ConvertNumber(count * price)} VND</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='note'>
                <h3>L??U ??</h3>
                <p>- H??y ch???n k??? lo???i v?? v?? s??? l?????ng b???n mu???n mua</p>
                <p>- B???n c?? th??? mua t???i ??a 10 v?? trong m???t l???n giao d???ch</p>
                <p>- ????? c?? tr???i nghi???m mua v?? t???t nh???t xin vui l??ng s??? d???ng App BHDStar</p>
            </div>
            {
                props.StRdc?.bolean ?
                    <div></div> :
                    <div className='order'>
                        <h1>?????t v??</h1>
                        <table>
                            <thead>
                                <tr>
                                    <td>V??</td>
                                    <td>Gi??</td>
                                    <td>S??? l?????ng</td>
                                    <td>T???ng</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Adult-2D</td>
                                    <td>{ConvertNumber(price)}</td>
                                    <td>
                                        <button onClick={() => {
                                            count <= 0 ? SetCount(count) : SetCount(count - 1)
                                        }}>-</button>
                                        {count}
                                        <button onClick={() => {
                                            count > 9 ? SetCount(count) : SetCount(count + 1)
                                        }}>+</button></td>
                                    <td>{ConvertNumber(count * price)} VND</td>
                                </tr>
                            </tbody>
                        </table>
                        {
                            count > 0 && <h3 onClick={() => { { props.TicketSagaFunc(count) }; { props.SeatSagaFunc(true) } }}>?????t gh???</h3>
                        }
                    </div>
            }

        </div>
    )
}
const mapStateToProps = (state, ownProps) => {
    return {
        login: state.login,
        RegisterRdc: state.RegisterRdc,
        loginRdc: state.loginRdc,
        StRdc: state.StRdc,
        TkRdc: state.TkRdc,
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
export default connect(mapStateToProps, mapDispatchToProps)(Ticket)
