import React from 'react';
import { BLOOD_GROUPS } from '../constants/bloodGroups';
import { TAMIL_NADU_DISTRICTS } from '../constants/districts';

interface DonorSearchProps {
  onSearch: (filters: { district: string; bloodGroup: string }) => void;
}

export default function DonorSearch({ onSearch }: DonorSearchProps) {
  const [district, setDistrict] = React.useState('');
  const [bloodGroup, setBloodGroup] = React.useState('');

  const handleSearch = () => {
    onSearch({ district, bloodGroup });
  };

  return (
    <div className="mb-8 p-4 bg-white rounded-lg shadow">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label htmlFor="district" className="block text-sm font-medium text-gray-700">District</label>
          <select
            id="district"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-red-500 focus:ring-red-500"
          >
            <option value="">All Districts</option>
            {TAMIL_NADU_DISTRICTS.map(d => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="bloodGroup" className="block text-sm font-medium text-gray-700">Blood Group</label>
          <select
            id="bloodGroup"
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-red-500 focus:ring-red-500"
          >
            <option value="">All Blood Groups</option>
            {BLOOD_GROUPS.map(group => (
              <option key={group} value={group}>{group}</option>
            ))}
          </select>
        </div>
        <div className="flex items-end">
          <button
            onClick={handleSearch}
            className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Search Donors
          </button>
        </div>
      </div>
    </div>
  );
}