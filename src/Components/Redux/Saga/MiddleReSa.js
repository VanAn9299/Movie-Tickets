import { call, put, takeEvery } from 'redux-saga/effects';

const APIAllCinema = "http://192.168.56.1:3003"


async function GetDataAllCinema() {
    var res = await fetch(APIAllCinema + '/Cinema')
    var DataAllCinema = await res.json()
    // console.log(DataAllCinema);
    return DataAllCinema
}
function* GetDataAllCinemaSao({ payload }) {
    var lsCinema = yield call(GetDataAllCinema, payload)
    yield put({ type: "cinema", payload: lsCinema })
}
async function GetDataCinema(idAllCinema) {
    // console.log(idAllCinema);
    if (idAllCinema) {
        var res = await fetch(APIAllCinema + `/cinema/branch?cineplex=${idAllCinema}&lastIndex=0&count=10`)
        var DataCinemaChain = await res.json()
        // console.log(DataCinemaChain);
        return DataCinemaChain
    }
}
function* SentDataCinema({ type, payload }) {
    // console.log(payload);
    var lsCinemaChain = yield call(GetDataCinema, payload.idAllCinema)
    yield put({ type: "cinemaChain", payload: lsCinemaChain })
}
async function GetDataOneCinema(index, ApiCinemaId, Cineplex) {
    // console.log(ApiCinemaId,Cineplex);
    var res = await fetch(APIAllCinema + `/cinema/branch/schedule?apiCinemaId=${ApiCinemaId}&cineplex=${Cineplex}&date=`)
    var DataOneCinema = await res.json()
    // console.log(DataOneCinema);

    return DataOneCinema

}
function* SentDataOneCinema({ type, payload }) {
    // console.log(payload);
    var DataOneCinema = yield call(GetDataOneCinema, payload.index, payload.ApiCinemaId, payload.Cineplex)
    yield put({ type: "oneCinema", payload: DataOneCinema })
}
async function GetDayCinema(sentDay, ApiCinemaId, Cineplex) {
    // console.log(sentDay, ApiCinemaId, Cineplex);
    if (sentDay.length >= 3) {
        var res = await fetch(APIAllCinema + `/cinema/branch/schedule?apiCinemaId=${ApiCinemaId}&cineplex=${Cineplex}&date=${sentDay}`)
        var DataOneCinema = await res.json()
        // console.log(DataOneCinema);
        return DataOneCinema
    }
}
function* SentDayCinema({ type, payload }) {
    // console.log(payload);
    var lsOneCinema = yield call(GetDayCinema, payload.sentDay, payload.ApiCinemaId, payload.Cineplex)
    // console.log(lsOneCinema);
    yield put({ type: "oneCinema", payload: lsOneCinema })
}
async function GetNowSoonFilms(ApiFilmId) {
    var res = await fetch(APIAllCinema + `/movie/schedule?apiFilmId=${ApiFilmId}&date=`)
    var DataNowSoonFilms = await res.json()
    // console.log(DataNowSoonFilms);
    return DataNowSoonFilms
}
function* SentNowSoonFilms({ type, payload }) {
    // console.log(payload);
    var lsNowSoon = yield call(GetNowSoonFilms, payload.ApiFilmId)
    // console.log(lsOneCinema);
    yield put({ type: "NowSoonFilms", payload: lsNowSoon })
}
async function GetApiFilmId(ApiFilmId) {
    console.log(ApiFilmId);
    var res = await fetch(APIAllCinema + `/movie/detail?apiFilmId=${ApiFilmId}`)
    var DataApiFilmId = await res.json()
    console.log(DataApiFilmId);
    return DataApiFilmId
}
function* SentApiFilmIdFilms({ type, payload }) {
    // console.log(payload);
    var lsApiFilmId = yield call(GetApiFilmId, payload.ApiFilmId)
    // console.log(lsOneCinema);
    yield put({ type: "ApiFilmIdFilms", payload: lsApiFilmId })
}
async function GetApiIdFilmsComment(ApiFilmId) {
    var res = await fetch(APIAllCinema + `/movie/comment?apiFilmId=${ApiFilmId}`)
    var DataComment = await res.json()
    // console.log(DataComment);
    return DataComment
}
function* SentApiIdFilmsComment({ type, payload }) {
    // console.log(payload);
    var lsComment = yield call(GetApiIdFilmsComment, payload.ApiFilmId)
    // console.log(lsOneCinema);
    yield put({ type: "ApiIdFilmsComment", payload: lsComment })
}
async function GetDataDayTime(dayTime, ApiFilmId) {
    console.log(dayTime, ApiFilmId);
    var res = await fetch(APIAllCinema + `/movie/schedule?apiFilmId=${ApiFilmId}&date=${dayTime}`)
    var DataNowSoonFilms = await res.json()
    console.log(DataNowSoonFilms);
    return DataNowSoonFilms
}
function* SentDataDayTime({ type, payload }) {
    // console.log(payload);
    var lsNowSoon = yield call(GetDataDayTime, payload.dayTime, payload.ApiFilmId)
    // console.log(lsNowSoon);

    yield put({ type: "NowSoonFilms", payload: lsNowSoon })
}



async function LoginFunc(inp) {
    var res = await fetch(APIAllCinema + "/user/login",
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({ 'email': inp.email, 'password': inp.pass })
        })
    console.log(res.status);
    return res.status;

}
function* loginFunc({ payload }) {
    var check = yield call(LoginFunc, payload);
    yield put({ type: "GetLoginFunc", payload: check });

}
function* loginEmailFunc({ payload }) {
    yield put({ type: "GetEmailLoginFunc", payload: payload });
}


async function RegisterFunc(inp) {
    var res = await fetch(APIAllCinema + "/user/register",
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({ 'email': inp.email, 'password': inp.pass })
        })
    console.log(res.status);
    return res.status;

}

function* registerFunc({ payload }) {
    var check = yield call(RegisterFunc, payload.data);
    yield put({ type: "GetRegisterFunc", payload: check });
    check === 200 ? payload.act(false) : payload.act(true);

}

function* ticketFunc({ payload }) {
    yield put({ type: "TicketFunc", payload: payload });

}
function* seatFunc({ payload }) {
    yield put({ type: "SeatFunc", payload: payload });

}

function* checkTicketFunc({ payload }) {
    yield put({ type: "CheckTicketFunc", payload: payload });

}
function* arraySeatFunc({ payload }) {
    yield put({ type: "ArraySeatFunc", payload: payload });

}
function* SentDataToBuyTicket1({ type, payload }) {
    console.log(payload);
    // var lsSentToBuyTicket1 = yield call(DataToBuyTicket1, payload.LogoOneCinema, payload.NameCinemaChain)
    yield put({ type: "CaseSentToBuyTicket1", payload: payload })
    // console.log(lsSentToBuyTicket1);
}
function* SentDataToBuyTicket2({ type, payload }) {
    console.log(payload);
    // var lsSentToBuyTicket2 = yield call(DataToBuyTicket2, payload.TimeInCinema, payload.TitleInCinema, payload.OpeningDate,
    //  payload.GraphicUrl, payload.ApiCinemaId, payload.Cineplex, payload.ApiFilmId)
    yield put({ type: "CaseSentToBuyTicket2", payload: payload })
}
function* SentDataToBuyTicket1Films({ type, payload }) {
    console.log(payload);
    yield put({ type: "CaseSentToBuyTicket1Films", payload: payload })
}
function* SentDataToBuyTicket2Films({ type, payload }) {
    console.log(payload);

    yield put({ type: "CaseSentToBuyTicket2Films", payload: payload })
}



async function SuccessFunc(inp) {
    var res = await fetch(APIAllCinema + "/user/payment",
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({

                "email": inp.email,
                "card": {

                    "cardNum": inp.cardNum,
                    "CardName": inp.cardName,
                    "exDate": inp.exDate,
                },
                "ticket": [{
                    "apiCinemaId": inp.lsManage.IdCinema,
                    "apiFilmId": inp.lsManage.Idfilm,
                    "seatCode": inp.seatCode.toString(),
                    "date": inp.lsManage.timeShow,
                    "time": inp.lsManage.TimeFilm,
                    'address': inp.lsManage.addressCinema,
                    "bannerFilm": inp.lsManage.bannerFilm,
                    'nameCinema': inp.lsManage.nameCinema,
                    "nameFilm": inp.lsManage.nameFilm
                }]

            })
        })
    
    console.log(res.status);
    return res.status;

}

function* successFunc({ payload }) {
    var check = yield call(SuccessFunc, payload);
    yield put({ type: "GetSuccessFunc", payload: check });

}
async function UserInfoFunc(email) {
    var res = await fetch(APIAllCinema + `/user?email=${email}`)
    var data = await res.json()
    console.log(data);
    return data
}
function* userInfoFunc({ payload }) {
    var lsUser = yield call(UserInfoFunc, payload)
    yield put({ type: "GetUserFunc", payload: lsUser })
}



function* mySaga() {



    yield takeEvery("SuccessSaga", successFunc)
    yield takeEvery("UserInfoSaga", userInfoFunc)


    yield takeEvery("LoginSaga", loginFunc)
    yield takeEvery("LoginEmailSaga", loginEmailFunc)
    yield takeEvery("RegisterSaga", registerFunc)
    yield takeEvery("TicketSaga", ticketFunc)
    yield takeEvery("SeatSaga", seatFunc)
    yield takeEvery("CheckTicketSaga", checkTicketFunc)
    yield takeEvery("ArraySeatSaga", arraySeatFunc)





    yield takeEvery("DataAllCinema", GetDataAllCinemaSao)
    yield takeEvery("DataCinemaChain", SentDataCinema)
    yield takeEvery("DataOneCinemaApi", SentDataOneCinema)
    yield takeEvery("DataDayCinema", SentDayCinema)
    yield takeEvery("DataSentNowSoonFilms", SentNowSoonFilms)
    yield takeEvery("DataSentApiFilmIdFilms", SentApiFilmIdFilms)
    yield takeEvery("DataSentApiIdFilmsComment", SentApiIdFilmsComment)
    yield takeEvery("SentDataDayTime1", SentDataDayTime)
    yield takeEvery("DataBuyTicket1", SentDataToBuyTicket1)
    yield takeEvery("DataBuyTicket2", SentDataToBuyTicket2)
    yield takeEvery("DataBuyTicket1Films", SentDataToBuyTicket1Films)
    yield takeEvery("DataBuyTicket2Films", SentDataToBuyTicket2Films)

}
export default mySaga;
