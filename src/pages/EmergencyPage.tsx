import React from 'react';
import Container from '../components/ui/Container';
import PageHeader from '../components/ui/PageHeader';
import EmergencyRequestForm from '../components/EmergencyRequestForm';
import EmergencyList from '../components/EmergencyList';

export default function EmergencyPage() {
  return (
    <Container>
      <PageHeader 
        title="Emergency Blood Requests"
        subtitle="Submit an emergency blood request or view current requests"
      />
      <div className="space-y-12">
        <EmergencyRequestForm />
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Current Emergency Requests</h2>
          <EmergencyList />
        </div>
      </div>
    </Container>
  );
}