import React from 'react';
import { Container } from 'reactstrap';

import Header from 'src/components/Header/Header';
import HeadingTitle1 from 'src/components/HeadingTitle1';
import Footer from 'src/components/Footer/Footer';

import contactUs from 'src/assets/img/contactus.png';

const ContactUs = () => {
  return (
    <div>
      <Header />
      <Container>
        <HeadingTitle1
          title="Contact Us"
          info="This system is a community-driven program that encourages reporting of incidents
          involving dangerous and aggressive driving and women sexual harassment."
        />
        <img
          width="100%"
          src={contactUs}
          alt=""
          style={{ padding: '135px 0 30px' }}
        />
      </Container>
      <Footer />
    </div>
  );
};

export default ContactUs;
