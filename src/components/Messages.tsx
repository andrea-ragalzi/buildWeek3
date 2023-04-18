import { useState } from "react"

export const Messages = () => {
    const [onoff, setOnoff] = useState(true)



    return (
    <div>{onoff ?  <div className="Collapsedmessage" onClick={()=>setOnoff(!onoff)}>
    <div className="d-flex justify-content-around">
           <span> <img src="//" alt="avatar_small" />Messaggi </span>
        
             <div> 
                <i className="bi bi-three-dots"></i>  
                <i className="bi bi-pencil-square mx-3"></i> 
                <i className="bi bi-caret-up"></i>
            </div>
        </div>
        </div> 
        : 

    <div className="Uncollapsedmessage" onClick={()=>setOnoff(!onoff)}>
        <div className="d-flex justify-content-around">
               <span> <img src="//" alt="avatar_small" />Messaggi </span>
            
                 <div> 
                    <i className="bi bi-three-dots"></i>  
                    <i className="bi bi-pencil-square mx-3"></i> 
                    <i className="bi bi-caret-down"></i>
                </div>
            </div>
            </div> }

    </div>
    
    
    )

}