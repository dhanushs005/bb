import React from 'react';
import Container from '../components/ui/Container';
import PageHeader from '../components/ui/PageHeader';
import DonorForm from '../components/DonorForm';

export default function HomePage() {
  return (
    <Container>
      <PageHeader 
        title="Donate Blood, Save Lives"
        subtitle="Join our community of life-savers by registering as a blood donor today."
      />
      <DonorForm />
    </Container>
  );
}