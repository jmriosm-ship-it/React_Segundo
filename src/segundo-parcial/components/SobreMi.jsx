function SobreMi() {
  return (
    <section id="sobre-mi" className="py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-1">Sobre mí</h2>
        <hr className="mx-auto border-primary border-3 opacity-100" style={{ width: '60px' }} />

        <div className="row g-4 mt-2">
          <div className="col-12 col-lg-6">
            <h3 className="h5">
              <i className="bi bi-person-lines-fill text-primary me-2"></i>
              Descripción
            </h3>
            <p>
              Soy Jesús, tengo 18 años y estudio Ingeniería de Sistemas en la
              UFPSO, en Ocaña. Desde que empecé a programar no he parado: me
              gusta el desarrollo web, Java y las bases de datos con MySQL.
              Ahora estoy metido en React y Bootstrap.
            </p>
            <p>
              Me gusta aprender cosas nuevas, romperme la cabeza con un
              problema hasta que sale y usar Git para no perder ningún avance.
            </p>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className="card h-100 border-success shadow-sm">
              <div className="card-body">
                <h3 className="h5 text-success">
                  <i className="bi bi-bullseye me-2"></i>Objetivos
                </h3>
                <ul className="ps-3 mb-0">
                  <li>Terminar mi carrera.</li>
                  <li>Conseguir mi primer trabajo como programador.</li>
                  <li>Crear mis propios proyectos y subirlos a GitHub.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className="card h-100 border-warning shadow-sm">
              <div className="card-body">
                <h3 className="h5 text-warning-emphasis">
                  <i className="bi bi-controller me-2"></i>Intereses
                </h3>
                <ul className="ps-3 mb-0">
                  <li>Programar (obvio)</li>
                  <li>Bases de datos</li>
                  <li>Videojuegos y tecnología</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-12">
            <h3 className="h5">
              <i className="bi bi-stars text-danger me-2"></i>Fortalezas
            </h3>
            <span className="badge text-bg-primary me-2 mb-2 fs-6">Responsable</span>
            <span className="badge text-bg-success me-2 mb-2 fs-6">Aprendizaje rápido</span>
            <span className="badge text-bg-danger me-2 mb-2 fs-6">Resolución de problemas</span>
            <span className="badge text-bg-warning me-2 mb-2 fs-6">Trabajo en equipo</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SobreMi
