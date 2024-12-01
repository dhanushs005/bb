import { useState, useEffect } from 'react';
import { getDonors } from '../utils/storage';
import type { Donor } from '../types/donor';

export function useDonors() {
  const [donors, setDonors] = useState<Donor[]>([]);

  useEffect(() => {
    setDonors(getDonors());
  }, []);

  return donors;
}