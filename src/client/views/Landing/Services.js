import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import CheckIcon from '@material-ui/icons/Check';
import ImageGrid from './../../components/ImageGrid';

import services0 from './../../assets/services0.png';
import services1 from './../../assets/services1.png';
import services2 from './../../assets/services2.png';
import services3 from './../../assets/services3.png';
import services4 from './../../assets/services4.png';
import services5 from './../../assets/services5.png';
import services6 from './../../assets/services6.png';
import services7 from './../../assets/services7.png';
import services8 from './../../assets/services8.png';

const tileData = [
  {img: services0},
  {img: services1},
  {img: services2},
  {img: services3},
  {img: services4},
  {img: services5},
  {img: services6},
  {img: services7},
  {img: services8},
];

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
    title: '⚪ Pearl Services',
    price: '0',
    description: [
      'Recommend vendors',
      'Review vendor arrangements',
      'Direct the rehearsal',
      'Coordinate the wedding day',
      'Up to five hours of orchestration at the wedding and reception'],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },
  {
    title: '🔴 Ruby Services',
    subheader: 'Pearl Services plus:',
    price: '15',
    description: [
      'Three-hour consultation',
      'Up to ten hours of orchestration at the wedding and reception',
      'Advice on wedding etiquette',
      'Oversee the wedding reception',
      'Contact all wedding vendors two weeks prior to the event to confirm orders, confirm the wedding reception, handle special requests, and go over final details',

    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
  {
    title: '🏆 Gold Services',
    subheader: 'Ruby Services plus:',
    price: '30',
    description: [
      'Attend appointments throughout the planning (Maximum of 3 with availability)',
      'Prepare programs',
      'Detailed reception timeline',
      'Help with ceremony creation',
      'Itinerary for wedding participants mailed or delivered',
      'Instructions mailed or delivered to wedding party',
      'Track fittings and payments of wedding party',
      'Provide refreshments and toiletries to wedding party',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
  {
    title: '💎 Diamond Services',
    subheader: 'Gold Services plus:',
    price: '30',
    description: [
      'Communicate with and schedule the wedding party',
      'Instruct wedding party throughout planning',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
  {
    title: '➕ Additional Services',
    price: '30',
    description: [
      'Broom Jumping Ceremony performed',
      'Rose Ceremony performed',
      'Handmade Jumping Broom',
      'Handmade flower girl baskets',
      'Bridal shower arrangements',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
];

class Services extends React.Component {

  render() {

    const { classes } = this.props;

    return <div>
      <Grid container spacing={40} alignItems="flex-start" >
        {tiers.map(tier => (
          // Enterprise card is full width at sm breakpoint
          <Grid item key={tier.title} xs={12} sm={12} md={12} lg={12}>
            <Card>
              <CardHeader
                title={tier.title}
                subheader={tier.subheader}
                titleTypographyProps={{ align: 'center' }}
                subheaderTypographyProps={{ align: 'center' }}
                className={classes.cardHeader}
              />
              <CardContent>
                {tier.description.map(line => (
                  <Typography variant="subtitle1" align="center" key={line}>
                    <CheckIcon /> {line}
                  </Typography>
                ))}
              </CardContent>

            </Card>
          </Grid>
        ))}
      </Grid>
      <div style={{paddingTop: 30}}>

      </div>
      <ImageGrid tileData={tileData}/>
    </div>
  }
}


export default withStyles(styles)(Services);
