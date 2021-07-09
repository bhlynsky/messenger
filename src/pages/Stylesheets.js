import React from 'react';
import { Button, Grid, TextField, Typography, Divider, IconButton, Fab } from '@material-ui/core';
import Add from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    mtop: {
        marginTop: '25px',
    },
});
const Stylesheets = () => {
    const classes = useStyles();
    return (
        <div>
            <Typography variant="h1">Examples of elements</Typography>
            <Divider variant="middle" />
            <Grid container spacing={2} alignContents="center" className={classes.mtop}>
                <Grid
                    container
                    xs={6}
                    direction="column"
                    justify="space-around"
                    alignItems="center"
                >
                    <Typography variant="h2">Buttons</Typography>

                    <Grid container justify="space-evenly" alignItems="center">
                        <Button variant="contained" color="primary">
                            Primary
                        </Button>
                        <Button variant="contained" color="secondary">
                            Secondary
                        </Button>
                        <Button variant="outlined">Disabled</Button>
                    </Grid>
                </Grid>

                <Grid
                    container
                    xs={6}
                    direction="column"
                    justify="space-around"
                    alignItems="center"
                >
                    <Typography variant="h2">Inputs</Typography>
                    <Divider variant="middle" />
                    <Grid container justify="space-evenly" alignItems="center">
                        <TextField label="Default" color="primary" />
                        <TextField error label="Error" helperText="error" />
                        <TextField label="Disabled" variant="filled" />

                        <label htmlFor="upload-photo">
                            <input
                                style={{ display: 'none' }}
                                id="upload-photo"
                                name="upload-photo"
                                type="file"
                            />

                            <Fab
                                color="secondary"
                                size="small"
                                component="span"
                                aria-label="add"
                                variant="extended"
                            >
                                <Add /> Upload photo
                            </Fab>
                        </label>
                    </Grid>
                </Grid>

                <Grid
                    container
                    direction="column"
                    justify="space-around"
                    alignItems="center"
                    className={classes.mtop}
                >
                    <Typography variant="h2">Font:Roboto</Typography>
                    <Divider variant="middle" />
                    <Grid container justify="space-evenly" alignItems="center">
                        <Typography variant="h1"> Main heading h1</Typography>
                        <Typography variant="h2"> Main heading h2</Typography>
                        <Typography variant="body1"> Body</Typography>
                        <Typography variant="subtitle1"> Subtitle</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Stylesheets;
