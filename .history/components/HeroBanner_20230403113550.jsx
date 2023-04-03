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
        <h1>{heroBanner.largeText1}</h1>
        <Image
          src={urlFor(heroBanner.image)}
          alt="headphones"
          className="hero-banner-image"
          fill
          
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
