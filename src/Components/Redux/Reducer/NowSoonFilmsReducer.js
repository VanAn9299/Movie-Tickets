//State Global
const NowSoonFilmsState = {
    lsNowSoon: null
}
//Mặc định trả về phương thức quản lý State
const rdc = (state = NowSoonFilmsState, { type, payload }) => {
    //Switch theo Action truyền vào
    switch (type) {
        //Action Login
        case "NowSoonFilms":
            return {
                ...state,
                lsNowSoon: payload
                
            }
       


        default:
            return state
    }
}
export default rdc;