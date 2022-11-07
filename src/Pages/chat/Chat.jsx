import React, { useState } from 'react'
import Axios from 'axios'
import './chat.css'


import Message from '../../components/message/Message.jsx'





function Chat() {


	const [msj, setMsj] = useState('')
	const user = 'Lefasom'
    const [message, setMessage] = useState([]);


	const send = () => {

	    Axios.post("http://localhost:3001/createMessage", {
	      user: user,
	      msj: msj

	    }).then(() => {
	      setMessage([
	        ...message,
	        {
	          user: user,
		      msj: msj

	        },
	      ]);
	     });
	   
    };

	
	
	return (

		<div className="chat-container">

			<div className="left">
			</div>

			<div className="center">
				<div className="center-content">
					<Message />
					<div id="send">

						<input 
						type="text" 
						placeholder="Escribir..." 
						name="mensaje"
						onChange={(event) => {
       					setMsj(event.target.value);
         				}}/>

						<button
						onClick={send}
						>
							<span class="material-symbols-outlined">send</span>
						</button>
					</div>
				</div>
			</div>	

			<div className="right">
				
			</div>	

			
		</div>
	)
}

export default Chat



