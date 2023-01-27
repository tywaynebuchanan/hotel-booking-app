import React from 'react'
import "./searchitem.css"
import {Link} from 'react-router-dom'

const SearchItem = ({items}) => {
  console.log(items)
  const noPhoto = "https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg"
    return (
    
       <>
         {items.map(item=>(
          <>
           <div className="searchItem" key = {item._id}>
          <img src={item.photos[0]} alt="" className="siImg" />
              <div className="siDesc">
                <h1 className="siTitle">{item.name}</h1>
                <span className="siDistance">500m from center</span>
                <span className="siTaxiOp">Free airport taxi</span>
                <span className="siSubtitle">
                  Studio Apartment with Air conditioning
                </span>
                <span className="siFeatures">{item.desc}</span>
                <span className="siCancelOp">Free cancellation </span>
                <span className="siCancelOpSubtitle">
                  You can cancel later, so lock in this great price today!
                </span>
              </div>
              <div className="siDetails">
                <div className="siRating">
                  <span>Excellent</span>
                  <button>{item.ratings}</button>
                </div>
                <div className="siDetailTexts">
                  <span className="siPrice">${item.cheapestRoom}</span>
                  <span className="siTaxOp">Includes taxes and fees</span>
                  <Link to={`/hotel/${item._id}`}>
                  <button className="siCheckButton">See availability</button>
                  </Link>
                </div>
              </div>
              </div>
          </>
         
        ))}
       </>
       
              
       
      );
}

export default SearchItem