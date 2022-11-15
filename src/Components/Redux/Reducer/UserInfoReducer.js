//State Global
const UserRdc = {
    lsInfo: null,
}
//Mặc định trả về phương thức quản lý State
const rdc = (state = UserRdc, { type, payload }) => {
    //Switch theo Action truyền vào
    switch (type) {
        //Action Login
        case "GetUserFunc":
            return { lsInfo: payload }
        default:
            return state
    }
}
export default rdc;