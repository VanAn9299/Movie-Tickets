//State Global
const CommentState = {
    lsComment: null
}
//Mặc định trả về phương thức quản lý State
const rdc = (state = CommentState, { type, payload }) => {
    //Switch theo Action truyền vào
    switch (type) {
        //Action Login
        case "ApiIdFilmsComment":
            return {
                ...state,
                lsComment: payload
                
            }
       


        default:
            return state
    }
}
export default rdc;