//State Global
const SentToBuyTicket2State = {
    lsSentToBuyTicket2: null
}
//Mặc định trả về phương thức quản lý State
const rdc = (state = SentToBuyTicket2State, { type, payload }) => {
    //Switch theo Action truyền vào
    switch (type) {
        
        case "CaseSentToBuyTicket2":
            return {
                lsSentToBuyTicket2: payload
            }
       


        default:
            return state
    }
}
export default rdc;