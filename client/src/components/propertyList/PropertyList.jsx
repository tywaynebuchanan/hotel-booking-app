import React,{useState,useEffect} from 'react'
import axios from 'axios';
import "./property.css"


const PropertyList = () => {

  const [data, setData] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const url = "countbytype"
  
  useEffect(()=>{

     const fetchData = async ()=>{
      setLoading(true)
      try {
          const res = await axios.get(url)
          setData(res.data)
      } catch (error) {
          setError(error)
      }
      setLoading(false)
     }
     fetchData();
  },[url])

  const images = [
   "https://images.unsplash.com/photo-1568078368899-227e4e7d4682?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    "https://images.unsplash.com/photo-1448099940878-e0c48ea3a165?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1600270717422-06fc3227331b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    "https://images.unsplash.com/photo-1600270717422-06fc3227331b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    "https://images.unsplash.com/photo-1600270717422-06fc3227331b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
  ]

console.log(data)
   return (
          <div className = "pList">

            {loading ? "Loading" : <>

           {data && images.map((image,i)=>(
            <div className="pListItem" key = {i}>
                <img src={image} alt="" className="pListImg" />
                <div className="pListItem">
                  <p className="title has-text-black is-5">{`${data[i]?.type}s`}</p>
                  <p className="subtitle has-text-black is-6">{data[i]?.count} {`${data[i]?.type}s`}</p>
                </div>
              </div>
           )

           )}
            </>}
              
          
            
          </div>
  )
}

export default PropertyList