import React from 'react';
import { Container } from 'reactstrap';

import Header from 'src/components/Header/Header';
import Footer from 'src/components/Footer/Footer';

import HeadingTitle1 from 'src/components/HeadingTitle1';
import about_banner from 'src/assets/img/about/about_banner.png';

const About = () => {
  return (
    <>
      <Header />
      <Container>
        <HeadingTitle1
          title="About  Us"
          info="This system is a community-driven program that encourages reporting of incidents
involving dangerous and aggressive driving and women sexual harassment."
        />
        <img width="100%" src={about_banner} alt="" />
      </Container>
      <Footer />
    </>
  );
};

export default About;
