"use client";
import { useRef } from "react";
import Advantages from "../../components/Advantages";
import Footer from "../../components/Footer";
import ContactUs from "../../components/ContactUs";
import OurPartnersProducts from "../../components/OurPartnersProducts";

const Products = () => {
  const contactRef = useRef<HTMLElement>(null);
  const partnersRef = useRef<HTMLElement>(null);
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToPartners = () => {
    partnersRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <main>
      <OurPartnersProducts onContactClick={scrollToContact} ref={partnersRef} />
      <Advantages />
      <ContactUs ref={contactRef} />
      <Footer onAboutClick={scrollToPartners} />
    </main>
  );
};
export default Products;
