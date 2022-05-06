import React from 'react'
import './ShopAdvantage.css'

function ShopAdvantage() {
  return (
    <div className='shopAdvantage'>
        <h2>Telefonlar va maishiy texnika muddatli to'lovga</h2>
        <div className="shopAdvantageContainer">
            <div className="shopAdvantageContainerItem">
                <img src="https://texnomart.uz/files/global/new-photo/img/shop-advantage/perechilsenie.svg" alt="" />
                <p>Muddatli to'lovga sotib olish</p>
                <span>Texnomartda maishiy texnika mahsulotlari uchun qulay onlayn to'lov</span>
            </div>

            <div className="shopAdvantageContainerItem">
                <img src="https://texnomart.uz/files/global/new-photo/img/shop-advantage/delivery.svg" alt="" />
                <p>Bepul yetkazish</p>
                <span>Texnomartga tovarlarni yetkazib berish shartlari</span>
            </div>

            <div className="shopAdvantageContainerItem">
                <img src="https://texnomart.uz/files/global/new-photo/img/shop-advantage/warranty.svg" alt="" />
                <p>Mahsulotlar uchun kafolat</p>
                <span>Texnomartda mahsulotning kafolati va qaytarilishi haqida hamma narsani bilib oling</span>
            </div>

            <div className="shopAdvantageContainerItem">
                <img src="https://texnomart.uz/files/global/new-photo/img/shop-advantage/bonus.svg" alt="" />
                <p>Bonus tizimi</p>
                <span>Bonus tizimi</span>
            </div>

            <div className="shopAdvantageContainerItem">
                <img src="https://texnomart.uz/files/global/new-photo/img/shop-advantage/help.svg" alt="" />
                <p>Yordam</p>
                <span>Ko'p beriladigan savollar</span>
            </div>
        </div>
    </div>
  )
}

export default ShopAdvantage