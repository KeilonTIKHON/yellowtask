import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';



const Info :React.FC = () => {
    return(
        <div>
            <Header whichpageactive={'info'}/>
        </div>
    )
}
export default Info