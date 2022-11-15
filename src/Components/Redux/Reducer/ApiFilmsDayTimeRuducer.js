//State Global
const ApiFilmIdState = {
    lsApiFilmId: null
}
//Mặc định trả về phương thức quản lý State
const rdc = (state = ApiFilmIdState, { type, payload }) => {
    //Switch theo Action truyền vào
    switch (type) {
        //Action Login
        case "ApiFilmIdFilms":
            return {
                ...state,
                lsApiFilmId: payload
                
            }
       


        default:
            return state
    }
}
export default rdc;