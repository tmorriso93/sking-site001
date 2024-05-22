import Image from "next/image";
import NavbarSection from "./components/navbar/page";
import HeroSection from "./components/hero/page";
import AboutSection from "./components/about/page";
import ServicesSection from "./components/services/page";
import AccordianSection from "./components/accordion/page";
import ContactSection from "./components/contact/page";
import FooterSection from "./components/footer/page";

export default function Home() {
  return (
  <>
    <NavbarSection />
     <HeroSection />
    {/*<AboutSection />
    <ServicesSection />
    <AccordianSection />
    <ContactSection />
    <FooterSection /> */}
  </>
  );
}
