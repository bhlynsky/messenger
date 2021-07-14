import actionType from './nasa-constants';

const fetchUrl = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5';

const getData = () => (dispatch) =>
    fetch(fetchUrl)
        .then((res) => res.json())
        .then((res) => {
            dispatch(setData(res));
        })
        .catch((err) => {
            dispatch(loadError(err.message));
        });

const setData = (data) => ({ type: actionType.LOAD, data });

const loadError = (error) => ({
    type: actionType.ERORR,
    payload: {
        error,
    },
});
export default getData;
