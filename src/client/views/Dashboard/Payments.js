import React from 'react';
import axios from 'axios';
import { observer } from 'mobx-react';
import authStore from '../../store/auth';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto'
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
});

@observer
class Payments extends React.Component {

  state = { order: [] };


  componentWillMount() {
    axios.post('/api/order/fetch', { token: this.props.authStore.token }).then((res) => {
      console.log(res.data.data);
      this.setState({ ...this.state, order: res.data.data });
    });

  }

  render() {

    const { classes } = this.props;

    return (
      <div>
        {/*{ this.state.order.map((e, i) => <div key={i}>{e.items.map((e, i) => <div key={i}>{e.title}</div>)}</div>) }*/}

        <List className={classes.root} subheader={<li />}>
          { this.state.order.map((e, i) =>
            <li key={i} className={classes.listSection} >
              <ul className={classes.ul}>
                <ListSubheader>{Date(e.date)} - ${Math.round(e.items.reduce((a, b) => ({price: a.price + b.price})).price * 100) / 100}</ListSubheader>
                { e.items.map((a, i) =>
                <ListItem key={i}>
                  <ListItemText align='left' primary={a.title}/>
                  <ListItemText align='right' >${a.price}</ListItemText>
                </ListItem>
                )}
              </ul>
            </li>
          )}

        </List>

        {/*<List className={classes.root} subheader={<li />}>*/}
        {/*  {[0, 1, 2, 3, 4].map(sectionId => (*/}
        {/*    <li key={`section-${sectionId}`} className={classes.listSection}>*/}
        {/*      <ul className={classes.ul}>*/}
        {/*        <ListSubheader>{`I'm sticky ${sectionId}`}</ListSubheader>*/}
        {/*        {[0, 1, 2].map(item => (*/}
        {/*          <ListItem key={`item-${sectionId}-${item}`}>*/}
        {/*            <ListItemText primary={`Item ${item}`} />*/}
        {/*          </ListItem>*/}
        {/*        ))}*/}
        {/*      </ul>*/}
        {/*    </li>*/}
        {/*  ))}*/}
        {/*</List>*/}

      </div>
    );

  }
}

function injectStore (Component) {
  return (() => <Component authStore={authStore} />)
}


export default injectStore(withStyles(styles)(Payments));