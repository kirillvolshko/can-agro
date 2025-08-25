"use client";
import { useRef } from "react";
import HeroSection from "../components/HeroSection";
import OurPartners from "../components/OurPartners";
import AboutUs from "../components/AboutUs";
import Counter from "../components/Counter";
import Brands from "../components/Brands";
import Advantages from "../components/Advantages";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

export default function Home() {
  const contactRef = useRef<HTMLElement>(null);
  const aboutUsRef = useRef<HTMLElement>(null);
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAbout = () => {
    aboutUsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <main>
      <HeroSection onContactClick={scrollToContact} ref={aboutUsRef} />
      <OurPartners />
      <AboutUs onContactClick={scrollToContact} />
      <Counter />
      <Brands />
      <Advantages />
      <ContactUs ref={contactRef} />
      <Footer onAboutClick={scrollToAbout} />
    </main>
  );
}
