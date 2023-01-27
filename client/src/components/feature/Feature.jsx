import React,{useState,useEffect} from 'react'
import axios from 'axios';
import "./feature.css"


const Feature = () => {

  const [data, setData] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const url = "http://localhost:8800/api/countbycity?cities=Portmore,Kingston 12,Morant Bay"
  
  useEffect(()=>{

     const fetchData = async ()=>{
      setLoading(true)
      try {
          const res = await axios.get(url)
          setData(res.data.list)
      } catch (error) {
          setError(error)
      }
      setLoading(false)
     }
     fetchData();
  },[url])
 
  const images = {
    imageUrl1:"https://images.unsplash.com/photo-1568078368899-227e4e7d4682?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    imageUrl2: "https://images.unsplash.com/photo-1448099940878-e0c48ea3a165?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    imageUrl3: "https://images.unsplash.com/photo-1600270717422-06fc3227331b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
  }

  console.log(data)
  
  return (
  
   <div className='featured'>  

{loading ? "Loading" : <>

  <div className='featuredItem'>
                    <img src={images.imageUrl1} alt = "Beach" className='featuredImg'/>
                    <div className='featuredTitle'>
                        <p className='title is-2 has-text-white'>Kingston</p>
                        <p className='subtitle is-4 has-text-white'>{data[0]} properties</p>
                    </div>
            </div>

             <div className='featuredItem'>
                    <img src={images.imageUrl2} alt = "Beach" className='featuredImg'/>
                    <div className='featuredTitle'>
                        <p className='title is-2 has-text-white'>St Thomas</p>
                        <p className='subtitle is-4 has-text-white'>{data[1]} properties</p>
                    </div>
            </div>

             <div className='featuredItem'>
                    <img src={images.imageUrl3} alt = "Beach" className='featuredImg'/>
                    <div className='featuredTitle'>
                        <p className='title is-2 has-text-white '>Portmore</p>
                        <p className='subtitle is-4 has-text-white'>{data[2]} properties</p>
                    </div>
            </div>
</>}
     


    </div>   
  
    
  
   
  )
}

export default Feature