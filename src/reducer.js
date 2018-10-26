const INITIAL_STATE = {
    data: [],
    disFetching: false
}

export const reducer = (state = INITIAL_STATE, action) => {
    if (action.type === 'LOAD_DATA_REQUEST') {
        return {
            isFetching: true,
            data: []
        }
    } else if (action.type === 'LOAD_DATA_SUCCESS') {
        return {
            isFetching: false,
            data: action.data
        }
    }
    return state
}