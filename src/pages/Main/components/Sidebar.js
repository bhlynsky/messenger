import React from 'react';
import {Divider, Drawer, Typography} from '@material-ui/core';
import {useStyles} from '../styles';
import {connect} from 'react-redux';
import GroupPreview from './GroupPreview';

const Sidebar = (props) => {
    const classes = useStyles();
    const {groups, currentGroupId} = props;
    // FIXME move to constants
    return (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={true}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.containerHeader}>
                <Typography variant="h2" align="center">
                    Current Group
                </Typography>
            </div>
            <Divider/>
            {
                // FIXME groups always from initial state [], you can just check groups.length ? cond1 : cond2
                // FIXME please use id for key instead of groupName
                groups && groups.length > 0 ? (
                    groups.map((item) => (
                        <div
                            className={
                                currentGroupId === item.id
                                    ? classes.groupPreviewActive
                                    : classes.groupPreview
                            }
                            key={item.groupName}
                        >
                            <Divider variant="middle"/>
                            <GroupPreview
                                groupId={item.id}
                                groupName={item.groupName}
                                messageData={item.messages[item.messages.length - 1]}
                            />
                        </div>
                    ))
                ) : (
                    <Typography variant="subtitle1">No Groups!</Typography>
                )}
        </Drawer>
    );
};
const mapStateToProps = (state) => ({
    groups: state.Main.groups,
    currentGroupId: state.Main.currentGroupId,
});

export default connect(mapStateToProps)(Sidebar);
