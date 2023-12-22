import HeroCarousel from "@/components/HeroCarousel";
import Searchbar from "@/components/Searchbar";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <>
      <section className="px-6 md:px-20 py-24">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex-col justify-center">
            <p className="small-text">
              Data driven shopping.
              <Image
                src="/assets/icons/arrow-right.svg"
                alt="arrow-right"
                width={16}
                height={16}
              />
            </p>
            <h1 className="head-text">
              Use the power of{" "}
              <span className="text-primary">Web Scraping</span>
            </h1>
            <p className="mt-6">
              Welcome to Price Tracker, where shopping becomes an intelligent,
              data-driven adventure. Our innovative platform harnesses the power
              of Web Scraping to transform the way you shop online.
            </p>
            <Searchbar />
          </div>
          <HeroCarousel />
        </div>
      </section>

      <section className="trending-section">
        <h2 className="section-text">Trending Products</h2>

        <div className="flex flex-wrap gap-x-8 gap-y-16">
          {["Iphone 15", "Book", "Bicycle"].map((product) => (
            <div>{product}</div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
