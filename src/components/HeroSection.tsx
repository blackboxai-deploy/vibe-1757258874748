"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-cream-50 via-nude-100 to-nude-200 py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-rose-300 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-nude-400 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-rose-400 rounded-full blur-2xl opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left">
            <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-brown-900 leading-tight mb-6">
              Find Your
              <span className="block text-transparent bg-gradient-to-r from-rose-500 to-nude-500 bg-clip-text">
                Perfect Match
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-brown-700 mb-8 leading-relaxed">
              Discover makeup that complements your unique beauty. Our personalized quiz matches you with the perfect shades and products for your skin tone.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link href="/quiz">
                <Button className="bg-rose-400 hover:bg-rose-500 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Take the Quiz Now
                </Button>
              </Link>
              <Link href="/how-it-works">
                <Button variant="outline" className="border-2 border-brown-700 text-brown-700 hover:bg-brown-700 hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300">
                  How It Works
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center lg:justify-start text-center">
              <div>
                <div className="text-3xl font-bold text-rose-500">500K+</div>
                <div className="text-brown-600">Happy Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-rose-500">10M+</div>
                <div className="text-brown-600">Matches Made</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-rose-500">98%</div>
                <div className="text-brown-600">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-nude-200 to-nude-300 rounded-3xl p-8 shadow-2xl">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/38050a8d-400a-4e03-8669-482205d44ba1.png"
                alt="Beautiful woman with perfect nude makeup look, natural glowing skin, professional beauty photography"
                className="w-full h-full object-cover rounded-2xl shadow-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden bg-gradient-to-br from-nude-300 to-rose-300 rounded-2xl h-96 flex items-center justify-center">
                <div className="text-center text-brown-700">
                  <div className="text-6xl mb-4">💄</div>
                  <p className="text-lg">Beautiful Makeup</p>
                </div>
              </div>
            </div>

            {/* Floating makeup elements */}
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-rose-300 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl">💄</span>
            </div>
            <div className="absolute -bottom-4 -right-4 w-14 h-14 bg-nude-400 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl">✨</span>
            </div>
            <div className="absolute top-1/2 -right-8 w-12 h-12 bg-rose-400 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-xl">💋</span>
            </div>
          </div>
        </div>

        {/* Inspirational Quote */}
        <div className="text-center mt-20 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-4">
            <div className="w-12 h-1 bg-gradient-to-r from-rose-400 to-nude-400 rounded-full"></div>
          </div>
          <blockquote className="font-playfair text-2xl md:text-3xl text-brown-800 italic mb-4 max-w-4xl mx-auto">
            "Beauty is about enhancing what you have. Let yourself shine through!"
          </blockquote>
          <cite className="text-brown-600 font-medium">- Bobbi Brown, Makeup Artist</cite>
        </div>
      </div>
    </section>
  );
}