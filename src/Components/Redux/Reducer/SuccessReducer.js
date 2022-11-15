//State Global
const SuccessRdc = {
    check: null,
}
//Mặc định trả về phương thức quản lý State
const rdc = (state = SuccessRdc, { type, payload }) => {
    //Switch theo Action truyền vào
    switch (type) {
        //Action Login
        case "GetSuccessFunc":
            return { check: payload }
        default:
            return state
    }
}
export default rdc;