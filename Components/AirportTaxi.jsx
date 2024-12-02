import React, { useEffect, useState } from "react";
import Calendar from "../Components/calendar";
import { format } from "date-fns";
import "../style/style.css";
import AirRecomendCards from "../Components/AirRecomendCards";

function AirportTaxi({ routebut, setRoutebut }) {
  const [calendarstate, setCalendarstate] = useState("AirportCalinactive");
  const [state, setState] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const [airRecomoptstates, setAirRecomoptstates] = useState({
    opt1state: "Airopt1active",
    opt2state: "Airopt2inactive",
    opt3state: "Airopt3inactive",
    opt1butstate: "Airopt1butactive",
    opt2butstate: "Airopt2butinactive",
    opt3butstate: "Airopt3butinactive",
  });

  const handleFocusselection = () => {
    setCalendarstate("AirportCalactive");
  };
  const handleblurselection = () => {
    setCalendarstate("AirportCalinactive");
  };

  const [inputType, setInputType] = useState("text");

  useEffect(() => {
    setRoutebut({
      stays: "Rinactive",
      flight: "Rinactive",
      flihot: "Rinactive",
      carrent: "Rinactive",
      attraction: "Rinactive",
      airport: "Ractive",
    });
  });
  useEffect(() => {
    setCalendarstate("AirportCalinactive");
  }, [state.startDate, state.endDate]);
  return (
    <div>
      <div>
        <div class="routepagehead">Book your airport taxi</div>
        <div class="routepageheaddesc">
          Easy airport transfers to and from your accommodation
        </div>
        <div id="Airporttaxicontainer">
          <div id="Airrootechoice">
            <div>
              <input type="radio" />
              One-way
            </div>
            <div>
              <input type="radio" />
              Return
            </div>
          </div>
          <div id="Airportinputdetails">
            <div id="Airportinputplace">
              <ion-icon name="bed-outline"></ion-icon>
              <input type="text" placeholder="Where From?" />
            </div>
            <div id="AirportinputToplace">
              <input type="text" placeholder="Where to" />
            </div>
            <div
              id="Airportinputdate"
              // onClick={() => {
              //   if (calendarstate == "AirportCalactive") {
              //     setCalendarstate("AirportCalinactive");
              //   } else {
              //     setCalendarstate("AirportCalactive");
              //   }
              // }}
              onFocus={handleFocusselection}
              onClick={() => {
                if (calendarstate == "AirportCalinactive") {
                  setCalendarstate("AirportCalactive");
                } else {
                  setCalendarstate("AirportCalinactive");
                }
              }}
            >
              <div>
                <input
                  type={inputType}
                  placeholder="Check-in date"
                  value={format(state.startDate, "dd/MM/yyyy")}
                />
              </div>
              <div id="Airportinputhipen">--</div>
              <div>
                <input
                  type={inputType}
                  placeholder="Check-out date"
                  value={format(state.endDate, "dd/MM/yyyy")}
                />
              </div>
            </div>
            <div id="Airportinputmembers">
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
          <div class={calendarstate}>
            <div id="Airportrentdate">
              {/* <div id="datehead">Select the date</div> */}
              <Calendar
                state={state}
                setState={setState}
                calendarstate={calendarstate}
              />
            </div>
          </div>
          <div id="AirRecommendContainer">
            <div id="head">Airport Taxis for any kind of trip</div>

            <div id="options">
              <div
                id="opt1"
                class={airRecomoptstates.opt1butstate}
                onClick={() => {
                  if (airRecomoptstates.opt1state == "Airopt1inactive") {
                    setAirRecomoptstates({
                      opt1state: "Airopt1active",
                      opt2state: "Airopt2inactive",
                      opt3state: "Airopt3inactive",
                      opt1butstate: "Airopt1butactive",
                      opt2butstate: "Airopt2butinactive",
                      opt3butstate: "Airopt3butinactive"
                    });
                  }
                }}
              >
                1-3 Passengers
              </div>
              <div
                id="opt2"
                class={airRecomoptstates.opt2butstate}
                onClick={() => {
                  if (airRecomoptstates.opt2state == "Airopt2inactive") {
                    setAirRecomoptstates({
                      opt1state: "Airopt1inactive",
                      opt2state: "Airopt2active",
                      opt3state: "Airopt3inactive",
                      opt1butstate: "Airopt1butinactive",
                      opt2butstate: "Airopt2butactive",
                      opt3butstate: "Airopt3butinactive"
                    });
                  }
                }}
              >
                4-7 Passengers
              </div>
              <div
                class={airRecomoptstates.opt3butstate}
                onClick={() => {
                  if (airRecomoptstates.opt3state == "Airopt3inactive") {
                    setAirRecomoptstates({
                      opt1state: "Airopt1inactive",
                      opt2state: "Airopt2inactive",
                      opt3state: "Airopt3active",
                      opt1butstate: "Airopt1butinactive",
                      opt2butstate: "Airopt2butinactive",
                      opt3butstate: "Airopt3butactive"
                    });
                  }
                }}
              >
                All taxis
              </div>
            </div>
            <div>
              <AirRecomendCards
                opt1state={airRecomoptstates.opt1state}
                opt2state={airRecomoptstates.opt2state}
                opt3state={airRecomoptstates.opt3state}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AirportTaxi;
