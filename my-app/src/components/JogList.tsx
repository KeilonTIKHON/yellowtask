import React, { useState } from "react";
import "../styles/JogList.css";
import JogAddForm from "./JogsAddForm";

interface Jog {
  id: number;
  date: string;
  speed: number;
  distance: number;
  time: number;
}

interface JogListProps {
  jogs: { jogs: Jog[] };
}

const JogList: React.FC<JogListProps> = ({ jogs }) => {
  const [editing, setEditing] = useState(false)
  const [savedkey, setSavedkey] = useState<number>()
  const [chosenJog, setChosenJog] = useState<any>()
  console.log(jogs)
  const handleEditJog =async()=>{

  }
  return (
    <div className="jog-list">{editing ?
      <div>
        <JogAddForm onClose={() => setEditing(false)} onSave={handleEditJog} initialData={chosenJog} />
      </div>
      :
      <div>
        {jogs === undefined ? <div>Hi</div> : jogs.jogs.map((jog) => (
          <div className="jog-item" key={jog.id} onClick={() => {
            //console.log(this)
            setChosenJog(()=>{
              
              const chosen =jogs.jogs.filter((chjog)=>chjog.id===jog.id)
              console.log(chosen)
              return chosen[0];
            })
            setEditing(true)
            setSavedkey(jog.id)
            
            }
            }>
            <p>Date: {jog.date}</p>
            <p>Speed: {jog.speed} km/h</p>
            <p>Distance: {jog.distance} km</p>
            <p>Time: {jog.time} mins</p>
          </div>
        ))}
      </div>}

    </div>
  );
};

export default JogList;
