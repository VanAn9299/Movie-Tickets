import React, { useEffect, useState } from 'react'
import { connect } from "react-redux/es/exports";
import './Cinema.css'
import { Link } from "react-router-dom";

function Cinema(props) {
    useEffect(() => {
        props.ActionCallCinemaSaga()
        window.scrollTo(0, 0)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    useEffect((idAllCinema) => {
        if (idAllCinema) {
            console.log(props.CinemaChain.lsCinemaChain.CinemaChain);
            props.ActionCallCinemaChainSaga(idAllCinema)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    })
    const SentIdCinema = (idAllCinema) => {
        // console.log(idAllCinema);
        if (idAllCinema) {
            props.ActionCallCinemaChainSaga(idAllCinema)
            // eslint-disable-next-line react-hooks/exhaustive-deps

        }
    }
    const [SentOneCinema, setSentOneCinema] = useState('')
    const SentAddress = (index, ApiCinemaId, Cineplex) => {
        // console.log(index, ApiCinemaId, Cineplex);
        if (props.CinemaChain.lsCinemaChain.CinemaChain) {
            props.SentCinemaChainApi(index, ApiCinemaId, Cineplex)
            // console.log(props.SentCinemaChainApi(index, CinemaChainApi,Cineplex));
            setSentOneCinema(props.CinemaChain.lsCinemaChain.CinemaChain[index])

            // console.log(props.CinemaChain.lsCinemaChain.CinemaChain[0]);   
        }
    }
    useEffect(() => {
        // console.log(SentOneCinema);
    }, [SentOneCinema])

    const SentDayCinema = (sentDay, ApiCinemaId, Cineplex) => {
        console.log(sentDay, ApiCinemaId, Cineplex);
        if (sentDay) {
            props.SentDayCinema(sentDay, ApiCinemaId, Cineplex)
            // eslint-disable-next-line react-hooks/exhaustive-deps

        }
    }
    const formatDMY = (dt) => {
        var date = new Date(dt);
        let day = date.getDate();
        let month = date.toLocaleString('default', { month: 'numeric' });
        let year = date.getFullYear();
        day = day < 10 ? `0${day}` : day;
        var strTime = `${year}-${month}-${day}`;
        return strTime;
    };
    const SentToBuyTicket1 = (LogoOneCinema, NameCinemaChain, addressCinema) => {
        var lsSentToBuyTicket1 = {
            "LogoOneCinema": LogoOneCinema,
            "NameCinemaChain": NameCinemaChain,
            "addressCinema": addressCinema,
        }
        props.SentTicket1(lsSentToBuyTicket1)
    }
    const SentToBuyTicket2 = (TimeInCinema, TitleInCinema, OpeningDate, GraphicUrl, ApiCinemaId, Cineplex, ApiFilmId) => {
        var lsSentToBuyTicket2 = {
            "TimeInCinema": TimeInCinema, "TitleInCinema": TitleInCinema,
            "OpeningDate": OpeningDate, "GraphicUrl": GraphicUrl, "ApiCinemaId": ApiCinemaId,
            "Cineplex": Cineplex, "ApiFilmId": ApiFilmId
        }
        props.SentTicket2(lsSentToBuyTicket2)
    }
    return (
        <div className='framesCinema'>
            <div className='AllCinema_movie'>
                {props.AllCinema.lsCinema &&
                    //   console.log(props.AllCinema.lsCinema.AllCinema)
                    props.AllCinema.lsCinema.AllCinema.map((n, i) => {
                        return (
                            <div key={i} className='imgAllCinema_movie' onClick={() => SentIdCinema(n.idAllCinema)}>
                                <div>
                                    <button><img alt='error' src={n.LogoCinema} /></button>
                                </div>
                                <h5>{n.nameAllCinema}</h5>
                            </div>
                        )
                    })
                }
            </div>
            <div className='CinemaChain'>
                {/* <div></div> */}
                <div className='NameOneCinema'>
                    {
                        props.CinemaChain.lsCinemaChain &&
                        <div>
                            {/* {props.CinemaChain.lsCinemaChain.CinemaChain} */}
                            {props.CinemaChain.lsCinemaChain.CinemaChain.map((n, i) => {
                                return (
                                    <div key={i + 'CinemaChain'} onClick={() => { SentAddress(i, n.ApiCinemaId, n.Cineplex); SentToBuyTicket1(n.LogoCinema, n.nameCinema, n.addressCinema) }}>
                                        {/* {console.log(n)} */}
                                        <button><img alt='error' src={n.LogoCinema} /><h3>{n.nameCinema} <span>Xem chi tiết</span></h3></button>
                                    </div>
                                )
                            })}
                        </div>
                    }
                </div>
                <div className='allOneCinemaAddress'>
                    {
                        SentOneCinema &&
                        <div className='oneCinemaAddress'>
                            {/* {console.log(SentOneCinema)} */}
                            <img alt='error' src={SentOneCinema.LogoCinema} />
                            <div>
                                <button><h3>Lịch chiếu phim {SentOneCinema.nameCinema}</h3></button>
                                <p>{SentOneCinema.addressCinema}</p>
                            </div>
                        </div>
                    }
                    <div>
                        {props.OneCinema.lsOneCinema &&
                            <div className='dayTimeCinema_movie'>
                                {/* {console.log(props.OneCinema.lsOneCinema.ShowTimes)} */}
                                {props.OneCinema.lsOneCinema.ShowTimes.map((n, i) => {
                                    return (
                                        <button key={i + 'dayTimeCinema'} onClick={() => SentDayCinema(formatDMY(n), SentOneCinema.ApiCinemaId, SentOneCinema.Cineplex)} >
                                            <h1>{(new Date(n)).getDate()}-{(new Date(n)).getMonth()}</h1>
                                            <h1>{(new Date(n)).toLocaleString('en-us', { weekday: 'short' })}</h1>
                                        </button>
                                    )
                                })}
                            </div>
                        }

                        {props.OneCinema.lsOneCinema &&
                            <div className='TimeCinema'>
                                {
                                    props.OneCinema.lsOneCinema.Films.map((n, i) => {
                                        return (
                                            <div key={i + 'TimeCinema'}>
                                                <div>
                                                    <img alt='error' src={n.GraphicUrl} />
                                                </div>
                                                <div className='ContentRightImg'>
                                                    <div>
                                                        <h2>{n.ApiRatingFormat}</h2>
                                                        <h1>{n.Title}</h1>
                                                        <p>{n.ApiGenreName}</p>
                                                    </div>
                                                    <div className='timeFilms'>
                                                        {
                                                            props.OneCinema.lsOneCinema.Films[i].VersionsCaptions[0].ShowTimes.map((n2, i2) => {
                                                                return (
                                                                    <div key={i2 + 'dayTimeCinema'}>
                                                                        <Link to='/buyticket'>
                                                                            <button onClick={() => SentToBuyTicket2(n2.ShowTimeDuration,
                                                                                props.OneCinema.lsOneCinema.Films[i].Title,
                                                                                props.OneCinema.lsOneCinema.Films[i].OpeningDate.slice(0, 10)
                                                                                , props.OneCinema.lsOneCinema.Films[i].GraphicUrl,
                                                                                props.OneCinema.lsOneCinema.Films[i].VersionsCaptions[0].ShowTimes[0].ApiCinemaId,
                                                                                props.OneCinema.lsOneCinema.Films[i].VersionsCaptions[0].ShowTimes[0].Cineplex,
                                                                                props.OneCinema.lsOneCinema.Films[i].ApiFilmId
                                                                            )}>{n2.ShowTimeDuration}</button>
                                                                        </Link>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        }
                    </div>
                </div>
            </div>
            {props.CinemaChain.lsCinemaChain === null && <div className='cover_cinema'></div>}
        </div >
    )
}
const mapStateToProps = (state, ownProps) => {
    return {
        AllCinema: state.cinema,
        CinemaChain: state.cinemaChain,
        OneCinema: state.oneCinema
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
        SentTicket1: (lsSentToBuyTicket1) => {
            dispatch({ type: "DataBuyTicket1", payload: lsSentToBuyTicket1 })
        },
        SentTicket2: (lsSentToBuyTicket2) => {
            dispatch({ type: "DataBuyTicket2", payload: lsSentToBuyTicket2 })
        }


    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cinema);