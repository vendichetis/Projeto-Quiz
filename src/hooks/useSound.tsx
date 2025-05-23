// src/hooks/useSound.tsx
import { useRef, useCallback } from 'react';

export const useSound = () => {
  const quizCompletedRef = useRef<HTMLAudioElement | null>(null);
  const successRef = useRef<HTMLAudioElement | null>(null);
  const clickRef = useRef<HTMLAudioElement | null>(null);

  const initializeSounds = useCallback(() => {
    if (!quizCompletedRef.current) {
      quizCompletedRef.current = new Audio('/sounds/quiz-completed.mp3');
      quizCompletedRef.current.volume = 0.6;
    }
    if (!successRef.current) {
      successRef.current = new Audio('/sounds/success.mp3');
      successRef.current.volume = 0.5;
    }
    if (!clickRef.current) {
      clickRef.current = new Audio('/sounds/success.mp3');
      clickRef.current.volume = 0.4;
    }
  }, []);

  const playQuizCompletedSound = useCallback(() => {
    initializeSounds();
    if (quizCompletedRef.current) {
      quizCompletedRef.current.currentTime = 0;
      quizCompletedRef.current.play().catch(console.log);
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

  return { playQuizCompletedSound, playSuccessSound, playClickSound };
};
