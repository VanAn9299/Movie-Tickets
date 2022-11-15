import React from 'react'
// import { useEffect } from 'react'
import { useState } from 'react'
import './Comment.css'
import { connect } from "react-redux/es/exports";
// import { Link } from "react-router-dom";


function Comment(props) {
    const [count,SetLimit] =useState(4)
    const [lsLaiGuiIndex, setLaiGuiIndexTiep] = useState(0)

    return (
    
    <div className='AllComment'>
            {
                props.CommentFilms.lsComment[0].Comment &&
                <div className='AllCommentDiv1'>
                        {
                            props.CommentFilms.lsComment[0].Comment.map((n, i) => {
                                if(count>i)
                                {return (
                                    <h3 key={i} onClick={() => setLaiGuiIndexTiep(i)} style={{borderBottom: lsLaiGuiIndex===i ? '3px solid #54ab35' : '0px',color: lsLaiGuiIndex===i ? '#54ab35' : 'white'}}>{n.TagName}</h3>
                                )}
                            })
                        }
                </div>
            }
            {
                props.CommentFilms.lsComment[0].Comment[lsLaiGuiIndex] &&
                <div className='AllCommentDiv2'>
                    {
                        props.CommentFilms.lsComment[0].Comment[lsLaiGuiIndex].Items.map((n, i) => {
                            return (
                                <div className='comment_one' key={i}>
                                    <div >
                                        <img alt='error' src={n.Avatar} />
                                        <h1>{n.ShowName}</h1>
                                        <h3>{n.CreatedAt}</h3>
                                    </div>
                                    <p>{n.Comment}</p>
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
        // OneCinema: state.oneCinema,A
        //   NowSoonFilms: state.nowSoonFilms,
        //   apiFilmsDayTime: state.apiFilmsDayTime,
        CommentFilms: state.comment
    };
};
// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//       GetNowSoonFilms: (ApiFilmId) => {
//           dispatch({ type: "DataSentNowSoonFilms", payload: { ApiFilmId: ApiFilmId } })
//       },
//       GetApiFilmIdFilms: (ApiFilmId) => {
//           dispatch({ type: "DataSentApiFilmIdFilms", payload: { ApiFilmId: ApiFilmId } })
//       },
//       // GetApiIdFilmsComment: (ApiFilmId) => {
//       //     dispatch({ type: "DataSentApiIdFilmsComment", payload: { ApiFilmId: ApiFilmId } })
//       // },

//   };
// };
export default connect(mapStateToProps)(Comment);