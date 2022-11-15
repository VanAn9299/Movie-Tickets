//State Global
const SentToBuyTicket2FilmsState = {
    lsSentToBuyTicket2Films: null,
}
//Mặc định trả về phương thức quản lý State
const rdc = (state = SentToBuyTicket2FilmsState, { type, payload }) => {
    //Switch theo Action truyền vào
    switch (type) {
        //Action Login
        case "CaseSentToBuyTicket2Films":
            return {
                ...state,
                lsSentToBuyTicket2Films: payload
            }
        

        default:
            return state
    }
}
export default rdc;