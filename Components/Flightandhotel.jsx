import React, { useEffect } from "react";

function Flightandhotel({ routebut, setRoutebut }) {
  useEffect(() => {
    setRoutebut({
      stays: "Rinactive",
      flight: "Rinactive",
      flihot: "Ractive",
      carrent: "Rinactive",
      attraction: "Rinactive",
      airport: "Rinactive",
    });
  }, []);
  return (
    <div>
      <div id="Fandhroutecontainerhead">
        <div class="routepagehead">Your entire holiday in one click</div>
        <div class="routepageheaddesc">Book Flight + Hotel</div>
      </div>
      <div id="Fandhinputdetails">
        <div>
          <div class="inputhead">Departure</div>
          <div>
            <input type="text" placeholder="City or airport" />
          </div>
        </div>
        <div>
          <div class="inputhead">Destination</div>
          <div>
            <input type="text" placeholder="Where do you want to go?" />
          </div>
        </div>
        <div>
          <div class="inputhead">When?</div>
          <div>
            <input type="text" placeholder="Sun,29 Sept-Wed,2 Oct" />
          </div>
        </div>
        <div>
          <div class="inputhead">Travellers and flight class</div>
          <div>
            <input type="text" placeholder="2 travellers,1 room,Any..." />
            
          </div>
        </div>
           <div id="search"><ion-icon name="search-sharp"></ion-icon></div>
      </div>
      <div id="Fandhhotdesticontainer">
        <div id="head">Discover our hotest destination</div>
        <div id="destinations">
          <div id="Fandhdestiimg1">
            <img  src="https://res.cloudinary.com/lastminute-contenthub/image/upload/c_lfill,ar_10:6/c_limit,w_768,h_999999/q_auto:best/f_auto/v1/DAM/Photos/Other/Sports/twenty20_e819bc78-f04a-4f3e-99d3-532ee7281146-v502.jpg"/>
          </div>
          <div id="Fandhdestiimg2">
            <img  src="https://res.cloudinary.com/lastminute-contenthub/image/upload/c_lfill,ar_10:6/c_limit,w_768,h_999999/q_auto:best/f_auto/v1/DAM/Photos/Destinations/Asia/India/Goa/shutterstock_1918710530.jpg"/>
          </div>
          <div id="Fandhdestiimg3">
            <img  src="https://res.cloudinary.com/lastminute-contenthub/image/upload/c_lfill,ar_10:6/c_limit,w_768,h_999999/q_auto:best/f_auto/v1/DAM/Photos/Destinations/Asia/India/Goa/shutterstock_772145203.jpg"/>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Flightandhotel;
