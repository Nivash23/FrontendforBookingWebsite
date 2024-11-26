import React, { useEffect, useState } from "react";
import "../style/date.css";
import Calendar from "../Components/calendar";

import { format } from "date-fns";
import CarhireCard from "./CarhireCard";

function CarRentals({ routebut, setRoutebut }) {
  const [calendarstate, setCalendarstate] = useState("CarCalinactive");
  const [state, setState] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const [carhiredestinations, setCarhiredestinations] = useState([]);

  const [inputType, setInputType] = useState("text");

  const handleinputfocus = () => {
    setInputType("date");
  };

  useEffect(() => {
    setRoutebut({
      stays: "Rinactive",
      flight: "Rinactive",
      flihot: "Rinactive",
      carrent: "Ractive",
      attraction: "Rinactive",
      airport: "Rinactive",
    });
    handlehiredestinations();
  
  }, []);

  const handlehiredestinations =async () => {
    const res = await fetch('http://127.0.0.1:3012/api/cardestination/')
    const data = await res.json();

    if (res.status == 200)
    {
      setCarhiredestinations(data.Destinations)
    }
  }
  console.log(carhiredestinations)
  useEffect(() => {
    setCalendarstate("CarCalinactive");

  }, [state.startDate, state.endDate]);

  return (
    <div>
      <div>
        <div class="routepagehead">Car hire for any kind of trip</div>
        <div class="routepageheaddesc">
          Great cars at great prices, from the biggest car rental companies
        </div>
      </div>
      <div id="Rentinputdetails">
        <div id="Rentinputplace">
          <ion-icon name="bed-outline"></ion-icon>
          <input type="text" placeholder="Where From?" />
        </div>
        <div id="RentinputToplace">
          <input type="text" placeholder="Where to" />
        </div>
        <div
          id="Rentinputdate"
          onClick={() => {
            if (calendarstate == "CarCalactive") {
              setCalendarstate("CarCalinactive");
            } else {
              setCalendarstate("CarCalactive");
            }
          }}
          // onBlur={handleinputblur}
        >
          <div>
            <input
              type={inputType}
              placeholder="Check-in date"
              value={format(state.startDate, "dd/MM/yyyy")}
            />
          </div>
          <div id="Rentinputhipen">--</div>
          <div>
            <input
              type={inputType}
              placeholder="Check-out date"
              value={format(state.endDate, "dd/MM/yyyy")}
            />
          </div>
        </div>
        <div id="Rentinputmembers">
          <ion-icon name="person-outline"></ion-icon>
          <input type="text" placeholder="Members Count..." />
        </div>
        <button id="search" type="submit">
          {" "}
          Search{" "}
        </button>
        {/* <div id="ibedicon"></div> */}
        {/* <div id="iusericon"></div> */}
      </div>
      {/* <div></div> */}
      <div class={calendarstate}>
        <div id="carrentdate">
          {/* <div id="datehead">Select the date</div> */}
          <Calendar
            state={state}
            setState={setState}
            calendarstate={calendarstate}
          />
        </div>
      </div>
      <div id="Renthiredestination">
        <div id="head">Popular Car hire Destination</div>
        <div id="desc">Explore more options to hire a car for cheap</div>
        <div id="buttonsoptions">
          <div>Cities worldwide</div>
          <div>Airports worldwide</div>
        </div>
        <div id="Carhiredestinations">
          <div class="row">
            {
              carhiredestinations.map((val, i) =>
                
                <div class="col-md-4">
                  <CarhireCard imgsrc={val.src} name={val.name} price={val.Averageprice} cars={val.cars} />
                </div>
  
              )
            }
          </div>
            
        </div>
      </div>
    </div>
  );
}

export default CarRentals;
