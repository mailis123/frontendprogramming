import AddMovieForm from "../components/AddMovieForm/AddMovieForm";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import Footer from "../components/Footer/Footer";

/**
 * Membuat Component Home.
 * Menampilkan Halaman Home.
 * Menampung Navbar, Main, dan Footer Component
 */
function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Movies/>
      <AddMovieForm/>
      <Footer/>
    </div>
  );
}

export default Home;
