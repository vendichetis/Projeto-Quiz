import React, { useState, useEffect } from 'react';
import PetMascot from './PetMascot';
import { useSound } from '../hooks/useSound';

interface FinalOfferProps {
  totalEarned: number;
  onClaim: () => void;
}

const FinalOffer: React.FC<FinalOfferProps> = ({ totalEarned, onClaim }) => {
  const { playSuccessSound, playClickSound } = useSound();
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Toca o som de sucesso ao carregar
  useEffect(() => {
    const timer = setTimeout(() => {
      playSuccessSound();
    }, 500);
    return () => clearTimeout(timer);
  }, [playSuccessSound]);

  // Exit intent (usuário tentando sair)
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 10 && !hasInteracted) {
        setShowExitPopup(true);
        setHasInteracted(true);
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasInteracted]);

  // Ação do botão
  const handleClaimClick = () => {
    playClickSound();
    setTimeout(() => {
      onClaim();
    }, 200);
  };

  // Componente do popup de saída
  const ExitPopup = () => (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-xl w-full text-center relative">
        <button
          className="absolute top-3 right-4 text-gray-400 hover:text-gray-700 text-xl"
          onClick={() => setShowExitPopup(false)}
        >
          ✖
        </button>
        <h2 className="text-2xl font-bold text-red-600 mb-4">😮 Espera um pouquinho!</h2>
        <p className="mb-3 text-gray-800">Antes de sair, aproveite sua oferta especial:</p>
        <p className="text-lg font-semibold text-green-700 mb-4">
          Página Profissional para Petshop por apenas <span className="text-2xl">R$ 97</span>
        </p>
        <p className="text-sm text-gray-500 mb-6">
          Você acumulou R$ {totalEarned} em bônus durante o quiz! 🐾
        </p>
        <button
          onClick={handleClaimClick}
          className="bg-gradient-to-r from-green-500 to-blue-600 text-white text-lg font-bold py-3 px-6 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition"
        >
          Quero Aproveitar Agora!
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-yellow-50 to-blue-100 p-4 relative overflow-hidden">

      {/* Emojis animados no fundo */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-6xl animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              color: ['#FFD700', '#FF69B4', '#00CED1', '#32CD32'][Math.floor(Math.random() * 4)],
            }}
          >
            {['🎉', '🎊', '💰', '🏆', '⭐'][Math.floor(Math.random() * 5)]}
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto relative z-10 text-center">

        {/* Mascote feliz */}
        <div className="mb-6 scale-90 md:scale-100">
          <PetMascot isHappy={true} size="large" />
        </div>

        {/* Mensagem de parabéns */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8 border-4 border-yellow-400 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            🎉 Parabéns! Você concluiu o Quiz Pet do Futuro! 🎉
          </h1>

          {/* Valor acumulado */}
          <div className="bg-green-100 p-6 rounded-xl border-2 border-green-300 mb-6">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <span className="text-4xl">💰</span>
              <span className="text-3xl font-bold text-green-600">R$ {totalEarned} Acumulados!</span>
              <span className="text-4xl">💰</span>
            </div>
          </div>

          {/* Oferta principal */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl border-2 border-blue-300 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">🚀 Oferta Exclusiva Para Você!</h2>
            <p className="text-lg text-gray-700 mb-4">
              Receba sua <strong>Página Profissional</strong> personalizada para petshop!
            </p>
            <div className="flex items-center justify-center space-x-4 mb-4">
              <span className="text-xl text-gray-500 line-through">De R$ 197</span>
              <span className="text-3xl font-bold text-red-600">Por apenas R$ 97</span>
            </div>
            <p className="text-sm text-green-600 font-bold">
              Use seu bônus de R$ {totalEarned} conquistado no quiz! 🎯
            </p>
          </div>

          {/* Benefícios inclusos */}
          <div className="bg-yellow-50 p-6 rounded-xl border-2 border-yellow-300 mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">🎁 Você vai receber:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
              {[
                'Página personalizada profissional',
                'Link inteligente para bio e redes sociais',
                'QR Code para agendamentos',
                'Suporte completo na ativação',
                'Templates prontos de mensagens',
                'Integração direta com WhatsApp',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <span className="text-green-500">✅</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Botão principal */}
          <button
            onClick={handleClaimClick}
            className="bg-gradient-to-r from-green-500 to-blue-600 text-white text-2xl font-bold py-6 px-12 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 animate-pulse"
          >
            🐾 Quero minha página por R$97! 🐾
          </button>

          <p className="text-sm text-gray-600 mt-4">
            Clique no botão acima e fale com nosso time para começar agora mesmo!
          </p>
        </div>

        {/* Mensagem final */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="text-4xl mb-2">🦴</div>
          <div className="font-bold text-gray-700 mb-2">Seu pet vai amar essa novidade!</div>
          <div className="text-sm text-gray-600">
            Modernize seu petshop e conquiste mais clientes com uma presença online profissional!
          </div>
        </div>
      </div>

      {/* Popup de saída */}
      {showExitPopup && <ExitPopup />}
    </div>
  );
};

export default FinalOffer;
