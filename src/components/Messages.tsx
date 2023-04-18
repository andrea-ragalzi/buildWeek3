import { useState } from "react"

export const Messages = () => {
    const [onoff, setOnoff] = useState(true)



    return (
    <div>{onoff ?  <div className="Collapsedmessage" onClick={()=>setOnoff(!onoff)}>
    <div className="d-flex justify-content-around mt-2">
           <span> <img src="https://picsum.photos/50/50" className="rounded-circle" alt="avatar_small" />Messaggi </span>
        
             <div> 
                <i className="bi bi-three-dots"></i>  
                <i className="bi bi-pencil-square mx-3"></i> 
                <i className="bi bi-caret-up"></i>
            </div>
        </div>
        </div> 
        : 

    <div className="Uncollapsedmessage" onClick={()=>setOnoff(!onoff)}>
        <div className="d-flex justify-content-around mt-2">
               <span> <img src="https://picsum.photos/50/50" className="rounded-circle" alt="avatar_small" />Messaggi </span>
            
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