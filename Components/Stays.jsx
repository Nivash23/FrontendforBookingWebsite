import React, { useEffect, useState } from "react";
import Offers from "./Offers";
import PropertyType from "./PropertyType";
import Calendar from "./calendar";
import format from "date-fns/format";

function Stays({routebut,setRoutebut}) {
  const [inputType, setInputType] = useState("text");

  const [calendarstate, setCalendarstate] = useState("StaysCalinactive");
  const [state, setState] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  // const handleinputfocus = () => {
  //   setInputType("date");
  // };
  // const handleinputblur = () => {
  //   setInputType("text");
  // };

  useEffect(() => {
    setRoutebut({
      stays: "Ractive",
      flight: "Rinactive",
      flihot: "Rinactive",
      carrent: "Rinactive",
      attraction: "Rinactive",
      airport: "Rinactive",
    });
  }, []);

  return (
    <div>
      <div id="bodybackimg">
        <img src="https://png.pngtree.com/background/20230424/original/pngtree-couple-sitting-on-the-hill-picture-image_2459275.jpg"></img>
        <div id="htextinimg">A piece of paradise just for you </div>
        <div id="ptextinimg">Book entire houses,villas,cabins and more </div>

        <div id="discoverbut">Discover holiday rentals</div>
      </div>
      <div id="Staysinputdetails">
        <div id="inputplace">
          <ion-icon name="bed-outline"></ion-icon>
          <input type="text" placeholder="Where are you going?" />
        </div>
        <div id="inputdate" onClick={() => {
          if (calendarstate == 'StaysCalinactive')
          {
            setCalendarstate('StaysCalactive');
          }
          else {
            setCalendarstate('StaysCalinactive');
          }
        }} >
          <div>

          <input
            type={inputType}
              placeholder="Check-in date"
              value={format(state.startDate,"dd/MM/yyyy")}
            // onFocus={handleinputfocus}
            // onBlur={handleinputblur}
            />
          </div>              
            <div>{" "}--{" "}</div>
          <div>

          <input
            type={inputType}
              placeholder="Check-out date"
              value={format(state.endDate,"dd/MM/yyyy")}
              
            // onFocus={handleinputfocus}
            // onBlur={handleinputblur}
          />
          </div>
        </div>
        <div id="inputmembers">
          <ion-icon name="person-outline"></ion-icon>
          <input type="text" placeholder="2 Adults. 0 children . 1 room" />
        </div>
        <button id="search" type="submit">
          Search
        </button>
        {/* <div id="ibedicon"></div> */}
        {/* <div id="iusericon"></div> */}
      </div>
      <div class={calendarstate}>
        <div id="staysrentdate">
          <Calendar state={state} setState={setState} calendarstate={calendarstate} />
        </div>
      </div>
      <div id="checkboxforflight">
        <input type="checkbox" />
        I'm looking for flights
      </div>

      <div id="offers">
        <h2>Offers</h2>
        <Offers/>
      </div>
      <div id="propertytype">
        <h2>Browse by property type</h2>
        <PropertyType />
      </div>

    </div>
  );
}

export default Stays;
