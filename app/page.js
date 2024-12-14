"use client";
import About from "@/src/components/sections/About";
import Certificates from "@/src/components/sections/Certificates";
import Contact from "@/src/components/sections/Contact";
import Hero from "@/src/components/sections/Hero";
import Product from "@/src/components/sections/Product";
import "aos/dist/aos.css"; // AOS css import qilish
import { useEffect } from "react";
import AOS from "aos";
import "@/src/i18n/i18n";

export default function Home() {
  useEffect(() => {
    AOS.init({
      // AOS sozlamalari
      duration: 800, // animatsiya davomiyligi 1 soniya
    });
  }, []);
  
  return (
    <>
      <Hero />
      <About />
      <Product />
      <Certificates />
      <Contact />
    </>
  );
}
