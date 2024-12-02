import React from 'react'

function profile({loginusername,loginuserprofile,profilecontainerstate}) {
  return (
    <div class={profilecontainerstate}>
          <div id="profilecontainerbox">
      <div id="profilearrowdesign"></div>
        <div id="name">{loginusername}</div>
        <div><img src={loginuserprofile } alt="No user" /></div>
          </div>
    </div>
  )
}

export default profile