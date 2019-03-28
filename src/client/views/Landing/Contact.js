import React from 'react';
import Map from './../../components/Map';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

class Contact extends React.Component {

  render() {
    return (<div>

      <Map/>
      <div style={{paddingTop: 20}}/>
      <Grid container spacing={40} alignItems="flex-start" >

        <Grid item xs={12} sm={12} md={8} lg={4}>
          <Typography variant='h6'>
            Contact Information
          </Typography>
          <Typography variant='p' style={{fontFamily: 'roboto'}}>
            Erma Sams<br/>
            Phone: (352) 381-7067 <br/>
            Email: info@essenceevents.net
          </Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={8} lg={4}>
          <Typography variant='h6'>
            Address
          </Typography>
          <Typography variant='p' style={{fontFamily: 'roboto'}}>
            530 W University Ave<br/>
            Gainesville, Florida 32601
          </Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={8} lg={4}>
          <Typography variant='h6'>
            Working Hours
          </Typography>
          <Typography variant='p' style={{fontFamily: 'roboto'}}>
            Monday - by appointment<br/>
            Saturday - by appointment<br/>
            Sunday - by appointment
          </Typography>
        </Grid>

      </Grid>

    </div>);
  }
}


export default Contact;
