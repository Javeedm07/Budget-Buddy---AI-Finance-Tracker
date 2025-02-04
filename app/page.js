"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  featuresData,
  howItWorksData,
  statsData,
  testimonialsData,
} from "@/data/landing";
import HeroSection from "@/components/hero";
import Link from "next/link";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const LandingPage = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <div className="animate-fadeIn">
        <HeroSection />
      </div>

      {/* Stats Section */}
      <section ref={ref} className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-400/5 animate-pulse"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((stat, index) => (
              <div
                key={index}
                className="text-center transform hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <div className="text-4xl font-bold text-blue-400 mb-2 animate-countUp">
                  {stat.units_pre}
                  {inView && ( // Trigger CountUp only when in view
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={3}
                      decimals={stat.value % 1 !== 0 ? 1 : 0} // Use decimals if needed
                    />
                  )}
                  {stat.units_post}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white animate-slideDown">
            Everything You Need To Manage Your Finances
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
              <Card
                className="p-6 bg-gray-800 border-gray-700 transform hover:scale-105 hover:bg-gray-750 transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-blue-400/10"
                key={index}
              >
                <CardContent className="space-y-4 pt-4 hover:text-blue-400">
                  <div className="text-blue-400 transform hover:rotate-12 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="steps"
        className="py-20 bg-gray-900 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-400/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {howItWorksData.map((step, index) => (
              <div
                key={index}
                className="text-center transform hover:translate-y-2 transition-all duration-300 ease-in-out"
              >
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6 hover:shadow-lg hover:shadow-blue-400/20 transition-shadow duration-300">
                  <div className="text-blue-400 animate-spin-slow">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {step.title}
                </h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <Card
                key={index}
                className="p-6 bg-gray-800 border-gray-700 hover:shadow-xl hover:shadow-blue-400/10 transition-all duration-300 ease-in-out transform hover:-translate-y-2"
              >
                <CardContent className="pt-4">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full ring-2 ring-blue-400 ring-offset-2 ring-offset-gray-800"
                    />
                    <div className="ml-4">
                      <div className="font-semibold text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-300">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300">{testimonial.quote}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-blue-600/10 animate-gradient"></div>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-3xl font-bold text-white mb-4 animate-slideUp">
            Ready to Take Control Of Your Finances?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join the growing community managing their money smarter with Budget
            Buddy
          </p>
          <Link href="/dashboard">
            <Button
              size="lg"
              className="bg-blue-400 text-gray-900 hover:bg-blue-300 transform hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-blue-300/50 ani"
            >
              Start Free Trial
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
