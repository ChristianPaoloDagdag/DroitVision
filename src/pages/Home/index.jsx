import React from 'react';
import Container from './styles';
import Navbar from '../../components/Navbar';
import ContentOne from './ContentOne';
import ContentTwo from './ContentTwo';

export default function Home() {
  return (
    <Container>
      <Navbar />
      <ContentOne />
      <ContentTwo />
    </Container>
  );
}
