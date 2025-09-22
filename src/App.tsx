import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { useThemeStore } from './store/themeStore';

export default function App() {
  const theme = useThemeStore((s) => s.theme);

  React.useEffect(() => {
    // Aplica el tema al <html> y persiste en localStorage
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('theme', theme);
    } catch {}
  }, [theme]);

  return (
    <div className="app">
      {/* Fondo global de blobs */}
      <div className="bg-blobs">
        <span className="bg-blobs__item bg-blobs__item--a" />
        <span className="bg-blobs__item bg-blobs__item--b" />
        <span className="bg-blobs__item bg-blobs__item--c" />
      </div>

      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}