import React, { useEffect, useState } from "react";
import { ArrowRight, Users, Award, ChartBar, Globe } from "lucide-react";
import robot from "../assets/robot.png"
const Hero = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = Array.from({ length: 20 }).map((_, index) => ({
        id: index,
        size: Math.random() * 3 + 1,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: Math.random() * 3 + 2,
      }));
      setStars(newStars);
    };
    generateStars();
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Background stars */}
      <div className="absolute inset-0">
        {Array.from({ length: 100 }).map((_, index) => (
          <div
            key={index}
            className="absolute bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2}px`,
              height: `${Math.random() * 2}px`,
            }}
          ></div>
        ))}
      </div>

      {/* Shooting stars */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-white rounded-full"
            style={{
              top: "-10px",
              left: `${star.left}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animation: `shootingStar ${star.duration}s ease-in-out ${star.delay}s infinite`,
            }}
          ></div>
        ))}
      </div>


      {/* Hero Section */}
      <div class="mt-24 flex items-center justify-center relative h-screen  z-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <div class="flex flex-col items-center md:flex-row md:items-center md:gap-16">
            <div class="max-w-2xl text-center md:text-left">
              <h1 class="text-5xl font-bold text-white mb-6">
                Tracking Your Loved ones
                <br class="hidden md:block" />
                with Enigma
              </h1>
              <p class="text-xl text-white/75 mb-8">
              Discover peace of mind with our advanced tracking solutions. Keep your family safe and connected, anytime, anywhere.
              </p>
            </div>

            <div class="mt-10 w-full max-w-md md:mt-0 md:w-[1000px]">
              <img
                src={robot}
                alt="Team collaboration"
                class="rounded-3xl shadow-2xl "
              />
            </div>
          </div>

          <div class="flex flex-col items-center md:flex-row md:gap-6 md:mt-12">
            <button class="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Get Started
            </button>

            <button class="border border-white/50 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-colors">
              Know More
            </button>
          </div>
        </div>
      </div>


      {/* Animations */}
      <style>
        {`
          @keyframes shootingStar {
            0% {
              transform: translateY(0) translateX(0) scale(1);
              opacity: 1;
            }
            100% {
              transform: translateY(100vh) translateX(50vw) scale(0);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Hero;
