import React from 'react';
import type { Donor } from '../types/donor';

interface DonorListProps {
  donors: Donor[];
}

export default function DonorList({ donors }: DonorListProps) {
  if (donors.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No donors found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg shadow">
      <table className="min-w-full bg-white">
        <thead className="bg-red-600 text-white">
          <tr>
            <th className="py-3 px-4 text-left">Name</th>
            <th className="py-3 px-4 text-left">Age</th>
            <th className="py-3 px-4 text-left">Blood Group</th>
            <th className="py-3 px-4 text-left">District</th>
            <th className="py-3 px-4 text-left">Contact</th>
            <th className="py-3 px-4 text-left">Last Donation</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {donors.map((donor) => (
            <tr key={donor.id} className="hover:bg-gray-50">
              <td className="py-4 px-4">{donor.name}</td>
              <td className="py-4 px-4">{donor.age}</td>
              <td className="py-4 px-4">
                <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                  {donor.bloodGroup}
                </span>
              </td>
              <td className="py-4 px-4">{donor.district}</td>
              <td className="py-4 px-4">{donor.contact}</td>
              <td className="py-4 px-4">{donor.lastDonation || 'Not Available'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}