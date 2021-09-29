import nasaActions from './nasa-actions';

const getData = () => (dispatch) => {
    const fetchUrl = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5';
    const { loadData, setData, loadError } = nasaActions;

    dispatch(loadData());

    fetch(fetchUrl)
        .then((res) => res.json())
        .then((res) => {
            if (res.code && (res.code > 300 || res.code < 200)) {
                throw new Error(`Error occured. With code ${res.code}`);
            } else {
                dispatch(setData(res));
            }
        })
        .catch((err) => {
            dispatch(loadError(err));
        });
};

const initialState = {
    isLoading: false,
    data: {
        title: '',
        url: '',
        date: '',
        explanation: '',
    },
    error: null,
};

export { getData, initialState };
