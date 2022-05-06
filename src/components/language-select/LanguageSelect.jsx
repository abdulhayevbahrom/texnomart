import React, { useState } from "react";
import "./LanguageSelect.css";
import { FaGlobeEurope } from "react-icons/fa";

function LanguageSelect() {
  const [openLangs, setOpenLangs] = useState(false);
  const [SelectedLang, setSelectedLang] = useState(false);

  return (
    <div className="languageSelect">
      <div
        onMouseEnter={() => setOpenLangs(true)}
        onMouseLeave={() => setOpenLangs(false)}
        className="hdr_top_right_site_lang"
      >
        <div className="site_lang_globe">
          <FaGlobeEurope className="site_lang_globe_icon" />
        </div>
        <span className="site_lang">{SelectedLang ? "RU" : "UZ"}</span>

        <div
          onMouseEnter={() => setOpenLangs(true)}
          onMouseLeave={() => setOpenLangs(false)}
          style={openLangs ? { display: "flex" } : { display: "none" }}
          className="languages"
        >
          <span onClick={() => setSelectedLang(!SelectedLang)}>{SelectedLang ? "UZ" : "RU"}</span>

        </div>
      </div>
    </div>
  );
}

export default LanguageSelect;
