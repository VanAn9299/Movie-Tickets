import CinemaRuducer from '../Reducer/CinemaReducer'
import CinemaChainRuducer from '../Reducer/CinemaChainRuducer'
import OneCinemaRuducer from '../Reducer/OneCinemaRuducer'
import NowSoonFilmsReducer from '../Reducer/NowSoonFilmsReducer'
import ApiFilmsDayTimeRuducer from '../Reducer/ApiFilmsDayTimeRuducer'
import CommentRuducer from '../Reducer/CommentRuducer'

import SuccessReducer from '../Reducer/SuccessReducer'
import UserInfoReducer from '../Reducer/UserInfoReducer'

import LoginFuncReducer from '../Reducer/LoginFuncReducer'
import LoginEmailReducer from '../Reducer/LoginEmailReducer'
import RegisterFuncReducer from '../Reducer/RegisterFuncReducer'
import TicketReducer from '../Reducer/TicketReducer'
import SeatReducer from '../Reducer/SeatReducer'
import CheckTicketReducer from '../Reducer/CheckTicketReducer'
import ArraySeatReducer from '../Reducer/ArraySeatReducer'
import SentToBuyTicketRuducer from '../Reducer/SentToBuyTicketRuducer'
import SentToBuyTicketRuducer2 from '../Reducer/SentToBuyTicketRuducer2'
import SentToBuyTicket1FilmsRuducer from '../Reducer/SentToBuyTicket1FilmsRuducer'
import SentToBuyTicket2FilmsRuducer from '../Reducer/SentToBuyTicket2FilmsRuducer'
import MiddleReSa from '../Saga/MiddleReSa'
import createSagaMiddleware from 'redux-saga'
import { applyMiddleware } from 'redux'
var redux = require("redux")
const allReducer = redux.combineReducers({
    cinema: CinemaRuducer,
    cinemaChain: CinemaChainRuducer,
    oneCinema: OneCinemaRuducer,
    nowSoonFilms: NowSoonFilmsReducer,
    apiFilmsDayTime: ApiFilmsDayTimeRuducer,
    comment: CommentRuducer,
    SentToBuyTicket: SentToBuyTicketRuducer,
    SentToBuyTicket2: SentToBuyTicketRuducer2,
    SentToBuyTicket1Films: SentToBuyTicket1FilmsRuducer,
    SentToBuyTicket2Films: SentToBuyTicket2FilmsRuducer,


    loginEmailRdc: LoginEmailReducer,
    SuccessRdc:SuccessReducer,
    UserRdc:UserInfoReducer,
    loginRdc: LoginFuncReducer,
    RegisterRdc: RegisterFuncReducer,
    TkRdc: TicketReducer,
    StRdc: SeatReducer,
    CTickRdc: CheckTicketReducer,
    ArrSeatRdc: ArraySeatReducer,
})
const sagaMiddleware = createSagaMiddleware()
const store = redux.createStore(
    allReducer,
    applyMiddleware(sagaMiddleware)
)
export default store;
sagaMiddleware.run(MiddleReSa) 