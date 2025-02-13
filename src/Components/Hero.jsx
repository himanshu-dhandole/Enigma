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
      <div class=" flex items-center justify-center relative h-screen  z-10">
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

      {/* Stats Section */}
      <div className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 flex items-center gap-4">
              <Users className="w-12 h-12 text-white" />
              <div>
                <div className="text-4xl font-bold text-white">100+</div>
                <div className="text-gray-300">Global Employees</div>
              </div>
            </div>
            <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 flex items-center gap-4">
              <Globe className="w-12 h-12 text-white" />
              <div>
                <div className="text-4xl font-bold text-white">100+</div>
                <div className="text-gray-300">Countries</div>
              </div>
            </div>
            <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 flex items-center gap-4">
              <ChartBar className="w-12 h-12 text-white" />
              <div>
                <div className="text-4xl font-bold text-white">100+</div>
                <div className="text-gray-300">Active Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Jobs Section */}
      <div className="relative z-10 py-20" id="jobs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-12">
            Featured Positions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Senior Software Engineer",
                location: "Remote / San Francisco",
                type: "Full-time",
                description:
                  "Lead development of our core platform using cutting-edge technologies.",
              },
              {
                title: "Product Designer",
                location: "New York / London",
                type: "Full-time",
                description:
                  "Shape the future of our product experience and user interface.",
              },
              {
                title: "Data Scientist",
                location: "Remote / Singapore",
                type: "Full-time",
                description:
                  "Drive insights from our vast data to improve product decisions.",
              },
            ].map((job) => (
              <div
                key={job.title}
                className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-colors group"
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  {job.title}
                </h3>
                <div className="text-gray-400 mb-2">{job.location}</div>
                <div className="text-sm text-white bg-white/10 inline-block px-3 py-1 rounded-full mb-4">
                  {job.type}
                </div>
                <p className="text-gray-300 mb-6">{job.description}</p>
                <button className="text-white border border-white/20 px-6 py-2 rounded-lg group-hover:bg-white group-hover:text-black transition-all flex items-center gap-2">
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="relative z-10 py-20" id="benefits">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="backdrop-blur-xl bg-white/5 rounded-3xl p-12 border border-white/10">
            <h2 className="text-4xl font-bold text-white mb-12">
              Benefits & Perks
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Remote-First Culture",
                  description:
                    "Work from anywhere in the world with our distributed team.",
                },
                {
                  title: "Health & Wellness",
                  description:
                    "Comprehensive health coverage and wellness programs.",
                },
                {
                  title: "Learning Budget",
                  description:
                    "$5,000 annual budget for courses and conferences.",
                },
                {
                  title: "Equity Package",
                  description: "Be an owner in our company's success story.",
                },
                {
                  title: "Flexible Time Off",
                  description:
                    "Unlimited PTO policy with minimum 20 days encouraged.",
                },
                {
                  title: "Home Office Setup",
                  description: "$3,000 budget for your perfect workspace.",
                },
              ].map((benefit) => (
                <div
                  key={benefit.title}
                  className="backdrop-blur-md bg-white/5 rounded-xl p-6 border border-white/10"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="relative z-10 py-20" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="backdrop-blur-xl bg-white/5 rounded-3xl p-12 border border-white/10 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Join Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Can't find the perfect role? Send us your resume and we'll keep
              you in mind for future opportunities.
            </p>
            <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors inline-flex items-center gap-2">
              Contact Recruiting
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-white font-bold mb-4">StarTech</h3>
                <p className="text-gray-400">
                  Building the future of technology
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Company</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Press
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Resources</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Help Center
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Follow Us</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      GitHub
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer> 

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
