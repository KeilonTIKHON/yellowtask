import React, { useEffect, useState } from "react";
import axios from "../utils/api";
import JogList from "../components/JogList";
import Header from "../components/Header";

const JogsPage: React.FC = () => {
  const [jogs, setJogs] = useState([]);

  useEffect(() => {
    const fetchJogs = async () => {
      const token = localStorage.getItem("token");
      console.log(token)
      if (token) {
        const response = await axios.get("/jogs", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setJogs(response.data);
      }
    };
    fetchJogs();
  }, []);

  return (
    <div>
      <Header />
      <JogList jogs={jogs} />
    </div>
  );
};

export default JogsPage;
