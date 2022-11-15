//State Global
const RegisterRdc = {
    check: null
}
//Mặc định trả về phương thức quản lý State
const rdc = (state = RegisterRdc, { type, payload }) => {
    //Switch theo Action truyền vào
    switch (type) {
        //Action Login
        case "GetRegisterFunc":
            return { check: payload }
        default:
            return state
    }
}
export default rdc;