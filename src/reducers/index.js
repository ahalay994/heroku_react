const initialState = {
    list: [],
    menuItemsLink: ['new', 'edit', 'create', 'archive'],
    loading: true
};

const initList = (state, action) => {
    return {
        ...state,
        list: action.payload,
    }
};

const reducerFunc = {
    'FETCH_LIST_REQUEST': (state) => ({
        ...state,
        list: [],
        loading: true,
    }),
    'FETCH_LIST_SUCCESS': initList
};

const reducer = (state = initialState, action) => {
    if (Object.prototype.hasOwnProperty.call(reducerFunc, action.type)) {
        return reducerFunc[action.type](state, action);
    }
    return state;
};

export default reducer;
