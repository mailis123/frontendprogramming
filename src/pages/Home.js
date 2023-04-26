import Footer from "../components/Footer";
import Global from "../components/Global"
import Hello from "../components/Hello";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Provinsi from "../components/Provinsi";
import data from "../utils/constants/provinces"
import {useState} from "react";
import Formcovid from "../components/Formcovid"


function Main() {
  const [covid]=useState(data.provinces)
  return (
    <main>
    <Hero/>
    <Global/>
    <Provinsi covid={covid} />
    <Formcovid covid={covid}/>
    </main>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
