import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import toRenderProps from 'recompose/toRenderProps';
import withState from 'recompose/withState';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { observer } from 'mobx-react';
import authStore from './../store/auth';
import { Redirect } from 'react-router-dom';
import SettingsPop from './SettingsPop';

const WithState = toRenderProps(withState('anchorEl', 'updateAnchorEl', null));

class AccountPop extends React.Component {

  state = { toLanding: false, settingsOpen: false };

  handleLogOut() {
    this.props.authStore.token = '';
    this.setState({toLanding: true});
  };

  componentDidMount() {
    console.log(this.props);
  }

  render() {

    if (this.state.toLanding) return <Redirect to='/'/>;

    return (
      <div>
        <WithState>
          {({ anchorEl, updateAnchorEl }) => {
            const open = Boolean(anchorEl);
            const handleClose = () => {
              updateAnchorEl(null);
            };

            return (
              <React.Fragment>

                <IconButton
                  color="inherit"
                  aria-owns={open ? 'render-props-menu' : undefined}
                  aria-haspopup="true"
                  onClick={event => {
                    updateAnchorEl(event.currentTarget);
                  }}
                >
                  <AccountCircleIcon />
                </IconButton>

                <Menu id="render-props-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
                  <MenuItem onClick={() => {this.props.openSettings()}}>Settings</MenuItem>
                  <MenuItem onClick={() => {this.handleLogOut()}}>Logout</MenuItem>
                </Menu>
              </React.Fragment>
            );
          }}
        </WithState>
      </div>

    );

  }


}

function injectStore (Component) {
  return ((props) => <Component authStore={authStore} {...props} />)
}

export default injectStore(AccountPop);