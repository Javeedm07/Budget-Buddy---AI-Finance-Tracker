"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Play, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("translate-y-10", "opacity-80");
      } else {
        imageElement.classList.remove("translate-y-10", "opacity-80");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative pt-40 pb-20 px-4 bg-gray-950 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto text-center relative z-10">
        <h1
          className="text-5xl md:text-8xl lg:text-[105px] pb-6 font-bold
                     bg-gradient-to-r from-blue-600  to-purple-800
                     bg-clip-text text-transparent
                     animate-gradient-x"
        >
          Where AI Meets <br /> Your Wallet
        </h1>

        <p
          className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto
                    animate-fadeIn"
        >
          An AI-powered platform designed to simplify financial management,
          providing real-time insights to help you save more and spend smarter.
        </p>

        {/*Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16 w-full">
          <Link
            href="/dashboard"
            className="w-full sm:w-auto flex justify-center"
          >
            <Button
              size="lg"
              className="px-8 bg-blue-600 hover:bg-blue-700 text-white
                   transition-all duration-300 hover:scale-105
                   hover:shadow-lg hover:shadow-blue-600/20
                   flex items-center gap-2 group min-w-[170px]"
            >
              Get Started
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link
            href="https://www.youtube.com"
            className="w-full sm:w-auto flex justify-center"
          >
            <Button
              size="lg"
              variant="outline"
              className="px-8 border-gray-700 text-gray-300
                   hover:bg-gray-800 hover:text-blue-400
                   transition-all duration-300
                   flex items-center gap-2 group min-w-[170px]"
            >
              <Play
                size={18}
                className="group-hover:scale-110 transition-transform"
              />
              Watch Demo
            </Button>
          </Link>
        </div>

        {/*Image */}
        <div className="relative max-w-6xl mx-auto">
          <div
            ref={imageRef}
            className="transform transition-all duration-700 ease-in-out
                     hover:translate-y-2"
          >
            <Image
              src="/hero.webp"
              width={1280}
              height={720}
              alt="Dashboard Preview"
              className="rounded-2xl shadow-2xl border border-gray-800
                       hover:shadow-blue-500/10 transition-shadow duration-300
                       animate-fadeIn"
              priority
            />

            <div className="absolute -z-10 inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />
            <div className="absolute -z-10 inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
