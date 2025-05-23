import { useRef, useCallback } from 'react';

export const useSound = () => {
  const quizCompletedSoundRef = useRef<HTMLAudioElement | null>(null);
  const offerSoundRef = useRef<HTMLAudioElement | null>(null);
  const clickSoundRef = useRef<HTMLAudioElement | null>(null);

  const initializeSounds = useCallback(() => {
    if (!quizCompletedSoundRef.current) {
      quizCompletedSoundRef.current = new Audio('/sounds/quiz-completed.mp3');
      quizCompletedSoundRef.current.volume = 0.6;
    }

    if (!offerSoundRef.current) {
      offerSoundRef.current = new Audio('/sounds/offer-special.mp3');
      offerSoundRef.current.volume = 0.6;
    }

    if (!clickSoundRef.current) {
      clickSoundRef.current = new Audio('/sounds/click.mp3');
      clickSoundRef.current.volume = 0.4;
    }
  }, []);

  const playQuizCompletedSound = useCallback(() => {
    initializeSounds();
    if (quizCompletedSoundRef.current) {
      quizCompletedSoundRef.current.currentTime = 0;
      quizCompletedSoundRef.current.play().catch(console.log);
    }
  }, [initializeSounds]);

  const playOfferSound = useCallback(() => {
    initializeSounds();
    if (offerSoundRef.current) {
      offerSoundRef.current.currentTime = 0;
      offerSoundRef.current.play().catch(console.log);
    }
  }, [initializeSounds]);

  const playClickSound = useCallback(() => {
    initializeSounds();
    if (clickSoundRef.current) {
      clickSoundRef.current.currentTime = 0;
      clickSoundRef.current.play().catch(console.log);
    }
  }, [initializeSounds]);

  return {
    playQuizCompletedSound,
    playOfferSound,
    playClickSound,
  };
};
