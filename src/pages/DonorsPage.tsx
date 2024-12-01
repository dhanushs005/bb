import React, { useState } from 'react';
import Container from '../components/ui/Container';
import PageHeader from '../components/ui/PageHeader';
import DonorList from '../components/DonorList';
import DonorSearch from '../components/DonorSearch';
import { useDonors } from '../hooks/useDonors';

export default function DonorsPage() {
  const allDonors = useDonors();
  const [filters, setFilters] = useState({ district: '', bloodGroup: '' });

  const filteredDonors = allDonors.filter(donor => {
    const matchesDistrict = !filters.district || donor.district === filters.district;
    const matchesBloodGroup = !filters.bloodGroup || donor.bloodGroup === filters.bloodGroup;
    return matchesDistrict && matchesBloodGroup;
  });

  return (
    <Container>
      <PageHeader 
        title="Available Donors"
        subtitle="Find blood donors in your area"
      />
      <DonorSearch onSearch={setFilters} />
      <DonorList donors={filteredDonors} />
    </Container>
  );
}