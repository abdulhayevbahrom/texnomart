import React from 'react'
import './Footer.css'
import { FaFacebookF, FaTelegramPlane, FaInstagram, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='footer'>
            <div className="footer_top">
                <div className="footer_top_sociallNetwork">
                    <div className="phone1">
                        <p>Savol bormi? Telefon qiling</p>
                        <a href='tel:+998712099944'>+998 71 209 99 44</a>
                    </div>
                    <div className="phone2">
                        <p>Ishonch telefoni</p>
                        <a href='tel:+998971259944'>+998 97 125 99 44</a>
                    </div>
                    <div className="footer_network">
                        <div className="footer_network_item">
                            <a href="https://www.facebook.com/texnomart">
                                <FaFacebookF />
                            </a>
                        </div>
                        <div className="footer_network_item">
                            <a href="https://t.me/texnomart/">
                                <FaTelegramPlane />
                            </a>
                        </div>
                        <div className="footer_network_item">
                            <a href="https://www.instagram.com/texnomart/">
                                <FaInstagram />
                            </a>
                        </div>
                        <div className="footer_network_item">
                            <a href="https://www.youtube.com/c/Texnomart">
                                <FaYoutube />
                            </a>
                        </div>
                    </div>
                    <Link to="/" className='locationTosh'>Do`kon manzillari Toshkent</Link>
                </div>
                <div className="footer_top_links">
                    <ul>
                        <h3>Kompaniya</h3>
                        <li>B2B savdosi</li>
                        <li>Biz haqimizda</li>
                        <li>Yangiliklar va sharhlar</li>
                        <li>IMEI ni tekshirish</li>
                    </ul>
                    <ul>
                        <h3>Ma'lumot</h3>
                        <li>Bepul yetkazish</li>
                        <li>Bonus tizimi</li>
                        <li>Texnomartda ishlash</li>
                        <li>Shaxsiy kabinet</li>
                        <li>Aloqa raqamlari</li>
                    </ul>
                    <ul>
                        <h3>Haridorga yordam</h3>
                        <li>Muddatli to'lovga sotib olish</li>
                        <li>Maxsulotni qaytarish</li>
                        <li>Mahsulotlar uchun kafolat</li>
                        <li>Ko'p so'raladigan savollar</li>
                    </ul>
                </div>
            </div>
            <div className="footer_bottom">
                <div className="footer_bottom_left">
                    <p>2016-{new Date().getFullYear()}  ©Texnomart.uz. Barcha huquqlar himoyalangan. Tovarlarning ko'rsatilgan narxlari va ularni sotib olish shartlari faqat joriy sana uchun ko'rsatilgan.</p>
                </div>
                <div className="footer_right">
                    <div className="footer_right_item">
                        <img src="https://texnomart.uz/files/global/new-photo/img/payment-type/paymart.png" alt="" />
                    </div>
                    <div className="footer_right_item">
                        <img src="https://texnomart.uz/files/global/new-photo/img/payment-type/payme.png" alt="" />
                    </div>
                    <div className="footer_right_item">
                        <img src="https://texnomart.uz/files/global/new-photo/img/payment-type/zmarket.png" alt="" />
                    </div>
                    <div className="footer_right_item">
                        <img src="https://texnomart.uz/files/global/new-photo/img/payment-type/zoodmall.png" alt="" />
                    </div>
                    <div className="footer_right_item">
                        <img src="https://texnomart.uz/files/global/new-photo/img/card-uzcard.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer