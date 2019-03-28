import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import CheckIcon from '@material-ui/icons/Check';
import EventIcon from '@material-ui/icons/Event';
import MoneyIcon from '@material-ui/icons/Money';
import CardActionArea from '@material-ui/core/CardActionArea';
import ImageGrid from '../../components/ImageGrid';


import home0 from './../../assets/home0.png';
import home1 from './../../assets/home1.png';
import home2 from './../../assets/home2.png';
import home3 from './../../assets/home3.png';
import home4 from './../../assets/home4.png';
import home5 from './../../assets/home5.png';

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  appBar: {
    position: 'relative',
  },
  toolbarTitle: {
    flex: 1,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing.unit * 2,
  },
  cardActions: {
    [theme.breakpoints.up('sm')]: {
      paddingBottom: theme.spacing.unit * 2,
    },
  },
  footer: {
    marginTop: theme.spacing.unit * 8,
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
});

const tiers = [
  {
    title: 'Todo List',
    icon: <CheckIcon fontSize='large'/>,
    description: 'Everything that needs to be done can be accessed through your login'
  },
  {
    title: 'Budget',
    icon: <MoneyIcon fontSize='large'/>,
    description: 'Everything that needs to be done can be accessed through your login'
  },
  {
    title: 'Calendar',
    icon: <EventIcon fontSize='large'/>,
    description: 'Everything that needs to be done can be accessed through your login'
  },
];

const tileData = [
  {img: home0},
  {img: home1},
  {img: home2},
  {img: home3},
  {img: home4},
  {img: home5},
];

class Home extends React.Component {

  render() {

    const { classes } = this.props;

    return (
      <div>

        <img src={"src/client/assets/banner.png"} width="100%" />

          <div style={{paddingTop: 20}}>
            <Grid container p={20} spacing={40} alignItems="flex-end">
              {tiers.map(tier => (
                // Enterprise card is full width at sm breakpoint
                <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
                  <Card>
                    <CardHeader
                      title={tier.title}
                      subheader={tier.subheader}
                      titleTypographyProps={{ align: 'center' }}
                      subheaderTypographyProps={{ align: 'center' }}
                      action={tier.title === 'Pro' ? <StarIcon /> : null}
                      className={classes.cardHeader}
                    />
                    <CardContent>
                      {tier.icon}
                      <Typography variant="h6" color="textSecondary">
                        {tier.description}
                      </Typography>
                    </CardContent>
                    <CardActions className={classes.cardActions}>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>

        <div style={{paddingTop: 50}}>
          <ImageGrid tileData={tileData}/>
        </div>

        </div>
    );
  }
}


export default withStyles(styles)(Home);
