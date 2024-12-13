import React, { useRef } from "react";
import "../styles/nothinghere.css";

interface INothingHere{
    whenclicked:Function;
}

const NothingHere: React.FC<INothingHere> = ({whenclicked}) =>{
    return(
        <div className="nothinghere">
            <div className="sadface">.</div>
            <p className="nothingtext">Nothing is here</p>
            <button className="addfirst" onClick={()=>whenclicked(true)}>
                <p className="addfirsttext">Create your first jog</p>
            </button>
        </div>
    )
}
export default NothingHere

