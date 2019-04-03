import React from 'react';
import Button from '@material-ui/core/Button/index';
import TextField from '@material-ui/core/TextField/index';
import Dialog from '@material-ui/core/Dialog/index';
import DialogActions from '@material-ui/core/DialogActions/index';
import DialogContent from '@material-ui/core/DialogContent/index';
import DialogContentText from '@material-ui/core/DialogContentText/index';

export default class FormDialog extends React.Component {
  state = {
    name: ''
  };

  componentDidMount() {
    this.setState({...this.state, name: this.props.initialValue});
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange(name) {
    this.setState({ ...this.state, name: name})
  }

  render() {
    return (
      <div>
        <Dialog
          open={true}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogContent>
            <DialogContentText>
              {this.props.message}
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label={this.props.name}
              type="email"
              fullWidth
              onChange={(e) => this.handleChange(e.target.value)}
              defaultValue={this.props.initialValue}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => {this.props.handleCancel()}} color="primary">
              Cancel
            </Button>
            <Button onClick={() => this.props.handleSave(this.state.name)} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}