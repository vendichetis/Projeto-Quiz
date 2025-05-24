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
          relative w-full h-full bg-yellow-200 rounded-[45%] shadow-inner border-4 border-amber-800
          transition-transform duration-300
          ${isHappy ? 'animate-bounce scale-110' : 'hover:scale-105'}
        `}
      >
        {/* Ears - small and folded like a pug's */}
        <div className="absolute -top-1 -left-3 w-5 h-5 bg-amber-800 rounded-br-[80%] rotate-[-20deg]"></div>
        <div className="absolute -top-1 -right-3 w-5 h-5 bg-amber-800 rounded-bl-[80%] rotate-[20deg]"></div>

        {/* Eyes - large and round */}
        <div className="absolute top-6 left-4 w-6 h-6 bg-black rounded-full shadow-sm">
          <div className="w-2.5 h-2.5 bg-white rounded-full mt-0.5 ml-0.5"></div>
        </div>
        <div className="absolute top-6 right-4 w-6 h-6 bg-black rounded-full shadow-sm">
          <div className="w-2.5 h-2.5 bg-white rounded-full mt-0.5 ml-0.5"></div>
        </div>

        {/* Nose - flat and wide */}
        <div className="absolute top-[50%] left-1/2 transform -translate-x-1/2 w-4 h-2.5 bg-black rounded-b-xl shadow-sm"></div>

        {/* Wrinkles */}
        <div className="absolute top-[40%] left-1/4 w-10 h-[2px] bg-amber-800 opacity-50 rounded-full"></div>
        <div className="absolute top-[44%] left-[30%] w-8 h-[2px] bg-amber-800 opacity-50 rounded-full"></div>

        {/* Mouth & tongue */}
        {isHappy ? (
          <>
            <div className="absolute top-[63%] left-1/2 transform -translate-x-1/2 w-6 h-3 border-b-2 border-black rounded-b-full"></div>
            <div className="absolute top-[68%] left-1/2 transform -translate-x-1/2 w-3 h-2 bg-pink-500 rounded-full"></div>
          </>
        ) : (
          <div className="absolute top-[63%] left-1/2 transform -translate-x-1/2 w-5 h-[2px] bg-black rounded-full"></div>
        )}

        {/* Cheeks */}
        <div className="absolute top-[67%] left-4 w-2.5 h-2.5 bg-pink-300 rounded-full opacity-70"></div>
        <div className="absolute top-[67%] right-4 w-2.5 h-2.5 bg-pink-300 rounded-full opacity-70"></div>

        {/* Tail - curly pug tail */}
        <div
          className={`
            absolute -right-4 top-[35%] w-4 h-4 bg-amber-800 rounded-full border-[3px] border-yellow-200
            ${isHappy ? 'animate-tail-wag' : ''}
          `}
        ></div>

        {/* Paws */}
        <div className="absolute bottom-1 left-6 w-3 h-3 bg-yellow-300 rounded-full border border-amber-600 shadow-sm"></div>
        <div className="absolute bottom-1 right-6 w-3 h-3 bg-yellow-300 rounded-full border border-amber-600 shadow-sm"></div>
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
          0%, 100% { transform: rotate(10deg); }
          50% { transform: rotate(-10deg); }
        }
        .animate-tail-wag {
          animation: tail-wag 0.4s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default PetMascot;
