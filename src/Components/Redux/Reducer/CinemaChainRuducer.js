//State Global
const CinemaChainState = {
    lsCinemaChain: null
}
//Mặc định trả về phương thức quản lý State
const rdc = (state = CinemaChainState, { type, payload }) => {
    //Switch theo Action truyền vào
    switch (type) {
        //Action Login
        
        case "cinemaChain":
            return { 
                ...state,lsCinemaChain:{
                    ...state.lsCinemaChain,
                    CinemaChain: payload.Items.map(n=>{
                        return (
                            {
                                idCinema: n.Id,
                                ApiCinemaId: n.ApiCinemaId,
                                nameCinema: n.Name,
                                LogoCinema: n.Logo,
                                addressCinema: n.Address,
                                Cineplex: n.Cineplex
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