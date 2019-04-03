import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import FormDialog from '../../components/FormDialog';
import axios from 'axios';
import authStore from '../../store/auth';


const styles = theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
});

class Todos extends React.Component {

    state = {
        dialogOpen: false,
        todos: {},
        dialogValue: '',
        currId: ''
    };

    componentDidMount() {
      const token = this.props.authStore.token;
      axios.post('/api/todo/fetch', { token })
        .then((res) => {
          this.setState({ ...this.state, todos: res.data.todos });
        }).catch((err) => {
          console.log(err, err.response);
      });
    }

  constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle(id) {
      this.setState({...this.state,
        todos: Object.keys(this.state.todos)
          .map((k) => k === id ?
            {...this.state.todos[k], completed: !this.state.todos[k].completed}  : this.state.todos[k])});

        axios.patch('/api/todo/update',
    {
            token: this.props.authStore.token,
            id: id, name: this.state.todos[id].name,
            completed: this.state.todos[id].completed
          });
    }

    handleDelete(id) {

      axios.delete('/api/todo/remove', { data: {token: this.props.authStore.token, id: id}} )
        .then(() => {
          let newState = Object.assign({}, this.state);
          delete newState.todos[id];
          this.setState(newState);
        });
    }

    handleAdd() {
        this.setState({ ...this.state, dialogOpen: true, dialogValue: '' });
    }

    handleCancel() {
        this.setState({  ...this.state, dialogOpen: false, editDialog: false, dialogValue: '' });
    }

  handleEdit(id) {
    this.setState({ ...this.state, dialogOpen: true, dialogValue: this.state.todos[id].name, currId: id });
  }

  handleSave(name) {
    let newState = Object.assign({}, this.state);
      // if adding a new item
    if (newState.dialogValue === '') {
      axios.post('/api/todo/create', {token: this.props.authStore.token, name: name})
        .then((res) => {
          newState.todos[res.data.id] = { name, completed: false };
          newState.dialogOpen = false;
          newState.dialogValue = '';
          this.setState(newState);
        });
    } else {
      axios.patch('/api/todo/update', {token: this.props.authStore.token, name: name})
        .then((res) => {
          newState.todos[this.state.currId].name = name;
          newState.dialogOpen = false;
          newState.dialogValue = '';
          this.setState(newState);
        });
    }

    }

    render() {
        const { classes } = this.props;

        return (
          <div>
              <List className={classes.root}>
                  {Object.keys(this.state.todos).map((key) => (
                    <ListItem key={key} dense button onClick={() => {this.handleToggle(key)}}>
                        <Checkbox
                          checked={this.state.todos[key].completed}
                          tabIndex={-1}
                          disableRipple
                        />
                        <ListItemText primary={`${this.state.todos[key].name}`}/>
                        <ListItemSecondaryAction>
                          <IconButton aria-label="Comments" onClick={() => {this.handleEdit(key)}}>
                            <EditIcon />
                          </IconButton>
                            <IconButton aria-label="Comments" onClick={() => {this.handleDelete(key)}}>
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                  ))}
              </List>
              <Fab style={{position: 'absolute', bottom: 15, right: 15}} color="primary" aria-label="Add" className={classes.fab} onClick={() => {this.handleAdd()}}>
                  <AddIcon />
              </Fab>
            {this.state.dialogOpen ? <FormDialog initialValue={this.state.dialogValue} message="Enter name of to-do!" name="to-do name" handleSave={this.handleSave.bind(this)} handleCancel={this.handleCancel.bind(this)}/> : null}
          </div>

        );
    }
}

function injectStore (Component) {
  return (() => <Component authStore={authStore} />)
}

export default injectStore(withStyles(styles)(Todos));