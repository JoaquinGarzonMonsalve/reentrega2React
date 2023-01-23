import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget.js';
import './estilos/NavBar.css';





function NavBar() {
	return (
<nav className=" nav-bg ">
	<div className="nav-flex ">
		
		
		
    	
      	<div className="navbar-nav nav-flex">
		  <Link className=" link " to="/"><span className= "">TODOS</span></Link>
          <Link className=" link  mujeres"  to="/category/Mujeres">Mujeres</Link>
          <Link className=" link Niños" to="/category/todos" >Niños</Link>
          <Link className="link " to="/category/Hombres">Hombres</Link>
		  {/* <Link className="" to="/"> <CartWidget /><span>0</span></Link> */}
         
        
		
        
      </div>

	  

	  
    </div>
  
</nav>
		
	);
}

export default NavBar;