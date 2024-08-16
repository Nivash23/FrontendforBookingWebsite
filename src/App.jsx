import React, { useState } from "react";
import Offers from "../Components/Offers";
import PropertyType from "../Components/PropertyType";
import Registration from "../Components/Registration";
import Login from "../Components/login";

function Bookings() {
  const [regbut, setRegbut] = useState("Reinactive");
  const [logbut, setLogbut] = useState("Linactive");

  const [routebut, setRoutebut] = useState({
    stays: "Ractive",
    flight: "Rinactive",
    flihot: "Rinactive",
    carrent: "Rinactive",
    attraction: "Rinactive",
    airport: "Rinactive",
  });

  const [inputType, setInputType] = useState("text");

  const handleinputfocus = () => {
    setInputType("date");
  };
  const handleinputblur = () => {
    setInputType("text");
  };
  return (
    <div id="body">
      <div id="navigation">
        <div id="nav">
          <div id="logo">Booking.com</div>
          <div id="menus">
            <div>INR</div>
            <div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_India.png/1280px-Flag_of_India.png"></img>
            </div>
            <div id="question">
              <ion-icon name="help-circle-outline"></ion-icon>
            </div>
            <div>List your property</div>
            <button
              type="button"
              onClick={() => {
                if (regbut == "Reinactive") {
                  setRegbut("Reactive");
                  setLogbut('Linactive')
                } else {
                  setRegbut("Reinactive");
                }
              }}
            >
              Register
            </button>
            <button
              type="button"
              onClick={() => {
                if (logbut == "Linactive") {
                  setLogbut("Lactive");
                  setRegbut('Reinactive');
                } else {
                  setLogbut("Linactive");
                }
              }}
            >
              Sign in
            </button>
          </div>
          <div id="navrouters">
            <div
              onClick={() => {
                setRoutebut({
                  stays: "Ractive",
                  flight: "Rinactive",
                  flihot: "Rinactive",
                  carrent: "Rinactive",
                  attraction: "Rinactive",
                  airport: "Rinactive",
                });
              }}
              class={routebut.stays}
            >
              <ion-icon name="bed-outline"></ion-icon>Stays
            </div>
            <div
              onClick={() => {
                setRoutebut({
                  stays: "Rinactive",
                  flight: "Ractive",
                  flihot: "Rinactive",
                  carrent: "Rinactive",
                  attraction: "Rinactive",
                  airport: "Rinactive",
                });
              }}
              class={routebut.flight}
            >
              <ion-icon name="airplane-outline"></ion-icon> Flights
            </div>
            <div
              onClick={() => {
                setRoutebut({
                  stays: "Rinactive",
                  flight: "Rinactive",
                  flihot: "Ractive",
                  carrent: "Rinactive",
                  attraction: "Rinactive",
                  airport: "Rinactive",
                });
              }}
              class={routebut.flihot}
            >
              <ion-icon name="baseball-outline"></ion-icon>Flight + Hotel
            </div>
            <div
              onClick={() => {
                setRoutebut({
                  stays: "Rinactive",
                  flight: "Rinactive",
                  flihot: "Rinactive",
                  carrent: "Ractive",
                  attraction: "Rinactive",
                  airport: "Rinactive",
                });
              }}
              class={routebut.carrent}
            >
              <ion-icon name="car-sport-outline"></ion-icon>Car rentals
            </div>
            <div
              onClick={() => {
                setRoutebut({
                  stays: "Rinactive",
                  flight: "Rinactive",
                  flihot: "Rinactive",
                  carrent: "Rinactive",
                  attraction: "Ractive",
                  airport: "Rinactive",
                });
              }}
              class={routebut.attraction}
            >
              <ion-icon name="football-outline"></ion-icon>Attractions
            </div>
            <div
              onClick={() => {
                setRoutebut({
                  stays: "Rinactive",
                  flight: "Rinactive",
                  flihot: "Rinactive",
                  carrent: "Rinactive",
                  attraction: "Rinactive",
                  airport: "Ractive",
                });
              }}
              class={routebut.airport}
            >
              <ion-icon name="car-outline"></ion-icon>Airport taxis
            </div>
          </div>
        </div>
      </div>
      <div id="bodybackimg">
        <img src="https://png.pngtree.com/background/20230424/original/pngtree-couple-sitting-on-the-hill-picture-image_2459275.jpg"></img>
        <div id="htextinimg">A piece of paradise just for you </div>
        <div id="ptextinimg">Book entire houses,villas,cabins and more </div>

        <div id="discoverbut">Discover holiday rentals</div>
      </div>
      <div id="inputdetails">
        <div id="inputplace">
          <ion-icon name="bed-outline"></ion-icon>
          <input type="text" placeholder="Where are you going?" />
        </div>
        <div id="inputdate">
          <input
            type={inputType}
            placeholder="Check-in date"
            onFocus={handleinputfocus}
            onBlur={handleinputblur}
          />{" "}
          --{" "}
          <input
            type={inputType}
            placeholder="Check-out date"
            onFocus={handleinputfocus}
            onBlur={handleinputblur}
          />
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
      <div id="checkboxforflight">
        <input type="checkbox" />
        I'm looking for flights
      </div>

      <div id="offers">
        <h2>Offers</h2>
        <Offers />
      </div>
      <div id="propertytype">
        <h2>Browse by property type</h2>
        <PropertyType />
      </div>
      <div id="Registration">
        <Registration regbut={regbut} setRegbut={setRegbut} setLogbut={setLogbut} />
      </div>
      <div>
        <Login logbut={logbut} setLogbut={setLogbut} setRegbut={setRegbut} />
      </div>
      <div id="exploreIndia">
        <div>Explore India</div>
      </div>
    </div>
  );
}

export default Bookings;
