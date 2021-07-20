import React from 'react';
import { Divider, Drawer, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { connect } from 'react-redux';
import { Message } from './Message';

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
                Object.keys(groups).map((item) => (
                    <div className={classes.lastMessages} key={groups[item].groupName}>
                        <Typography variant="subtitle1">{groups[item].groupName}</Typography>
                        <Message
                            messageData={groups[item].messages[groups[item].messages.length - 1]}
                        />
                    </div>
                ))}
        </Drawer>
    );
};
const mapDispatchToProps = (state) => ({
    groups: state.MAIN,
});
export default connect(mapDispatchToProps)(Sidebar);
