import React from 'react';
import { Divider, Drawer, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
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
            {groups
                ? Object.keys(groups).map((item) => (
                      <div className={classes.lastMessages}>
                          <Typography variant="subtitle1">{item.groupName}</Typography>
                          <Message messageData={item} />
                      </div>
                  ))
                : null}
        </Drawer>
    );
};
const mapDispatchToProps = (state) => ({
    groups: state,
});
export default connect(mapDispatchToProps)(Sidebar);
