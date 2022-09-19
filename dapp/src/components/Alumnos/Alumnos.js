/*const Alumnos = () => (
    <header className="AppAlumnos">
    <h2>
    Alumnos
    </h2>
    </header>
   );
   export default Alumnos;*/
   import {drizzleReactHooks} from '@drizzle/react-plugin'
   import {useParams, Link} from "react-router-dom";
   
   import AlumnosHead from "./AlumnosHead";
   import AlumnosBody from "./AlumnosBody";
   
   const {useDrizzle} = drizzleReactHooks;
   
   export const Alumnos = () => {
       const {useCacheCall} = useDrizzle();
   
       const ml = useCacheCall("ReslabEtsit", "matriculasLength") || 0;
   
       return (
           <div className="AppAlumnos">
               <h2>Alumnos</h2>
   
               <table>
                   <AlumnosHead/>
                   <AlumnosBody matriculasLength={ml || 0}/>
                   
               </table>
           </div>
       );
   };
   
   
   export const Alumno = () => {
       const {useCacheCall} = useDrizzle();
   
       let {addr} = useParams();
   
       const datos = useCacheCall("ReslabEtsit", "datosAlumno", addr);
   
       return <>

        <div className='AppAlumnodiv'>
           <header className="AppAlumno">
               <h2>Alumno</h2>
           </header>
   
           <ul>
               <li><b>Nombre:</b> {datos?.nombre ?? "Desconocido"}</li>
               <li><b>Email:</b> {datos?.email ?? "Desconocido"}</li>
               <li><b>Address:</b> {addr}</li>
           </ul>
   
           <Link to="/alumnos"><img className="volver" src="/volver.png"/></Link>
        </div>
       </>
       
   };

//npx truffle migrate --reset --compile-all
//npx truffle exec scripts/rellenar.js