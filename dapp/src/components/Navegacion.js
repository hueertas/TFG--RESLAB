import {Link} from "react-router-dom";
import SoyAlguno from './roles/SoyAlguno';

const Navegacion = () => (

  
    <nav>
         <ul>
            <li><Link to="/"><img className="Home" src="/home.jpg"/></Link></li>

            
            
            <li><Link to="/asignaturas/">Asignaturas</Link></li>
      
            <SoyAlguno owner>
            <li><Link to="/alumnos/">Alumnos</Link></li>
            <li><Link to="/profesores/">Profesores</Link></li>
            </SoyAlguno>
            
            <li><Link to="/laboratorios/">Laboratorios</Link></li>
            <li><Link to="/miscosas/">Mis Cosas</Link></li>
            <li className = "Contacto"><Link to="/contacto/">Contacto</Link></li>
            <SoyAlguno owner>
            <li><Link to="/reservasLaboratorios/">Reservas</Link></li>
            </SoyAlguno>

            
           
         
            
            
          </ul>
    </nav>


);

export default Navegacion;