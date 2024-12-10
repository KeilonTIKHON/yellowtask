import React from "react";
import "../styles/JogList.css";

interface Jog {
  id: number;
  date: string;
  speed: number;
  distance: number;
  time: number;
}

interface JogListProps {
  jogs?: {jogs:Jog[]};
}

const JogList: React.FC<JogListProps> = ({ jogs }) => {
    console.log(jogs)
  return (
    <div className="jog-list">
      {jogs===undefined ? <div>Hi</div>: jogs.jogs.map((jog) => (
        <div className="jog-item" key={jog.id}>
          <p>Date: {jog.date}</p>
          <p>Speed: {jog.speed} km/h</p>
          <p>Distance: {jog.distance} km</p>
          <p>Time: {jog.time} mins</p>
        </div>
      ))}
    </div>
  );
};

export default JogList;
