import React, { useState } from 'react'
import Axios from 'axios'
import './newUser.css'

function NewUser() {

  const [usuario, setUsuario] = useState('')
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [correo, setCorreo] = useState('')
  const [pass, setPass] = useState('')
  const [passRep, setPassRep] = useState('')

  const [cel, setCel] = useState('')
  const [userList, setUserList] = useState([]);


  

   const createUser = (event) => {

     event.preventDefault();

     if(pass == passRep){

            Axios.post("http://localhost:3001/createUser", {

              nombre : nombre,
              apellido : apellido,
              usuario : usuario,
              correo : correo,
              cel : cel,
              pass : pass
                 
          }).then(() => {
            setUserList([
              ...userList,
              {
                  nombre : nombre,
                  apellido : apellido,
                  usuario : usuario,
                  correo : correo,
                  cel : cel,
                  pass : pass

              },
            ]);
          });

          alert('Usuario creado exitosamente')
     
     }else{

        alert('Las contraseñas son distintas')
     }
    
     

   }

	return (
    
      
    <div className="newUser-container">
      <form>

       <div> 
        <input
          type="text" 
          placeholder="Nombre"
          onChange={(event) => {

            setNombre(event.target.value)
    
          }}/>
          <input 
          type="text" 
          placeholder="Apellido"
          onChange={(event) => {

            setApellido(event.target.value)
    
          }}
          />
       </div> 

       <div>
          <input 
          type="text" 
          placeholder="Usuario" 
          onChange={(event) => {

            setUsuario(event.target.value)
    
          }}/>
          <input 
            type="text" 
            placeholder="Celular"
            onChange={(event) => {

              setCel(event.target.value)
      
          }}
          />

       </div>

       <input 
          type="mail" 
          placeholder="Correo electronico o numero de telefono"
          onChange={(event) => {

            setCorreo(event.target.value)
    
          }}
          />
       <div>
          <input 
          type="password" 
          placeholder="Contraseña"
          onChange={(event) => {

            setPass(event.target.value)
    
          }}
          />
          <input 
          type="password" 
          placeholder="Repetir Contraseña"
          onChange={(event) => {

            setPassRep(event.target.value)
    
          }}
          />
       </div>
      
       
        <input 
        type="submit" 
        value="Crear Cuenta"
        onClick={createUser}
        />

      </form>
    </div>

	)
}

export default NewUser