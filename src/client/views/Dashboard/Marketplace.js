import React from 'react';
import services0 from './../../assets/services0.png';
import services1 from './../../assets/services1.png';
import services2 from './../../assets/services2.png';
import services3 from './../../assets/services3.png';
import services4 from './../../assets/services4.png';
import services5 from './../../assets/services5.png';
import services6 from './../../assets/services6.png';
import services7 from './../../assets/services7.png';
import services8 from './../../assets/services8.png';
import Grid from '@material-ui/core/Grid';
import MarketItemCard from '../../components/MarketItemCard';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CartIcon from '@material-ui/icons/ShoppingBasket';
import { withStyles } from '@material-ui/core/styles';
import CartStore from '../../store/cart';
import { observer } from 'mobx-react';
import Badge from '@material-ui/core/Badge';
import CartDialog from '../../components/CartDialog';

const services = [
  { img: services0, title: "Assorted Multi-color Napkins", price: 10.99 },
  { img: services1, title: 'Red Decorative Tie', price: 10.49 },
  { img: services2, title: "Blue Decorative Band", price: 100.49 },
  { img: services3, title: "Black Table Cloth", price: 19.99 },
  { img: services4, title: "White Table Cloth", price: 19.99 },
  { img: services5, title: "Turquoise Table Cloth", price: 29.99 },
  { img: services6, title: "Cloth Chairs", price: 29.49 },
  { img: services7, title: "Bouquet of Flowers", price: 39.99 },
  { img: services8, title: "Wedding Doors", price: 39.99 },
  ];


const styles = theme => ({
  text: {
    paddingTop: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing.unit * 2,
  },
  subHeader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  toolbar: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
});

@observer
class Marketplace extends React.Component {

  state = {
    openCart: false
  };

  onAddClick(item) {
    // add item to store
    // this.props.CartStore.cart.push({ ...item, img: null });
    if (this.props.CartStore.cart === undefined) {
      this.props.CartStore.cart = [{ ...item, img: null }];
    }
    else {
      this.props.CartStore.cart.push({ ...item, img: null });
    }
    this.forceUpdate();
  }

  onCheckOutClick() {
    if (this.props.CartStore.cart !== undefined && this.props.CartStore.cart.length !== 0) {
      // TODO: make post request

      // remove items from cart
      this.props.CartStore.cart = [];
      this.setState({ ...this.state, openCart: false })

    }
  }

  onCancelClick() {
    this.setState({ ...this.state, openCart: false })
  }

  onCartClick() {
    this.setState({ ...this.state, openCart: true })
  }

  render() {

    const { classes } = this.props;

    return (
      <div>
        <Grid container spacing={40} alignItems="flex-start" >
          {services.map((service, i) =>
            <Grid item key={i} xs={12} sm={12} md={8} lg={3}>
              <MarketItemCard data={service} addToCart={() => this.onAddClick(service)}/>
            </Grid>)}
        </Grid>

        <div style={{paddingBottom: 50}}/>

        <AppBar position="fixed" color="primary" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Badge badgeContent={this.props.CartStore !== undefined && this.props.CartStore.cart !== undefined ? this.props.CartStore.cart.length : 0 }>
              <CartIcon />
            </Badge>
              <IconButton color="inherit" onClick={this.onCartClick.bind(this)}>
                <Badge color="secondary" badgeContent={this.props.CartStore.cart ? this.props.CartStore.cart.length : 0 }>
                  <CartIcon />
                </Badge>
              </IconButton>
          </Toolbar>
        </AppBar>

        {this.state.openCart ? <CartDialog message='Cart' cart={this.props.CartStore.cart} handleCancel={this.onCancelClick.bind(this)} handleSave={this.onCheckOutClick.bind(this)}/> : null}

      </div>
    );
  }

}

function injectStore (Component) {
  return (() => <Component CartStore={CartStore} />)
}

export default injectStore(observer(withStyles(styles)(Marketplace)));