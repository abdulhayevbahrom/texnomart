import React, {useEffect, useState} from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import GreatPriceItem from "./GreatPriceItem";
import axios from "axios"; 
import {greatPrice} from '../../static/greatPrice'

function GreatPrice() {
  const [allFiles, setAllFiles] = useState(null);
  useEffect(() => {
      setAllFiles(null);
      axios
          .get(`http://localhost:8000/greatPrice/greatPrice/all`)
          .then((schoolFiles) => setAllFiles(schoolFiles.data))
          .catch((err) => console.error(err));
  }, []);
  return (
    <div className="greatPrice">
      <div className="greatPriceCaption">
        <h3>Zo`r narx</h3>
        <Link to="/">
          Barchasini ko`rish <FiArrowRight />
        </Link>
      </div>
      <div className="greatPriceWrapper">
        {/* {allFiles ? 
          allFiles.map((greatPriceItem, index) => 
            <GreatPriceItem key={index} greatPriceItem={greatPriceItem}/>
            ): null
        }   */}
        {/* ----------------------------------- */}
         {greatPrice ? 
          greatPrice.map((greatPriceItem, index) => 
            <GreatPriceItem key={index} greatPriceItem={greatPriceItem}/>
            ): null
        } 
      </div>
    </div>
  );
}

export default GreatPrice;
