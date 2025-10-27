
import React from 'react';
import { useTextToSpeech } from '../hooks/useTextToSpeech';

interface SpeakerIconProps {
  textToSpeak: string;
}

const SpeakerIcon: React.FC<SpeakerIconProps> = ({ textToSpeak }) => {
  const { speak, isSpeaking } = useTextToSpeech();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    speak(textToSpeak);
  };

  return (
    <button
      onClick={handleClick}
      className={`p-2 rounded-full transition-colors duration-200 ${isSpeaking ? 'bg-blue-200' : 'hover:bg-gray-200'}`}
      aria-label="Read text aloud"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-6 w-6 ${isSpeaking ? 'text-blue-600' : 'text-gray-500'}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
        />
      </svg>
    </button>
  );
};

export default SpeakerIcon;
