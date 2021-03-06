import React from 'react';
import { Button, Grid, TextField, Typography, Divider, Fab, Paper } from '@material-ui/core';
import Add from '@material-ui/icons/Add';
import useStyles from './styles';
import {
    stylesheetConstants,
    sections,
    buttonsType,
    inputsType,
    textType,
} from './services/stylesheet-constants';

const Stylesheets = () => {
    const classes = useStyles();

    return (
        <Paper square className={classes.pageWrapper}>
            <Typography variant="h1" align="center">
                {stylesheetConstants.PAGE}
            </Typography>
            <Divider variant="middle" />

            <Grid container className={classes.block}>
                <Typography variant="h1">{sections.BUTTONS}</Typography>
                <Grid container justify="space-evenly" alignItems="center">
                    <Button variant="contained" color="primary">
                        {buttonsType.PRIMARY}
                    </Button>
                    <Button variant="contained" color="secondary">
                        {buttonsType.SECONDARY}
                    </Button>
                    <Button variant="contained" disabled={true}>
                        {buttonsType.DISABLED}
                    </Button>
                </Grid>
            </Grid>

            <Grid container className={classes.block}>
                <Typography variant="h1">{sections.INPUTS}</Typography>
                <Grid container justify="space-evenly" alignItems="center">
                    <TextField label={inputsType.DEFAULT} color="primary" />
                    <TextField error label={inputsType.ERROR} helperText="error" />
                    <TextField label={inputsType.DISABLED} disabled={true} />

                    <label htmlFor="upload-file">
                        <input
                            className={classes.fileInputBase}
                            id="upload-file"
                            name="upload-file"
                            type="file"
                        />

                        <Fab
                            color="secondary"
                            size="small"
                            component="button"
                            aria-label="add"
                            variant="extended"
                            className={classes.inputDecoration}
                        >
                            <Add /> {inputsType.UPLOAD}
                        </Fab>
                    </label>
                </Grid>
            </Grid>

            <Grid container className={classes.block}>
                <Typography variant="h1">{sections.FONT}</Typography>
                <Divider variant="middle" />
                <Grid container justify="space-evenly" alignItems="center">
                    <Typography variant="h1">{textType.MAIN_HEADER}</Typography>
                    <Typography variant="h2"> {textType.SUB_HEADER}</Typography>
                    <Typography variant="body1">{textType.BODY}</Typography>
                    <Typography variant="subtitle1"> {textType.SUBTITLE}</Typography>
                    <Typography variant="body1" color="textSecondary">
                        {textType.DISABLED}
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default Stylesheets;
