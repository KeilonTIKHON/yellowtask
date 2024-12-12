import React, { useEffect, useState } from "react";
import api from "../utils/api";
import JogList from "../components/JogList";
import Header from "../components/Header";
import JogAddForm from "../components/JogsAddForm";
import FilterPanel from "../components/FilterPanel";
import NothingHere from "../components/NothingHere";

const JogsPage: React.FC = () => {
    const [filteredJogs, setFilteredJogs] = useState<any>([]);
    const [jogs, setJogs] = useState<any>([]);
    const [letMeIn, setLetMeIn] = useState(false)
    const [isFormVisible, setFormVisible] = useState(false);
    const [BtnVisible, setBtnVisible] = useState(false);
    const [headrVisible, setHeadrVisible] = useState(true)
    const [ishere, setIshere] = useState(false)
    console.log(BtnVisible)
    const handleAddJog = (newJog: { distance: number; time: number; date: string }) => {

        setJogs([...jogs, newJog]);
    };
    const fetchJogs = async () => {
        const token = localStorage.getItem("token");
        console.log(token)
        if (token) {
            const response = await api.get("/jogs", {
                headers: { Authorization: `Bearer ${token}` },
            });
            setJogs(response.data);
            if(response.data.jogs[0]===undefined){
                setIshere(false)
            }else{
                setIshere(true)
                setBtnVisible(true)
            }
            setFilteredJogs(response.data);
        }
    };
    const handleFilter = (from: string, to: string) => {

        const filtered = jogs.jogs.filter((jog: any) => {
            const jogDate = new Date(jog.date).getTime();
            let fromTime
            let toTime
            if (from) {
                fromTime = new Date(from).getTime();
            } else {
                fromTime = new Date('0').getTime();
            }

            if (to) {
                toTime = new Date(to).getTime();
            } else {
                toTime = new Date().getTime();
            }

            return jogDate >= fromTime && jogDate <= toTime;

        });

        setFilteredJogs({ jogs: filtered });
    };
    useEffect(() => {
        fetchJogs();
    }, []);



    return (
        <div>{!isFormVisible && (
            <div>
                {headrVisible ? <Header active={!isFormVisible} whichpageactive="jogs" handleFilt={handleFilter} ishere={ishere}/> : ''}
                <div>
                    {!jogs ? <div>Loading...</div>
                        :
                        <div>
                            {!ishere ? <NothingHere /> : <JogList jogs={filteredJogs} fetchJogs={fetchJogs} passprop={setBtnVisible} isFormVisible={isFormVisible} passprop2={setHeadrVisible} />}
                        </div>
                    }
                </div>

                {BtnVisible ? <button className="add-button" onClick={() => setFormVisible(true)}>

                </button> : ''
                }
            </div>
        )}

            {isFormVisible && jogs.jogs[0] && (
                <JogAddForm onClose={() => {
                    setFormVisible(false)
                    setHeadrVisible(true)
                }} onSave={handleAddJog} fetchJogs={fetchJogs} />
            )}
        </div>
    );
};

export default JogsPage;
