import React from 'react';

interface PetMascotProps {
  isHappy?: boolean;
  size?: 'small' | 'medium' | 'large';
}

const PetMascot: React.FC<PetMascotProps> = ({ isHappy = false, size = 'medium' }) => {
  const sizeClasses = {
    small: 'w-16 h-16',
    medium: 'w-24 h-24',
    large: 'w-32 h-32',
  };

  return (
    <div className={`${sizeClasses[size]} relative mx-auto`}>
      <div
        className={`
          relative w-full h-full bg-amber-300 rounded-full
          transition-transform duration-300
          ${isHappy ? 'animate-bounce scale-110' : 'hover:scale-105'}
        `}
      >
        {/* Ears */}
        <div className="absolute -top-3 left-2 w-4 h-6 bg-amber-500 rounded-full transform -rotate-12"></div>
        <div className="absolute -top-3 right-2 w-4 h-6 bg-amber-500 rounded-full transform rotate-12"></div>

        {/* Eyes */}
        <div className="absolute top-5 left-5 w-3 h-3 bg-black rounded-full">
          <div className="w-1 h-1 bg-white rounded-full mt-0.5 ml-0.5"></div>
        </div>
        <div className="absolute top-5 right-5 w-3 h-3 bg-black rounded-full">
          <div className="w-1 h-1 bg-white rounded-full mt-0.5 ml-0.5"></div>
        </div>

        {/* Cheeks */}
        <div className="absolute top-10 left-3 w-2 h-2 bg-pink-300 rounded-full opacity-70"></div>
        <div className="absolute top-10 right-3 w-2 h-2 bg-pink-300 rounded-full opacity-70"></div>

        {/* Nose */}
        <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 w-2 h-1 bg-black rounded-full"></div>

        {/* Mouth */}
        {isHappy ? (
          <>
            <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 w-4 h-2 border-b-2 border-black rounded-b-full"></div>
            <div className="absolute top-[66%] left-1/2 transform -translate-x-1/2 w-2 h-1 bg-pink-500 rounded-full"></div>
          </>
        ) : (
          <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 w-4 h-[2px] bg-black rounded-full"></div>
        )}

        {/* Tail */}
        <div
          className={`absolute -right-2 top-1/2 w-2 h-6 bg-amber-500 rounded-full origin-bottom transition-transform duration-300 ${
            isHappy ? 'animate-tail-wag' : 'rotate-12'
          }`}
        ></div>
      </div>

      {/* Happy sparkles */}
      {isHappy && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-yellow-400 text-xl animate-ping">
          ✨
        </div>
      )}

      {/* Custom animations */}
      <style>{`
        @keyframes tail-wag {
          0%, 100% { transform: rotate(20deg); }
          50% { transform: rotate(-20deg); }
        }
        .animate-tail-wag {
          animation: tail-wag 0.4s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default PetMascot;
