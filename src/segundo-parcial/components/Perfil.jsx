function Perfil() {
  return (
    <section id="perfil" className="bg-light py-5">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-12 col-md-4 text-center">
            <img
              src="https://api.dicebear.com/9.x/notionists/svg?seed=JesusRios&backgroundColor=b6e3f4"
              alt="Foto de perfil de Jesús Manuel Ríos Mejía"
              className="img-fluid rounded-circle border border-4 border-primary shadow"
              style={{ maxWidth: '250px' }}
            />
          </div>
          <div className="col-12 col-md-8 text-center text-md-start">
            <span className="badge text-bg-success mb-2">
              <i className="bi bi-circle-fill me-1 small"></i>
              Aprendiendo todos los días
            </span>
            <h1 className="display-5 fw-bold">Jesús Manuel Ríos Mejía</h1>
            <h2 className="h4 text-primary">
              Estudiante de Ing. de Sistemas · UFPSO
            </h2>
            <p className="lead mt-3">
              Tengo 18 años y me encanta programar. Me defiendo con lenguajes
              web, Java y MySQL, y todo lo que hago lo guardo con Git.
              Estoy aprendiendo React y la verdad me está gustando mucho.
            </p>
            <ul className="list-unstyled mb-4">
              <li>
                <i className="bi bi-geo-alt-fill text-danger me-2"></i>
                Ocaña, Norte de Santander
              </li>
              <li>
                <i className="bi bi-envelope-fill text-warning me-2"></i>
                jmriosm@ufpso.edu.co
              </li>
            </ul>
            <a href="#contacto" className="btn btn-primary btn-lg me-2">
              <i className="bi bi-send me-2"></i>Contáctame
            </a>
            <a
              href="https://github.com/jmriosm-ship-it"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-dark btn-lg"
            >
              <i className="bi bi-github me-2"></i>GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Perfil
