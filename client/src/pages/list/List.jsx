import React,{useState}from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import useFetch from '../../hooks/useFetch'
import {format} from 'date-fns'
import { DateRange } from 'react-date-range'
import "./list.css"
import SearchItem from '../../components/searchItem/SearchItem'


const List = () => {
  const location = useLocation()
  const [min,setMin] = useState(undefined)
  const [max,setMax] = useState(undefined)
  const [date,setDate] = useState(location.state.date)
  const [options,setOptions] = useState(location.state.options)
  const [display,setDislpay] = useState(false)
  const [destination,setDestination] = useState(location.state.destination)
  const url = `/hotels?city=${destination}&min=${min | 0 }&max=${max || 999}`
  const { data, loading, error, reFetch } = useFetch(url)
  const currentDate = format(date[0].startDate,"dd/MM/yyyy")
  const endingDate = format(date[0].endDate,"dd/MM/yyyy")

  const handleHide = () =>{
    display ? setDislpay(false) : setDislpay(true)
  }

  const handleClick = () =>{
      reFetch();
  }
  
  return (
    <>
        <Navbar/>
        <Header type = "list"/>
        <div className="listContainer">
          <div className="listWrapper">
            <div className="listSearch">
              <p className="title has-text-dark is-5">Search</p>
              <div className="lsItem">
                <label htmlFor="" className='label'>Destination</label>
                <input type="text" placeholder = {destination}/>
              </div>
              <div className="lsItem">
                <label htmlFor="" className='label'>Check In Date</label>
                <span onClick={handleHide}>{currentDate} to {endingDate}</span>
              
              {display && <DateRange 
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            minDate={new Date()}
                            className = "datelist"
                            />  }  
              </div>

              <div className="lsItem">
                <label htmlFor="" className="label">Options</label>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className='lsOptionInput' onChange={e=>setMin(e.target.value)}/>
                </div>
              </div>

              <div className="lsItem">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className='lsOptionInput' onChange={e=>setMax(e.target.value)}/>
                </div>
              </div>

              <div className="lsItem">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Adult 
                  </span>
                  <input type="number" min = {1} placeholder = {options.adult}className='lsOptionInput'/>
                </div>
              </div>

              <div className="lsItem">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Children
                  </span>
                  <input type="number" min = {0} placeholder = {options.children} className='lsOptionInput'/>
                </div>
              </div>

              <div className="lsItem">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                   Room
                  </span>
                  <input type="number" min = {0} placeholder = {options.room} className='lsOptionInput'/>
                </div>
              </div>

              <button className="button is-link" onClick={handleClick}>Search</button>

            </div>
            <div className="listResults">

            {loading ? "loading" : <>
              {data.map((items)=>(
                <SearchItem items={items} key={items._id}/>
              ))}
            </>
            }
              
              
            </div>
          </div>
        </div>
    </>
  )
}

export default List