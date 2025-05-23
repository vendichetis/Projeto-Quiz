import React, { useState } from 'react';
import PetMascot from '../components/PetMascot';
import QuizQuestion from '../components/QuizQuestion';
import FinalOffer from '../components/FinalOffer';

const Index = () => {
  const [currentStep, setCurrentStep] = useState<'intro' | 'quiz' | 'offer'>('intro');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [earnedMoney, setEarnedMoney] = useState(0);

  const questions = [
    {
      question: "Seu petshop já atende clientes pelo WhatsApp?",
      options: ["Sim", "Ainda não"],
      insight: "Uma página própria facilita agendamentos e evita perder clientes."
    },
    {
      question: "Você gostaria de agendar mais serviços sem depender do Instagram?",
      options: ["Claro!", "Não sei como"],
      insight: "Uma página própria facilita agendamentos e evita perder clientes."
    },
    {
      question: "Seus clientes sabem todos os serviços que você oferece?",
      options: ["Sim", "Acho que não"],
      insight: "Uma página bem feita deixa tudo claro e vende por você!"
    },
    {
      question: "Você já pensou em colocar um QR Code na recepção para agendamento automático?",
      options: ["Que legal!", "Nunca pensei nisso"],
      insight: "Vamos te entregar isso como bônus."
    },
    {
      question: "Sente que seu petshop poderia parecer mais profissional online?",
      options: ["Sim", "Um pouco"],
      insight: "Uma página bem feita mostra que seu negócio é sério e confiável."
    },
    {
      question: "Já perdeu um cliente porque demorou para responder?",
      options: ["Já", "Sim, muitos"],
      insight: "Com botão de agendamento, isso não acontece mais!"
    },
    {
      question: "Você tem alguma promoção que gostaria de divulgar?",
      options: ["Sim", "Não no momento"],
      insight: "Sua página terá espaço para promoções, com botão direto no WhatsApp."
    },
    {
      question: "Você usa Instagram, mas sente que falta algo mais completo?",
      options: ["Sim", "Exatamente isso"],
      insight: "O Insta é ótimo, mas uma página organiza tudo em um só lugar."
    },
    {
      question: "Já viu petshops com site próprio e achou profissional?",
      options: ["Sim", "Fiquei com vontade também"],
      insight: "Agora chegou sua vez de ter o seu!"
    },
    {
      question: "Quer ser um dos selecionados para receber esse kit profissional?",
      options: ["Com certeza!", "Quero saber mais"],
      insight: "Ótimo! Você acaba de acumular R$100 em bônus!"
    }
  ];

  const handleStartQuiz = () => {
    setCurrentStep('quiz');
  };

  const handleAnswer = (answer: string) => {
    setEarnedMoney(prev => prev + 10);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setCurrentStep('offer');
    }
  };

  const handleClaimOffer = () => {
    const message = encodeURIComponent(
      `Olá! Acabei de completar o Quiz Pet do Futuro e ganhei R$100 em bônus! Quero garantir minha página profissional por R$97. Vamos conversar? 🐾`
    );
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  if (currentStep === 'intro') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-blue-50 to-pink-100 p-4 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute text-8xl text-blue-300 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            >
              🐾
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center relative z-10 flex flex-col justify-center min-h-screen pt-16">
          {/* Main mascot */}
          <div className="mb-8">
            <PetMascot isHappy={true} size="large" />
          </div>

          {/* Welcome text */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8 border-4 border-yellow-400">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              Olá! 🐶 Bem-vindo ao Quiz Pet do Futuro!
            </h1>

            <div className="text-lg text-gray-700 space-y-4 mb-6">
              <p>
                Estamos selecionando petshops para um projeto especial: <strong>"Petshops do Futuro"</strong>
              </p>
              <p>
                Participe do nosso quiz divertido e <strong>acumule bônus surpresa</strong> a cada pergunta respondida!
              </p>
            </div>

            <div className="bg-yellow-100 p-6 rounded-xl border-2 border-yellow-300 mb-6">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <span className="text-3xl">🎯</span>
                <span className="text-xl font-bold text-yellow-700">Como funciona:</span>
              </div>
              <div className="text-gray-700 space-y-2">
                <p>• Responda 10 perguntas rápidas sobre seu petshop</p>
                <p>• Ganhe R$10 fictícios a cada resposta</p>
                <p>• Acumule até R$100 em bônus</p>
                <p>• Receba uma oferta especial no final! 🎁</p>
              </div>
            </div>

            <button
              onClick={handleStartQuiz}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-2xl font-bold py-6 px-12 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              🎉 Começar Quiz! 🎉
            </button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="bg-white p-4 rounded-xl shadow-md">
              <div className="text-3xl mb-2">⚡</div>
              <div className="font-bold text-gray-700">Rápido</div>
              <div className="text-sm text-gray-600">Apenas 2 minutos</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md">
              <div className="text-3xl mb-2">🎁</div>
              <div className="font-bold text-gray-700">Premiado</div>
              <div className="text-sm text-gray-600">Bônus garantido</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md">
              <div className="text-3xl mb-2">🚀</div>
              <div className="font-bold text-gray-700">Especial</div>
              <div className="text-sm text-gray-600">Oferta exclusiva</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentStep === 'quiz') {
    return (
      <QuizQuestion
        question={questions[currentQuestion].question}
        options={questions[currentQuestion].options}
        onAnswer={handleAnswer}
        questionNumber={currentQuestion + 1}
        totalQuestions={questions.length}
        earnedMoney={earnedMoney}
      />
    );
  }

  return (
    <FinalOffer
      totalEarned={earnedMoney}
      onClaim={handleClaimOffer}
    />
  );
};

export default Index;
