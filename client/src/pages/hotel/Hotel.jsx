import { faLocation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React,{useContext} from 'react'
import { useLocation } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Navbar from '../../components/navbar/Navbar'
import { SearchContext } from '../../context/SearchContext'
import useFetch from '../../hooks/useFetch'
import "./hotel.css"

const Hotel = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2]
    const url = `/hotel/${id}`
    const {data,loading,error,reFetch} = useFetch(url)
    const {date,options} = useContext(SearchContext)
    console.log(date)

    //Function to calculate date difference
    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
    function dayDifference(date1, date2) {
      const timeDiff = Math.abs(date2.getTime() - date1.getTime());
      const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
      return diffDays;
    }

    const days = dayDifference(date[0].endDate,date[0].startDate)
  
  return (
    <>
        <Navbar/>
        <Header type="list"/>
        {loading ? "loading" : <div className='hotelContainer'>
        <div className="hotelWrapper">
        <button className='bookNow'>Reserve or Book Now</button>
            <h1 className='hotelTitle'>{data.name}</h1>
            <div className="hotelAddress">
                <FontAwesomeIcon icon={faLocation}/>
                <span> {data.address} </span>
                <span className="hotelDistance">
                    Excellent distance - 500m from center 
                </span>
                <span className="hotelPriceHighlight"> Book a stay over $114 at this property and get a free airport taxi 
                </span>
                <div className="hotelImages">
                    {data.photos?.map((photo)=>(
                        <div className="hotelImgWrapper">
                            <img src={photo} alt="Hotel Pictures" className='hotelImg'/>
                        </div>
                    ))}
                </div>
            </div>
            <div className="hotelDetails">
            <div className="hotelDetailsTexts">
            <h1 className='hotelTitle'>Stay in the heart of {data.city} </h1>
                <p className="hotelDesc">{data.desc}</p>
            </div>
                <div className="hotelDetailsPrice">
                {days < 1 ?  <h1>Perfect for a {days}-night stay</h1> :  <h1>Perfect for a {days}-nights stay</h1>}
                   
                    <span>
                        Located in the heart of Kingston, this property an excellent location with 
                        a score of 9.8!
                    </span>
                    
                    <h2><b>${days * data.cheapestRoom * options.room}</b> ({days < 1 ? `${days} night` : `${days} nights`})</h2>
                    <button className="button is-primary">Reserve or Book Now!</button>
                </div>
            </div>
        </div>
        <MailList/>
        <Footer/>
        </div>}
      
    </>
    
  )
}

export default Hotel