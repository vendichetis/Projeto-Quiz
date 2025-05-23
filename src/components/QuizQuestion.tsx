
import React, { useState } from 'react';
import PetMascot from './PetMascot';
import { useSound } from '../hooks/useSound';

interface QuizQuestionProps {
  question: string;
  options: string[];
  onAnswer: (answer: string) => void;
  questionNumber: number;
  totalQuestions: number;
  earnedMoney: number;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  options,
  onAnswer,
  questionNumber,
  totalQuestions,
  earnedMoney
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [showResult, setShowResult] = useState(false);
  const [isAnswering, setIsAnswering] = useState(false);
  const { playCashSound, playClickSound } = useSound();

  const handleAnswer = (answer: string) => {
    console.log('handleAnswer called with:', answer);
    console.log('Current state - isAnswering:', isAnswering, 'showResult:', showResult);
    
    if (isAnswering) {
      console.log('Prevented double click');
      return;
    }
    
    setIsAnswering(true);
    setSelectedAnswer(answer);
    setShowResult(true);
    
    console.log('Playing click sound...');
    playClickSound();
    
    // Tocar som de cash após um delay menor
    setTimeout(() => {
      console.log('Playing cash sound...');
      playCashSound();
    }, 300);
    
    // Avançar para próxima pergunta mais rapidamente
    setTimeout(() => {
      console.log('Moving to next question...');
      onAnswer(answer);
      setIsAnswering(false);
      setShowResult(false);
      setSelectedAnswer('');
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-yellow-50 to-pink-100 p-4 relative overflow-hidden">
      {/* Paw prints background */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-6xl text-blue-400 transform rotate-12 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            🐾
          </div>
        ))}
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-lg font-bold text-blue-600">
              Pergunta {questionNumber} de {totalQuestions}
            </span>
            <div className="flex items-center bg-green-100 px-4 py-2 rounded-full">
              <span className="text-2xl mr-2">💰</span>
              <span className="font-bold text-green-600">R$ {earnedMoney}</span>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-blue-400 to-purple-500 h-3 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Mascot */}
        <div className="text-center mb-8">
          <PetMascot isHappy={showResult} size="large" />
        </div>

        {/* Question */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-8 border-4 border-yellow-300">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            {question}
          </h2>

          {!showResult ? (
            <div className="space-y-4">
              {options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  disabled={isAnswering}
                  className="w-full p-4 text-left bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  <span className="text-lg font-medium text-gray-700">{option}</span>
                </button>
              ))}
            </div>
          ) : (
            <div className="text-center space-y-4">
              <div className="animate-bounce">
                <span className="text-6xl">🎉</span>
              </div>
              <div className="bg-green-100 p-6 rounded-xl border-2 border-green-300 animate-scale-in">
                <p className="text-2xl font-bold text-green-600 mb-2">
                  +R$ 10,00 desbloqueado!
                </p>
                <p className="text-lg text-gray-600">
                  Sua resposta: <strong>{selectedAnswer}</strong>
                </p>
              </div>
              <div className="flex justify-center items-center space-x-2">
                <span className="text-3xl animate-ping">💰</span>
                <span className="text-xl font-bold text-yellow-600 animate-pulse">CASH!</span>
                <span className="text-3xl animate-ping">💰</span>
              </div>
              {/* Loading indicator for next question */}
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full animate-pulse"></div>
                </div>
                <p className="text-sm text-gray-500 mt-2">Próxima pergunta em instantes...</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizQuestion;
