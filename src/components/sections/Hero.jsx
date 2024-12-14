import React from "react";
import VideoContent from "../VideoContent/VideoContent";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section className="hero">
      <VideoContent />
      <div className="navbar_hero container">
        <h2 data-aos="fade-down">{t("headertitle")}</h2>  
        {/* <p data-aos="fade-down" data-aos-delay="200">
          {t("headerParagraph")}
        </p> */}
      </div>
    </section>
  );
}
