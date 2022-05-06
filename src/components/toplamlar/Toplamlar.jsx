import React,{useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {FiArrowRight} from 'react-icons/fi'
import ToplamlarItem from './ToplamlarItem'
import axios from 'axios'
import {newProduct} from  '../../static/newProduct'

function Toplamlar() {
  const [allFiles, setAllFiles] = useState(null) 
  useEffect(() => {
    setAllFiles(null)
    axios
      .get('http://localhost:8000/toplamlar/toplamlar/all')
      .then((schoolFiles) => setAllFiles(schoolFiles.data))
      .catch((err) => console.error(err))
  }, [allFiles])
  return (
    <div className='toplamalar'>
        <h3>To`plamlar</h3>
        <div className="toplamlarCaption">
            <p>Sizga tavsiya qilamiz</p>
            <Link to="/">Barchasini korish <FiArrowRight/></Link>    
        </div>    
        <div className="toplamlarWrappper">
            {/* {
            allFiles ? 
            allFiles.map((toplamItem, index) =>
            <ToplamlarItem key={index} toplamItem={toplamItem}/>
             ): null
             } */}
             {/* ------------------------------ */}
             {
            newProduct ? 
            newProduct.map((toplamItem, index) =>
            <ToplamlarItem key={index} toplamItem={toplamItem}/>
             ): null
             }
        </div>
    </div>
  )
}

export default Toplamlar