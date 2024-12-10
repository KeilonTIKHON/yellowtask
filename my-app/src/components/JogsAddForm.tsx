import React, { useState } from 'react';
import Header from "./Header";
import "../styles/JogAddForm.css"

export interface JogFormProps {
    onClose: () => void;
    onSave: (jog: { distance: string; time: string; date: string }) => void;
    initialData?: { distance: string; time: string; date: string };
}

const JogAddForm: React.FC<JogFormProps> = ({ onClose, onSave, initialData }) => {
    const [distance, setDistance] = useState(initialData?.distance || '');
    const [time, setTime] = useState(initialData?.time || '');
    const [date, setDate] = useState(initialData?.date || '');

    const handleSave = () => {
        if (distance && time && date) {
            onSave({ distance, time, date });
            onClose();
        } else {
            alert('Please fill out all fields.');
        }
    };
    //✕
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
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                </div>
                
                <button className="SaveBtn" onClick={handleSave}>
                    Save
                </button>
            </div>

        </div>

    );
};

export default JogAddForm;
