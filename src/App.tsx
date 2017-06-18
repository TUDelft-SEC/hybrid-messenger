import * as React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';

import './App.css';

const logo = require('./logo.svg');
type State = {
  open?: boolean,
  logged?: boolean
};

class App extends React.Component<{}, State> {
  constructor() {
    super();
    this.state = {
      open: false,
      logged: false
    };
  }

  login = () => {
    this.setState({ logged: true });
  }

  logout = () => {
    this.setState({ logged: false });
  }

  toggleMenu = () => {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <div className="App">
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <span>

            <AppBar
              className="app-bar"
              title="Hybrid Messenger"
              iconElementLeft={<IconButton onClick={this.toggleMenu}><MenuIcon /></IconButton>}
              iconElementRight={this.state.logged ?  <RaisedButton label="Logout" onClick={this.logout} /> : <RaisedButton label="Login" onClick={this.login} />}
            />

            <Drawer open={this.state.open}>
              <img src={logo} className="App-logo" alt="logo" />
              <MenuItem>Home</MenuItem>
              <MenuItem>Other places</MenuItem>
            </Drawer>

            <div id="main">
              <RaisedButton label="Toggle menu" onClick={this.toggleMenu} />
            </div>
          </span>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
