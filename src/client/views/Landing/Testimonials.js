import React from 'react';
import TestimonialCard from '../../components/TestimonialCard';

import t0 from './../../assets/testimonials0.png';
import t1 from './../../assets/testimonials1.png';
import t2 from './../../assets/testimonials2.png';
import t3 from './../../assets/testimonials3.png';
import t4 from './../../assets/testimonials4.png';
import t5 from './../../assets/testimonials5.png';

const testimonials = [
  {
    name: 'Derrick & Albany',
    title: 'Baby Shower',
    subheader: 'Subheader',
    description0: 'Erma was amazing! I especially loved that she had great time management skills; she was personable, professional, and articulate. She had great etiquette skills, and she paid attention to small details. ',
    image: t0,
  },
  {
    name: 'Satisfied Client',
    title: 'Gator Graduation Party',
    subheader: null,
    description0: 'Elegant graduation party that appealed to college students and adults.',
    description1: 'Des2',
    image: t1,
  },
  {
    name: 'Satisfied Client',
    title: 'Annual Celebrity Dinner',
    subheader: 'Subheader',
    description0: 'Thank you for making our fundraising event a beautiful success!',
    description1: 'Des2',
    image: t2,
  },
  {
    name: 'Satisfied Client',
    title: 'Table Settings',
    subheader: 'Subheader',
    description0: 'A look at our amazing table settings!',
    description1: 'Des2',
    image: t3,
  },
  {
    name: 'Satisfied Client',
    title: 'Wedding Table Settings',
    subheader: 'Subheader',
    description0: 'One of our many options for your wedding!',
    description1: 'Des2',
    image: t4,
  },
  {
    name: 'Albany and Derrick',
    title: 'Happy Couple',
    description0: 'You have made our wedding an experience we will never forget.',
    description1: 'Des2',
    image: t5,
  },
];


class Testimonials extends React.Component {



  render() {
    return <div align='center'>
      {testimonials.map((data, i) => <div key={i} style={{paddingTop: 20}}><TestimonialCard data={data} /></div>)}
    </div>
  }
}


export default Testimonials;
