//State Global
const SentToBuyTicketState = {
    lsSentToBuyTicket1: null,
}
//Mặc định trả về phương thức quản lý State
const rdc = (state = SentToBuyTicketState, { type, payload }) => {
    //Switch theo Action truyền vào
    switch (type) {
        //Action Login
        case "CaseSentToBuyTicket1":
            return {
                ...state,
                lsSentToBuyTicket1: payload
            }
        

        default:
            return state
    }
}
export default rdc;