import React from 'react';
import { Button, Grid, TextField, Typography, Divider, IconButton, Fab } from '@material-ui/core';
import Add from '@material-ui/icons/Add';
import useStyles from './styles';
import {
    stylesheetConstants,
    sections,
    buttonsType,
    inputsType,
} from './services/stylesheet-constants';

const Stylesheets = () => {
    const classes = useStyles();

    return (
        <div>
            <Typography variant="h1">{stylesheetConstants.PAGE_HEADER}</Typography>
            <Divider variant="middle" />
            <Grid container spacing={2} alignContents="center" className={classes.mtop}>
                <Grid
                    container
                    xs={6}
                    direction="column"
                    justify="space-around"
                    alignItems="center"
                >
                    <Typography variant="h2">{sections.BUTTONS}</Typography>

                    <Grid container justify="space-evenly" alignItems="center">
                        <Button variant="contained" color="primary">
                            {buttonsType.PRIMARY}
                        </Button>
                        <Button variant="contained" color="secondary">
                            {buttonsType.SECONDARY}
                        </Button>
                        <Button variant="outlined">{buttonsType.DISABLED}</Button>
                    </Grid>
                </Grid>

                <Grid
                    container
                    xs={6}
                    direction="column"
                    justify="space-around"
                    alignItems="center"
                >
                    <Typography variant="h2">{sections.INPUTS}</Typography>
                    <Divider variant="middle" />
                    <Grid container justify="space-evenly" alignItems="center">
                        <TextField label={inputsType.DEFAULT} color="primary" />
                        <TextField error label={inputsType.ERROR} helperText="error" />
                        <TextField label={inputsType.DISABLED} variant="filled" />

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
                                <Add /> {inputsType.UPLOAD}
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
                    <Typography variant="h2">{sections.FONT}</Typography>
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