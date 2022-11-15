//State Global
const LoginState = {
    login: false
}
//Mặc định trả về phương thức quản lý State
const rdc = (state = LoginState, { type }) => {
    //Switch theo Action truyền vào
    switch (type) {
        //Action Login
        case "Login":
            return { login: true }
        //Action Logout
        case "LogOut":
            return { login: false }
        default:
            return state
    }
}
export default rdc;