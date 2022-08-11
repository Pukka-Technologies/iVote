import About from "../components/About";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollArrow from "../components/ScrollArrow";
import Steps from "../components/Steps";


export default function Home() {
  return (
    <div>
      <Header />
      {/* <ScrollArrow /> */}
      <Features />
      <About />
      <Steps />
      <Footer />
    </div>
  );
}
