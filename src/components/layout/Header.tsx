import React, { useMemo, useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useThemeStore } from '../../store/themeStore';

export default function Header() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const theme = useThemeStore((s) => s.theme);
  const toggle = useThemeStore((s) => s.toggle);

  const nav = useMemo(
    () => [
      { to: '/', label: t('nav.home') },
      { to: '/projects', label: t('nav.projects') },
      { to: '/skills', label: t('nav.skills') },
      { to: '/contact', label: t('nav.contact') },
    ],
    [t]
  );

  const go = useCallback(
    (to: string) => {
      navigate(to);
      setOpen(false);
    },
    [navigate]
  );

  const toggleLang = () => {
    const next = i18n.language.startsWith('es') ? 'en' : 'es';
    i18n.changeLanguage(next);
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav__brand">
          <Link to="/">my-portafolio</Link>
        </div>

        <div className="nav__menu" style={{ display: open ? 'flex' : undefined }}>
          {nav.map((i) => (
            <button key={i.to} className="nav__link" onClick={() => go(i.to)}>
              {i.label}
            </button>
          ))}
        </div>

        <div className="nav__controls">
          {/* Switch de idioma */}
          <button className="btn btn--ghost" onClick={toggleLang} aria-label="Language">
            {i18n.language.startsWith('es') ? 'EN' : 'ES'}
          </button>

          {/* Switch de tema claro/oscuro (usa tu store existente) */}
          <button
            className="btn btn--ghost"
            onClick={toggle}
            aria-label="Toggle theme"
            title={theme === 'light' ? 'Dark mode' : 'Light mode'}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>

          <button className="btn btn--ghost nav__toggle" onClick={() => setOpen((v) => !v)} aria-label="Menú">
            ☰
          </button>
        </div>
      </nav>
    </header>
  );
}