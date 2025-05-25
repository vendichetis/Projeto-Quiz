import React, { useState } from 'react';
import PetMascot from '../components/PetMascot';
import QuizQuestion from '../components/QuizQuestion';
import FinalOffer from '../components/FinalOffer';

const questions = [
  {
    question: "Seu petshop já atende clientes pelo WhatsApp?",
    options: ["Sim, usamos bastante!", "Ainda não, mas quero começar"],
    insight: "Ter uma página própria facilita agendamentos e evita perder clientes importantes."
  },
  {
    question: "Quer aumentar o número de agendamentos sem depender só do Instagram?",
    options: ["Com certeza!", "Nunca pensei nisso direito"],
    insight: "Uma página profissional ajuda a captar mais clientes direto, sem intermediários."
  },
  {
    question: "Seus clientes sabem exatamente todos os serviços que você oferece?",
    options: ["Sim, divulgamos tudo", "Acho que poderia melhorar"],
    insight: "Uma página bem feita deixa tudo claro e vende por você 24h por dia."
  },
  {
    question: "Já pensou em colocar um QR Code na recepção para agendamentos automáticos?",
    options: ["Adorei essa ideia!", "Nunca ouvi falar disso"],
    insight: "Isso aumenta muito a praticidade para o cliente – e vamos te entregar como bônus!"
  },
  {
    question: "Sente que seu petshop poderia parecer mais profissional online?",
    options: ["Sim, quero melhorar!", "Um pouco, sim"],
    insight: "Uma página profissional transmite confiança e seriedade para seus clientes."
  },
  {
    question: "Já perdeu clientes por demora na resposta?",
    options: ["Sim, e isso dói muito", "Sim, mais do que queria"],
    insight: "Com um botão de agendamento direto, você nunca mais perde uma oportunidade."
  },
  {
    question: "Você tem promoções que gostaria de divulgar melhor?",
    options: ["Sim, várias!", "Não no momento"],
    insight: "Sua página terá espaço especial para promoções, com contato direto no WhatsApp."
  },
  {
    question: "Usa Instagram, mas sente que falta algo mais completo para seu negócio?",
    options: ["Sim, isso mesmo", "Sempre quis algo assim"],
    insight: "Instagram é ótimo, mas uma página profissional organiza tudo num só lugar."
  },
  {
    question: "Já viu petshops com site próprio e achou profissional?",
    options: ["Sim, fiquei com vontade", "Sim, e quero um também"],
    insight: "Agora é sua vez de ter a sua página, fácil e com muito estilo."
  },
  {
    question: "Quer ser um dos selecionados para receber esse kit profissional?",
    options: ["Com certeza! Quero o bônus", "Quero saber mais detalhes"],
    insight: "Parabéns! Você acaba de acumular R$100 em bônus exclusivos!"
  }
];

const Index = () => {
  const [currentStep, setCurrentStep] = useState<'intro' | 'quiz' | 'offer'>('intro');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [earnedMoney, setEarnedMoney] = useState(0);

  const handleStartQuiz = () => {
    setCurrentStep('quiz');
  };

  const handleAnswer = (answer: string) => {
    // Aqui você pode criar lógica para respostas específicas, se quiser
    setEarnedMoney(prev => prev + 10);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setCurrentStep('offer');
    }
  };

  const handleClaimOffer = () => {
    const message = encodeURIComponent(
      `Olá! Acabei de completar o Quiz Pet do Futuro e ganhei R$${earnedMoney} em bônus! Quero garantir minha página profissional por R$97. Vamos conversar? 🐾`
    );
    window.open(`https://wa.me/5548991219648?text=${message}`, '_blank');
  };

  if (currentStep === 'intro') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-blue-50 to-pink-100 p-4 relative overflow-hidden">
        {/* Background paw prints */}
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
          <div className="mb-8">
            <PetMascot isHappy={true} size="large" />
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8 border-4 border-yellow-400">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              Olá! 🐶 Bem-vindo ao Quiz Pet do Futuro!
            </h1>

            <p className="text-lg text-gray-700 mb-6">
              Estamos selecionando petshops para um projeto especial: <strong>"Petshops do Futuro"</strong>.<br />
              Participe do nosso quiz rápido e divertido e acumule bônus surpresa a cada pergunta respondida!
            </p>

            <div className="bg-yellow-100 p-6 rounded-xl border-2 border-yellow-300 mb-6">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <span className="text-3xl">🎯</span>
                <span className="text-xl font-bold text-yellow-700">Como funciona:</span>
              </div>
              <ul className="text-gray-700 list-disc list-inside space-y-1">
                <li>Responda 10 perguntas rápidas sobre seu petshop</li>
                <li>Ganhe R$10 a cada resposta</li>
                <li>Acumule até R$100 em bônus</li>
                <li>Receba uma oferta especial no final! 🎁</li>
              </ul>
            </div>

            <button
              onClick={handleStartQuiz}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-2xl font-bold py-6 px-12 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Começar Quiz!
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="bg-white p-4 rounded-xl shadow-md">
              <div className="text-3xl mb-2">⚡</div>
              <div className="font-bold text-gray-700">Rápido</div>
              <div className="text-sm text-gray-600">Só leva 2 minutos</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md">
              <div className="text-3xl mb-2">🎁</div>
              <div className="font-bold text-gray-700">Premiado</div>
              <div className="text-sm text-gray-600">Bônus garantido para você</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md">
              <div className="text-3xl mb-2">🚀</div>
              <div className="font-bold text-gray-700">Especial</div>
              <div className="text-sm text-gray-600">Oferta exclusiva no final</div>
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
        insight={questions[currentQuestion].insight}
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
