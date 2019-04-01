import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Redirect, Switch, Route, withRouter, Link } from 'react-router-dom';
import Home from './Landing/Home';
import Services from './Landing/Services';
import Testimonials from './Landing/Testimonials';
import Vendors from './Landing/Vendors';
import Contact from './Landing/Contact';
import About from './Landing/About';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  toolbarMain: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
  },
  mainFeaturedPost: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4,
  },
  mainFeaturedPostContent: {
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
    },
  },
  mainGrid: {
    marginTop: theme.spacing.unit * 3,
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  markdown: {
    padding: `${theme.spacing.unit * 3}px 0`,
  },
  sidebarAboutBox: {
    padding: theme.spacing.unit * 2,
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing.unit * 3,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
});

const sections = [
  'Home',
  'Services',
  'Testimonials',
  'Vendors',
  'Contact',
  'About',
];

const sectionComponents = [
  Home,
  Services,
  Testimonials,
  Vendors,
  Contact,
  About
];

const sectionUrls = [
  '/',
  '/services',
  '/testimonials',
  '/vendors',
  '/contact',
  '/about',
];

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
  },
];



const social = ['GitHub', 'Twitter', 'Facebook'];

class Landing extends React.Component {

  state = { toLogin: false, toCreate: false };

  render() {

    const { classes } = this.props;

    if (this.state.toLogin) return <Redirect to='/login'/>;
    if (this.state.toCreate) return <Redirect to='/create'/>;

    if (!sectionUrls.includes(this.props.location.pathname)) return <Redirect to='/'/>;

    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.layout}>
          <Toolbar className={classes.toolbarMain}>
            <Typography
              component="h2"
              variant="h5"
              color="inherit"
              align="left"
              noWrap
              className={classes.toolbarTitle}
            >
              Essence Events
            </Typography>
            <Button
              onClick={() => this.setState({ ...this.state, toCreate: true })}
              variant="outlined"
              size="small"
            >
              Create Account
            </Button>
            <span style={{width: 10}}/>
            <Button
              onClick={() => this.setState({ ...this.state, toLogin: true })}
              variant="outlined"
              size="small">
              Log in
            </Button>

          </Toolbar>
          <Toolbar variant="dense" className={classes.toolbarSecondary}>
            {sections.map((section, i) => (
              <Button onClick={() => this.props.history.push(sectionUrls[i])} key={section}>
                {section}
              </Button>
            ))}
          </Toolbar>

          <div style={{paddingTop: 10}}>
            <main>

              <Switch>
                { sectionComponents.map((e, i) => <Route exact path={sectionUrls[i]} component={e} key={i}/>) }
              </Switch>

            </main>
          </div>
        </div>

        {/* Footer */}
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            Made with 💖 by SWE Team 1
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            © 2023 by Essence Events​
          </Typography>
        </footer>
        {/* End footer */}
      </React.Fragment>
    );

}

}

export default withStyles(styles)(withRouter(Landing));
