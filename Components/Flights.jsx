import React, { useEffect, useState } from "react";
import PopularflightCard from "./PopularflightCard";
import Calendar from "./calendar";
import format from "date-fns/format";

function Flights({ routebut, setRoutebut }) {
  const [inputType, setInputType] = useState("text");
  const [calendarstate, setCalendarstate] = useState("FCalinactive");
  const [flightsoptbut, setFlightsoptbut] = useState({
    interbut: "Finteroptbutinactive",
    domesticbut:"Fdomesoptbutinactive"
  });
  // const [domesflights, setDomesflights] = useState([]);
  const [iandDflights, setIandDflights] = useState([]);
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
  // const [internationalflights, setInternationalflights] = useState([]);
  // const [domesticflights, setDomesticflights] = useState([]);
  const [popularflights, setPopularflights] = useState([]);

  const handlePopularflights = async () => {
    const res = await fetch("https://bookingwebsitebackend-rkgz.onrender.com/api/popularflight/");
    const data = await res.json();

    if (res.status == 200) {
      setIandDflights(data.Popularflights)
      setPopularflights(data.Popularflights);
    }
    
  };
  const interflighthandler = () => {
    let intertemp = [];
    iandDflights.map((val, i) => {
      if (val.airporttype == "international")
      {
        intertemp.push(val)
      }

    })
    setPopularflights(intertemp);
    setFlightsoptbut({
      interbut: "Finteroptbutactive",
      domesticbut:"Finteroptbutinactive"
    })
  }

  const domesflighthandler = () => {
    let domestictemp = [];
    iandDflights.map((val, i) => {
      if (val.airporttype == "domestic")
      {
        domestictemp.push(val)
      }
    })
    setPopularflights(domestictemp);
    setFlightsoptbut({
      interbut: "Finteroptbutinactive",
      domesticbut:"Finteroptbutactive"
    })
    
  }

  // console.log(popularflights)
  useEffect(() => {
    setRoutebut({
      stays: "Rinactive",
      flight: "Ractive",
      flihot: "Rinactive",
      carrent: "Rinactive",
      attraction: "Rinactive",
      airport: "Rinactive",
    });
    handlePopularflights();
  }, []);
  return (
    <div>
      <div>
        <div class="routepagehead">Compare and Book flights with ease</div>
        <div class="routepageheaddesc">
          Discover your next dream destination
        </div>
        <div id="Flightsinputdetails">
          <div id="Finputplace">
            <ion-icon name="airplane"></ion-icon>
            <input type="text" placeholder="Where From?" />
          </div>
          <div id="inputToplace">
            <input type="text" placeholder="Where to" />
          </div>
          <div
            id="Finputdate"
            onClick={() => {
              if (calendarstate == "FCalinactive") {
                setCalendarstate("FCalactive");
              } else {
                setCalendarstate("FCalinactive");
              }
            }}
          >
            <div>
              <input
                type="text"
                placeholder="Check-in date"
                value={format(state.startDate, "dd/MM/yyyy")}
              />
            </div>
            <div id="inputhipen">--</div>
            <div>
              <input
                type="text"
                placeholder="Check-out date"
                value={format(state.endDate, "dd/MM/yyyy")}
              />
            </div>
          </div>
          <div id="Finputmembers">
            <ion-icon name="person-outline"></ion-icon>
            <input type="text" placeholder="1 Adult" />
          </div>
          <button id="search" type="submit">
            {" "}
            Search{" "}
          </button>
          {/* <div id="ibedicon"></div> */}
          {/* <div id="iusericon"></div> */}
        </div>
        <div class={calendarstate}>
          <div id="Frentdate">
            {/* <div id="datehead">Select the date</div> */}
            <Calendar
              state={state}
              setState={setState}
              calendarstate={calendarstate}
            />
          </div>
        </div>
      </div>
      <div id="FPopularlistcontainer">
        <div id="FPopularhead">Popular flights near you</div>
        <div id="FPopulardesc">
          Find a deals on domestic and international flights
        </div>

        <div id="Foptions">
          <div class={flightsoptbut.interbut} onClick={() => { interflighthandler(); }}>
            International
          </div>
          <div class={flightsoptbut.domesticbut} onClick={() => { domesflighthandler(); }} >Domestic</div>
        </div>
        <div id="Popularflightslistcontainer">
          <div class="row">
            {popularflights.map((val, i) => (
              <div class="col-md-3">
                <PopularflightCard place={val.place} imgsrc={val.src} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flights;
