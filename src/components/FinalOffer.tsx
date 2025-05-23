
import React from 'react';
import PetMascot from './PetMascot';
import { useSound } from '../hooks/useSound';

interface FinalOfferProps {
  totalEarned: number;
  onClaim: () => void;
}

const FinalOffer: React.FC<FinalOfferProps> = ({ totalEarned, onClaim }) => {
  const { playSuccessSound, playClickSound } = useSound();

  React.useEffect(() => {
    // Play success sound when component mounts
    playSuccessSound();
  }, [playSuccessSound]);

  const handleClaimClick = () => {
    playClickSound();
    onClaim();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-yellow-50 to-pink-100 p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-8xl animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              fontSize: `${Math.random() * 30 + 40}px`
            }}
          >
            {['🎉', '💰', '🐾', '✨', '🎁'][Math.floor(Math.random() * 5)]}
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Celebration header */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-gray-800 mb-4 animate-bounce">
            🎉 PARABÉNS! 🎉
          </h1>
          <p className="text-2xl text-gray-700">
            Você completou o Quiz Pet do Futuro!
          </p>
        </div>

        {/* Happy mascot */}
        <div className="mb-8">
          <PetMascot isHappy={true} size="large" />
        </div>

        {/* Earnings display */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8 border-4 border-yellow-400">
          <div className="bg-green-100 p-6 rounded-xl border-2 border-green-300 mb-6">
            <div className="flex justify-center items-center space-x-2 mb-4">
              <span className="text-4xl">💰</span>
              <span className="text-3xl font-bold text-green-600">
                R$ {totalEarned} em bônus acumulados!
              </span>
              <span className="text-4xl">💰</span>
            </div>
          </div>

          {/* Offer details */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">
              🚀 OFERTA ESPECIAL - APENAS HOJE! 🚀
            </h2>
            
            <div className="bg-yellow-100 p-6 rounded-xl border-2 border-yellow-300">
              <p className="text-xl text-gray-700 mb-4">
                Sua <strong>Página Profissional</strong> completa:
              </p>
              <div className="text-lg text-gray-600 space-y-2">
                <p className="line-through text-red-500">
                  De: R$ 197,00
                </p>
                <p className="text-3xl font-bold text-green-600">
                  Por apenas: R$ 97,00
                </p>
                <p className="text-sm text-gray-500">
                  (Desconto de R$ {totalEarned} aplicado!)
                </p>
              </div>
            </div>

            {/* What's included */}
            <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
              <h3 className="text-xl font-bold text-blue-800 mb-4">
                🎁 O que está incluso:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="space-y-2">
                  <p className="flex items-center">
                    <span className="text-green-500 mr-2">✅</span>
                    Página completa personalizada
                  </p>
                  <p className="flex items-center">
                    <span className="text-green-500 mr-2">✅</span>
                    Link inteligente
                  </p>
                  <p className="flex items-center">
                    <span className="text-green-500 mr-2">✅</span>
                    QR Code de agendamento
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="flex items-center">
                    <span className="text-green-500 mr-2">✅</span>
                    Suporte para ativar
                  </p>
                  <p className="flex items-center">
                    <span className="text-green-500 mr-2">✅</span>
                    Templates para WhatsApp
                  </p>
                  <p className="flex items-center">
                    <span className="text-green-500 mr-2">✅</span>
                    Design responsivo
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={handleClaimClick}
              className="bg-gradient-to-r from-green-500 to-blue-600 text-white text-2xl font-bold py-6 px-12 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 animate-pulse"
            >
              🐾 QUERO MINHA PÁGINA POR R$ 97! 🐾
            </button>

            <p className="text-sm text-gray-500">
              Clique no botão e fale direto com nosso time no WhatsApp
            </p>
          </div>
        </div>

        {/* Final message */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            🦴 Seu pet vai agradecer!
          </h3>
          <p className="text-lg text-gray-600">
            🐶 Estamos prontos para deixar seu petshop mais moderno do que nunca.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FinalOffer;
