export const searchGroup = (target, groups) => {
    if (target) {
        return groups.filter((group) => {
            return group.groupName.toLowerCase().includes(target.toLowerCase());
        });
    }
    return groups;
};
