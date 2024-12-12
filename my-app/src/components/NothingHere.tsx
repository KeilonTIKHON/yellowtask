import React, { useRef } from "react";
import "../styles/nothinghere.css";



const NothingHere: React.FC = () =>{
    return(
        <div className="nothinghere">
            <div className="sadface">.</div>
            <p className="nothingtext">Nothing is here</p>
            <button className="addfirst">
                <p className="addfirsttext">Create your first jog</p>
            </button>
        </div>
    )
}
export default NothingHere

