//State Global
const CinemaState = {
    lsCinema: null
}
//Mặc định trả về phương thức quản lý State
const rdc = (state = CinemaState, { type, payload }) => {
    //Switch theo Action truyền vào
    switch (type) {
        //Action Login
        case "cinema":
            return { 
                ...state,lsCinema:{
                    ...state.lsCinema,
                    AllCinema: payload.map(n=>{
                        return (
                            {
                                idAllCinema: n.Id,
                                LogoCinema: n.Logo,
                                nameAllCinema: n.Name,
                            }
                            )
                    },
                    )
                }
            }
        
        
        default:
            return state
    }
}
export default rdc;