import axios from 'axios'
import React,{useState,useContext} from 'react'
import { AuthContext } from '../../context/AuthContext'

const Login = () => {

    const [credentails,setCredentails] = useState({
        username: undefined,
        password: undefined
    })

    const {user,loading,error,dispatch} = useContext(AuthContext)

    const handleChange = (e)=>{
        setCredentails((prev)=>({...prev,[e.target.id]:e.target.value}))
    }

    const handleClick = async(e)=>{
        e.preventDefault();
        dispatch({type:"LOGIN_START"})
        try {
            const res = await axios.post("auth/login",credentails)
            dispatch({type:"LOGIN_SUCCESS",payload:res.data.details})
        } catch (error) {
            console.log(error)
        }
    }
console.log(user)
  return (
        <div className="login">
            <div className="lContainer">
            <div className="box">
            <p className="title has-text-black is-5">Login</p>
                <input type="text" className="input mb-3" id="username" onChange={handleChange} placeholder='Username' />
                <input type="password" className="input mb-3" id="password" onChange={handleChange} placeholder='Password' />
                <button className="button is-primary mb-3" onClick={handleClick}>Login</button>
                <p className="subtitle has-text-info">Click here to register</p>
                {error && <p className='has-text-black'>{error.message}</p>}
            </div>
                
            </div>
        </div>
  )
}

export default Login