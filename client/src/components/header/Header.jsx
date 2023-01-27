import React, {useContext,useState } from 'react'
import "./header.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range'
import {format} from 'date-fns'
import {useNavigate } from 'react-router-dom'

import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import { SearchContext } from '../../context/SearchContext'

const Header = ({type}) => {

    const nagivate = useNavigate();
    const [destination,setDestination] = useState("");
    const [display,setDisplay] = useState(false);
    const [optiondisplay, setDisplayOptions] = useState(false)
    const {dispatch} = useContext(SearchContext)
    
    const [date,setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ])

    const [options,setOptions] = useState({
        adult: 1,
        children: 0,
        room: 0
    })

    const currentDate = format(date[0].startDate,"dd/MM/yyyy")
    const endingDate = format(date[0].endDate,"dd/MM/yyyy")

    const handleHide = ()=>{
      display ? setDisplay(false) : setDisplay(true);
    }

    const handleoptionsDisplay = ()=>{
        optiondisplay? setDisplayOptions(false) : setDisplayOptions(true);
        
    }

    const handleOption = (person,y) =>{
    setOptions(prev=>{
        return {...prev, [person]:y === "i" ? options[person] + 1 : options[person] - 1}
    })

    }

    const handleSearch = () =>{
        dispatch({type:"NEW_SEARCH", payload:{destination,date,options}})
        nagivate("/hotels",{state:{destination,date,options}})
    }

  return (
    <div className='header'>
        <div className='headercontainer'>
            <div className='headerlist'>
                    <div className='headeritem active'>
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className='headeritem'>
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Planes</span>
                    </div>
                    <div className='headeritem'>
                        <FontAwesomeIcon icon={faCar} />
                        <span>Cars</span>
                    </div>
                    <div className='headeritem'>
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Planes</span>
                    </div>
            </div>
            
            { type !== "list"  &&
            <>
            <h1 className='title is-1 has-text-white mt-6'>A lifetime of discounts? Its Genuis!</h1>
            <p className='description'>Search deals on hotels, homes, and much more...</p>
            <div className='headerSearch'>
                <div className='headerSearchItem'>
                    <FontAwesomeIcon icon = {faBed} className = "headerIcon"/>
                    <input type="text" 
                    placeholder='Where are you going'
                     className='headersearchinput'
                    onChange = {e=>setDestination(e.target.value)}
                     />
                </div>
                <div className='headerSearchItem'>
                    <FontAwesomeIcon icon = {faCalendarDays} className = "headerIcon"/>
                    <span className='headersearchtext has-text-grey' onClick={handleHide}>{`${currentDate} - ${endingDate}`}</span>
                    { display && <DateRange 
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            minDate={new Date()}
                            className = "date"
                            /> }
                </div>
                <div className='headerSearchItem'>
                    <FontAwesomeIcon icon = {faPerson} className = "headerIcon"/>
                    <span className='headersearchtext' onClick={handleoptionsDisplay}>
                    {`${options.adult} adult - ${options.children} children - ${options.room} room`}
                    </span>
                        
                       {optiondisplay &&  <div className='options box'>
                            <div className='optionItem'>
                                    Adult
                                    <div className = "optionControl">
                                        <div className="field has-addons">
                                        <div className="control">
                                                <button 
                                                className="button is-info"
                                                 onClick={()=>handleOption("adult","i")}
                                                 >+</button>
                                        </div>  
                                        <div className="control">
                                            <input className="input has-text-centered" type="text" value={options.adult}/>
                                        </div>
                                        <div className="control">
                                            <button 
                                            disabled = {options.adult <= 1}
                                            className="button is-info" 
                                            onClick={()=>handleOption("adult","d")}
                                            >-</button>
                                        </div>
                                    </div> 
                                </div>
                            </div>

                            <div className='optionItem'>
                                    Children
                                    <div className = "optionControl">
                                        <div className="field has-addons">
                                        <div className="control">
                                                <a className="button is-info" onClick={()=>handleOption("children","i")}>+</a>
                                        </div>  
                                        <div className="control">
                                            <input className="input has-text-centered" type="text" value={options.children}/>
                                        </div>
                                        <div className="control">
                                            <a className="button is-info" onClick={()=>handleOption("children","d")}
                                            disabled = {options.children <= 0}>-</a>
                                        </div>
                                    </div> 
                                </div>
                            </div>

                            <div className='optionItem'>
                                    Room
                                    <div className = "optionControl">
                                        <div className="field has-addons">
                                        <div className="control">
                                                <a className="button is-info" onClick={()=>handleOption("room","i")}>+</a>
                                        </div>  
                                        <div className="control">
                                            <input className="input has-text-centered" type="text" value={options.room}/>
                                        </div>
                                        <div className="control">
                                            <a className="button is-info" onClick={()=>handleOption("room","d")} 
                                            disabled = {options.room <= 1}>-</a>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                            <button class="button is-outlined is-info" onClick = {handleoptionsDisplay}>Done</button>
                    </div>} 


                </div>
                <button className='button is-primary' onClick = {handleSearch}>Search</button>
            
            </div>
            </>
            }
        </div>
       
    </div>
  )
}

export default Header