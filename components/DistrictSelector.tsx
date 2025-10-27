
import React from 'react';
import { type District } from '../types';

interface DistrictSelectorProps {
  districts: District[];
  selectedDistrictId: string | null;
  onDistrictChange: (districtId: string) => void;
  disabled: boolean;
}

const DistrictSelector: React.FC<DistrictSelectorProps> = ({
  districts,
  selectedDistrictId,
  onDistrictChange,
  disabled,
}) => {
  const handleGeolocation = () => {
    if (navigator.geolocation) {
      alert("Trying to find your location...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          alert(`Location Found!\nLatitude: ${latitude.toFixed(4)}\nLongitude: ${longitude.toFixed(4)}\n\nIn a full version of this app, we would use this to automatically select your district. For now, please select it from the list.`);
        },
        (error) => {
          alert(`Could not get your location: ${error.message}. Please select your district from the list.`);
        }
      );
    } else {
      alert("Location services are not supported by your browser.");
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col sm:flex-row items-center gap-4">
      <div className="flex-grow w-full">
        <label htmlFor="district-select" className="block text-lg font-semibold text-gray-700 mb-2">
          Select Your District
        </label>
        <select
          id="district-select"
          value={selectedDistrictId || ''}
          onChange={(e) => onDistrictChange(e.target.value)}
          disabled={disabled}
          className="block w-full p-3 border border-gray-300 rounded-md text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out disabled:bg-gray-200"
        >
          <option value="" disabled>-- Choose a district --</option>
          {districts.map((district) => (
            <option key={district.id} value={district.id}>
              {district.name}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full sm:w-auto pt-2 sm:pt-8">
        <button
          onClick={handleGeolocation}
          disabled={disabled}
          className="w-full flex items-center justify-center gap-2 bg-green-600 text-white font-bold py-3 px-6 rounded-md hover:bg-green-700 transition duration-150 ease-in-out disabled:bg-green-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Use My Location
        </button>
      </div>
    </div>
  );
};

export default DistrictSelector;
