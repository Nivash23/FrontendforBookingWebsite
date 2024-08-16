import React, { useEffect, useState } from 'react'

function PropertyType() {
    // const [p1Index, setP1Index] = useState([]);
    // let p1Index = [];
    
    
    // const [pstartIndex, setPstartIndex] = useState(0);
    // const pindexhandler = async() => {
        
        // const propertyIndex = [0, 1, 2, 3, 4, 5,6,7,8,9,10,11];
        // let count = 1;
        // let p1Index = [];
        // let a2 = [];
        // for (let i = 0; i <= propertyIndex.length - 1; i++)
        //     {
        //         if (count<5)
        //             {
        //                 a2.push(propertyIndex[i]);
        //                 count++;
                        
        //             }
        //             else {
                        
        //                 break;
        //             }
        //         }
        //        p1Index = a2;
        //     //    setP1Index(a2)
        //         a2 = [];
        //         count = 1;
            // }
            // console.log(p1Index)
            
            // useEffect(() => {
            //     pindexhandler();
            // },[pstartIndex])
    // console.log(p1Index)


    const properties = [{
        name:"Hotels",
        src:"https://r-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o="
    },
    {
        name:"Apartments",
        src:"https://q-xx.bstatic.com/xdata/images/hotel/263x210/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o="
    },
    {
        name:"Resorts",
        src:"https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o="
    },
    {
        name:"Villas",
        src:"https://r-xx.bstatic.com/xdata/images/hotel/263x210/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o="
    },
    {
        name:"Cabins",
        src:"https://q-xx.bstatic.com/xdata/images/hotel/263x210/52979454.jpeg?k=6ac6d0afd28e4ce00a8f817cc3045039e064469a3f9a88059706c0b45adf2e7d&o="
    },
    {
        name:"Cottages",
        src:"https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450074.jpeg?k=7039b03a94f3b99262c4b3054b0edcbbb91e9dade85b6efc880d45288a06c126&o="
    },
    {
        name:"Glamping Sites",
        src:"https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450090.jpeg?k=52f6b8190edb5a9c91528f8e0f875752ce55a6beb35dc62873601e57944990e4&o="
    },
    {
        name:"Serviced Apartments",
        src:"https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450058.jpeg?k=2449eb55e8269a66952858c80fd7bdec987f9514cd79d58685651b7d6e9cdfcf&o="
    },
    {
        name:"Holiday Homes",
        src:"https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450113.jpeg?k=76b3780a0e4aacb9d02ac3569b05b3c5e85e0fd875287e9ac334e3b569f320c7&o="
    },
    {
        name:"Guest Houses",
        src:"https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450073.jpeg?k=795a94c30433de1858ea52375e8190a962b302376be2e68aa08be345d936557d&o="
    },
    {
        name:"Hostels",
        src:"https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450082.jpeg?k=beb101b827a729065964523184f4db6cac42900c2415d71d516999af40beb7aa&o="
    },
    {
        name:"Motels",
        src:"https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450093.jpeg?k=aa5cc7703f3866af8ffd6de346c21161804a26c3d0a508d3999c11c337506ae1&o="
    },
    {
        name:"B&BS",
        src:"https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450056.jpeg?k=251e2507d43a24a4c58bb961b8d157147d56efbf91b49f9606bc768c58f581e4&o="
    },
    ]
  return (
      <div id="properties">
          <div id="property">
              
          {
                  properties.map((val, i) => (
                      <div>
                          
                          <img src={val.src}></img>
                          <div id="propertyname">{val.name }</div>
                      </div>
                      
                  ))
              }
              <div id="PRightarrow" ><ion-icon name="chevron-forward-outline"></ion-icon></div>
              <div id="PLeftarrow" ><ion-icon name="chevron-back-outline"></ion-icon></div>
          </div>
          
              

        
    </div>
  )
}

export default PropertyType