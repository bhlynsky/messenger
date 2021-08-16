import { fireEvent, screen } from '@testing-library/react';
import NasaPicsPage from '../../NasaPics/NasaPicsPage';
import { renderWithRedux } from '../../../services/root-service';

function mockRouter() {
    const original = jest.requireActual('react-router-dom');

    return {
        ...original,
        useLocation: jest.fn().mockReturnValue({
            pathname: '/nasa-route',
            search: '',
            hash: '',
            state: null,
            key: 'nasa',
        }),
    };
}

jest.mock('react-router-dom', () => mockRouter());

beforeAll(() => jest.spyOn(window, 'fetch'));

describe('request tests', () => {
    it('request successfull', async () => {
        renderWithRedux(<NasaPicsPage />);

        const responseData = {
            title: 'Data title',
            url: 'imgurl',
            date: '2021',
            explanation: '.....',
        };

        window.fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => ({
                data: responseData,
            }),
        });

        const loadButton = screen.getByRole('button', { name: /Load/i });

        fireEvent.click(loadButton);

        expect(window.fetch).toHaveBeenCalledWith(
            'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5',
        );

        expect(window.fetch).toHaveBeenCalledTimes(1);

        expect(await screen.findByText(responseData.title)).toBeInTheDocument();
    });

    it('request failed', async () => {
        renderWithRedux(<NasaPicsPage />);

        window.fetch.mockImplementationOnce(() => Promise.reject('API is down'));

        const loadButton = screen.getByRole('button', { name: /Load/i });

        fireEvent.click(loadButton);

        expect(window.fetch).toHaveBeenCalledWith(
            'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5',
        );

        expect(window.fetch).toHaveBeenCalledTimes(1);

        /// negative test not working, no error on page,h2 renders but text is not

        expect(await screen.findByTestId('error-message')).toBeInTheDocument();
    });
});
