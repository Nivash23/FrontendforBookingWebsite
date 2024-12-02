import React from 'react'

function CarhireCard({imgsrc,name,price,cars}) {
  return (
      <div>
          <div id="CarhiredestiCard" >
        <div id="Carhiredestinationimage">
          
              <img src={imgsrc} />
        </div >
              <div id="Carhiredestinationname">{name}</div>
              <div id="Carhiredestinationavailable">Available cars {cars }</div>
              <div id="Carhiredestinationprice">Rs.{price }</div>
              
          </div>
    </div>
  )
}

export default CarhireCard