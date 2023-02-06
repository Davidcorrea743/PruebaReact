/* Acá se realizan las importaciones de las librerias a usar.
Se usa el Hook useState para el cambio de los estados de las variables */
import React,{ useState } from 'react'
import { Menu } from './Menu'

/* El componente que se encarga de mostrar el formulario de Login, se realiza una validación para comprobar que los datos sean ingresados
Hasta el momento solo se realiza una validación de manera local para comprobar que este funcionando.
Con el uso del e.preventDefault() evita que se recargue la página y se pierdan los datos ingresados.
Una vez se ingresen los datos pertinentes se configura la página para que no muestre el formulario de Login */
export default function LoginPage(){
    const [login, setLogin]=useState('false');
    const [user, setUser]=useState('');
    const [pass, setPass]=useState('');

    function start (e){
        e.preventDefault();
        var txtuser = document.getElementById('txtuser').value;
        var txtpass = document.getElementById('txtpass').value;
        if(txtuser === 0 || txtpass=== 0){
            alert('Complete Los Datos Faltantes')
        }else{
            if(user === 'admin' && pass==='123'){
                setLogin('true');
                document.getElementById('form_login').style.display = 'none';
            }else{
                setLogin('false');
                alert('Error en usuario y/o');
                document.getElementById('txtuser').value ='';
                document.getElementById('txtpass').value ='';
                document.getElementById('txtuser').focus();
            }
        }


    }

    return (
    <div className="container" style={{background:"lightgray", marginTop:20, padding:20}}>
        
    <form id="form_login">
        <div>
            <h1 style={{color:"blue", textalign:"center"}}>LOGIN</h1>
            <label htmlFor="txtuser"><strong>Username</strong></label>
            <input type="text" id="txtuser" style={{textAlign:"center"}} className="form-control" onChange={(e) => setUser(e.target.value)} required/>
        </div>
        <div>
            <label htmlFor="txtpas"><strong>Password</strong></label>
            <input type="password" id="txtpass" style={{textAlign:"center"}} className="form-control" onChange={(e) => setPass(e.target.value)} required/>
        </div><br/>
        <input type="submit" className="btn btn-primary" value="Login" onClick={start}/>
    </form>

    { login === 'true' && <Menu user= {user}/> }

</div>
)
}