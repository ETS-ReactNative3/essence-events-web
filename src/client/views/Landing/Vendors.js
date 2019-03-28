import React from 'react';

import v0 from './../../assets/vendors0.png';
import v1 from './../../assets/vendors1.png';
import v2 from './../../assets/vendors2.png';
import v3 from './../../assets/vendors3.png';
import v4 from './../../assets/vendors4.png';
import v5 from './../../assets/vendors5.png';
import v6 from './../../assets/vendors6.png';
import VendorCard from '../../components/VendorCard';
import Grid from '@material-ui/core/Grid';

const data = [
  {name: 'Celebrations Catering', image: v0, url: 'https://www.celebrations-catering.com/', description: 'What\'s this item about? What makes it interesting? Write a catchy description to grab your audience\'s attention...'},
  {name: 'Little Forest Farm', image: v1, url: 'http://www.littleforestfarm.biz/', description: ''},
  {name: 'Partytime Rentals', image: v2, url: 'http://www.partytimerentals.us/', description: ''},
  {name: 'Prange\'s Florist', image: v3, url: 'http://www.pranges.com/', description: ''},
  {name: 'Forever Graphics & Printing', image: v4, url: 'http://www.forevergraphics.com', description: ''},
  {name: 'Scott Slomback Photography', image: v5, url: 'https://www.slombackphotography.com/', description: ''},
  {name: 'Santa Fe River Ranch', image: v6, url: 'www.santaferiverranch.com', description: ''},
];

class Vendors extends React.Component {

  render() {
    return <div align='center'>
      <Grid container spacing={40} alignItems="flex-start" >

        {data.map((e, i) => (
          <Grid item key={i} xs={12} sm={12} md={8} lg={4}>
            <VendorCard  data={e}></VendorCard>
          </Grid>

        ))}




      </Grid>
    </div>
  }
}

export default Vendors;
