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
           <section className="AppAlumnos">
               <h2>Alumnos</h2>
   
               <table>
                   <AlumnosHead/>
                   <AlumnosBody matriculasLength={ml || 0}/>
                   
               </table>
           </section>
       );
   };
   
   
   export const Alumno = () => {
       const {useCacheCall} = useDrizzle();
   
       let {addr} = useParams();
   
       const datos = useCacheCall("ReslabEtsit", "datosAlumno", addr);
   
       return <>
           <header className="AppAlumno">
               <h2>Alumno</h2>
           </header>
   
           <ul>
               <li><b>Nombre:</b> {datos?.nombre ?? "Desconocido"}</li>
               <li><b>Email:</b> {datos?.email ?? "Desconocido"}</li>
               <li><b>Address:</b> {addr}</li>
           </ul>
   
           <Link to="/alumnos">Volver</Link>
       </>
   };

//npx truffle migrate --reset --compile-all
//npx truffle exec scripts/rellenar.js