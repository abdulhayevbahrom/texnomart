import React, {useEffect, useState} from 'react'
import PopularProductsItem from './PopularProductsItem'
import {Link} from 'react-router-dom'
import {FiArrowRight} from 'react-icons/fi'
import axios from 'axios'
import {greatPrice} from '../../static/greatPrice'

function PopularProducts() {
  const [allFiles, setAllFiles] = useState(null)
  useEffect(()=> {
    setAllFiles(null);
    axios
      .get('http://localhost:8000/popularProduct/popularProduct/all')
      .then((schoolFiles) => setAllFiles(schoolFiles.data))
      .catch((err) => console.error(err))
      // console.log(allFiles);
    }, [allFiles] )
  return (
    <div className="greatPrice">
      <div className="greatPriceCaption">
        <h3>Ommabop mahsulotlar</h3>
        <Link to="/">
          Barchasini ko`rish <FiArrowRight />
        </Link>
      </div>
      <div className="greatPriceWrapper">
        {/* {
          allFiles ?
          allFiles.map((popularProductsItem, index) => 
            <PopularProductsItem key={index} popularProductsItem={popularProductsItem}/>
            ) : null
        }   */}
        {/* -------------------- */}
        {
          greatPrice ?
          greatPrice.map((popularProductsItem, index) => 
            <PopularProductsItem key={index} popularProductsItem={popularProductsItem}/>
            ) : null
        } 
      </div>
    </div>
  )
}

export default PopularProducts