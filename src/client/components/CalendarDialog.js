import React from 'react';
import Button from '@material-ui/core/Button/index';
import TextField from '@material-ui/core/TextField/index';
import Dialog from '@material-ui/core/Dialog/index';
import DialogActions from '@material-ui/core/DialogActions/index';
import DialogContent from '@material-ui/core/DialogContent/index';
import DialogContentText from '@material-ui/core/DialogContentText/index';
import axios from 'axios';
import { Typography } from '@material-ui/core';

export default class FormDialog extends React.Component {
  state = {
    name: '',
    startDate: '',
    endDate: '',
    description: ''
  };

  componentDidMount() {
    this.setState({...this.state, name: this.props.initialValue});
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  handleNameChange(name) {
    this.setState({ ...this.state, name: name})
  }

  handleStartChange(start) {
    this.setState({ ...this.state, startDate: start})
  }

  handleEndChange(end) {
    this.setState({ ...this.state, endDate: end})
  }

  handleDescriptionChange(description) {
    this.setState({ ...this.state, description: description})
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
            {this.props.error ? <Typography variant='h6' color='error'>Your input is invalid.</Typography> : null}
            <DialogContentText>
              {this.props.message}
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              fullWidth
              onChange={(e) => this.handleNameChange(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Start Date"
              fullWidth
              onChange={(e) => this.handleStartChange(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="End Date"
              fullWidth
              onChange={(e) => this.handleEndChange(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Description"
              fullWidth
              onChange={(e) => this.handleDescriptionChange(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => {this.props.handleCancel()}} color="primary">
              Cancel
            </Button>

            <Button onClick={() => this.props.handleSave(this.state)} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}