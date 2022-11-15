//State Global
const LoginEmRdc = {
    email: null
}
//Mặc định trả về phương thức quản lý State
const rdc = (state = LoginEmRdc, { type, payload }) => {
    //Switch theo Action truyền vào
    switch (type) {
        //Action Login
        case "GetEmailLoginFunc":
            return { email: payload }
        default:
            return state
    }
}
export default rdc;