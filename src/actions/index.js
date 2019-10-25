
const listRequested = () => {
    return {
        type: 'FETCH_LIST_REQUEST'
    }
};

const listLoaded = (newList) => {
    console.log(action.payload);
    return {
        type: 'FETCH_LIST_SUCCESS',
        payload: newList
    };
};

const fetchItems = (listStoreService, dispatch) => () => {
    dispatch(listRequested());
    listStoreService.getList()
        .then((data) => dispatch(listLoaded(data)));
};

export {
    fetchItems
}