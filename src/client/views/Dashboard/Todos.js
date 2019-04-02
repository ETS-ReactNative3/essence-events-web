import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import FormDialog from '../../components/FormDialog';


const styles = theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
});

class Todos extends React.Component {

    state = {
        dialogOpen: false,
        todos: [
            {name: 'Buy flowers', completed: false},
            {name: 'Call bakery about wedding cake', completed: false},
            {name: 'Schedule catering service', completed: false},
            {name: 'Book honeymoon', completed: false},
            {name: 'Buy candles', completed: false},
            {name: 'Buy ice cream', completed: false},
            {name: 'Buy cup cakes', completed: true},
            {name: 'Read pamphlet for essence events', completed: true},
            {name: 'Run errand', completed: true},
        ]
    };

    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }


    handleToggle(idx) {
        this.setState({ ...this.state, todos: this.state.todos.map((e, i) => i === idx ? {...e, completed: !e.completed }: e) });
        // TODO: make API call
    }

    handleDelete(idx) {
        this.setState({ ...this.state, todos: this.state.todos.filter((e, i) => i !== idx) });
        // TODO: make API call
    }

    handleAdd() {
        this.setState({ ...this.state, dialogOpen: true  })
        // TODO: make API call
    }

    handleCancel() {
        this.setState({  ...this.state, dialogOpen: false });
        // TODO: make API call
    }

    handleSave(name) {
        this.setState({  todos: [...this.state.todos, {name, completed: false} ], dialogOpen: false});
        // TODO: make API call
    }

    render() {
        const { classes } = this.props;

        return (
          <div>
              <List className={classes.root}>
                  {this.state.todos.map((value, i) => (
                    <ListItem key={i} dense button onClick={() => {this.handleToggle(i)}}>
                        <Checkbox
                          checked={value.completed}
                          tabIndex={-1}
                          disableRipple
                        />
                        <ListItemText primary={`${value.name}`} />
                        <ListItemSecondaryAction>
                            <IconButton aria-label="Comments" onClick={() => {this.handleDelete(i)}}>
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                  ))}
              </List>
              <Fab style={{position: 'relative', bottom: 3, right: 3}} color="primary" aria-label="Add" className={classes.fab} onClick={() => {this.handleAdd()}}>
                  <AddIcon />
              </Fab>
              <FormDialog open={this.state.dialogOpen} handleSave={this.handleSave.bind(this)} handleCancel={this.handleCancel.bind(this)}/>

          </div>

        );
    }
}

export default withStyles(styles)(Todos);