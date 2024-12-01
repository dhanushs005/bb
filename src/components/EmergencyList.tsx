import React from 'react';
import { getEmergencyRequests } from '../utils/storage';
import type { EmergencyRequest } from '../types/emergency';

export default function EmergencyList() {
  const [requests, setRequests] = React.useState<EmergencyRequest[]>([]);

  React.useEffect(() => {
    setRequests(getEmergencyRequests());
  }, []);

  const getUrgencyColor = (urgency: EmergencyRequest['urgency']) => {
    switch (urgency) {
      case 'immediate': return 'bg-red-100 text-red-800';
      case 'within24hrs': return 'bg-orange-100 text-orange-800';
      case 'within3days': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (requests.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No emergency requests at the moment.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {requests.map((request) => (
        <div key={request.id} className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {request.patientName} - {request.hospital}
              </h3>
              <p className="text-gray-600">
                {request.district} • {new Date(request.createdAt).toLocaleDateString()}
              </p>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getUrgencyColor(request.urgency)}`}>
              {request.urgency}
            </span>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Blood Group Needed</p>
              <p className="font-medium">{request.bloodGroup}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Units Required</p>
              <p className="font-medium">{request.unitsNeeded}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Contact Person</p>
              <p className="font-medium">{request.contactPerson}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Contact Number</p>
              <p className="font-medium">{request.contactNumber}</p>
            </div>
          </div>
          {request.additionalNotes && (
            <div className="mt-4">
              <p className="text-sm text-gray-500">Additional Notes</p>
              <p className="text-gray-700">{request.additionalNotes}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}