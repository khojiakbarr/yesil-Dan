"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t} = useTranslation()
  const navbarRoute = useMemo(() => {
    const routes = [
      {
        name: "home",
        href: "#home",
        active: true,
      },
      {
        name: "aboutUs",
        href: "#about_us",
        active: false,
      },
      {
        name: "product",
        href: "#product",
        active: false,
      },
      {
        name: "contact",
        href: "#contact",
        active: false,
      },
      {
        name: "certificates",
        href: "#certificates",
        active: false,
      },
    ];
    return routes;
  }, []);

  return (
    <div className="container footer__wrapper">
      <div className="footer__navbar">
        <Link href="/" className="logo" id="logo">
          <Image
            src="/images/logo.svg"
            alt="Yesildan"
            width={150}
            height={328}
          />
        </Link>

        <ul className="footer__navbar__list">
          {navbarRoute.map((route) => (
            <li className="footer__navbar__list-item">
              <Link
                key={route.href}
                href={route.href}
                data-lang="complex_link"
                className="list_item-link"
              >
                {t(route.name)}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="footer__contact">
        <div>
          <h3 data-lang="address_title">{t("address")}</h3>
          <Link
            href="https://yandex.uz/map-widget/v1/?ll=69.430164%2C41.328926&mode=search&oid=187997993149&ol=biz&z=14.28"
            data-lang="address_content"
            className="list_item-link"
          >
            Ташкент, Мирзо Улугбекский район, МСГ «Баркамол», улица Миллий бог,
            дом №1.Ориентир: Университет Akfa
          </Link>
        </div>

        <div>
          <h3 data-lang="phone_title">{t("phone")}</h3>

          <Link href="tel:+998781133333" className="list_item-link">
            +998 (78) 113-33-33
          </Link>
        </div>

        <div>
          <h3 data-lang="email_title">{t("email")}</h3>

          <Link
            href="mailto:info@yesildan.com"
            className="list_item-link"
          >
            info@yesildan.com
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
