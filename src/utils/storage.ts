import { Donor } from '../types/donor';
import { EmergencyRequest } from '../types/emergency';

export const saveDonor = (donor: Donor): void => {
  const donors = getDonors();
  donors.push(donor);
  localStorage.setItem('donors', JSON.stringify(donors));
};

export const getDonors = (): Donor[] => {
  const donors = localStorage.getItem('donors');
  return donors ? JSON.parse(donors) : [];
};

export const saveEmergencyRequest = (request: EmergencyRequest): void => {
  const requests = getEmergencyRequests();
  requests.push(request);
  localStorage.setItem('emergencyRequests', JSON.stringify(requests));
};

export const getEmergencyRequests = (): EmergencyRequest[] => {
  const requests = localStorage.getItem('emergencyRequests');
  return requests ? JSON.parse(requests) : [];
};

export const updateEmergencyRequest = (id: string, updates: Partial<EmergencyRequest>): void => {
  const requests = getEmergencyRequests();
  const index = requests.findIndex(r => r.id === id);
  if (index !== -1) {
    requests[index] = { ...requests[index], ...updates };
    localStorage.setItem('emergencyRequests', JSON.stringify(requests));
  }
};