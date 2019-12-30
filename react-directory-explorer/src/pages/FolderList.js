import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));


export default function FolderList() {
    const classes = useStyles();

    const handleClick = () => {
        console.log("handleClick")
    };

    return (
        <List
            component="nav"
            aria- labelledby="nested-list-subheader"
            className={classes.root} >

            <ListItem button>
                <ListItemText primary="Sent mail" />
            </ListItem>

            <ListItem button>
                <ListItemText primary="Drafts" />
            </ListItem>

            <ListItem button onClick={handleClick}>
                <ListItemText primary="Inbox" />
            </ListItem>
        </List >
    );
}

