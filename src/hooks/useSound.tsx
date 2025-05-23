
import { useRef, useCallback } from 'react';

export const useSound = () => {
  const cashSoundRef = useRef<HTMLAudioElement | null>(null);
  const successSoundRef = useRef<HTMLAudioElement | null>(null);
  const clickSoundRef = useRef<HTMLAudioElement | null>(null);

  const initializeSounds = useCallback(() => {
    if (!cashSoundRef.current) {
      cashSoundRef.current = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmAZBjiJ0/LNeyoGJHfH8N2QQAoUXrTp66hVFApGn+DyvmAZBjiJ0/LNeyoGJHfH8N2QQAoUXrTp66hVFApGn+DyvmAZBjiJ0/LNeyoGJHfH8N2QQAoUXrTp66hVFApGn+DyvmAZBjiJ0/LNeyoGJHfH8N2QQAoUXrTp66hVFApGn+DyvmAZBjiJ0/LNeyoGJHfH8N2QQAoUXrTp66hVFApGn+DyvmAZBjiJ0/LNeyoGJHfH8N2QQAoUXrTp66hVFApGn+DyvmAZBjiJ0/LNeyoGJHfH8N2QQAoUXrTp66hVFApGn+DyvmAZBjiJ0/LNeyoGJHfH8N2QQAoUXrTp66hVFApGn+DyvmAZBjiJ0/LNeyoGJHfH8N2QQAoUXrTp66hVFApGn+DyvmAZBjiJ0/LNeyoGJHfH8N2QQAoUXrTp66hVFApGn+DyvmAZBjiJ0/LNeyoGJHfH8N2QQAoUXrTp66hVFApGn+DyvmAZBjiJ0/LNeyoGJHfH8N2QQAoUXrTp66hVFApGn+DyvmAZBjiJ0/LNeyoGJHfH8N2QQAoUXrTp66hVFA==');
      successSoundRef.current = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmAZBjiJ0/LNeyoGJHfH8N2QQAoUXrTp66hVFApGn+DyvmAZBjiJ0/LNeyoGJHfH8N2QQAoUXrTp66hVFApGn+DyvmAZBjiJ0/LNeyoGJHfH8N2QQAoUXrTp66hVFApGn+DyvmAZBjiJ0/LNeyoGJHfH8N2QQAoUXrTp66hVFApGn+DyvmAZBjiJ0/LNeyoGJHfH8N2QQAoUXrTp66hVFApGn+DyvmAZBjiJ0/LNeyoGJHfH8N2QQAoUXrTp66hVFApGn+DyvmAZBjiJ0/LNeyoGJHfH8N2QQAoUXrTp66hVFApGn+DyvmAZBjiJ0/LNeyoGJHfH8N2QQAoUXrTp66hVFApGn+DyvmAZBjiJ0/LNeyoGJHfH8N2QQAoUXrTp66hVFApGn+DyvmAZBjiJ0/LNeyoGJHfH8N2QQAoUXrTp66hVFApGn+DyvmAZBjiJ0/LNeyoGJHfH8N2QQAoUXrTp66hVFApGn+DyvmAZBjiJ0/LNeyoGJHfH8N2QQAoUXrTp66hVFApGn+DyvmAZBjiJ0/LNeyoGJHfH8N2QQAoUXrTp66hVFA==');
      clickSoundRef.current = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmAZBjiJ0/LNeyoGJHfH8N2QQAoUXrTp66hVFApGn+DyvmAZBjiJ0/LNeyoGJHfH8N2QQAoUXrTp66hVFApGn+DyvmAZBjiJ0/LNeyoGJHfH8N2QQAoUXrTp66hVFApGn+DyvmAZBjiJ0/LNeyoGJHfH8N2QQAoUXrTp66hVFApGn+DyvmAZBjiJ0/LNeyoGJHfH8N2QQAoUXrTp66hVFApGn+DyvmAZBjiJ0/LNeyoGJHfH8N2QQAoUXrTp66hVFApGn+DyvmAZBjiJ0/LNeyoGJHfH8N2QQAoUXrTp66hVFApGn+DyvmAZBjiJ0/LNeyoGJHfH8N2QQAoUXrTp66hVFApGn+DyvmAZBjiJ0/LNeyoGJHfH8N2QQAoUXrTp66hVFApGn+DyvmAZBjiJ0/LNeyoGJHfH8N2QQAoUXrTp66hVFApGn+DyvmAZBjiJ0/LNeyoGJHfH8N2QQAoUXrTp66hVFApGn+DyvmAZBjiJ0/LNeyoGJHfH8N2QQAoUXrTp66hVFApGn+DyvmAZBjiJ0/LNeyoGJHfH8N2QQAoUXrTp66hVFA==');
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
