//State Global
const SentToBuyTicket1FilmsState = {
    lsSentToBuyTicket1Films: null,
}
//Mặc định trả về phương thức quản lý State
const rdc = (state = SentToBuyTicket1FilmsState, { type, payload }) => {
    //Switch theo Action truyền vào
    switch (type) {
        //Action Login
        case "CaseSentToBuyTicket1Films":
            return {
                ...state,
                lsSentToBuyTicket1Films: payload
            }
        

        default:
            return state
    }
}
export default rdc;