import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const IndexFilter=()=>{
const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
        <DatePicker id="dateFrom" onChange={(date) => setStartDate(date)} placeholder='Select a pickup date'/>
        <DatePicker id="dateTill" onChange={(date) => setStartDate(date)} placeholder='Select a return date'/>
        <select>
            <option>liel</option>
            <option>liel</option>
            <option>liel</option>
            <option>liel</option>
        </select>
    </div>
  );
}

export default IndexFilter;