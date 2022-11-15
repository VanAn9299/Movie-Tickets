import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './Now.css'
import { connect } from "react-redux/es/exports";
import { Link } from "react-router-dom";


function Now(props) {


    const [lsNowSoonFilms, setLsNowSoonFilms] = useState([])

    useEffect(() => {
        fetch("http://localhost:3003/movie")
            .then(res => res.json())
            .then(data => setLsNowSoonFilms(data))

        // props.GetNowSoonFilms()

    }, [])
    useEffect(() => {
        window.scrollTo(0, 0)
        // window.location.reload(false);
    }, [])
    // console.log(props.GetNowSoonFilms.lsNowSoonFilms);
    const sentNowFilms = (ApiFilmId) => {
        if (ApiFilmId) {
            // console.log(ApiFilmId);
            props.GetNowSoonFilms(ApiFilmId)
            props.GetApiFilmIdFilms(ApiFilmId)
            props.GetApiIdFilmsComment(ApiFilmId)
            // console.log(props.NowSoonFilms);
            // console.log(props.apiFilmsDayTime);
            // console.log(props.CommentFilms);
        }
    }
    const SentToBuyTicket1Films = (GraphicUrl, Title) => {
        var lsSentToBuyTicket1Films = {
            "GraphicUrl": GraphicUrl,
            "Title": Title
        }
        props.SentTicket1Films(lsSentToBuyTicket1Films)
    }
    return (
        <div className='allSoon'>
            <h1 className='film_title'>Phim đang chiếu</h1>
            {
                lsNowSoonFilms.now &&
                <div className='FilmsSoon'>
                    {/* {console.log(lsNowSoonFilms.soon)} */}
                    {
                        lsNowSoonFilms.now.map((n, i) => {
                            return (
                                <div className='allCard' key={i + 'allCard'} onClick={() => { sentNowFilms(n.ApiFilmId); SentToBuyTicket1Films(n.GraphicUrl, n.Title) }}>
                                    <div className='cardFilm' >
                                        <Link to='/infofilm'>
                                            <img className='imgCard' alt='Error' src={n.GraphicUrl} />
                                        </Link>
                                        <div className='smallCardFilm'>
                                            <h3>{n.Title}</h3>
                                            <p>
                                                Thể loại: {n.ApiGenreName}
                                                <br />
                                                <br />
                                                Khởi chiếu: {n.OpeningDate}
                                            </p>
                                            <Link className='buyTicketCard' to='/infofilm'>
                                                Đặt vé
                                            </Link>
                                        </div>
                                        <div className='padding_film'></div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}
const mapStateToProps = (state, ownProps) => {
    return {
        // AllCinema: state.cinema,
        // CinemaChain: state.cinemaChain,
        // OneCinema: state.oneCinema,
        NowSoonFilms: state.nowSoonFilms,
        apiFilmsDayTime: state.apiFilmsDayTime,
        CommentFilms: state.comment
    };
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        GetNowSoonFilms: (ApiFilmId) => {
            dispatch({ type: "DataSentNowSoonFilms", payload: { ApiFilmId: ApiFilmId } })
        },
        GetApiFilmIdFilms: (ApiFilmId) => {
            dispatch({ type: "DataSentApiFilmIdFilms", payload: { ApiFilmId: ApiFilmId } })
        },
        GetApiIdFilmsComment: (ApiFilmId) => {
            dispatch({ type: "DataSentApiIdFilmsComment", payload: { ApiFilmId: ApiFilmId } })
        },
        SentTicket1Films: (lsSentToBuyTicket1Films) => {
            dispatch({ type: "DataBuyTicket1Films", payload: lsSentToBuyTicket1Films })
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Now);