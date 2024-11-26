import React from 'react'

function PopularflightCard({place,imgsrc}) {
  return (
      <div>
          <div id="Fpopularcardcontainer" >
        <div id="Popularflightsimage">
          
              <img src={imgsrc} />
        </div >
              <div id="Popularflightsplace">{place}</div>
              {/* <div id="Carhiredestinationavailable">Available cars {cars }</div>
              <div id="Carhiredestinationprice">Rs.{price }</div> */}
              
          </div>

    </div>
  )
}

export default PopularflightCard