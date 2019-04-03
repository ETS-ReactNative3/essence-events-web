import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { observer } from 'mobx-react';

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 300,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    marginLeft: 'auto',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

@observer
class MarketItemCard extends React.Component {
  state = { expanded: false };

  addCartItem() {
    // let newCartItem = {name: this.props.data.title, price: this.props.data.price};

  }

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <Typography variant='subtitle1' style={{paddingLeft: 10, paddingTop: 15, paddingBottom: 15}}> {this.props.data.title} </Typography>

        <CardMedia
          className={classes.media}
          image={this.props.data.img}
        />
        <CardContent>
          <Typography component="p">
            {this.props.data.description0}
          </Typography>
        </CardContent>
        <CardActions>
          <Typography variant='subtitle1' style={{paddingLeft: 10}}> ${this.props.data.price} </Typography>
          <IconButton className={classes.expand} onClick={() => {this.props.addToCart() }}>
            <AddShoppingCartIcon/>
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(MarketItemCard);
