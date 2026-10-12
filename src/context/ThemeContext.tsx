import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeMode = 'modern' | 'minecraft';

interface ThemeContextType {
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
  toggleTheme: () => void;
  soundEnabled: boolean;
  setSoundEnabled: (enabled: boolean) => void;
  playPixelSound: (type?: 'click' | 'success' | 'equip') => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('pt_indokreasi_theme');
      if (saved === 'minecraft' || saved === 'modern') return saved;
    }
    return 'modern';
  });

  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  useEffect(() => {
    localStorage.setItem('pt_indokreasi_theme', themeMode);
    if (themeMode === 'minecraft') {
      document.body.classList.add('theme-minecraft');
    } else {
      document.body.classList.remove('theme-minecraft');
    }
  }, [themeMode]);

  const toggleTheme = () => {
    const nextMode = themeMode === 'modern' ? 'minecraft' : 'modern';
    setThemeMode(nextMode);
    if (soundEnabled) {
      playPixelSound('equip');
    }
  };

  // Pure Web Audio API 8-bit sound synthesizer (no external audio files needed)
  const playPixelSound = (type: 'click' | 'success' | 'equip' = 'click') => {
    if (!soundEnabled || typeof window === 'undefined') return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();

      if (type === 'click') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(300, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.05);
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.05);
      } else if (type === 'success') {
        const notes = [261.63, 329.63, 392.00, 523.25]; // C E G C
        notes.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'square';
          const start = ctx.currentTime + idx * 0.08;
          osc.frequency.setValueAtTime(freq, start);
          gain.gain.setValueAtTime(0.08, start);
          gain.gain.exponentialRampToValueAtTime(0.001, start + 0.12);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(start);
          osc.stop(start + 0.12);
        });
      } else if (type === 'equip') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(220, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.12, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.1);
      }
    } catch {
      // AudioContext could be blocked by autoplay policies until user clicks
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        themeMode,
        setThemeMode,
        toggleTheme,
        soundEnabled,
        setSoundEnabled,
        playPixelSound,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
