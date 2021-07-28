export const updateValuesOnSendMessage = (messages, groups, newMessage, groupId) => {
    const newMessages = JSON.parse(JSON.stringify(messages));
    const newGroups = JSON.parse(JSON.stringify(groups));

    const indexMsg = newMessages.findIndex((msg) => msg.groupId === groupId);
    const indexGroup = newGroups.findIndex((gr) => gr.id === groupId);

    newMessages[indexMsg].messages.push(newMessage);
    newGroups[indexGroup].lastMessage = newMessage; // update last message

    localStorage.setItem('messageData', JSON.stringify(newMessages)); // update messages
    localStorage.setItem('groupData', JSON.stringify(newGroups)); //update group

    return { newMessages, newGroups };
};
