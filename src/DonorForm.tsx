import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { saveDonor } from '../utils/storage';
import { BLOOD_GROUPS } from '../constants/bloodGroups';
import { TAMIL_NADU_DISTRICTS } from '../constants/districts';
import type { BloodGroup } from '../constants/bloodGroups';
import type { District } from '../constants/districts';

interface FormData {
  name: string;
  age: string;
  bloodGroup: BloodGroup | '';
  district: District | '';
  contact: string;
  email: string;
  lastDonation: string;
  address: string;
  medicalHistory: string;
}

const initialFormData: FormData = {
  name: '',
  age: '',
  bloodGroup: '',
  district: '',
  contact: '',
  email: '',
  lastDonation: '',
  address: '',
  medicalHistory: ''
};

export default function DonorForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const donor = {
      id: uuidv4(),
      ...formData,
      age: parseInt(formData.age)
    };
    saveDonor(donor);
    setFormData(initialFormData);
    alert('Donor registered successfully!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-red-500 focus:ring-red-500"
          />
        </div>
        <div>
          <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
          <input
            id="age"
            type="number"
            name="age"
            required
            min="18"
            max="65"
            value={formData.age}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-red-500 focus:ring-red-500"
          />
        </div>
        <div>
          <label htmlFor="bloodGroup" className="block text-sm font-medium text-gray-700">Blood Group</label>
          <select
            id="bloodGroup"
            name="bloodGroup"
            required
            value={formData.bloodGroup}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-red-500 focus:ring-red-500"
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
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-red-500 focus:ring-red-500"
          >
            <option value="">Select District</option>
            {TAMIL_NADU_DISTRICTS.map(district => (
              <option key={district} value={district}>{district}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact Number</label>
          <input
            id="contact"
            type="tel"
            name="contact"
            required
            value={formData.contact}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-red-500 focus:ring-red-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-red-500 focus:ring-red-500"
          />
        </div>
        <div>
          <label htmlFor="lastDonation" className="block text-sm font-medium text-gray-700">Last Donation Date</label>
          <input
            id="lastDonation"
            type="date"
            name="lastDonation"
            value={formData.lastDonation}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-red-500 focus:ring-red-500"
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
          <textarea
            id="address"
            name="address"
            required
            value={formData.address}
            onChange={handleChange}
            rows={3}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-red-500 focus:ring-red-500"
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="medicalHistory" className="block text-sm font-medium text-gray-700">Medical History</label>
          <textarea
            id="medicalHistory"
            name="medicalHistory"
            value={formData.medicalHistory}
            onChange={handleChange}
            rows={3}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-red-500 focus:ring-red-500"
          />
        </div>
      </div>
      <div className="mt-6">
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Register as Donor
        </button>
      </div>
    </form>
  );
}