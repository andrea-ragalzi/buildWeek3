import { useState } from "react"

export const Messages = () => {
    const [onoff, setOnoff] = useState(true)



    return (
    <div>{onoff ?  <div className="Collapsedmessage" onClick={()=>setOnoff(!onoff)}>
    <div className="d-flex justify-content-around mt-2">
           <span> <img src="https://picsum.photos/50/50" width="30px" height="30px" className="rounded-circle" alt="avatar_small" />Messaggistica </span>
        
             <div> 
                <i className="bi bi-three-dots Msghover"></i>  
                <i className="bi bi-pencil-square mx-3 Msghover"></i> 
                <i className="bi bi-caret-up Msghover"></i>
            </div>
        </div>
        </div> 
        : 

    <div className="Uncollapsedmessage" onClick={()=>setOnoff(!onoff)}>
        <div className="d-flex justify-content-around mt-2">
               <span> <img src="https://picsum.photos/50/50" width="30px" height="30px" className="rounded-circle" alt="avatar_small" />Messaggistica </span>
            
                 <div> 
                    <i className="bi bi-three-dots Msghover"></i>  
                    <i className="bi bi-pencil-square mx-3 Msghover"></i> 
                    <i className="bi bi-caret-down Msghover"></i>
                </div>
            </div>
            </div> }

    </div>
    
    
    )

}