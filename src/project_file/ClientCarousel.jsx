import React from "react";
import Polygreen from "../assets/polygreen.png";
import Hyundai from "../assets/hwia.png"
import Spsys from "../assets/sp.webp";
import Poultry from "../assets/poultry-logo.webp";
import unomic from "../assets/unomic.webp";
import RS from "../assets/RS.webp"
const logos = [
  Polygreen,
  Hyundai,
  Spsys,
  Poultry,
  unomic,
  RS  
];

export default function ClientCarousel() {
  return (
    <section className="pt-24 overflow-hidden">

      <h2 className="text-center text-white text-3xl md:text-5xl font-bold mb-10">
        Trusted by Leading Enterprises
      </h2>

      <div className="relative overflow-hidden">

        <div className="flex animate-marquee gap-8 w-max">

          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="
                min-w-[220px]
                h-[120px]
                bg-white
                rounded-2xl
                flex
                items-center
                justify-center
                p-4
              "
            >
              <img
                src={logo}
                alt=""
                className="max-h-17 object-contain"
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}