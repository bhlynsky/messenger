const nasaActions = {};

nasaActions.actionType = {
    LOAD_SUCCESS: '[NASA]Success',
    LOAD_ERROR: '[NASA]Load Error',
    LOAD: '[NASA]Load',
};
//load data
nasaActions.loadData = () => ({
    type: nasaActions.actionType.LOAD,
});
// load data success
nasaActions.setData = (data) => ({
    type: nasaActions.actionType.LOAD_SUCCESS,
    data,
});

//load data failed
nasaActions.loadError = (error) => ({
    type: nasaActions.actionType.LOAD_ERROR,
    error,
});

export default nasaActions;
