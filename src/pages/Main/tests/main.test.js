import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { Message } from '../components/Messenger/components/Message';
import MainPage from '../MainPage';
import { renderWithRedux } from '../../../services/root-service';

let container = null;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    cleanup();
});

function mockRouter() {
    const original = jest.requireActual('react-router-dom');

    return {
        ...original,
        useLocation: jest.fn().mockReturnValue({
            pathname: '/another-route',
            search: '',
            hash: '',
            state: null,
            key: '5nvxpbdafa',
        }),
    };
}

jest.mock('react-router-dom', () => mockRouter());

describe('render test', () => {
    it('should render "Message" component', () => {
        const mockData = {
            messageData: {
                userName: 'user',
                message: 'message',
                date: new Date().toDateString(),
            },
        };

        render(<Message messageData={mockData.messageData} />, container);

        const element = screen.getByText(mockData.messageData.message);

        expect(element).toBeInTheDocument();
    });
});

describe('functionality test', () => {
    it('send message', () => {
        window.HTMLElement.prototype.scrollIntoView = function () {}; // jest doesnt implement scrollIntoView
        const { getByTestId } = renderWithRedux(<MainPage />);
        const sendButton = getByTestId('send-message');
        const inputNode = getByTestId('message-input').querySelector('input');

        //enter message into input
        const message = 'WADDw23424WAdweqw';

        fireEvent.change(inputNode, { target: { value: message } });
        expect(inputNode.value).toBe(message);

        //click button and send message
        fireEvent.click(sendButton);
        expect(inputNode.value).toBe('');

        //check state changed with new message
        const newMessage = screen.getByText(message);

        expect(newMessage).toBeInTheDocument();
    });
});

describe('request test', () => {
    it('test request successfull', () => {});
});
