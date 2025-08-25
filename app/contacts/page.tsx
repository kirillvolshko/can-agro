"use client";
import { useRef } from "react";
import ContactUs from "../../components/ContactUs";
import Footer from "../../components/Footer";
import Contact from "../../components/Contact";

const Contacts = () => {
  const mapRef = useRef<HTMLElement>(null);
  const scrollToMap = () => {
    mapRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <main>
      <Contact ref={mapRef} />
      <ContactUs />
      <Footer onAboutClick={scrollToMap} />
    </main>
  );
};

export default Contacts;
