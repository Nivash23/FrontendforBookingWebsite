import React, { useState } from 'react'
import { DateRangePicker  } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { format } from 'date-fns';



function calendar({state,setState}) {
  const handlechange = (ranges) => {
    setState(ranges.selection)
  }
  return (
    <div >
      <div id="daterange">
      
         <DateRangePicker class="daterange" onChange={handlechange} ranges={[state]} />
      </div>    
    </div>
    )
    
}

export default calendar



