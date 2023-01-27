import React,{useEffect,useState} from 'react'
import axios from 'axios';
import "./featuredProperties.css"

const FeaturedProperties = () => {

    const [data, setData] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const url = "/hotels?featured=true"
  
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

  console.log(data[0])
 
  return (
    <div className="featuredProp">
         {loading ? "Loading" : 
            <>
            <div className="featuredPropItem">
                <img src={"https://images.unsplash.com/photo-1568078368899-227e4e7d4682?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"} alt="beaches" className="featuredPropImage" />
                <p className="title is-6 has-text-black">3 Epoques Apartments by Prague Residences</p>
                <p className="subtile is-6 has-text-black">Prague 1, Czech Republic, Praha 1 Starting from <strong>{}</strong></p>
                <div className="ratings">
                    <span class="tag is-info">1</span>
                    <p className='is-size-7'>Excellent <span>402 Reviews</span></p>
                </div>
            </div>

            <div className="featuredPropItem">
                <img src={"https://images.unsplash.com/photo-1568078368899-227e4e7d4682?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"} alt="beaches" className="featuredPropImage" />
                <p className="title is-6 has-text-black">3 Epoques Apartments by Prague Residences</p>
                <p className="subtile is-6 has-text-black">Prague 1, Czech Republic, Praha 1 Starting from <strong>{}</strong></p>
                <div className="ratings">
                    <span class="tag is-info">1</span>
                    <p className='is-size-7'>Excellent <span>402 Reviews</span></p>
                </div>
            </div>

            <div className="featuredPropItem">
                <img src={"https://images.unsplash.com/photo-1568078368899-227e4e7d4682?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"} alt="beaches" className="featuredPropImage" />
                <p className="title is-6 has-text-black">3 Epoques Apartments by Prague Residences</p>
                <p className="subtile is-6 has-text-black">Prague 1, Czech Republic, Praha 1 Starting from <strong>{}</strong></p>
                <div className="ratings">
                    <span class="tag is-info">1</span>
                    <p className='is-size-7'>Excellent <span>402 Reviews</span></p>
                </div>
            </div>
            
    </>
    }
</div>
  )
}

export default FeaturedProperties