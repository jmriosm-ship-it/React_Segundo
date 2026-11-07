function Habilidades() {
  const tecnicas = [
    { nombre: 'HTML y CSS', nivel: 90, color: 'danger' },
    { nombre: 'JavaScript', nivel: 80, color: 'warning' },
    { nombre: 'Java', nivel: 75, color: 'primary' },
    { nombre: 'MySQL', nivel: 75, color: 'success' },
    { nombre: 'Git y GitHub', nivel: 70, color: 'danger' },
    { nombre: 'React y Bootstrap', nivel: 60, color: 'primary' },
  ]

  const blandas = [
    { nombre: 'Trabajo en equipo', color: 'primary', icono: 'bi-people-fill' },
    { nombre: 'Comunicación', color: 'success', icono: 'bi-chat-dots-fill' },
    { nombre: 'Responsabilidad', color: 'danger', icono: 'bi-check-circle-fill' },
    { nombre: 'Creatividad', color: 'warning', icono: 'bi-lightbulb-fill' },
    { nombre: 'Adaptabilidad', color: 'primary', icono: 'bi-arrow-repeat' },
  ]

  return (
    <section id="habilidades" className="py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-1">Habilidades</h2>
        <hr className="mx-auto border-primary border-3 opacity-100" style={{ width: '60px' }} />

        <div className="row g-5 mt-1">
          <div className="col-12 col-lg-7">
            <h3 className="h5 mb-3">
              <i className="bi bi-code-slash text-primary me-2"></i>Técnicas
            </h3>
            {tecnicas.map((h) => (
              <div className="mb-3" key={h.nombre}>
                <div className="d-flex justify-content-between">
                  <span>{h.nombre}</span>
                  <span className="text-muted">{h.nivel}%</span>
                </div>
                <div className="progress" role="progressbar" aria-valuenow={h.nivel} aria-valuemin="0" aria-valuemax="100">
                  <div className={`progress-bar progress-bar-striped bg-${h.color}`} style={{ width: `${h.nivel}%` }}></div>
                </div>
              </div>
            ))}
          </div>

          <div className="col-12 col-lg-5">
            <h3 className="h5 mb-3">
              <i className="bi bi-heart-fill text-danger me-2"></i>Blandas
            </h3>
            <div className="d-flex flex-wrap gap-2">
              {blandas.map((h) => (
                <span className={`badge rounded-pill text-bg-${h.color} fs-6 fw-normal`} key={h.nombre}>
                  <i className={`bi ${h.icono} me-1`}></i>
                  {h.nombre}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Habilidades
