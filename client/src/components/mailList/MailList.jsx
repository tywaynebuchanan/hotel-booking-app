import React from 'react'
import "./maillist.css"

const MailList = () => {
  return (
   <div className="mail">
   <div className="mailItem">
        <p className="title has-text-white is-3">Save Time, save Money</p>
        <p className="subtile has-text-white is-5">Sign up and we'll send the best deals to you</p> 
   </div>

   <div class="field has-addons mt-4">
        <div class="control">
            <input class="input" type="text" placeholder="Your Email"/>
        </div>
        <div class="control">
            <a class="button is-info">
            Subscribe
            </a>
        </div>
    </div> 
   

    
   </div>
  )
}

export default MailList