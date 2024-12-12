import React, { useRef } from "react";
import "../styles/Header.css";
import { useNavigate } from "react-router-dom";
import FilterPanel, { ChildRef } from "../components/FilterPanel";

interface HeaderProps {
  isfirstpage?: boolean;
  active?: boolean;
  whichpageactive?: string;
  handleFilt?: any;
  ishere?:boolean;
}

const Header: React.FC<HeaderProps> = ({ isfirstpage, active, whichpageactive, handleFilt, ishere }) => {
  const childRef = useRef<ChildRef>(null)
  console.log(ishere)
  const triggerChild = () => {
    childRef.current?.handleFilter();
  };
  console.log(whichpageactive)
  const navigate = useNavigate()
  return (
    <div>
      <header className="Rectangle">
        <div className="logo"></div>
        <nav>{isfirstpage
          ? ''
          : <div className="navmenucont">
            <div className={(whichpageactive === "jogs") ? "navtextunder" : "navtext"} onClick={() => navigate('/jogs')}>JOGS</div>
            <div className={whichpageactive === "info" ? "navtextunder" : "navtext"} onClick={() => navigate('/info')} >INFO</div>
            <div className={whichpageactive === "contactus" ? "navtextunder" : "navtext"} onClick={() => navigate('/contactus')} >CONTACT US</div>
            <div className={active ? "navsortlogoactive" : "navsortlogo"} onClick={active ? triggerChild : () => { console.log('hiii') }}></div>
          </div>
        }

        </nav>
      </header>
      {(!handleFilt || !ishere)? "" : <FilterPanel onFilter={handleFilt} ref={childRef} />}
    </div>

  );
};

export default Header;
