import React from 'react';
import a0 from '../../assets/about0.png';
import { Typography } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';

class About extends React.Component {

  render() {
    return <div>

      <img style={{borderRadius: '50%'}} src={a0} />

      <Typography variant='h5'>
        <div style={{fontFamily: 'roboto'}}>
          We are committed to helping you create your dream wedding. We listen to your needs, desires and brainstorm with you to make the day even more special. We are here to help bring your ideas to life, not to tell you how your wedding should be.
        </div>
      </Typography>
      <br/>

      <div style={{fontFamily: 'roboto', fontSize: 20}}>
        <CheckIcon/> Help you create an event of a lifetime <br/>
        <CheckIcon/> Professional results since 1999 <br/>
        <CheckIcon/> Clients satisfied and elated as a result of our coordination
      </div>


    </div>
  }
}


export default About;
