//State Global
const OneCinemaState = {
    lsOneCinema: null
}
//Mặc định trả về phương thức quản lý State
const rdc = (state = OneCinemaState, { type, payload }) => {
    //Switch theo Action truyền vào
    switch (type) {
        //Action Login
        case "oneCinema":
            return {
                ...state,
                lsOneCinema: payload
                
            }
       


        default:
            return state
    }
}
export default rdc;