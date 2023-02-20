import React from 'react';
import Container from './styles';
import Navbar from '../../components/Navbar';
import ContentOne from './ContentOne';
import ContentTwo from './ContentTwo';
import Footer from '../../components/Footer';
import ContentThree from './ContentThree';

export default function Home() {
  return (
    <Container>
      <Navbar />
      <ContentOne />
      <ContentTwo />
      <ContentThree />
      <Footer />
    </Container>
  );
}
