import React,{ useState } from 'react'
import { Menu } from './Menu'

export default function LoginPage(){
    const [login, setLogin]=useState('false');
    const [user, setUser]=useState('');
    const [pass, setPass]=useState('');

    function iniciarSesion (e){
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
                alert('Error en usuario y/o')
            }
        }


    }

    return (
    <div className="container" style={{background:"lightgray", marginTop:20, padding:20}}>
        
    <form id="form_login">
        <div>
            <h1 style={{color:"blue", textalign:"center"}}>LOGIN</h1>
            <label htmlFor="txtusu"><strong>Username</strong></label>
            <input type="text" id="txtuser" style={{textAlign:"center"}} className="form-control" onChange={(e) => setUser(e.target.value)} required/>
        </div>
        <div>
            <label htmlFor="txtpas"><strong>Password</strong></label>
            <input type="password" id="txtpass" style={{textAlign:"center"}} className="form-control" onChange={(e) => setPass(e.target.value)} required/>
        </div><br/>
        <input type="submit" className="btn btn-primary" value="Login"/>
    </form>

</div>
)
}