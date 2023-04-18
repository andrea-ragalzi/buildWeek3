import { useState } from "react"

export const Messages = () => {
    const [onoff, setOnoff] = useState(true)



    return (
    <div>{onoff ? <div className="Collapsedmessage" onClick={()=>setOnoff(!onoff)} >
        <img src="//" alt="avatar_small" />Messaggi
        </div> 
        : 
    <div className="Uncollapsedmessage">big div</div>}
    </div>
    
    
    )

}