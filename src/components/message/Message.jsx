import Axios from 'axios'
import { useState } from 'react'

import './message.css'

const Message = () => {

    const [message, setMessage] = useState([])

    const getMessage = () => {
        Axios.get("http://localhost:3001/Message").then((response) => {
          setMessage(response.data)
        })
    }
    getMessage()

    const deleteMessage = (id) => {
        Axios.delete(`http://localhost:3001/deleteMessage/${id}`).then((response) => {
          setMessage(
          message.filter((val) => {
              return val.id != id;
            })
          );
        });
    };
     
     return(
  
                <div className="message-container">

                    {message.map((val, key) => {
                         if (val.user=="Lefasom") {

                             return( 

                                     <> 

                                         <div id="outputUser">

                                            <h5>{val.user}</h5>
                                            <p> {val.msj}</p>

                                            <button onClick={() => {
                                               deleteMessage(val.id);
                                            }}>
                                                <span class="material-symbols-outlined">
                                                     delete_forever
                                                </span>
                                            </button>

                                         </div>

                                    </> 
                                )

                         } else {

                            return( 

                                     <> 

                                         <div id="output">
                                            <h5>{val.user}</h5>
                                            <p> {val.msj}</p>
                                            <button onClick={() => {
                                               deleteMessage(val.id);
                                            }}>
                                                <span class="material-symbols-outlined">
                                                     delete_forever
                                                </span>
                                            </button>

                                         </div>

                                    </> 
                                )
                         } 
                       
                    })} 

                </div>
        )
            
       
      
}
 export default Message;