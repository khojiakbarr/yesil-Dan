"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import MenuBtn from "../MenuBtn/MenuBtn";
import { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";

function Navbar() {
  const [hash, setHash] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleHashChange = () => {
    setHash(window.location.hash);
  };

  useEffect(() => {
    // Component yuklanganida hashni olish
    setHash(window.location.hash);

    // Hash o'zgarganda yangilanishi uchun event listener qo'shish
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);

    // Component unmounted bo'lganda listenerni olib tashlash
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  useEffect(() => {
    function handleScrollChange() {
      console.log("scroll change");

      setIsActive(false);
    }

    window.addEventListener("scroll", handleScrollChange);
    return () => {
      window.removeEventListener("scroll", handleScrollChange);
    };
  }, []);

  useEffect(() => {
    const menuOpener = document.querySelector(".navbar_lists");

    if (isActive && !menuOpener.classList.contains("navbar_burger")) {
      menuOpener.classList.add("navbar_burger");
    } else {
      menuOpener.classList.remove("navbar_burger");
    }
  }, [isActive]);

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
  }, [isActive, hash]);

  function closemenu() {
    setIsActive(false);
    handleHashChange();
  }

  const { t } = useTranslation();
  return (
    <>
      <div className="container">
        <nav className="navbar">
          <Link href={"#home"} className="navbar_logo">
            <Image
              sizes="100"
              width={100}
              height={100}
              src={"/images/logo.svg"}
              alt="logo"
            />
          </Link>
          <input
            type="checkbox"
            id="menuOpener"
            checked={isActive}
            onChange={(e) => setIsActive(e.target.checked)}
          />
          <div className="navbar_lists">
            <ul>
              {navbarRoute?.map((route) => (
                <li
                  key={route.name}
                  className={route.active ? "active" : ""}
                  onClick={closemenu}
                >
                  <Link href={route.href}>{t(route.name)}</Link>
                </li>
              ))}
              <li class="nav_list_info">
                <div class="select">
                  <select
                    defaultValue={"uz"}
                    onChange={(e) => changeLanguage(e.target.value)}
                  >
                    <option value="uz">UZ</option>
                    <option value="en">EN</option>
                    <option value="ru">RU</option>
                  </select>
                </div>
              </li>
            </ul>
          </div>
          <label htmlFor="menuOpener" className="menuOpenerBtn">
            {/* <Image sizes="100" width={100} height={100} src={"/images/menuOpener.png"} alt="menuOpener" /> */}

            <MenuBtn isActive={isActive} setIsActive={setIsActive} />
          </label>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
