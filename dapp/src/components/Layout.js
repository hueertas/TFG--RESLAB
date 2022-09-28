import { Outlet } from "react-router-dom";

import Header from "./Header";
import Navegacion from "./Navegacion";
import Fondo from "./Fondo";

function Layout() {
    return (
        <>

            
            <Header />
            <Navegacion />
            <img className="imgfondo" src="/fondoApp.png"/>
            <Outlet />
            {/*<Fondo/>*/}
         
           	
           
         
           
            
           
        </>
    );
}

export default Layout;