import React from "react";
import Contestants from "../components/Contestants";
import ContestsHeader from "../components/ContestsHeader";
import Footer from "../components/Footer";

const contestants = () => {
  return (
    <div>
      <ContestsHeader />
      <Contestants />
      <Footer />
    </div>
  );
};

export default contestants;
