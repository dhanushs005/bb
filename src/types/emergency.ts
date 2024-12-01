export interface EmergencyRequest {
  id: string;
  patientName: string;
  bloodGroup: string;
  district: string;
  hospital: string;
  unitsNeeded: number;
  contactPerson: string;
  contactNumber: string;
  urgency: 'immediate' | 'within24hrs' | 'within3days';
  additionalNotes: string;
  createdAt: string;
  status: 'pending' | 'fulfilled' | 'closed';
}