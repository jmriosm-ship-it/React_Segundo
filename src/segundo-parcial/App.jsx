import Navbar from './components/Navbar'
import Perfil from './components/Perfil'
import SobreMi from './components/SobreMi'
import Formacion from './components/Formacion'
import Habilidades from './components/Habilidades'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

function App() {
  return (
    <div className="container-fluid p-0">
      <div className="row g-0">
        <div className="col-12"><Navbar /></div>
        <div className="col-12"><Perfil /></div>
        <div className="col-12"><SobreMi /></div>
        <div className="col-12"><Formacion /></div>
        <div className="col-12"><Habilidades /></div>
        <div className="col-12"><Contacto /></div>
        <div className="col-12"><Footer /></div>
      </div>
    </div>
  )
}

export default App
