import React from 'react';
import Container from './styles';
import Navbar from '../../components/Navbar';
import ContentOne from './ContentOne';

export default function Home() {
  return (
    <Container>
      <Navbar />
      <ContentOne />
    </Container>
  );
}
