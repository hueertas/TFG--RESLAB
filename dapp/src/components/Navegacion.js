import {Link} from "react-router-dom";

const Navegacion = () => (
    <nav>
         <ul>
            <li><Link to="/"><img className="Home" src="/home.jpg"/></Link></li>
            <li className = "Contacto"><Link to="/contacto/"><img className="Telefono" src="/Telefono.png"/></Link></li>
            <li><Link to="/asignaturas/">Asignaturas</Link></li>
            <li><Link to="/alumnos/">Alumnos</Link></li>
            <li><Link to="/profesores/">Profesores</Link></li>
            
            <li><Link to="/laboratorios/">Laboratorios</Link></li>
            <li><Link to="/miscosas/">Mis Cosas</Link></li>
           
         
            
            
          </ul>
    </nav>
);

export default Navegacion;