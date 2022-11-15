//State Global
const SeatRdc = {
    bolean: false
}
//Mặc định trả về phương thức quản lý State
const rdc = (state = SeatRdc, { type, payload }) => {
    //Switch theo Action truyền vào
    switch (type) {
        //Action Login
        case "SeatFunc":
            return { bolean: payload }
        default:
            return state
    }
}
export default rdc;