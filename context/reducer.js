export const actionTypes = {
    SET_USER: 'SET_USER',
    SET_EVENTS: 'SET_EVENTS',
    ADD_EVENT: 'ADD_EVENT',
    ADD_CONTESTANT: 'ADD_CONTESTANT',
    SET_CONTESTANTS: 'SET_CONTESTANTS',
    SET_ADMINS: 'SET_ADMINS',
    ADD_ADMIN: 'ADD_ADMIN',
}

const reducer = (state, action) => {
    // console.log(action)
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user,
            };
        case actionTypes.SET_EVENTS:
            return {
                ...state,
                events: action.events,
            };
        case actionTypes.ADD_EVENT:
            return {
                ...state,
                events: [...state.events, action.event],
            };
        case actionTypes.ADD_CONTESTANT:
            return {
                ...state,
                contestants: [...state.contestants, action.contestant],
            };
        case actionTypes.SET_CONTESTANTS:
            return {
                ...state,
                contestants: action.contestants,
            };
        case actionTypes.SET_ADMINS:
            return {
                ...state,
                admins: action.admins,
            };
        case actionTypes.ADD_ADMIN:
            return {
                ...state,
                admins: [...state.admins, action.admin],
            };
        default:
            return state;
    }
}

export default reducer;