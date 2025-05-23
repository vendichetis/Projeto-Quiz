
import React from 'react';
import PetMascot from './PetMascot';

interface FinalOfferProps {
  totalEarned: number;
  onClaim: () => void;
}

const FinalOffer: React.FC<FinalOfferProps> = ({ totalEarned, onClaim }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-yellow-50 to-blue-100 p-4 relative overflow-hidden">
      {/* Celebratory background */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-4xl animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1 + Math.random()}s`
            }}
          >
            {['🎉', '🐾', '💰', '✨', '🎊'][Math.floor(Math.random() * 5)]}
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <PetMascot isHappy={true} size="large" />
          <h1 className="text-4xl font-bold text-gray-800 mt-4 mb-2">
            🎉 Parabéns! Você completou o Quiz Pet do Futuro!
          </h1>
          <div className="bg-yellow-100 inline-block px-6 py-3 rounded-full border-3 border-yellow-400">
            <span className="text-2xl font-bold text-yellow-700">
              💰 Acumulou R$ {totalEarned} em bônus!
            </span>
          </div>
        </div>

        {/* Offer Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-yellow-400 relative">
          {/* Ribbon */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-6 py-2 rounded-full font-bold text-lg">
            OFERTA ESPECIAL! 🚀
          </div>

          <div className="text-center mt-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Sua Página Profissional de Petshop
            </h2>
            
            <div className="mb-6">
              <div className="text-gray-500 line-through text-xl mb-2">
                De R$ 197,00
              </div>
              <div className="text-5xl font-bold text-green-600 mb-2">
                Por apenas R$ 97,00
              </div>
              <div className="text-lg text-gray-600">
                (R$ 100 de desconto com seus bônus!)
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-blue-50 p-6 rounded-xl mb-6">
              <h3 className="text-xl font-bold text-blue-800 mb-4">🎁 O que está incluído:</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="flex items-center space-x-2">
                  <span className="text-green-500 text-xl">✅</span>
                  <span>Página completa personalizada</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500 text-xl">✅</span>
                  <span>Link inteligente</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500 text-xl">✅</span>
                  <span>QR Code de agendamento</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500 text-xl">✅</span>
                  <span>Suporte para ativar</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500 text-xl">✅</span>
                  <span>Templates para WhatsApp</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500 text-xl">✅</span>
                  <span>Design responsivo</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={onClaim}
              className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white text-2xl font-bold py-6 px-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 mb-4"
            >
              🐾 QUERO MINHA PÁGINA POR R$ 97! 🐾
            </button>

            <p className="text-sm text-gray-600 mb-6">
              Clique no botão acima e fale direto com nosso time. Vamos criar a sua página juntos!
            </p>

            {/* Testimonial style message */}
            <div className="bg-yellow-50 p-4 rounded-xl border-2 border-yellow-200">
              <p className="text-lg font-medium text-gray-700">
                🦴 "Seu pet vai agradecer!"
              </p>
              <p className="text-gray-600">
                🐶 "Estamos prontos para deixar seu petshop mais moderno do que nunca."
              </p>
            </div>
          </div>
        </div>

        {/* Share section */}
        <div className="text-center mt-8">
          <button className="bg-purple-100 text-purple-700 px-6 py-3 rounded-full font-medium hover:bg-purple-200 transition-colors">
            📱 Compartilhar com um amigo dono de petshop
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinalOffer;
