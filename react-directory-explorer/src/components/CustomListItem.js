import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import PropTypes from 'prop-types';
import FolderIcon from '@material-ui/icons/Folder';
import DescriptionIcon from '@material-ui/icons/Description';

export default function CustomListItem(props) {

    return (
    <ListItem button={props.isFolder ? true : false} onClick={props.onClick}>
        <ListItemIcon>
            {props.isFolder ? <FolderIcon /> : <DescriptionIcon />}
        </ListItemIcon>
        <ListItemText primary={props.name} secondary={`${props.size} Bytes`}/>
    </ListItem>

    )
}

CustomListItem.propTypes = {
    name: PropTypes.string.isRequired,
    isFolder: PropTypes.bool.isRequired,
    size: PropTypes.number
}

