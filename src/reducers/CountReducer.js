const CountReducer = (state = 0, action = {}) => {
    switch (action.type) {
        case 'ADD_ONE':
            // 状态深拷贝
            return state+action.payload;
        default:
            return state;
    }
}
export default CountReducer;