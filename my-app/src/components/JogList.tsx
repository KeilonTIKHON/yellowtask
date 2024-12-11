import React, { useState } from "react";
import "../styles/JogList.css";
import JogAddForm from "./JogsAddForm";
import api from "../utils/api";

interface Jog {
  id: number;
  date: string;
  speed: number;
  distance: number;
  time: number;
}

interface JogListProps {
  jogs: { jogs: Jog[] };
  fetchJogs: Function;
  passprop: Function;
  isFormVisible:boolean;
  passprop2:Function;
}

const JogList: React.FC<JogListProps> = ({ jogs, fetchJogs, passprop, passprop2}) => {
  let smth;
  const [editing, setEditing] = useState(false)
  const [savedkey, setSavedkey] = useState<number>()
  const [chosenJog, setChosenJog] = useState<any>()
  

const gotoedit=(jog:any)=>{
  setChosenJog(() => {
    passprop2(false)
    passprop(false)
    const chosen = jogs.jogs.filter((chjog) => chjog.id === jog.id)
    console.log(chosen)
    return chosen[0];
  })
  setEditing(true)
  setSavedkey(jog.id)
}
  const handleEditJog = async () => {

  }
  return (
    <div className="jog-list">{editing ?
      <div>
        <JogAddForm onClose={() => {
          passprop2(true)
          passprop(true)
          setEditing(false)
        }} onSave={handleEditJog} initialData={chosenJog} fetchJogs={fetchJogs} />
      </div>
      :
      <div className="listcont">
        {jogs === undefined || jogs.jogs === undefined ? <div>Loading...</div> : jogs.jogs.map((jog) => (
           
          <div className="jog-item" key={jog.id} >
            <div className="runimage" onClick={() => {gotoedit(jog)}}></div>
            <div className="stats" onClick={() => {gotoedit(jog)}}>
              <div className="date"> {jog.date.substring(0, 10).split("-").reverse().join(".")}</div>
              <div className="jogtext"><p className="characteristic">Speed:</p> <p className="charvalues">{jog.speed}</p></div>
              <div className="jogtext"><p className="characteristic">Distance:</p> <p className="charvalues">{jog.distance} km</p></div>
              <div className="jogtext"><p className="characteristic">Time:</p> <p className="charvalues">{jog.time} mins</p></div>
            </div>
          </div>
        ))}
      </div>}

    </div>
  );
};

export default JogList;
