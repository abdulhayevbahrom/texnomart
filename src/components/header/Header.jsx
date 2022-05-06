import React, { useState } from "react";
import "./Header.css";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone, FiChevronDown, FiChevronRight } from "react-icons/fi";
import { GrSearch, GrCart } from "react-icons/gr";
import { Link } from "react-router-dom";
import LanguageSelect from "../language-select/LanguageSelect";
import { header_center_select } from "../../static/header_links";
import { FaRegUser } from "react-icons/fa";
import { useTypewriter } from "react-simple-typewriter";
import { BiMicrophone } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";
import { header_bottom_categories } from "../../static/header_categoriya_links";
import Login from "../login/Login";
import axios from "axios";

function Header() {
  const [section, setSection] = useState("");
  const [openSections, setOpenSections] = useState(false);
  const [login, setLogin] =  useState(false)
  const [searchResult, setSearchResult] = useState(null)

  const searchProduct = (value) => {
    if(value !== ''){
        axios.post("http://localhost:8000/greatPrice/search", {
        fileName: value
        })
            .then(response => setSearchResult(response.data))
            .catch(err => console.log(err))
    }
}
  console.log(searchResult)



  const { text } = useTypewriter({
    words: [
      "Muzlatgich",
      "Noutbook",
      "Klaviatura va Sichqonchalar",
      "Kir yuvish mashinasi",
      "Apple",
      "Xiaomi",
      "Dazmollar",
      "Suv isitgichlar",
      "Quloqchin",
      "Bolalar toplamalari",
      "Microoft XBOX",
      "Robot Changyutgich",
      "Oshxona tarozisi",
      "Smart watch",
      "Blenderlar",
      "Hi-Fi karnaylar",
      "IP-kameralar",
      "Samsung",
      "Gaz plitasi",
      "Televizor",
      "Tovoqlar",
      "Radar detaktorlar",
      "Pechlar",
    ],
    loop: { Infinity },
    typeSpeed: 40,
    deleteSpeed: 40,
    // delaySpeed{1000}
  });

  const getSelect = (section_Item) => {
    setSection(section_Item);
    setOpenSections(false);
  };

  return (
    <div className="header">
      {/* HEADER TOP */}

      <div className="header_top">
        <div className="header_top_left">
          <div className="header_top_region">
            <span className="hdr_top_reg_icon">
              <IoLocationOutline />
            </span>
            <p className="hdr_top_reg_title">Toshkent</p>
          </div>
          <ul className="header_top_left_nav">
            <Link to="/" className="header_top_left_nav_item">
              Bizning do`konlarimiz
            </Link>
            <Link to="/" className="header_top_left_nav_item">
              B2B savdosi
            </Link>
            <Link to="/" className="header_top_left_nav_item">
              Muddatli to`lovga sotib olish
            </Link>
            <Link to="/" className="header_top_left_nav_item">
              To`lov usullari
            </Link>
            <Link to="/" className="header_top_left_nav_item">
              Mahsulotlar uchun kafolat
            </Link>
          </ul>
        </div>
        <div className="header_top_right">
          <div className="hdr_top_right_phoneNum">
            <span className="hdr_top_right_phoneNum_icon">
              <FiPhone />
            </span>
            <a className="hdr_top_right_phoneNumber" href="tel:+998939119572">
              +99893 911 95 72
            </a>
          </div>
          <LanguageSelect />
        </div>
      </div>

      {/* HEADER CENTER  */}

      <div className="header_center">
        <div className="hdr_center_logo">
          <img
            src="https://texnomart.uz/files/global/new-photo/img/logotipe/logotipe.svg"
            alt="logo"
          />
        </div>
        <div className="hdr_center_searchbar">
          <div
            onMouseEnter={() => setOpenSections(true)}
            onMouseLeave={() => setOpenSections(false)}
            className="hdr_center_searchbar_select"
          >
            <p className="hdr_center_searchbar_select_text">
              {section ? section : "Barcha kategoriyalar"}{" "}
              <FiChevronDown className="hdr_center_searchbar_select_down" />
            </p>
            <div
              onMouseEnter={() => setOpenSections(true)}
              style={openSections ? { display: "block" } : { display: "none" }}
              className="sections"
            >
              {header_center_select.map((section_Item, index) => (
                <p
                  className="sections_item"
                  onClick={() => getSelect(section_Item)}
                  key={index}
                >
                  {section_Item}
                </p>
              ))}
            </div>
          </div>

          <input type="text"
                 placeholder={text} 
                 className="hdr_center_input"
                 onChange={(e) => searchProduct(e.target.value)}
                />


          <button className="hdr_center_microphone">
            <BiMicrophone />
          </button>
          <div className="hdr_center_search_icon">
            <GrSearch />
          </div>
        </div>

        <div className="hdr_center_right_collection">
          <Link to="/">
            <div onClick={() => setLogin(true)} className="hdr_center_right_coll_item">
              <FaRegUser className="hdr_center_coll_item_icon" />
              
            </div>
          </Link>
          <Link to="/dwefsdg">
            <div className="hdr_center_right_coll_item">
              <img
                src="https://texnomart.uz/files/global/new-photo/icons/header-compair-new.svg"
                alt=""
              />{" "}
              <span className="schot">0</span>
            </div>
          </Link>
          <Link to="/dwefsdg">
            <div className="hdr_center_right_coll_item">
              <MdFavoriteBorder className="hdr_center_coll_item_icon" />{" "}
              <span className="schot">0</span>
            </div>
          </Link>
          <Link to="/dwefsdg">
            <div className="hdr_center_right_coll_item">
              <GrCart className="hdr_center_coll_item_icon" />{" "}
              <span className="schot">0</span>
            </div>
          </Link>
        </div>
      </div>

      {/* HEADER BOTTOM */}

      <div className="header_bottom">
        <div className="hdr_bottom_katalog">
          <img
            src="https://texnomart.uz/files/global/new-photo/icons/header-catalog.svg"
            alt="catalog icon"
          />
          <p>Katalog</p>
          <div className="catalogLists">
            {header_bottom_categories.map((catalog_item, index) => (
              <div key={index} className="catalog_item">
                <div style={{display:"flex"}}>
                <img src={catalog_item.img} alt="" />
                <p className="catalogName">{catalog_item.name}</p> 
                </div>
                <FiChevronRight/>
                <div className="expand">
                  {catalog_item.expand?.map((i, index) => (
                    <div key={index} className="expand_item">
                      <p className="expand_item_caption">{i.h2}</p>
                      {i.expand_text?.map((o, index) => (
                        <p key={index} className="expand_item_text">{o}</p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="hdr_bottom_catalog_list">
          <Link className="hdr_bottom_catalog_list_link" to="/">
            AKSIYALAR
          </Link>
          <Link className="hdr_bottom_catalog_list_link" to="/">
            SMARTFONLAR
          </Link>
          <Link className="hdr_bottom_catalog_list_link" to="/">
            MUZLATGICHLAR
          </Link>
          <Link className="hdr_bottom_catalog_list_link" to="/">
            KIR YUVISH MASHINALARI
          </Link>
          <Link className="hdr_bottom_catalog_list_link" to="/">
            TELEVIZORLAR
          </Link>
          <Link className="hdr_bottom_catalog_list_link" to="/">
            BARCHA KATEGORIYALAR
          </Link>
        </div>
      </div>
      {login ? <Login setLogin={setLogin} /> : <> </>}
    </div>
  );
}

export default Header;
