import React, { useEffect, useState } from "react";
import axios from "../utils/api";
import JogList from "../components/JogList";
import Header from "../components/Header";
import JogAddForm from "../components/JogsAddForm";



const JogsPage: React.FC = () => {
    const [jogs, setJogs] = useState<any>([]);
    const [letMeIn, setLetMeIn] = useState(false)
    const [isFormVisible, setFormVisible] = useState(false);
    const handleAddJog = (newJog: { distance: string; time: string; date: string }) => {
        
        setJogs([...jogs, newJog]);
    };

    useEffect(() => {
        const fetchJogs = async () => {
            const token = localStorage.getItem("token");
            console.log(token)
            if (token) {
                const response = await axios.get("/jogs", {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setJogs(response.data);
                console.log(response.data)
            }
        };
        fetchJogs();
    }, []);



    return (
        <div>{!isFormVisible && (
            <div>
                <Header />
                <div>
                    {letMeIn === false ?
                        <div>
                            <button onClick={() => { setLetMeIn(true) }}>let me in</button>
                        </div>
                        :
                        <JogList jogs={jogs} />}
                </div>
                <button className="add-button" onClick={() => setFormVisible(true)}>

                </button>
            </div>
        )}

            {isFormVisible && (
                <JogAddForm onClose={() => setFormVisible(false)} onSave={handleAddJog} />
            )}
        </div>
    );
};

export default JogsPage;
