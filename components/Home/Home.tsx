import ThemeToggler from "../Helper/ThemeToggler";
import ResponsiveNav from "./Navbar/ResponsiveNav";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Services from "./Services/Services";
import WhyUs from "./WhyUs/WhyUs";
import Price from "./Price/Price";
import ClientReviews from "./ClientReview/ClientReview";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Price />
      <ClientReviews />
    </div>
  );
};

export default Home;
