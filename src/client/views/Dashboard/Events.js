import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import { observer } from 'mobx-react';
import authStore from './../../store/auth';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CalendarDialog from '../../components/CalendarDialog';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});


@observer
class Events extends React.Component {

  state = {
    rows: [],
    openDialog: false,
    addError: false,
  };

  componentDidMount() {
    axios.post('/api/calendar/fetch', {token: this.props.authStore.token})
      .then((res) => {

        this.setState({ ...this.state, rows: res.data.events });

      })
  }

  handleAddClick() {
    this.setState({ ...this.state, openDialog: true });
  }

  handleDeleteClick(id) {
    axios.delete('/api/calendar/remove', {data: { id: id, token: this.props.authStore.token }})
      .then((res) => {
        let newState = Object.assign({}, this.state);
        newState.rows = newState.rows.filter((e) => e._id !== id);
        newState.openDialog = false;
        newState.addError = false;
        this.setState(newState);
      });
  }

  handleSaveClick(event) {
    axios.post('/api/calendar/create', { ...event, token: this.props.authStore.token })
      .then((res) => {
        let newState = Object.assign({}, this.state);
        newState.rows.push( { ...event, _id: res.data.id});
        newState.openDialog = false;
        this.setState(newState);
      }).catch(() => {
        this.setState({...this.state, addError: true});
    })

  }

  render() {

    const { classes } = this.props;

    return (
      <div>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Start</TableCell>
                <TableCell align="right">End</TableCell>
                <TableCell align="right">Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.rows.map(row => (
                <TableRow key={row._id}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{Date(row.startDate)}</TableCell>
                  <TableCell align="right">{Date(row.endDate)}</TableCell>
                  <TableCell align="right">{row.description}</TableCell>
                  <TableCell>
                    <IconButton aria-label="Comments" onClick={() => {this.handleDeleteClick(row._id)}}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
        <Fab style={{position: 'absolute', bottom: 15, right: 15}} color="primary" aria-label="Add" className={classes.fab} onClick={() => {this.handleAddClick()}}>
          <AddIcon />
        </Fab>
        {this.state.openDialog ? <CalendarDialog error={this.state.addError} handleSave={(e) => { this.handleSaveClick(e) }} handleCancel={() => { this.setState({ ...this.state, openDialog: false }) }} /> : null }
      </div>

    );

  }


}

function injectStore (Component) {
  return (() => <Component authStore={authStore} />)
}

export default injectStore(withStyles(styles)(Events));