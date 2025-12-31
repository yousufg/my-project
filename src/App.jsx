import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Locations from "./components/Locations";
import TuitionTypes from "./components/TuitionTypes";
import HowItWorks from "./components/HowItWorks";
import Categories from "./components/Categories";
import Testimonials from "./components/Testimonials";
import Discounts from "./components/Discounts";
import AppPromo from "./components/AppPromo";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Locations />
      <TuitionTypes />
      <HowItWorks />
      <Categories />
      <Testimonials />
      <Discounts />
      <AppPromo />
      <Footer />
    </>
  );
}
