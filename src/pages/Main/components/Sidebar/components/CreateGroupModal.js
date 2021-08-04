import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Input, Grid, Button, InputLabel, FormControl, Typography } from '@material-ui/core';
import { useStyles } from '../../../styles';
import { createNewGroup } from '../../../services/main-actions';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
const CreateGroupModal = (props) => {
    const [newGroup, setNewGroup] = useState({ groupName: '', users: [] });
    const { handleClose, createNewGroup } = props;
    const classes = useStyles();

    const onSave = () => {
        if (newGroup) {
            createNewGroup(newGroup);
        }
        handleClose();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setNewGroup((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleChipClick = (chip) => {
        // has a few bugs but for now is ok
        // should totally implement chip click differently
        const userName = chip.target.childNodes[0].data;

        if (userName && !newGroup.users.includes(userName)) {
            newGroup.users.push(userName);
        } else {
            const withoutUser = newGroup.users.filter((elem) => {
                return elem != userName;
            });
            setNewGroup({ ...newGroup, users: [...withoutUser] });
        }
    };

    const users = ['user1', 'user2', 'user3', 'user4'];
    return (
        <form className={classes.modalForm}>
            <Typography variant="h2" align="center">
                Create new group!
            </Typography>

            <Grid item>
                <Typography variant="subtitle1">Come up with name</Typography>
                <FormControl style={{ width: '100%' }}>
                    <InputLabel>New Group Name</InputLabel>
                    <Input
                        id="new-group-name"
                        type="text"
                        value={newGroup.name}
                        onChange={handleChange}
                        name="groupName"
                    />
                </FormControl>

                <div style={{ marginTop: '40px' }}>
                    <Typography variant="subtitle1">Add users to your group</Typography>
                    <Grid
                        container
                        direction="row"
                        alignItems="center"
                        style={{ marginTop: '15px' }}
                    >
                        {users.map((user) => (
                            <Chip
                                key={Math.random() * 100}
                                color="secondary"
                                onClick={handleChipClick}
                                label={user}
                                avatar={<Avatar>F</Avatar>}
                            />
                        ))}
                    </Grid>
                </div>
                <Grid container justify="flex-start" style={{ marginTop: '20px' }}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={onSave}
                        style={{ width: '47.5%' }}
                    >
                        Save
                    </Button>

                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleClose}
                        style={{
                            width: '47.5%',
                            marginLeft: '5%',
                            background: '#ad1457',
                            color: 'white',
                        }}
                    >
                        Close
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

const mapDispatchToProps = (dispatch) => ({
    createNewGroup: (name) => dispatch(createNewGroup(name)),
});

export default connect(null, mapDispatchToProps)(CreateGroupModal);
