import actionType from './nasa-constants';

//load data
const loadData = () => ({
    type: actionType.LOAD,
});
// load data success
const setData = (data) => ({
    type: actionType.LOAD_SUCCESS,
    data,
});

//load data failed
const loadError = (error) => ({
    type: actionType.LOAD_ERROR,
    error,
});

export { loadData, setData, loadError };
