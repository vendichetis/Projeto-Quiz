
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
    // Tocar som de sucesso quando a oferta aparece
    const timer = setTimeout(() => {
      playSuccessSound();
    }, 500);
    
    return () => clearTimeout(timer);
  }, [playSuccessSound]);

  const handleClaimClick = () => {
    playClickSound();
    setTimeout(() => {
      onClaim();
    }, 200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-yellow-50 to-blue-100 p-4 relative overflow-hidden">
      {/* Celebratory background */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-6xl animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              color: ['#FFD700', '#FF69B4', '#00CED1', '#32CD32'][Math.floor(Math.random() * 4)]
            }}
          >
            {['🎉', '🎊', '💰', '🏆', '⭐'][Math.floor(Math.random() * 5)]}
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        {/* Happy mascot */}
        <div className="mb-8">
          <PetMascot isHappy={true} size="large" />
        </div>

        {/* Main congratulations */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8 border-4 border-gold-400 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            🎉 Parabéns! Você completou o Quiz Pet do Futuro! 🎉
          </h1>
          
          <div className="bg-green-100 p-6 rounded-xl border-2 border-green-300 mb-6">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <span className="text-4xl">💰</span>
              <span className="text-3xl font-bold text-green-600">R$ {totalEarned} Acumulados!</span>
              <span className="text-4xl">💰</span>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl border-2 border-blue-300 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              🚀 Oferta Especial Só Para Você!
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Sua <strong>Página Profissional</strong> completa para petshop
            </p>
            <div className="flex items-center justify-center space-x-4 mb-4">
              <span className="text-xl text-gray-500 line-through">De R$ 197</span>
              <span className="text-3xl font-bold text-red-600">Por apenas R$ 97</span>
            </div>
            <p className="text-sm text-green-600 font-bold">
              Você economiza R$ {totalEarned} com seus bônus do quiz!
            </p>
          </div>

          {/* What's included */}
          <div className="bg-yellow-50 p-6 rounded-xl border-2 border-yellow-300 mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">🎁 O que está incluso:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✅</span>
                <span>Página completa personalizada</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✅</span>
                <span>Link inteligente</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✅</span>
                <span>QR Code de agendamento</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✅</span>
                <span>Suporte para ativar</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✅</span>
                <span>Templates de mensagens</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✅</span>
                <span>Integração com WhatsApp</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={handleClaimClick}
            className="bg-gradient-to-r from-green-500 to-blue-600 text-white text-2xl font-bold py-6 px-12 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 animate-pulse"
          >
            🐾 Quero minha página por R$97! 🐾
          </button>

          <p className="text-sm text-gray-600 mt-4">
            Clique no botão e fale direto com nosso time. Vamos criar sua página juntos!
          </p>
        </div>

        {/* Final cute message */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="text-4xl mb-2">🦴</div>
          <div className="font-bold text-gray-700 mb-2">Seu pet vai agradecer!</div>
          <div className="text-sm text-gray-600">
            Estamos prontos para deixar seu petshop mais moderno do que nunca.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalOffer;
