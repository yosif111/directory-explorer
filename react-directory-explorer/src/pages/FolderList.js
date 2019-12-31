import React from 'react';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import TextField from '@material-ui/core/TextField';
import CustomListItem from '../components/CustomListItem'
import { BASE_URL } from '../config'


const styles = {
  root: {
    width: '100%'
  }
}

export default class FolderList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      directoryList: [],
      currentPath: '/',
      error: false,
      errorMessage: ''
    };
  }

  fetchDirectory = () => {
    fetch(`${BASE_URL}/directory?path=${this.state.currentPath}`)
      .then(async res => {
        if (res.status !== 200) {
          console.error("error:", res.statusText)
          this.setState({ directoryList: [], error: true, errorMessage: `An error occured: ${res.statusText}` })
          return;
        }

        const result = await res.json()
        console.log("result", result)
        this.setState({ directoryList: result, error: false });

      }).catch(error => {
        console.error("error:", error)
        this.setState({ directoryList: [], error: true, errorMessage: `An error occured: ${error}` })
      }
      )
  }

  componentDidMount() {
    this.fetchDirectory()
  }

  onFolderClick = (index) => {
    this.setState(
      { currentPath: `${this.state.currentPath}/${this.state.directoryList[index].path}` },
      this.fetchDirectory
    )
  }

  onEnterKeyPressed = (event) => {
    if (event.key === 'Enter') {
      this.fetchDirectory()
    }
  }

  renderListSubheader = () => {
    return (
      <ListSubheader component="div" id="nested-list-subheader" disableSticky>
        <TextField
          id="standard-full-width"
          style={{ margin: 8 }}
          placeholder="Location"
          fullWidth
          margin="normal"
          value={this.state.currentPath}
          onChange={(event) => this.setState({ currentPath: event.target.value })}
          onKeyUp={(event) => this.onEnterKeyPressed(event)}
        />
      </ListSubheader>
    )
  }
  renderDirectory = () => {

    if (this.state.error) {
      return <h1>{this.state.errorMessage}</h1>
    }

    return this.state.directoryList.map((element, index) => {
      return <CustomListItem key={index} name={element.path} isFolder={element.isFolder} size={element.size} onClick={element.isFolder ? () => this.onFolderClick(index) : null} />
    })
  }

  render() {

    return (
      <List
        component="nav"
        style={styles.root}
        subheader={this.renderListSubheader()}>
        {this.renderDirectory()}
      </List >
    );
  }
}

