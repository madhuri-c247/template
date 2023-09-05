import React from "react";
//components
import Header from "../components/header/Header";
import Consultants from "../components/consultants/Consultants";
import Contact from "../components/contact/Contact";
import SuccessKey from "../components/keySuccess/KeySuccess";
import RoutePlanning from "../components/routePlanning/RoutePlanning";
import Services from "../components/services/Services";
import WasteCollection from "../components/wasteCollection/WasteCollection";
import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/footer/Footer";
import ReviewForm from "../components/reviewForm/ReviewForm";

function Home() {
  return (
    <>
      <Header />
      <Consultants />
      <Contact />
      <SuccessKey />
      <RoutePlanning/>
      <Services />
      <WasteCollection/>
      <FAQ/>
      <ReviewForm/>
      <Footer/>
    </>
  );
}
export default Home;
