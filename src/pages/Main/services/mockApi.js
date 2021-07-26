const mockGroupData = [
    {
        id: 1,
        groupName: 'Initial Group',
        lastMessage: {
            userName: 'some user',
            message: 'last message',
            date: '2021-07-17',
        },
    },
    {
        id: 2,
        groupName: 'Second Group',
        lastMessage: {
            userName: 'some user',
            message: 'other last message',
            date: '2021-07-17',
        },
    },
    {
        id: 3,
        groupName: 'Third Group',
        lastMessage: {
            userName: 'some user',
            message: 'last message',
            date: '2021-07-17',
        },
    },
];

const mockMessageData = [
    {
        groupId: 1,
        messages: [
            {
                userName: 'user1',
                message: 'first initial message',
                date: '2021-07-17',
            },
            {
                userName: 'user2',
                message: 'second initial message',
                date: '2021-07-18',
            },
            {
                userName: 'user3',
                message: 'third initial message',
                date: '2021-07-19',
            },
        ],
    },
    {
        groupId: 2,
        messages: [
            {
                userName: 'sencond group user',
                message: 'message',
                date: '2021-07-17',
            },
            {
                userName: 'user2',
                message: 'second initial message',
                date: '2021-07-18',
            },
            {
                userName: 'user3',
                message: 'third initial message',
                date: '2021-07-19',
            },
        ],
    },
    {
        groupId: 3,
        messages: [
            {
                userName: 'bot',
                message: 'this group was just created',
                date: '2021-07-20',
            },
        ],
    },
];

export { mockGroupData, mockMessageData };
