//State Global
const LoginRdc = {
    check: null,
}
//Mặc định trả về phương thức quản lý State
const rdc = (state = LoginRdc, { type, payload }) => {
    //Switch theo Action truyền vào
    switch (type) {
        //Action Login
        case "GetLoginFunc":
            return { check: payload }
        default:
            return state
    }
}
export default rdc;