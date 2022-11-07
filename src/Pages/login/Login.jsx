import Axios from 'axios'
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './login.css'

function Login() {
 
    const [state, setState] = useState(0)
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [userList, setUserList] = useState([])
    var connection = false
    const navigate = useNavigate()


	const getUser = () => {
	  	Axios.get("http://localhost:3001/Login").then((response) => {
	      	setUserList(response.data)
	    })
	}
    getUser()
  
    const handleSubmit = (event) => {
	  	event.preventDefault()

	    userList.forEach((val) => {

			if(val.usuario===user &&
			   val.pass===password ){
				
              
               connection = true
			   navigate('/Chat')

			}

        })
		if(connection!=true){
			alert('error')
		}
    };

    const redireccion = () => {
	    navigate('/NewUser')
    }

  

	return (
		<div className="login-container-section">
			<div className="login-left">
				
			</div>
			<div className="login-center">
				<div className="saludo">
					<h1>facebook</h1>	
					<h5>
						Facebook te ayuda a 
						comunicarte y 
					</h5>
					<h5>
						compartir 
						con las personas que
					</h5> 
					<h5>
						forman
						parte de tu vida.
					</h5> 
				</div>
				
				<div className="login-container">
					<form>
						
						<input 
						className="input"
						type="mail" 
						placeholder="Correo electronico o numero de telefono"  
						onChange={(event) => {
       					setUser(event.target.value);
         				}}/>

         				<input 
						className="input"
						type="password" 
						placeholder="Contraseña"  
						onChange={(event) => {
       					setPassword(event.target.value);
         				}}/>

						<button 
						onClick={handleSubmit}>
						Iniciar sesion
						</button>	

						<div className="alert">
							 <a href="#">¿Olvidaste tu contraseña?</a>
						</div>
						<input onClick={redireccion} type="submit" value="Crear cuenta nueva"/>
					   
					</form>
			 	</div>

			</div>
			<div className="login-right">
				
			</div>
		
		</div>
	)
	 
}

export default Login