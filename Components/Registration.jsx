import React, { useEffect, useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

// import {LoginSocialGoogle }  from 'reactjs-social-login'

function Registration({ regbut, setRegbut, setLogbut }) {
  
  const [responsemsg, setResponsemsg] = useState('');

  const [googleRegisterdetails, setGoogleRegisterdetails] = useState({
    email: "",
    name: "",
    profile: "",
  });

  const GoogleReghandler = async (e) => {
    // e.preventDefault();

    const GoogleRegbody = {
      Email: googleRegisterdetails.email,
      Name: googleRegisterdetails.name,
      Profile: googleRegisterdetails.profile,
    };

    const response = await fetch("https://bookingwebsitebackend-rkgz.onrender.com/api/google/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(GoogleRegbody),
    });

    const data = await response.json();
    setResponsemsg(data.message);

    if (response.status == 200)
    {
      setTimeout(() => {
        
        setRegbut('Reinactive');

        setLogbut('Lactive');
      },2000)
    }
     setTimeout(() => {
     setResponsemsg('');
    }, 4000)
  };

  const [guestRegisterdetails, setGuestRegisterdetails] = useState({
    Gemail: "",
    Gpassword: "",
  });

  const GuestReghandler = async (e) => {
    e.preventDefault();

    const guestRegbody = {
      email: guestRegisterdetails.Gemail,
      password: guestRegisterdetails.Gpassword,
    };

    const response = await fetch("https://bookingwebsitebackend-rkgz.onrender.com/api/guest/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(guestRegbody),
    });
    const data = await response.json();

    setResponsemsg(data.message);
    if (response.status == 200) {
      setGuestRegisterdetails({
        Gemail: "",
        Gpassword:""
        
      })
      
      setTimeout(() => {
        
        setRegbut('Reinactive');
        setLogbut('Lactive');
      },2000)
    }
    setTimeout(() => {
     setResponsemsg('');
    }, 4000)
  };

  return (
    <div class={regbut}>
      <div id="Regcontainer">
        <div id="Rxclose" onClick={()=>{setRegbut('Reinactive')}}>x</div>
        <form onSubmit={GuestReghandler}>
          <h4>Sign in or create an account</h4>

          <label>Email address :</label>
          <div>
            <input
              type="email"
              placeholder="Enter the Email..."
              value={guestRegisterdetails.Gemail}
              onChange={(e) => {
                setGuestRegisterdetails({
                  ...guestRegisterdetails,
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
              value={guestRegisterdetails.Gpassword}
              onChange={(e) => {
                setGuestRegisterdetails({
                  ...guestRegisterdetails,
                  Gpassword: e.target.value,
                });
              }}
            />
          </div>
          <button type="submit" class="signupbut" onSubmit={GuestReghandler}>
            Sign up
          </button>
        </form>

        <div class="orsplit">
          -------------------------------OR----------------------------------
        </div>
        <div class="responsemsg">{responsemsg }</div>

        <div class="GoogleLogin">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const credentialDecode = jwtDecode(credentialResponse.credential);
              setGoogleRegisterdetails({
                email: credentialDecode.email,
                name: credentialDecode.name,
                profile: credentialDecode.picture,
              });
              console.log(credentialDecode.picture)
              GoogleReghandler();
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </div>
        <div class="containerswitches">Already have a account ? <span id="Rlogbut" onClick={() => {
          setLogbut('Lactive'); 
          setRegbut('Reinactive')
        }}>Login</span></div>
      </div>
    </div>
  );
}

export default Registration;
