import React from 'react';
import { Divider, Drawer, Typography } from '@material-ui/core';
import { useStyles } from '../styles';
import { connect } from 'react-redux';
import GroupPreview from './GroupPreview';

const Sidebar = (props) => {
    const classes = useStyles();
    const { groups } = props;

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
                    Current user
                </Typography>
            </div>
            <Divider />
            {groups &&
                groups.map((item) => (
                    <div className={classes.lastMessages} key={item.groupName}>
                        <Divider variant="middle" />
                        <GroupPreview
                            groupName={item.groupName}
                            messageData={item.messages[item.messages.length - 1]}
                        />
                    </div>
                ))}
        </Drawer>
    );
};
const mapStateToProps = (state) => ({
    groups: state.MAIN.groups,
});

export default connect(mapStateToProps)(Sidebar);
