import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import FormDialog from './FormDialog';
import axios from 'axios';
import { observer } from 'mobx-react';
import authStore from '../store/auth';

const styles = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

@observer
class SettingsPop extends React.Component {

  state = {
    name: '',
    showName: false,
    showPassword: false,
  };

  componentWillMount() {
    axios.post('/api/user/fetch', { token: this.props.authStore.token })
      .then((res) => {
        console.log(res.data);
        this.setState({ ...this.state, name: res.data.name });
      });
  }

  onClickPassword() {
    this.setState({ ...this.state, showPassword: true })
  }

  onClickName() {
    this.setState({ ...this.state, showName: true })
  }

  closePassword() {
    this.setState({ ...this.state, showPassword: false });
  }

  closeName() {
    this.setState({ ...this.state, showName: false });
  }


  updatePassword(password) {
    // TODO: axios request
    axios.post('/api/user/password', {password: password, token: this.props.authStore.token})
      .then(() => {
        this.setState({ ...this.state, showPassword: false });
      });

  }

  updateName(name) {
    // TODO: axios request
    axios.post('/api/user/name', {token: this.props.authStore.token, name: name }).then((res) => {
      this.setState({ ...this.state, showName: false, name: name });
    });

  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Dialog
          fullScreen
          open={true}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>

            <Toolbar>
              <IconButton color="inherit" aria-label="Close" onClick={() => { this.props.close() }}>
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.flex}>
                Settings
              </Typography>
            </Toolbar>

          </AppBar>

          <ListItem button>
            <ListItemText primary="Change Name" secondary={this.state.name} onClick={this.onClickName.bind(this)}/>
          </ListItem>

          <Divider />

          <List>
            <ListItem button>
              <ListItemText primary="Change Password" secondary='••••••••••••' onClick={this.onClickPassword.bind(this)}/>
            </ListItem>

          </List>
        </Dialog>
        { this.state.showName ? <FormDialog  handleSave={this.updateName.bind(this)} handleCancel={this.closeName.bind(this)} message='Enter new name!' name='Name' initialValue={this.state.name}/>: null}
        { this.state.showPassword ? <FormDialog  handleSave={this.updatePassword.bind(this)}  handleCancel={this.closePassword.bind(this)} message='Enter new password!' name='Password'/>: null}
      </div>
    );
  }
}


function injectStore (Component) {
  return ((props) => <Component authStore={authStore} {...props} />)
}

export default injectStore(withStyles(styles)(SettingsPop));