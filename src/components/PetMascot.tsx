
import React from 'react';

interface PetMascotProps {
  isHappy?: boolean;
  size?: 'small' | 'medium' | 'large';
}

const PetMascot: React.FC<PetMascotProps> = ({ isHappy = false, size = 'medium' }) => {
  const sizeClasses = {
    small: 'w-16 h-16',
    medium: 'w-24 h-24',
    large: 'w-32 h-32'
  };

  return (
    <div className={`${sizeClasses[size]} mx-auto relative`}>
      <div className={`w-full h-full bg-amber-400 rounded-full relative transform transition-all duration-300 ${
        isHappy ? 'animate-bounce scale-110' : 'hover:scale-105'
      }`}>
        {/* Ears */}
        <div className="absolute -top-2 left-2 w-4 h-6 bg-amber-500 rounded-full transform -rotate-45"></div>
        <div className="absolute -top-2 right-2 w-4 h-6 bg-amber-500 rounded-full transform rotate-45"></div>
        
        {/* Eyes */}
        <div className="absolute top-6 left-4 w-2 h-2 bg-black rounded-full"></div>
        <div className="absolute top-6 right-4 w-2 h-2 bg-black rounded-full"></div>
        
        {/* Nose */}
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-2 h-1 bg-black rounded-full"></div>
        
        {/* Mouth */}
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-4 h-2 border-b-2 border-black rounded-b-full"></div>
        
        {/* Tail (animated when happy) */}
        <div className={`absolute -right-1 top-1/2 w-3 h-8 bg-amber-500 rounded-full transform origin-bottom transition-transform duration-200 ${
          isHappy ? 'animate-[wiggle_0.5s_ease-in-out_infinite]' : 'rotate-12'
        }`}></div>
      </div>
      
      {/* Happy particles */}
      {isHappy && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="animate-pulse text-yellow-400 text-2xl">✨</div>
        </div>
      )}
    </div>
  );
};

export default PetMascot;
