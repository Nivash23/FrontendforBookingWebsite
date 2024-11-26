import React, { useEffect, useState } from "react";
import PopularflightCard from "./PopularflightCard";

function Flights({ routebut, setRoutebut }) {
  const [inputType, setInputType] = useState("text");

  const handleinputfocus = () => {
    setInputType("date");
  };
  const handleinputblur = () => {
    setInputType("text");
  };
  const [popularflights, setPopularflights] = useState([]);

  const handlePopularflights = async() => {
    const res = await fetch('http://127.0.0.1:3012/api/popularflight/')
    const data = await res.json();

    if (res.status == 200)
    {
         setPopularflights(data.Popularflights)
    }
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
          <input type="text"  placeholder="Where to" />
        </div>
          <div id="Finputdate">
            
          <div>

          <input
            type={inputType}
            placeholder="Check-in date"
            onFocus={handleinputfocus}
            onBlur={handleinputblur}
            />
          </div>              
            <div id="inputhipen">--</div>
          <div>

          <input
            type={inputType}
            placeholder="Check-out date"
            onFocus={handleinputfocus}
            onBlur={handleinputblur}
          />
          </div>
        </div>
        <div id="Finputmembers">
          <ion-icon name="person-outline"></ion-icon>
          <input type="text" placeholder="1 Adult" />
        </div>
        <button id="search" type="submit"> Search </button>
        {/* <div id="ibedicon"></div> */}
        {/* <div id="iusericon"></div> */}
      </div>
      </div>
      <div id="FPopularlistcontainer">
        <div id="FPopularhead">Popular flights near you</div>
        <div id="FPopulardesc">Find a deals on domestic and international flights</div>

        <div id="Foptions">
          <div>International</div>
          <div>Domestic</div>
        </div>
          <div id="Popularflightslistcontainer">
            <div class="row">
              {
                popularflights.map((val, i) =>
                  <div class="col-md-3">
                    <PopularflightCard place={val.place } imgsrc={val.src} />
                 </div>
                )
              }
            </div>
        </div>
      </div>
    </div>
  );
}

export default Flights;
