
const initState = {
    users: [
        { id: 1, name: 'Trung' },
        { id: 2, name: 'Nguyen' }
    ]
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_USER':
            console.log('>>> Run into delete user redux: ', action);
            return state;
        default:
            return state;
    }


    return state;
}

export default rootReducer;