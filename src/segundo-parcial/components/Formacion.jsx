function Formacion() {
  const estudios = [
    {
      titulo: 'Ingeniería de Sistemas',
      lugar: 'UFPSO - Universidad Francisco de Paula Santander Ocaña',
      anios: '2025 - Actualidad',
      detalle: 'Aquí veo programación, bases de datos y desarrollo web. Voy en los primeros semestres.',
      color: 'primary',
      icono: 'bi-mortarboard-fill',
    },
    {
      titulo: 'Bachiller Académico',
      lugar: 'Colegio en Ocaña, Norte de Santander',
      anios: '2019 - 2024',
      detalle: 'Aquí fue donde empezó mi gusto por la informática.',
      color: 'success',
      icono: 'bi-journal-bookmark-fill',
    },
    {
      titulo: 'Curso de Java y MySQL',
      lugar: 'Plataforma en línea',
      anios: '2025',
      detalle: 'Programación orientada a objetos y consultas SQL.',
      color: 'danger',
      icono: 'bi-cup-hot-fill',
    },
    {
      titulo: 'Certificación en Git y GitHub',
      lugar: 'Plataforma en línea',
      anios: '2025',
      detalle: 'Control de versiones, ramas, commits y trabajo colaborativo.',
      color: 'warning',
      icono: 'bi-git',
    },
  ]

  return (
    <section id="formacion" className="bg-light py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-1">Formación académica</h2>
        <hr className="mx-auto border-primary border-3 opacity-100" style={{ width: '60px' }} />

        <div className="row g-4 mt-2">
          {estudios.map((e) => (
            <div className="col-12 col-md-6" key={e.titulo}>
              <div className={`card h-100 shadow-sm border-0 border-start border-4 border-${e.color}`}>
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start">
                    <h3 className="h5 card-title">
                      <i className={`bi ${e.icono} text-${e.color} me-2`}></i>
                      {e.titulo}
                    </h3>
                    <span className={`badge text-bg-${e.color}`}>{e.anios}</span>
                  </div>
                  <h4 className="h6 text-muted">{e.lugar}</h4>
                  <p className="card-text mb-0">{e.detalle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Formacion
