import React, {useState} from 'react';
import {
    Typography,
    Divider,
    Grid,
    Button,
    Modal,
    FormControl,
    InputLabel,
    Input,
} from '@material-ui/core';
import {Card, CardActionArea, CardMedia, CardContent, CardActions} from '@material-ui/core';
import {useEffect} from 'react';
import {makeStyles} from '@material-ui/core';


// pages -> User -> services -> user-service.js
// FIXME move to constants
const initialState = {
    name: 'initial username',
    email: 'initial @ email',
    imgSrc: 'image.png',
};

// FIXME move to separate file with styles
const useStyles = makeStyles((theme) => ({
    margin: {
        margin: '20px',
    },
    paper: {
        position: 'absolute',
        top: '20%',
        left: '50%',
        marginLeft: -250,
        width: 400,
        display: 'grid',
        gridTemplateRows: '40px,40px,40px,25px,25px',
        backgroundColor: 'white',
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
}));

export default function UserPage() {
    //this is user page where he can change settings and info
    // TODO useState(initialState)
    const [name, setName] = useState();
    const [email, setEmail] = useState(); // useReducer instead of this maybe?
    const [img, setImg] = useState(); //rn now state is not that big but in future it might get bigger
    const [open, setOpen] = useState(false);

    // for modal. is there a way to avoid these copies?
    const [newName, setNewName] = useState();
    const [newEmail, setNewEmail] = useState(email);
    const [newImg, setNewImg] = useState(img);

    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setNewName('');
        setNewEmail('');
    };

    const handleSubmit = () => {
        // simple validation
        if (newName && newName !== name) setName(newName);
        if (newEmail && newEmail !== email) setEmail(newEmail);
        if (newImg && newImg !== img) setImg(newImg);
        setOpen(false);
    };

    useEffect(() => {
        //FIXME in the case with useState you can setup initial state in the begining
        setName(initialState.name);
        setEmail(initialState.email); // mocking store / request
        setImg(initialState.imgSrc);
    }, []);

    const modalBody = (
        // should be separate component, but i dont know how pass state to parent
        //it should change initialState?
        <form className={classes.paper}>
            <FormControl>
                <InputLabel>Change Username</InputLabel>
                <Input
                    id="change-username"
                    type="text"
                    value={newName}
                    onChange={(e) => {
                        setNewName(e.target.value);
                    }}
                />
            </FormControl>
            <FormControl>
                <InputLabel>Change Email</InputLabel>
                <Input
                    id="change-email"
                    type="text"
                    value={newEmail}
                    onChange={(e) => {
                        setNewEmail(e.target.value);
                    }}
                />
            </FormControl>
            <FormControl>
                <Typography variant="caption">change image</Typography>
                <Input
                    id="change-image"
                    type="file"
                    value={newImg}
                    onChange={(e) => {
                        setNewImg(e.target.value);
                    }}
                />
            </FormControl>
            <Grid container className={classes.margin} alignItems="space-between">
                <Grid item xs={6}>
                    <Button variant="contained" color="primary" onClick={handleSubmit}>
                        Save
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="contained" color="error" onClick={handleClose}>
                        Close
                    </Button>
                </Grid>
            </Grid>
        </form>
    );

    //TODO All labels such  'Username' move to constants too
    //pages -> User -> services -> user-constants.js
    return (
        <div>
            <Typography variant="h2" align="center" className={classes.margin}>
                User Page
            </Typography>
            <Divider className={classes.margin}/>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia className={classes.media} src={`/static/${img}`} title="Avatar"/>{' '}
                    <CardContent>
                        <Grid container spacing={1} direction="column">
                            {' '}
                            <Typography variant="body1">
                                <b>Username</b> : {name}
                            </Typography>
                            <Typography variant="body1">
                                <b>Email</b> : {email}
                            </Typography>
                        </Grid>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button variant="contained" color="secondary" onClick={handleOpen}>
                        Edit
                    </Button>
                    <Modal open={open} onClose={handleClose}>
                        <div>{modalBody} </div>
                    </Modal>
                </CardActions>
            </Card>
        </div>
    );
}
