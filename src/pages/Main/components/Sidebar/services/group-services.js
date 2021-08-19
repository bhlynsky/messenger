export const searchGroup = (target, groups) => {
    if (target !== '') {
        const filteredGroups = groups.filter((group) => {
            return group.groupName.toLowerCase().startsWith(target.toLowerCase());
        });

        return filteredGroups;
    } else {
        return groups;
    }
};
