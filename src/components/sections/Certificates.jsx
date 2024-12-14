import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

function Certificates() {
  const { t} = useTranslation()
  return (
    <section id="certificates" className="certificate_page">
      <div className="container">
        <div className="certificate_elements">
          <div className="certificate_text">
            <h2 data-aos="fade-right">{t("certificates")}</h2>
          </div>
          <div className="product_2 caertificate_imga">
            <div className="sertificate_img csertificate_img" data-aos="fade-right">
              <Image sizes="100" width={100} height={100} src={"/images/certificate.webp"} alt="certificate" />
            </div>
            <div className="sertificate_img csertificate_img" data-aos="fade-left">
              <Image sizes="100" width={100} height={100} src={"/images/certificate_2.webp"} alt="certificate_2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certificates;
