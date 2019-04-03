import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
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

class TestimonialCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              {this.props.data.name ? this.props.data.name[0] : null}
            </Avatar>
          }
          title={this.props.data.title}
          subheader={this.props.data.name}
        />
        <CardMedia
          className={classes.media}
          image={this.props.data.image}
        />
        <CardContent>
          <Typography component="p">
            {this.props.data.description0}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(TestimonialCard);
