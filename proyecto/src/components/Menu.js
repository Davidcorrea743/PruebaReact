import React ,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import {RegisterPage} from './RegisterPage'
import {ListProd} from './ListProd'
import { UpdateUser } from './UpdateUser'




/* Se define el menú con sus diferentes opciones: Registrar productos, Listar productos, cerrar sesión*/
export const Menu = (props) => {
  
  const [reg, setReg]= useState('')
  const [lis, setList]= useState('')
  const [update, setUpdate]= useState('')
  const [upus, setUpdUs]= useState('')
  
  function logOut(){
    document.getElementById('menu_box').style.display = 'none';
    document.getElementById('form_login').style.display ='block';
    document.getElementById('txtuser').value = '';
    document.getElementById('txtpass').value = '';
    document.getElementById('txtuser').focus();

  }

  function op_reg(){
    setReg('1');
    setList('0');
    setUpdate('0');
  }

  function op_lis(){
    setReg('0');
    setList('1');
    setUpdate('0');
  }


  function op_update(){
    setReg('0');
    setList('0');
    setUpdate('1');
  }

  function op_update_user(){
    setReg('0');
    setList('0');
    setUpdate('1');
  }


  return (
    <>

    <div id="menu_box" style={{textAlign:"left"}}>

    <strong className="h3">
      Welcome User : {props.user.toUpperCase()}
    </strong>
              
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{marginTop:20}}>
      <div className="container-fluid">

        <label className="navbar-brand  h5" href=" ">Dashboard</label>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink to="" className="nav-link  h5  text-center" onClick={op_update_user} >Update User</NavLink>
            <NavLink to="" className="nav-link  h5  text-center"  onClick={op_reg}>Register Product</NavLink>
            <NavLink to="" className="nav-link  h5  text-center"  onClick={op_lis}>List Products</NavLink>
            <NavLink to="" className="nav-link  h5  text-center"  onClick={op_update}>Update Product</NavLink>
            
            <a className="nav-link  h5  text-center"  style={{color:"blue"}}  href=" "  onClick={logOut}>Logut</a>
          </div>
        </div>
      </div>
    </nav>
  </div>

  { reg ==='1' && <RegisterPage/>}
  { lis ==='1' && <ListProd/>}
  { update ==='1' && <UpdateUser/>}
  </>
  


  
  )
}
