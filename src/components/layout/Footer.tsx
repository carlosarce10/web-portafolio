export default function Footer() {
  return (
    <footer style={{ padding: '2rem 0', marginTop: '4rem' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <small>© {new Date().getFullYear()} Tu Nombre. Todos los derechos reservados.</small>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:tucorreo@ejemplo.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
