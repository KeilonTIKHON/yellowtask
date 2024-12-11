import React, { useState, forwardRef, useImperativeHandle } from "react";
import "../styles/FilterPanel.css";
import { render } from "@testing-library/react";

interface FilterPanelProps {
    onFilter: (from: string, to: string) => void;
    ref:any;
}
interface ChildProps {
    onFilter:Function; 
}
export interface ChildRef {
    handleFilter: () => void;
  }

const FilterPanel = forwardRef<ChildRef, ChildProps>(( onFilter,ref ) => {
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    
    const handleFilter = () => {
        console.log(fromDate, toDate)
        
        onFilter.onFilter(fromDate, toDate);
    };
    useImperativeHandle(ref, () => ({
        handleFilter,
      }));

    return (
        <div className="filter-wraper">
            <div className="filter-panel">
                <label className="filterlabel">
                    <div className="DateFromToText">Date from</div>
                    <input
                        required
                        className="filterform"
                        type="date"
                        value={fromDate}
                        onChange={(e) => {
                            setFromDate(e.target.value)                           
                            
                        }
                        }
                    />
                </label>
                <label className="filterlabel">
                    <div className="DateFromToText2">Date to</div>
                    <input
                        required
                        className="filterform"
                        type="date"
                        value={toDate}
                        onChange={(e) => {
                            setToDate(e.target.value)                           
                            
                        }
                        
                        }
                    />
                </label>
                
            </div>
        </div>

    );
}
);

export default FilterPanel;