//State Global
const arraySeat = {
    arrSeat: null
}
//Mặc định trả về phương thức quản lý State
const rdc = (state = arraySeat, { type,payload }) => {
    //Switch theo Action truyền vào
    switch (type) {
        //Action Login
        case "ArraySeatFunc":
            return { arrSeat: payload }
        default:
            return state
    }
}
export default rdc;