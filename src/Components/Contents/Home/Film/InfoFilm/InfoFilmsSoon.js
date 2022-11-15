import './InfoFilmsSoon.css'
import React, { useEffect, useState } from 'react'
import { connect } from "react-redux/es/exports";
import { Link } from "react-router-dom";
import Comment from './Comment/Comment';

// import Header from '../../Header/Header';

function InfoFilmSoon(props) {
    useEffect(() => {
        props.ActionCallCinemaSaga()
        window.scrollTo(0, 0)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    // console.log(props.NowSoonFilms.lsNowSoon.ApiFilmId);
    const formatDMY = (dt) => {
        var date = new Date(dt);
        let day = date.getDate();
        let month = date.toLocaleString('default', { month: 'numeric' });
        let year = date.getFullYear();
        day = day < 10 ? `0${day}` : day;
        var strTime = `${year}-${month}-${day}`;
        return strTime;
    };
    const SetDayTimeCinema = (dayTime, ApiFilmId) => {
        console.log(dayTime, ApiFilmId);
        props.SentDataDayTime(dayTime, ApiFilmId)
    }
    const [idCinema, SetIdCinema] = useState([])
    const [IndexChain, SetIndexChain] = useState([])

    const FilterCinemaChain = (isd) => {
        SetIdCinema(isd)
    }
    const GuiIndex = (index) => {
        SetIndexChain(index)
    }
    const SentToBuyTicket2Films = (Name, Address, Logo, Id, Cineplex, ShowTimeDuration, ShowTime) => {
        var lsSentToBuyTicket2Films = {
            "Name": Name, "Address": Address,
            "Logo": Logo, "Id": Id, "Cineplex": Cineplex,
            "ShowTimeDuration": ShowTimeDuration, "ShowTime": ShowTime
        }
        props.SentTicket2Films(lsSentToBuyTicket2Films)
    }

    return (
        <div>

            <div>
                {
                    // console.log(props.apiFilmsDayTime.lsApiFilmId)
                    props.apiFilmsDayTime.lsApiFilmId &&
                    <div >
                        {
                            //   console.log(props.apiFilmsDayTime.lsApiFilmId)
                            props.apiFilmsDayTime.lsApiFilmId.map((n, i) => {
                                return (
                                    // console.log(n)
                                    <div key={i} className='infoFilmCard' style={{ backgroundImage: `linear-gradient(to right,rgba(0,0,0,1)150px,rgba(0,0,0,.6)),url(${n.BannerUrl})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                                        <div className='cardInfoFilmCard'>
                                            <div>
                                                <img alt='error' src={n.GraphicUrl} />
                                            </div>
                                            <div className='inCardFilms'>
                                                <span>{n.ApiRatingFormat}</span>
                                                <h1>{n.Title}</h1>
                                                <h3>{n.TitleEn} · {(new Date(n.OpeningDate)).getFullYear()} · {n.Duration} phút</h3>
                                                <p>- {n.SynopsisEn}</p>
                                                <div className='QuocGia'>
                                                    <div className='left'>
                                                        <div>
                                                            <h3>Ngày chiếu:</h3>
                                                            <h3 >{formatDMY(n.OpeningDate)}</h3>
                                                        </div>
                                                        <div>
                                                            <h3>Thể loại:</h3>
                                                            <h3 >{n.ApiGenreName}</h3>
                                                        </div>
                                                        <div>
                                                            <h3>Quốc gia:</h3>
                                                            <h3>{n.Countries[0].Name}</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='box_comment'>
                                                <Comment />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                }
            </div>
            <div className='body_content_cinema'>
                <div className='name_title'>
                    {
                        props.apiFilmsDayTime.lsApiFilmId &&
                        <h1>Lịch chiếu phim: {props.apiFilmsDayTime.lsApiFilmId[0].Title}</h1>
                    }
                </div>
                <div className='manage_dayTime'>
                    {
                        props.NowSoonFilms.lsNowSoon &&

                        <div className='dayTimeCinema'>
                            {
                                // console.log(props.NowSoonFilms.lsNowSoon.Cinemas.Items[0].VersionsCaptions[0].ShowTimes[0].ApiFilmId)
                                // console.log(props.NowSoonFilms.lsNowSoon.Cinemas)
                                props.NowSoonFilms.lsNowSoon.ShowTimes.map((n, i) => {
                                    return (
                                        <div key={i + 'dayTimeCinema'}>
                                            <button onClick={() => SetDayTimeCinema(formatDMY(n), props.NowSoonFilms.lsNowSoon.Cinemas.Items[0].VersionsCaptions[0].ShowTimes[0].ApiFilmId)} >
                                                <h2>{(new Date(n)).toLocaleString('en-us', { weekday: 'short' })}</h2>
                                                <h1>{(new Date(n)).getDate()} - {(new Date(n)).getMonth()}</h1>
                                            </button>
                                        </div>
                                    )
                                })
                            }
                        </div>


                    }
                </div>
                <div>
                    <div className='AllCinema'>
                        {props.NowSoonFilms.lsNowSoon &&
                            props.NowSoonFilms.lsNowSoon.Cineplexs.map((n, i) => {
                                return (
                                    <div key={i + 'imgAllCinema'} className='imgAllCinema' onClick={() => FilterCinemaChain(n.Id)}>

                                        <div>
                                            <button><img alt='error' src={n.Logo} /></button>
                                        </div>
                                        <h5>{n.Name}</h5>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='gioChieu'>
                    <div className='showCinemaChain'>
                        {
                            props.NowSoonFilms.lsNowSoon &&
                            <div>
                                {
                                    idCinema === [] ?
                                        <div></div> :
                                        <div className='NameOneCinema1'>
                                            {
                                                props.NowSoonFilms.lsNowSoon.Cinemas.Items.map((n, i) => {
                                                    return (
                                                        n.Cineplex * 1 === idCinema &&
                                                        <div key={i + 'CinemaChain'} onClick={() => GuiIndex(i)} >
                                                            <button><img alt='error' src={n.Logo} /><h3>{n.Name}</h3></button>
                                                            <p>{n.Address}</p>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                }
                            </div>
                        }
                    </div>
                    <div>
                        {props.NowSoonFilms.lsNowSoon &&
                            IndexChain &&
                            props.NowSoonFilms.lsNowSoon.Cinemas.Items.map((n, i) => {
                                return (
                                    n.Cineplex * 1 === idCinema &&
                                    <div key={i + '1312431241'}>
                                        {

                                            IndexChain === i &&
                                            n.VersionsCaptions[0].ShowTimes.map((n2, i2) => {
                                                return (
                                                    <div key={i2 + 'dayTimeCinema'} onClick={() => SentToBuyTicket2Films(n.Name, n.Address, n.Logo, n.Id, n.Cineplex, n2.ShowTimeDuration, n2.ShowTime.slice(0, 10))}>
                                                        <Link to='/buyticket'> <button>{n2.ShowTimeDuration}</button></Link>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>

                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}
const mapStateToProps = (state, ownProps) => {
    return {
        AllCinema: state.cinema,
        CinemaChain: state.cinemaChain,
        OneCinema: state.oneCinema,
        NowSoonFilms: state.nowSoonFilms,
        apiFilmsDayTime: state.apiFilmsDayTime,
        // CommentFilms: state.comment
    };
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        ActionCallCinemaSaga: () => {
            dispatch({ type: "DataAllCinema" })
        },
        ActionCallCinemaChainSaga: (idAllCinema) => {
            dispatch({ type: "DataCinemaChain", payload: { idAllCinema: idAllCinema } })
        },
        SentCinemaChainApi: (index, ApiCinemaId, Cineplex) => {
            dispatch({ type: "DataOneCinemaApi", payload: { index: index, ApiCinemaId: ApiCinemaId, Cineplex: Cineplex } })
        },
        SentDayCinema: (sentDay, ApiCinemaId, Cineplex) => {
            dispatch({ type: "DataDayCinema", payload: { sentDay: sentDay, ApiCinemaId: ApiCinemaId, Cineplex: Cineplex } })
        },
        SentDataDayTime: (dayTime, ApiFilmId) => {
            dispatch({ type: "SentDataDayTime1", payload: { dayTime: dayTime, ApiFilmId: ApiFilmId } })
        },
        SentTicket2Films: (lsSentToBuyTicket2Films) => {
            dispatch({ type: "DataBuyTicket2Films", payload: lsSentToBuyTicket2Films })
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(InfoFilmSoon);