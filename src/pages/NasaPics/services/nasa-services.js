import { loadData, loadError, setData } from './nasa-actions';

const fetchUrl = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5';

const getData = () => (dispatch) => {
    dispatch(loadData());
    fetch(fetchUrl)
        .then((res) => res.json())
        .then((res) => {
            if (res.code && (res.code > 300 || res < 200)) throw new Error('something wrong');
            else {
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
