function Footer() {
  const anio = new Date().getFullYear()

  return (
    <footer className="bg-dark text-light py-4 border-top border-primary border-4">
      <div className="container text-center">
        <h3 className="h5 mb-1">Jesús Manuel Ríos Mejía</h3>
        <p className="text-secondary mb-3">
          Estudiante de Ing. de Sistemas · UFPSO · Ocaña. ¡Gracias por pasar por mi hoja de vida!
        </p>
        <div className="mb-3 fs-4">
          <a href="https://github.com/jmriosm-ship-it" target="_blank" rel="noreferrer" className="text-light me-3" aria-label="GitHub">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="text-primary me-3" aria-label="LinkedIn">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="mailto:jmriosm@ufpso.edu.co" className="text-warning me-3" aria-label="Correo">
            <i className="bi bi-envelope-fill"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="text-danger" aria-label="Instagram">
            <i className="bi bi-instagram"></i>
          </a>
        </div>
        <small className="text-secondary">© {anio} · Hecho con React y Bootstrap</small>
      </div>
    </footer>
  )
}

export default Footer
