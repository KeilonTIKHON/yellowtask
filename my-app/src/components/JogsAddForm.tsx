import React, { useState } from 'react';
import Header from "./Header";
import "../styles/JogAddForm.css"
import api from '../utils/api';

export interface JogFormProps {
    onClose: () => void;
    onSave: (jog: { distance: number; time: number; date: string }) => void;
    initialData?: { distance: number; time: number; date: string, id?:string } | undefined;
    fetchJogs:Function;
}

const JogAddForm: React.FC<JogFormProps> = ({ onClose, onSave, initialData, fetchJogs }) => {
    
    const [distance, setDistance] = useState(initialData?.distance || '');
    const [time, setTime] = useState(initialData?.time || '');
    const [date, setDate] = useState(initialData?.date.substring(0, 10) || '');
    
    console.log(onClose)
    const handleSave = async() => { 
        console.log(distance)
        console.log(time)
        console.log(date)
        if (distance && time && date) {
            
            try {
                
                const token = localStorage.getItem("token");
                
                if (token) {
                    const distanceNum=Number(distance)
                    const timeNum=Number(time)
                    const dateStr = new Date(date).toISOString()
                    const response = await api.post("/jogs", {distance:distanceNum, time:timeNum, date:dateStr}
                        ,{
                        headers: { Authorization: `Bearer ${token}` },
                    });
                    console.log(response)
                    onClose()
                    fetchJogs()
                }
            
              }catch(err){
                console.log(err)
              }
        } else {
            alert('Please fill out all fields.');
        }
    };
    //✕
    const handleRedact=async()=>{
        if (distance && time && date) {
            try {
                
                const token = localStorage.getItem("token");
                
                if (token && initialData) {
                    const distanceNum=Number(distance)
                    const timeNum=Number(time)
                    const dateStr = new Date(date).toISOString()
                    const response = await api.patch(`/jogs/${initialData.id}`, {distance:distanceNum, time:timeNum, date:dateStr}
                        ,{
                        headers: { Authorization: `Bearer ${token}` },
                    });
                    console.log(response)
                    onClose()
                    fetchJogs()
                }
            
              }catch(err){
                console.log(err)
              }
        } else {
            alert('Please fill out all fields.');
        }
    }
    return (
        <div className='formwrapper'>
            <Header />

            <div className="Rectangle-3">
                <button className="close-button" onClick={onClose}>
                    
                </button>
                <div className='allForms'>
                <div className="jog-form-field">
                    <label className='formtext'>Distance</label>
                    <input className='Form1'
                        
                        type="number"
                        value={distance}
                        onChange={(e) => setDistance(e.target.value)}

                    />
                </div>
                <div className="jog-form-field">
                    <label className='formtext'>Time</label>
                    <input className='Form2'
                        
                        type="number"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}

                    />
                </div>
                <div className="jog-form-field">
                    <label className='formtext'>Date</label>
                    <input className='Form3'
                        required
                        type="date"
                        value={date}
                        
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                </div>
                
                <button className="SaveBtn" onClick={initialData?handleRedact:handleSave}>
                    Save
                </button>
            </div>

        </div>

    );
};

export default JogAddForm;
