import ThemeToggler from "../Helper/ThemeToggler";
import ResponsiveNav from "./Navbar/ResponsiveNav";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Services from "./Services/Services";
import WhyUs from "./WhyUs/WhyUs";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Services />
      <WhyUs />
    </div>
  );
};

export default Home;
