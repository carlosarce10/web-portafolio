import { create } from 'zustand';

type Theme = 'light' | 'dark';
type State = {
  theme: Theme;
  toggle: () => void;
};

const initialTheme: Theme = (() => {
  try {
    const saved = localStorage.getItem('theme') as Theme | null;
    if (saved) return saved;
    return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  } catch {
    return 'light';
  }
})();

export const useThemeStore = create<State>((set) => ({
  theme: initialTheme,
  toggle: () => set(s => ({ theme: s.theme === 'dark' ? 'light' : 'dark' })),
}));
