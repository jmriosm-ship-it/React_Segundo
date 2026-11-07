import { useState } from 'react'

function Contacto() {
  const [form, setForm] = useState({ nombre: '', correo: '', mensaje: '' })
  const [enviado, setEnviado] = useState(false)

  const cambiar = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setEnviado(false)
  }

  const enviar = (e) => {
    e.preventDefault()
    setEnviado(true)
    setForm({ nombre: '', correo: '', mensaje: '' })
  }

  return (
    <section id="contacto" className="bg-light py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-1">Contacto</h2>
        <hr className="mx-auto border-primary border-3 opacity-100" style={{ width: '60px' }} />

        <div className="row justify-content-center mt-2">
          <div className="col-12 col-md-8 col-lg-6">
            <form onSubmit={enviar} className="card card-body shadow-sm">
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input id="nombre" name="nombre" className="form-control" value={form.nombre} onChange={cambiar} required />
              </div>
              <div className="mb-3">
                <label htmlFor="correo" className="form-label">Correo</label>
                <input id="correo" name="correo" type="email" className="form-control" value={form.correo} onChange={cambiar} required />
              </div>
              <div className="mb-3">
                <label htmlFor="mensaje" className="form-label">Mensaje</label>
                <textarea id="mensaje" name="mensaje" rows="4" className="form-control" value={form.mensaje} onChange={cambiar} required></textarea>
              </div>
              <button type="submit" className="btn btn-success">
                <i className="bi bi-send-fill me-2"></i>Enviar mensaje
              </button>
              {enviado && (
                <div className="alert alert-success mt-3 mb-0" role="alert">
                  ¡Gracias! Tu mensaje fue enviado correctamente.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacto
