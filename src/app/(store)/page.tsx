import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import ProductHomePage from "@/components/ProductHomePage";
import Review from "@/components/Review";
import Search from "@/components/Search";
import React from "react";

function HomePage() {
  return (
    <div className="min-h-screen w-full">
      <NavBar />
      <Hero />
      <Search />
      <ProductHomePage />
      <Review />
      <Footer />
    </div>
  );
}

export default HomePage;
