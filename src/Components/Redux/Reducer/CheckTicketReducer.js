//State Global
const CheckTicRdc = {
    bolean: false
}
//Mặc định trả về phương thức quản lý State
const rdc = (state = CheckTicRdc, { type, payload }) => {
    //Switch theo Action truyền vào
    switch (type) {
        //Action Login
        case "CheckTicketFunc":
            return { bolean: payload }
        default:
            return state
    }
}
export default rdc;