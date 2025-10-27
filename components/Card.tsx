
import React from 'react';
import SpeakerIcon from './SpeakerIcon';

interface CardProps {
  title: string;
  value: string | number;
  previousValue: number;
  description: string;
}

const TrendIcon: React.FC<{ change: number }> = ({ change }) => {
  if (change > 0) {
    return (
      <div className="flex items-center text-green-600">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
        <span className="font-bold text-lg ml-1">Up</span>
      </div>
    );
  }
  if (change < 0) {
    return (
      <div className="flex items-center text-red-600">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
        <span className="font-bold text-lg ml-1">Down</span>
      </div>
    );
  }
  return <div className="text-gray-500 font-bold text-lg">Stable</div>;
};

const Card: React.FC<CardProps> = ({ title, value, previousValue, description }) => {
  // Coerce value to a number for comparison, removing non-numeric characters
  const numericValue = typeof value === 'string' ? parseFloat(value.replace(/[^0-9.]/g, '')) : value;
  const change = numericValue - previousValue;

  const textToSpeak = `${title}: ${value}. ${description}. This is ${change > 0 ? 'up' : change < 0 ? 'down' : 'stable'} from the previous period.`;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
      <div>
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold text-gray-600">{title}</h3>
          <SpeakerIcon textToSpeak={textToSpeak} />
        </div>
        <p className="text-4xl font-bold text-blue-800 my-2">{value}</p>
        <p className="text-gray-500">{description}</p>
      </div>
      <div className="mt-4 pt-4 border-t border-gray-200">
        <TrendIcon change={change} />
      </div>
    </div>
  );
};

export default Card;
