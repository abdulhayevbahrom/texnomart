import React from "react";
import "./Special_offer.css";
import { special_offer } from "../../static/special_offer";
import {Link} from 'react-router-dom'

function Special_offer() {
  return (
    <div className="special_offer">
      <div className="special_offer_wrapper">
        {special_offer.map((offer_item, index) => (
          <Link key={index} to={offer_item.to} className="special_offer_wrap_item">
            <img src={offer_item.img} alt="" />
            <Link to="/" className="offerItemLInk" >{offer_item.name}</Link>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Special_offer;
