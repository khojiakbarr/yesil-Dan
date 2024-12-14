"use client"
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

function Product() {
  const { t} = useTranslation()
  return (
    <section id="product" className="aboutPage">
      <div className="container">
        <div className="product_1">
          <div className="productPage_text" data-aos="fade-right">
            <h2>{t("productTitle")}</h2>
            <p>
              <span className="span_text">
                {t("productParagraph")}
              </span>
              <br />
              <span>{t("productSubtitle")}</span>
            </p>
          </div>
          <div className="product_imgs">
            <Image sizes="100" width={100} height={100} src={"/images/product_img_1.webp"} alt="product_img_1" data-aos="zoom-in-left" />
            <Image sizes="100" width={100} height={100} src={"/images/product_img_2.webp"} alt="product_img_2" data-aos="zoom-in-right" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
