export const updateValuesOnSendMessage = (messages, groups, newMessage, groupId) => {
    // стоит разделить на 2 функции для групЫ и для сообщений отдельно?
    //update message list
    const newMessages = JSON.parse(JSON.stringify(messages));
    const indexMsg = messages.findIndex((msg) => msg.groupId === groupId);
    newMessages[indexMsg].messages.push(newMessage);

    localStorage.setItem('messageData', JSON.stringify(newMessages)); // update messages

    //update group
    const newGroups = JSON.parse(JSON.stringify(groups));
    const indexGroup = newGroups.findIndex((gr) => gr.id === groupId);
    newGroups[indexGroup].lastMessage = newMessage; // update last message

    localStorage.setItem('groupData', JSON.stringify(newGroups));
    return { newMessages, newGroups };
};
