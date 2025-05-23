// src/hooks/useSound.tsx
import { useRef, useCallback } from 'react';

export const useSound = () => {
  const offerRef = useRef<HTMLAudioElement | null>(null);   // Som da oferta final
  const successRef = useRef<HTMLAudioElement | null>(null); // Som de bonificação (cash)
  const clickRef = useRef<HTMLAudioElement | null>(null);   // Som de clique

  const initializeSounds = useCallback(() => {
    if (!offerRef.current) {
      offerRef.current = new Audio('/sounds/quiz-completed.mp3');
      offerRef.current.volume = 1.0;
    }
    if (!successRef.current) {
      successRef.current = new Audio('/quiz-completed.mp3');
      successRef.current.volume = 0.5;
    }
    if (!clickRef.current) {
      clickRef.current = new Audio('/sounds/success.mp3');
      clickRef.current.volume = 0.4;
    }
  }, []);

  const playOfferSound = useCallback(() => {
    initializeSounds();
    if (offerRef.current) {
      offerRef.current.currentTime = 0;
      offerRef.current.play().catch(console.log);
    }
  }, [initializeSounds]);

  const playSuccessSound = useCallback(() => {
    initializeSounds();
    if (successRef.current) {
      successRef.current.currentTime = 0;
      successRef.current.play().catch(console.log);
    }
  }, [initializeSounds]);

  const playClickSound = useCallback(() => {
    initializeSounds();
    if (clickRef.current) {
      clickRef.current.currentTime = 0;
      clickRef.current.play().catch(console.log);
    }
  }, [initializeSounds]);

  return {
    playOfferSound,       // quiz-completed.mp3 — Som da oferta final
    playSuccessSound,     // quiz-completed.mp3 — Som de bonificação
    playClickSound        // success.mp3 — Som de clique
  };
};
