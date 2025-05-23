
import { useRef, useCallback } from 'react';

export const useSound = () => {
  const cashSoundRef = useRef<HTMLAudioElement | null>(null);
  const successSoundRef = useRef<HTMLAudioElement | null>(null);
  const clickSoundRef = useRef<HTMLAudioElement | null>(null);

  const initializeSounds = useCallback(() => {
    if (!cashSoundRef.current) {
      // Som da caixa registradora do arquivo enviado pelo usuário
      cashSoundRef.current = new Audio('/sounds/cash-register.mp3');
      
      // Som de sucesso mais suave
      successSoundRef.current = new Audio('data:audio/wav;base64,UklGRiQEAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAEAAA=');
      
      // Som de click suave
      clickSoundRef.current = new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IAAAAAEAAQBErAAAiFgBAAIAEABkYXRhBAAAAAEA');
      
      // Ajustar volume dos sons
      if (cashSoundRef.current) cashSoundRef.current.volume = 0.7;
      if (successSoundRef.current) successSoundRef.current.volume = 0.5;
      if (clickSoundRef.current) clickSoundRef.current.volume = 0.3;
    }
  }, []);

  const playCashSound = useCallback(() => {
    initializeSounds();
    if (cashSoundRef.current) {
      cashSoundRef.current.currentTime = 0;
      cashSoundRef.current.play().catch(console.log);
    }
  }, [initializeSounds]);

  const playSuccessSound = useCallback(() => {
    initializeSounds();
    if (successSoundRef.current) {
      successSoundRef.current.currentTime = 0;
      successSoundRef.current.play().catch(console.log);
    }
  }, [initializeSounds]);

  const playClickSound = useCallback(() => {
    initializeSounds();
    if (clickSoundRef.current) {
      clickSoundRef.current.currentTime = 0;
      clickSoundRef.current.play().catch(console.log);
    }
  }, [initializeSounds]);

  return { playCashSound, playSuccessSound, playClickSound };
};
