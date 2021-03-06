import React from 'react';
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        padding: 30,
    },
    homeappBar: {
        padding: "15px",
    },

    link: {
        textDecoration: "none",
        color: "white",
    },



}));

export default function Header(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.homeappBar}>
                <Toolbar>
                    <Typography variant="h3" className={classes.title}>
                        FriendBook
                    </Typography>
                </Toolbar>
            </AppBar>

            <Toolbar className={classes.dashBoard}>
                <Typography variant="h6">
                    <Link className={classes.link} style={{ color: "royalBlue" }} to="/">&lt;&lt; Dashboard</Link>
                </Typography>
            </Toolbar>

        </div>
    );
}
