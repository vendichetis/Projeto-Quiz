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
      <div
        className={`w-full h-full bg-amber-300 rounded-full relative transform transition-all duration-300 ${
          isHappy ? 'animate-bounce scale-110' : 'hover:scale-105'
        }`}
      >
        {/* Ears with animation */}
        <div
          className={`absolute -top-3 left-2 w-5 h-8 bg-amber-500 rounded-full transform -rotate-12 ${
            isHappy ? 'animate-wiggle-ear' : ''
          }`}
        ></div>
        <div
          className={`absolute -top-3 right-2 w-5 h-8 bg-amber-500 rounded-full transform rotate-12 ${
            isHappy ? 'animate-wiggle-ear' : ''
          }`}
        ></div>

        {/* Eyes with shine */}
        <div className="absolute top-6 left-5 w-3 h-3 bg-black rounded-full relative">
          <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-white rounded-full opacity-80"></div>
        </div>
        <div className="absolute top-6 right-5 w-3 h-3 bg-black rounded-full relative">
          <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-white rounded-full opacity-80"></div>
        </div>

        {/* Blush */}
        <div className="absolute top-10 left-3 w-2 h-2 bg-pink-300 rounded-full opacity-70"></div>
        <div className="absolute top-10 right-3 w-2 h-2 bg-pink-300 rounded-full opacity-70"></div>

        {/* Nose */}
        <div className="absolute top-11 left-1/2 transform -translate-x-1/2 w-2 h-1 bg-black rounded-full"></div>

        {/* Mouth (smile with tongue if happy) */}
        {isHappy ? (
          <>
            <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-5 h-3 border-b-2 border-black rounded-b-full"></div>
            <div className="absolute top-15 left-1/2 transform -translate-x-1/2 w-2 h-1 bg-pink-500 rounded-full"></div>
          </>
        ) : (
          <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-5 h-1 bg-black rounded-full"></div>
        )}

        {/* Tail */}
        <div
          className={`absolute -right-1 top-1/2 w-3 h-8 bg-amber-500 rounded-full transform origin-bottom transition-transform duration-200 ${
            isHappy ? 'animate-tail-wag' : 'rotate-12'
          }`}
        ></div>
      </div>

      {/* Happy particles */}
      {isHappy && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="animate-pulse text-yellow-400 text-2xl">✨</div>
        </div>
      )}

      {/* Tailwind custom animations */}
      <style>{`
        @keyframes tail-wag {
          0%, 100% { transform: rotate(20deg); }
          50% { transform: rotate(-20deg); }
        }
        .animate-tail-wag {
          animation: tail-wag 0.4s infinite ease-in-out;
        }

        @keyframes wiggle-ear {
          0%, 100% { transform: rotate(-12deg); }
          50% { transform: rotate(-20deg); }
        }
        .animate-wiggle-ear {
          animation: wiggle-ear 0.6s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default PetMascot;
