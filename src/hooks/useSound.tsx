
import { useRef, useCallback } from 'react';

export const useSound = () => {
  const cashSoundRef = useRef<HTMLAudioElement | null>(null);
  const successSoundRef = useRef<HTMLAudioElement | null>(null);
  const clickSoundRef = useRef<HTMLAudioElement | null>(null);

  const initializeSounds = useCallback(() => {
    if (!cashSoundRef.current) {
      // Som mais agradável de moedas/cash - mais suave e melodioso
      cashSoundRef.current = new Audio('data:audio/wav;base64,UklGRiQEAABXQVZFZm10IBAAAAABAAEAgD4AAIA+AAABAAgAZGF0YQAEAAC2tbW1uLi4ubi4urq6u7u7vLy8vb29vr6+v7+/wMDAwcHBwsLCw8PDxMTExcXFxsbGx8fHyMjIycnJysrKy8vLzMzMzc3Nzs7Oz8/P0NDQ0dHR0tLS09PT1NTU1dXV1tbW19fX2NjY2dnZ2tra29vb3Nzc3d3d3t7e39/f4ODg4eHh4uLi4+Pj5OTk5eXl5ubm5+fn6Ojo6enp6urq6+vr7Ozs7e3t7u7u7+/v8PDw8fHx8vLy8/Pz9PT09fX19vb29/f3+Pj4+fn5+vr6+/v7/Pz8/f39/v7+////AAAA');
      
      // Som de sucesso mais agradável
      successSoundRef.current = new Audio('data:audio/wav;base64,UklGRiQEAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAEAAA=');
      
      // Som de click suave
      clickSoundRef.current = new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IAAAAAEAAQBErAAAiFgBAAIAEABkYXRhBAAAAAEA');
      
      // Ajustar volume dos sons para serem mais suaves
      if (cashSoundRef.current) cashSoundRef.current.volume = 0.6;
      if (successSoundRef.current) successSoundRef.current.volume = 0.5;
      if (clickSoundRef.current) clickSoundRef.current.volume = 0.4;
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
