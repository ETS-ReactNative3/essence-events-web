import React from 'react';
import Button from '@material-ui/core/Button/index';
import TextField from '@material-ui/core/TextField/index';
import Dialog from '@material-ui/core/Dialog/index';
import DialogActions from '@material-ui/core/DialogActions/index';
import DialogContent from '@material-ui/core/DialogContent/index';
import DialogContentText from '@material-ui/core/DialogContentText/index';

import { Typography } from '@material-ui/core';

export default class CartDialog extends React.Component {
  state = {
    name: '',
    startDate: '',
    endDate: '',
    description: ''
  };

  componentDidMount() {
    this.setState({...this.state, name: this.props.initialValue});
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

            {this.props.cart ? this.props.cart.map((e, i) =>
              <Typography key={i}>
                {e.title} - ${e.price}
              </Typography>) : null}

          </DialogContent>
          <DialogActions>
            <Button onClick={() => {this.props.handleCancel()}} color="primary">
              Cancel
            </Button>

            <Button onClick={() => this.props.handleSave(this.state)} color="primary">
              Check Out
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}