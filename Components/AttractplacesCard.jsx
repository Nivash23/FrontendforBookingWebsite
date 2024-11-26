import React from 'react'

function AttractplacesCard({imgsrc,name}) {
  return (
      <div>
      <div>
        <div id="Arecommendplaceimage">
          
              <img src={imgsrc} />
        </div>
              <div id="Arecommendplacename">{ name}</div>
              
          </div>
    </div>
  )
}

export default AttractplacesCard