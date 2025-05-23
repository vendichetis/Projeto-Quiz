// src/hooks/useSound.tsx
import { useRef, useCallback } from 'react';

export const useSound = () => {
  const offerRef = useRef<HTMLAudioElement | null>(null);         // quiz-completed.mp3 → som da oferta final
  const bonusRef = useRef<HTMLAudioElement | null>(null);         // success.mp3 → som de bonificação
  const clickRef = useRef<HTMLAudioElement | null>(null);         // som de clique

  const initializeSounds = useCallback(() => {
    if (!offerRef.current) {
      offerRef.current = new Audio('/sounds/quiz-completed.mp3');
      offerRef.current.volume = 0.6;
    }
    if (!bonusRef.current) {
      bonusRef.current = new Audio('/sounds/success.mp3');
      bonusRef.current.volume = 0.5;
    }
    if (!clickRef.current) {
      clickRef.current = new Audio('/sounds/click.mp3');
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

  const playBonusSound = useCallback(() => {
    initializeSounds();
    if (bonusRef.current) {
      bonusRef.current.currentTime = 0;
      bonusRef.current.play().catch(console.log);
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
    playOfferSound,   // toca quiz-completed.mp3 (oferta final)
    playBonusSound,   // toca success.mp3 (bonificação)
    playClickSound    // toca click.mp3 (clique)
  };
};
