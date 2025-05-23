import { useRef, useCallback } from 'react';

export const useSound = () => {
  const successSoundRef = useRef<HTMLAudioElement | null>(null);
  const clickSoundRef = useRef<HTMLAudioElement | null>(null);

  const initializeSounds = useCallback(() => {
    if (!successSoundRef.current) {
      successSoundRef.current = new Audio('/sounds/success.mp3');
      successSoundRef.current.volume = 0.6;

      clickSoundRef.current = new Audio('/sounds/click.mp3');
      clickSoundRef.current.volume = 0.4;
    }
  }, []);

  const playCashSound = useCallback(() => {
    initializeSounds();
    if (successSoundRef.current) {
      successSoundRef.current.currentTime = 0;
      successSoundRef.current.play().catch(console.log);
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
