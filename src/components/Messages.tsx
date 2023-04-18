import { useState } from "react"

export const Messages = () => {
    const [onoff, setOnoff] = useState(true)



    return (
    <div>{onoff ? <div className="Collapsedmessage" onClick={()=>setOnoff(!onoff)} >
        <img src="//" alt="avatar_small" />Messaggi <i className="bi bi-three-dots"></i>  <i className="bi bi-pencil-square"></i> <i className="bi bi-caret-up"></i>
        </div> 
        : 
    <div className="Uncollapsedmessage" onClick={()=>setOnoff(!onoff)}>big div <i className="bi bi-three-dots"></i>  <i className="bi bi-pencil-square"></i> <i className="bi bi-caret-down"></i> </div>}
    </div>
    
    
    )

}