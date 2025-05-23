import React from 'react';

interface PetMascotProps {
  isHappy?: boolean;
  size?: 'small' | 'medium' | 'large';
}

const PetMascot: React.FC<PetMascotProps> = ({ isHappy = false, size = 'medium' }) => {
  const sizeClasses = {
    small: 'w-20 h-20',
    medium: 'w-28 h-28',
    large: 'w-36 h-36',
  };

  return (
    <div className={`${sizeClasses[size]} relative mx-auto`}>
      <div
        className={`
          relative w-full h-full bg-amber-300 rounded-[45%]
          transition-transform duration-300 shadow-lg
          ${isHappy ? 'animate-bounce scale-110' : 'hover:scale-105'}
        `}
      >
        {/* Ears - floppy dog style */}
        <div className="absolute -top-3 -left-3 w-6 h-10 bg-amber-600 rounded-full transform rotate-[-30deg]"></div>
        <div className="absolute -top-3 -right-3 w-6 h-10 bg-amber-600 rounded-full transform rotate-[30deg]"></div>

        {/* Eyes - bigger and expressive */}
        <div className="absolute top-6 left-6 w-4 h-4 bg-black rounded-full">
          <div className="w-1.5 h-1.5 bg-white rounded-full mt-0.5 ml-0.5"></div>
        </div>
        <div className="absolute top-6 right-6 w-4 h-4 bg-black rounded-full">
          <div className="w-1.5 h-1.5 bg-white rounded-full mt-0.5 ml-0.5"></div>
        </div>

        {/* Nose - triangular */}
        <div className="absolute top-[48%] left-1/2 transform -translate-x-1/2 w-3 h-2 bg-black rounded-t-full"></div>

        {/* Mouth & tongue */}
        {isHappy ? (
          <>
            <div className="absolute top-[62%] left-1/2 transform -translate-x-1/2 w-5 h-3 border-b-2 border-black rounded-b-full"></div>
            <div className="absolute top-[66%] left-1/2 transform -translate-x-1/2 w-2.5 h-2 bg-pink-500 rounded-full"></div>
          </>
        ) : (
          <div className="absolute top-[62%] left-1/2 transform -translate-x-1/2 w-5 h-[2px] bg-black rounded-full"></div>
        )}

        {/* Cheeks */}
        <div className="absolute top-[65%] left-4 w-2.5 h-2.5 bg-pink-300 rounded-full opacity-70"></div>
        <div className="absolute top-[65%] right-4 w-2.5 h-2.5 bg-pink-300 rounded-full opacity-70"></div>

        {/* Tail - more fluffy dog tail style */}
        <div
          className={`
            absolute -right-4 top-[30%] w-3 h-10 bg-amber-600 rounded-full origin-bottom-right
            ${isHappy ? 'animate-tail-wag' : 'rotate-[20deg]'}
          `}
        ></div>
      </div>

      {/* Sparkles when happy */}
      {isHappy && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-yellow-400 text-xl animate-ping">
          ✨
        </div>
      )}

      {/* Custom Animations */}
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
