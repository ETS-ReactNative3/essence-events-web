import React from 'react';
import Button from '@material-ui/core/Button/index';
import TextField from '@material-ui/core/TextField/index';
import Dialog from '@material-ui/core/Dialog/index';
import DialogActions from '@material-ui/core/DialogActions/index';
import DialogContent from '@material-ui/core/DialogContent/index';
import DialogContentText from '@material-ui/core/DialogContentText/index';
import DialogTitle from '@material-ui/core/DialogTitle/index';

export default class FormDialog extends React.Component {
  state = {
    open: false,
    name: ''
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.props.addMethod();
    this.setState({ open: false });
  };

  handleChange(name) {
    this.setState({ ...this.state, name})
  }

  render() {
    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogContent>
            <DialogContentText>
              Type the todo name here.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Todo Name"
              type="email"
              fullWidth
              onChange={(e) => this.handleChange(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => {this.props.handleCancel()}} color="primary">
              Cancel
            </Button>
            <Button onClick={() => this.props.handleSave(this.state.name)} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}