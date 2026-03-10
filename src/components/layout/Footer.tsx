export default function Footer() {
  return (
    <footer style={{ padding: '2rem 0', marginTop: '4rem' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <small>© {new Date().getFullYear()} Carlos Arce. Todos los derechos reservados.</small>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <a href="https://github.com/carlosarce10" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/carlos-arce-21b739235" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
