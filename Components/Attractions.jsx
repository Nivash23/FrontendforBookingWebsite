import React, { useEffect, useState } from 'react'
import AttractplacesCard from './AttractplacesCard';
import Calendar from './calendar'
import format from 'date-fns/format';

function Attractions({ routebut, setRoutebut }) {
  const [places, setPlaces] = useState([]);
  const [recomendobject, setRecomendobject] = useState([]);


  const [calendarstate, setCalendarstate] = useState("AttractCalinactive");
  const [state, setState] = useState({
    startDate: new Date(),
    endDate:new Date(),
    key: "selection",
  });

  const handleinputfocus = () => {
    setCalendarstate('AttractCalactive');
    // setInterval(() => {
    //   setDateinputvalue({
    //   value:`${format(state.startDate,'dd/MM/yyyy')}`
    // })
    // },1000)
    
  };
  
    
    useEffect(() => {
        setRoutebut({
                    stays: "Rinactive",
                    flight: "Rinactive",
                    flihot: "Rinactive",
                    carrent: "Rinactive",
                    attraction: "Ractive",
                    airport: "Rinactive",
        });
    
      handleplaces();
      
    }, [])
  
  const handleplaces = async() => {
    const res = await fetch('http://127.0.0.1:3012/api/Recommentplaces/')
    
    const data = await res.json();
    setRecomendobject(data)
    setPlaces(data.places)
    
  }
  //   const res = fetch('http://127.0.0.1:3012/api/Recommentplaces/')
  //     .then((res) => {
  //       const data = res.json();
  //       setRecomendobject(data)
  //     })
  //     .catch((e) => {
  //     console.log(e)
  // })
  // useEffect(() => {
  //   setDateinputvalue({
  //     value:`${format(state.startDate,'dd/MM/yyyy')}`
  //   })
  // },[dateinputvalue])
  
  return (
      <div id="Attractcontainer">
          <div>
              <div  class="routepagehead">Attractions, activities and experiences</div>
              <div class="routepageheaddesc">Discover new attractions and experiences to match your interests and travel style</div>
      </div>
      <div id="Attractinputdetails">
        <div id="Adestinationinput">
          <div><ion-icon name="bed-outline"></ion-icon>
             </div>
             <div><input type="text" placeholder="Where are you going?"/></div>
          </div>
        <div id="Adateinput" onClick={() => {
          if (calendarstate == 'AttractCalinactive')
          {
            setCalendarstate('AttractCalactive')

          }
          else {
            setCalendarstate('AttractCalinactive')
          }
        }}>
          <div>
            <ion-icon name="calendar-clear-outline"></ion-icon>
          </div>
          <div >

            <input
              value={format(state.startDate,'dd/MM/yyyy')}
              type="text"
            placeholder="Select your dates"
              onFocus={handleinputfocus}
              // onChange={()=>{setDateinputvalue({value:`${format(state.startDate,'dd/MM/yyyy')}`})}}
            
            />
          </div>
          </div>

     
          
        <button id="search" type="submit"> Search </button>
        {/* <div id="ibedicon"></div> */}
        {/* <div id="iusericon"></div> */}
      </div>
      <div class={calendarstate}>
            <div id="Attractrentdate">
              {/* <div id="datehead">Select the date</div> */}
              <Calendar
                state={state}
                setState={setState}
          
                calendarstate={calendarstate}
              />
            </div>
          </div>
      <div>

      </div>
      <div>
        <div id="ARecomendhead">Recommended in {recomendobject.cityname}</div>

        <div class="row" id="ARecommendcards">
          {
            places.map((val, i) =>( 
          <div class="col-md-3">
              

                <AttractplacesCard imgsrc={val.src} name={val.name} />
              
          </div>
            ))
          }
        </div>
        
        {/* <AttractplacesCard places={places} /> */}

        
      </div>
      
      
    </div>
  )
}

export default Attractions