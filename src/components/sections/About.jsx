import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

function About() {
  const { t} = useTranslation()
  return (
    <section id="about_us" className="aboutPage">
      <div className="section_about">
        <div className="abput_elements container">
          <div className="aboout_texts">
            <h2 data-aos="fade-right">{t("aboutUs")}</h2>
            <p data-aos="fade-right">
              {t("aboutParagraph")}
            </p>
          </div>
          <div className="about_img" data-aos="fade-left">
            <Image sizes="100" width={100} height={100} src={"/images/Yesil_Dan_about.svg"} alt="Yesil_Dan_about" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
