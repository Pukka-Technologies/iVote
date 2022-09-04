import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Participants from "../../components/Contestants";
import ContestsHeader from "../../components/ContestsHeader";
import Footer from "../../components/Footer";

const Contestants = () => {

  const router = useRouter()

  const { participants } = router.query

  return (
    <div>
      <ContestsHeader />
      <Participants contestants={JSON.parse(participants)} />
      <Footer />
    </div>
  );
};

export default Contestants;
