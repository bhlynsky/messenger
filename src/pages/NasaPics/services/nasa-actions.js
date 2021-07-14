import actionType from './nasa-constants';

//load data
const loadData = () => ({
    type: actionType.LOAD,
});
// load data success
const setData = (data) => ({
    type: actionType.SUCCESS,
    data,
});

//load data failed
const loadError = (error) => ({
    type: actionType.ERORR,
    error,
});

export { loadData, setData, loadError };
