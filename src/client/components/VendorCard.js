import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';



const styles = theme => ({
  card: {
    maxWidth: 300,
  },
  media: {
    height: 50,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class VendorCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={this.props.data.image}
        />
        <CardContent>

          <Typography variant='h5'>
            {this.props.data.name}
          </Typography>
          <div style={{height: 10}}/>

          <Typography>
            <a href={this.props.data.url} target='_blank'>
              {this.props.data.url.substring(this.props.data.url.indexOf('.') + 1)}
            </a>
          </Typography>
          <div style={{height: 10}}/>

          <Typography>
            {this.props.data.phone}
          </Typography>

          <div style={{height: 10}}/>
          <Typography component="p">
            {this.props.data.description}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(VendorCard);
