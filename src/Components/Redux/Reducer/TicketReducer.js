//State Global
const TicketRdc = {
    num: 0
}
//Mặc định trả về phương thức quản lý State
const rdc = (state = TicketRdc, { type, payload }) => {
    //Switch theo Action truyền vào
    switch (type) {
        //Action Login
        case "TicketFunc":
            return { num: payload }
        default:
            return state
    }
}
export default rdc;