import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

function login({ logbut, setLogbut, setRegbut,setLoginresponsedetails }) {
  
  const [responsemsg, setResponsemsg] = useState('');

  const [guestlogindetails, setGuestlogindetails] = useState({
    Gemail: "",
    Gpassword: "",
  });
  

  const [googlelogindetails, setGooglelogindetails] = useState({
    email: "",
  });
    const Googleloghandler = async (e) => {
    // e.preventDefault();

    const Googlelogbody = {
      Email: googlelogindetails.email,
      
    };

    const response = await fetch("http://127.0.0.1:3012/api/google/googlelog/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Googlelogbody),
    });

      const data = await response.json();
      setResponsemsg(data.message);

      setTimeout(() => {
        setResponsemsg('');
      }, 4000)
      if (response.status == 200)
      {
        setLoginresponsedetails({
          username: data.loguser.Name,
          profile:data.loguser.Profile
        })
        setTimeout(() => {
          
          setLogbut('Linactive');
        },2000)
      }

      
    };
    
    const Guestloghandler = async (e) => {
    e.preventDefault();

    const guestlogbody = {
      email: guestlogindetails.Gemail,
      password: guestlogindetails.Gpassword,
    };

    const response = await fetch("https://bookingwebsitebackend-rkgz.onrender.com/api/guest/guestlog/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(guestlogbody),
    });
    const data = await response.json();
      setResponsemsg(data.message)
      

    if (response.status == 200) {
      setGuestlogindetails({
        Gemail: "",
        Gpassword:"",
      })
      setTimeout(() => {
      
        setLogbut('Linactive');
    },2000)
      
      }
      setTimeout(() => {
        setResponsemsg('');
      }, 4000)
  };

    
  return (
    <div class={logbut}>
      <div id="logcontainer">
        <div id="Lxclose" onClick={()=>{setLogbut('Linactive')}}>x</div>
        <form onsubmit={Guestloghandler}>
          <h4>Sign in or create an account</h4>

          <label>Email address :</label>
          <div>
            <input
              type="email"
              placeholder="Enter the Email..."
              value={guestlogindetails.Gemail}
              onChange={(e) => {
                setGuestlogindetails({
                  ...guestlogindetails,
                  Gemail: e.target.value,
                });
              }}
            />
          </div>
          <label>Password :</label>
          <div>
            <input
              type="password"
              placeholder="Enter the Password..."
              value={guestlogindetails.Gpassword}
              onChange={(e) => {
                setGuestlogindetails({
                  ...guestlogindetails,
                  Gpassword: e.target.value,
                });
              }}
            />
          </div>
          <button type="submit" class="signinbut" onClick={Guestloghandler}>
            Sign in
          </button>
        </form>

              <div id="orsplit">
                  -------------------------------OR----------------------------------
        </div>
        <div class="responsemsg">{responsemsg }</div>

        <div class="GoogleLogin">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const credentialDecode = jwtDecode(credentialResponse.credential);
              setGooglelogindetails({
                email: credentialDecode.email,
              });
              Googleloghandler();
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
              </div>
              
              <div class="containerswitches">Create new account ? <span id="LRegbut" onClick={() => {
                  setRegbut('Reactive'); 
                  setLogbut('Linactive')
              }}>Register</span></div>
      </div>
    </div>
  );
}

export default login;
