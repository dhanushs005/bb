import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BLOOD_GROUPS } from '../constants/bloodGroups';
import { TAMIL_NADU_DISTRICTS } from '../constants/districts';
import { saveEmergencyRequest } from '../utils/storage';
import type { EmergencyRequest } from '../types/emergency';

const initialFormData = {
  patientName: '',
  bloodGroup: '',
  district: '',
  hospital: '',
  unitsNeeded: 1,
  contactPerson: '',
  contactNumber: '',
  urgency: 'immediate',
  additionalNotes: '',
};

export default function EmergencyRequestForm() {
  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const request: EmergencyRequest = {
      id: uuidv4(),
      ...formData,
      createdAt: new Date().toISOString(),
      status: 'pending',
    };
    saveEmergencyRequest(request);
    setFormData(initialFormData);
    alert('Emergency request submitted successfully!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="patientName" className="block text-sm font-medium text-gray-700">Patient Name</label>
          <input
            id="patientName"
            name="patientName"
            type="text"
            required
            value={formData.patientName}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-red-500 focus:ring-red-500"
          />
        </div>
        <div>
          <label htmlFor="bloodGroup" className="block text-sm font-medium text-gray-700">Blood Group Needed</label>
          <select
            id="bloodGroup"
            name="bloodGroup"
            required
            value={formData.bloodGroup}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-red-500 focus:ring-red-500"
          >
            <option value="">Select Blood Group</option>
            {BLOOD_GROUPS.map(group => (
              <option key={group} value={group}>{group}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="district" className="block text-sm font-medium text-gray-700">District</label>
          <select
            id="district"
            name="district"
            required
            value={formData.district}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-red-500 focus:ring-red-500"
          >
            <option value="">Select District</option>
            {TAMIL_NADU_DISTRICTS.map(district => (
              <option key={district} value={district}>{district}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="hospital" className="block text-sm font-medium text-gray-700">Hospital Name</label>
          <input
            id="hospital"
            name="hospital"
            type="text"
            required
            value={formData.hospital}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-red-500 focus:ring-red-500"
          />
        </div>
        <div>
          <label htmlFor="unitsNeeded" className="block text-sm font-medium text-gray-700">Units Needed</label>
          <input
            id="unitsNeeded"
            name="unitsNeeded"
            type="number"
            min="1"
            required
            value={formData.unitsNeeded}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-red-500 focus:ring-red-500"
          />
        </div>
        <div>
          <label htmlFor="urgency" className="block text-sm font-medium text-gray-700">Urgency Level</label>
          <select
            id="urgency"
            name="urgency"
            required
            value={formData.urgency}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-red-500 focus:ring-red-500"
          >
            <option value="immediate">Immediate</option>
            <option value="within24hrs">Within 24 Hours</option>
            <option value="within3days">Within 3 Days</option>
          </select>
        </div>
        <div>
          <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700">Contact Person</label>
          <input
            id="contactPerson"
            name="contactPerson"
            type="text"
            required
            value={formData.contactPerson}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-red-500 focus:ring-red-500"
          />
        </div>
        <div>
          <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">Contact Number</label>
          <input
            id="contactNumber"
            name="contactNumber"
            type="tel"
            required
            value={formData.contactNumber}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-red-500 focus:ring-red-500"
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700">Additional Notes</label>
          <textarea
            id="additionalNotes"
            name="additionalNotes"
            rows={3}
            value={formData.additionalNotes}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-red-500 focus:ring-red-500"
          />
        </div>
      </div>
      <div className="mt-6">
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Submit Emergency Request
        </button>
      </div>
    </form>
  );
}