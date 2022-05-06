import React from 'react'
import BannerCarousel from '../../components/bannerCarousel/BannerCarousel'
import Footer from '../../components/footer/Footer'
import GreatPrice from '../../components/greatPrice/GreatPrice'
import Header from '../../components/header/Header'
import NewProducts from '../../components/newProducts/NewProducts'
import PopularProducts from '../../components/popularProducts/PopularProducts'
import ShopAdvantage from '../../components/shopAdvantage/ShopAdvantage'
import SpecialOffer from '../../components/special-offer/Special_offer'
import Toplamlar from '../../components/toplamlar/Toplamlar'
import './Home.css' 

function Home() {
  return (
    <div className='home'>
        <Header/>
        <BannerCarousel/>
        <SpecialOffer/>
        <GreatPrice/>
        <NewProducts/>
        <PopularProducts/>
        <Toplamlar/>
        <ShopAdvantage/>
        <Footer/>
    </div>
  )
}

export default Home