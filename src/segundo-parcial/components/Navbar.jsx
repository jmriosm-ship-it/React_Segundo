function Navbar() {
  const enlaces = [
    { href: '#perfil', texto: 'Perfil', icono: 'bi-person-circle' },
    { href: '#sobre-mi', texto: 'Sobre mí', icono: 'bi-chat-quote' },
    { href: '#formacion', texto: 'Formación', icono: 'bi-mortarboard' },
    { href: '#habilidades', texto: 'Habilidades', icono: 'bi-code-slash' },
    { href: '#contacto', texto: 'Contacto', icono: 'bi-envelope' },
  ]

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#perfil">
          <i className="bi bi-braces-asterisk text-warning me-2"></i>
          Jesús <span className="text-primary">Ríos</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menuPrincipal"
          aria-controls="menuPrincipal"
          aria-expanded="false"
          aria-label="Abrir menú"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="menuPrincipal">
          <ul className="navbar-nav ms-auto">
            {enlaces.map((e) => (
              <li className="nav-item" key={e.href}>
                <a className="nav-link" href={e.href}>
                  <i className={`bi ${e.icono} me-1`}></i>
                  {e.texto}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
