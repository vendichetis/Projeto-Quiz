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
      question: "Você sente que seu petshop perde clientes por não ter uma forma fácil de agendar serviços?",
      options: ["Sim, isso acontece muito", "Ainda não, mas quero evitar esse problema"],
      insight: "Uma página própria facilita agendamentos e evita perder clientes."
    },
    {
      question: "Como você atende os agendamentos hoje?",
      options: ["Só pelo WhatsApp mesmo", "Uso Instagram e outras redes, mas é confuso"],
      insight: "Uma página organizada junta tudo e facilita o atendimento."
    },
    {
      question: "Já pensou em ter uma página profissional para o seu petshop, que funcione 24 horas?",
      options: ["Quero muito, mas não sei como", "Já tenho, mas não uso direito"],
      insight: "Seu petshop aberto o dia todo na internet, mesmo enquanto você descansa!"
    },
    {
      question: "Seus clientes sabem exatamente todos os serviços que você oferece?",
      options: ["Não, alguns ficam confusos", "Sim, divulgamos tudo direitinho"],
      insight: "Uma página clara vende por você, mostrando tudo que seu petshop oferece."
    },
    {
      question: "Você gostaria que seus clientes pudessem agendar direto pelo WhatsApp com um clique?",
      options: ["Sim! Isso facilitaria demais", "Nunca pensei nisso, mas parece bom"],
      insight: "Agendamentos automáticos que economizam seu tempo e conquistam mais clientes."
    },
    {
      question: "Você tem dificuldades para divulgar promoções ou novidades?",
      options: ["Sim, não sei como fazer direito", "Não, consigo divulgar bem hoje"],
      insight: "Sua página terá espaço especial para promoções e ofertas exclusivas."
    },
    {
      question: "Quanto tempo você perde respondendo mensagens para agendar e tirar dúvidas?",
      options: ["Muito tempo, atrapalha meu dia", "Consigo administrar, mas poderia ser melhor"],
      insight: "Com uma página, seus clientes se informam sozinhos, liberando seu tempo."
    },
    {
      question: "Já imaginou aumentar seu faturamento só melhorando sua presença digital?",
      options: ["Claro, quero muito isso!", "Nunca pensei, mas estou aberto a ideias"],
      insight: "Mais visibilidade = mais clientes = mais lucro para seu petshop."
    },
    {
      question: "Você acha que um site profissional deixaria seu petshop mais confiável para clientes novos?",
      options: ["Sim, com certeza!", "Talvez, não tenho certeza"],
      insight: "A primeira impressão conta muito, sua página transmite confiança."
    },
    {
      question: "Quer receber um kit com página profissional + bônus exclusivos para bombar seu petshop?",
      options: ["Sim! Quero garantir minha vaga", "Quero saber mais antes de decidir"],
      insight: "Ao completar o quiz, você acumula R$100 em bônus para investir no seu sucesso!"
    }
  ];

  const handleStartQuiz = () => {
    setCurrentStep('quiz');
  };

  const handleAnswer = (answer: string) => {
    // Cada resposta vale 10 reais de bônus
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
        {/* Animated background */}
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
          {/* Mascot */}
          <div className="mb-8">
            <PetMascot isHappy={true} size="large" />
          </div>

          {/* Intro text */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8 border-4 border-yellow-400">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
  Bem-vindo ao Quiz de Presença Digital para Petshops
</h1>

<div className="text-lg text-gray-700 space-y-4 mb-6">
  <p>Responda a 10 perguntas rápidas e descubra como fortalecer a presença online do seu petshop.</p>
  <p>Ao final, você poderá garantir bônus exclusivos para criar sua página profissional e aumentar suas vendas.</p>
</div>

<button
  onClick={handleStartQuiz}
  className="bg-blue-600 text-white text-2xl font-bold py-6 px-12 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
>
  Iniciar Quiz
</button>

          </div>

          {/* Trust section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="bg-white p-4 rounded-xl shadow-md">
              <div className="text-3xl mb-2">⚡</div>
              <div className="font-bold text-gray-700">Rápido</div>
              <div className="text-sm text-gray-600">Só 2 minutos para transformar seu negócio</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md">
              <div className="text-3xl mb-2">🎁</div>
              <div className="font-bold text-gray-700">Premiado</div>
              <div className="text-sm text-gray-600">Bônus exclusivos garantidos</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md">
              <div className="text-3xl mb-2">🚀</div>
              <div className="font-bold text-gray-700">Exclusivo</div>
              <div className="text-sm text-gray-600">Oferta especial só para participantes</div>
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
