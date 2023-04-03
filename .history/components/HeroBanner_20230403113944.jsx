import Image from "next/image";
import Link from "next/link";
import React from "react";
import { urlFor } from "../lib/client";
import Product from "./Product";

function HeroBanner({ heroBanner }) {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h2>{heroBanner.largeText1}</1>
        <img
          src={urlFor(heroBanner.image)}
          alt="spec wear"
          className="hero-banner-image"                   
          
        />
        <div>
          <Link href={`/product/ID${heroBanner.Product}`}>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
