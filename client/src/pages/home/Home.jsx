import React from 'react'
import Feature from '../../components/feature/Feature'
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Navbar from '../../components/navbar/Navbar'
import PropertyList from '../../components/propertyList/PropertyList'
import "./home.css"

const Home = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    <div className='homecontainer'>
        <Feature/>
        <p className='title has-text-black is-4 homeTitle'>Explore Jamaica</p>
        <p className="subtitle has-text-grey is-5 homeTitle top">These popular destinations have a lot to offer</p>
        <PropertyList/>
        <div className="homebanner">
          <p className='title has-text-black is-4 homeTitle'>Home guests love</p>
          <div className='discover'>
          <a href='/'><p className="subtile is-6">Discover homes</p></a>
          </div> 
        </div>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
        
    </div>
    </>
    
  )
}

export default Home