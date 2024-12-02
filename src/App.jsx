import React, { useState } from "react";
import Offers from "../Components/Offers";
import PropertyType from "../Components/PropertyType";
import Registration from "../Components/Registration";
import Login from "../Components/login";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Stays from "../Components/Stays";
import Flights from "../Components/Flights";
import Flightandhotel from "../Components/Flightandhotel";
import CarRentals from "../Components/CarRentals";
import Attractions from "../Components/Attractions";
import AirportTaxi from "../Components/AirportTaxi";
import Profilecontainer from '../Components/profile';

function Bookings() {
  const [regbut, setRegbut] = useState("Reinactive");
  const [logbut, setLogbut] = useState("Linactive");
  const [loginresponsedetails, setLoginresponsedetails] = useState({
    username: "",
    profile:"",
  })
  const [profilecontainerstate, setProfilecontianerstate] = useState('Profileinactive');
  const profilefocushandle = () => {
    setProfilecontianerstate('Profileactive')
  }

  const [routebut, setRoutebut] = useState({
    stays: "Ractive",
    flight: "Rinactive",
    flihot: "Rinactive",
    carrent: "Rinactive",
    attraction: "Rinactive",
    airport: "Rinactive",
  });

  return (
    <div id="body" >
      <Router>
        <div id="navigation">
          <div id="nav">
            <div id="logo" onClick={() => {
              if (profilecontainerstate == "Profileinactive")
              {
                setProfilecontianerstate('Profileactive')
              }
              else {
                setProfilecontianerstate('Profileinactive')
              }
            }} 
            >
              <div><ion-icon name="person-circle-outline"></ion-icon></div>
              <div>TravelsBookingWeb</div></div>
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
                    setLogbut("Linactive");
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
                    setRegbut("Reinactive");
                  } else {
                    setLogbut("Linactive");
                  }
                }}
              >
                Sign in
              </button>
            </div>
            <div id="navrouters">
              <Link to="/stays" style={{textDecoration:"none", color:"white"}}>
                <div class={routebut.stays}>
                  <ion-icon name="bed-outline"></ion-icon>Stays
                </div>
              </Link>
              <Link to="/flights" style={{textDecoration:"none", color:"white"}} >
              
              <div
                class={routebut.flight}
              >
                <ion-icon name="airplane-outline"></ion-icon> Flights
              </div>
              </Link>
              <Link to="/flightandhotel" style={{ textDecoration: "none", color: "white" }} >
              
              <div
                
                class={routebut.flihot}
              >
                <ion-icon name="baseball-outline"></ion-icon>Flight + Hotel
              </div>
              </Link>
              <Link to="/carrentals" style={{ textDecoration: "none", color: "white" }} >
              
              <div
                
                class={routebut.carrent}
              >
                <ion-icon name="car-sport-outline"></ion-icon>Car rentals
              </div>
              </Link>
              <Link to="/attractions" style={{ textDecoration: "none", color: "white" }} >
              
              <div
                
                class={routebut.attraction}
              >
                <ion-icon name="football-outline"></ion-icon>Attractions
              </div>
              </Link>
              <Link to="/airporttaxis" style={{ textDecoration: "none", color: "white" }} >
              
              <div class={routebut.airport}>
                <ion-icon name="car-outline"></ion-icon>Airport taxis
              </div>
              </Link>
            </div>
          </div>
        </div>
      <div id="Registration">
        <Registration
          regbut={regbut}
          setRegbut={setRegbut}
          setLogbut={setLogbut}
        />
        </div>
        <div>
          <Profilecontainer loginusername={loginresponsedetails.username } loginuserprofile={loginresponsedetails.profile} profilecontainerstate={profilecontainerstate} />
        </div>
      <div>
        <Login logbut={logbut} setLogbut={setLogbut} setRegbut={setRegbut} setLoginresponsedetails={setLoginresponsedetails} />
        </div>
        <div>
    
        </div>
        <Routes>
          <Route path="/"  element={<Stays routebut={routebut} setRoutebut={setRoutebut} />}/>
          <Route path="/stays"  element={<Stays routebut={routebut} setRoutebut={setRoutebut} />}/>
          <Route path="/flights"  element={<Flights routebut={routebut} setRoutebut={setRoutebut} />}/>
          <Route path="/flightandhotel"  element={<Flightandhotel routebut={routebut} setRoutebut={setRoutebut} />}/>
          <Route path="/carrentals"  element={<CarRentals routebut={routebut} setRoutebut={setRoutebut} />}/>
          <Route path="/attractions"  element={<Attractions routebut={routebut} setRoutebut={setRoutebut} />}/>
          <Route path="/airporttaxis"  element={<AirportTaxi routebut={routebut} setRoutebut={setRoutebut} />}/>
        </Routes>
          </Router>
    </div>
  );
}

export default Bookings;
