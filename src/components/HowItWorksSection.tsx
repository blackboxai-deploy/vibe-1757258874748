"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HowItWorksSection() {
  const steps = [
    {
      step: 1,
      title: "Take the Quiz",
      description: "Answer 15 quick questions about your skin tone, preferences, and lifestyle in just 2 minutes.",
      icon: "📝",
      details: [
        "Skin tone analysis",
        "Undertone identification",
        "Style preferences",
        "Budget considerations"
      ]
    },
    {
      step: 2,
      title: "Get Matched",
      description: "Our advanced algorithm analyzes your responses to find your perfect makeup matches.",
      icon: "🔍",
      details: [
        "AI-powered matching",
        "Color science analysis",
        "Professional recommendations",
        "Personalized results"
      ]
    },
    {
      step: 3,
      title: "Shop & Enjoy",
      description: "Browse your personalized recommendations and discover products that enhance your natural beauty.",
      icon: "💄",
      details: [
        "Curated product list",
        "Detailed explanations",
        "Application tutorials",
        "Expert tips included"
      ]
    }
  ];

  return (
    <section className="py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-brown-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-brown-700 max-w-3xl mx-auto leading-relaxed">
            Discover your perfect makeup match in three simple steps. Our scientifically-backed process ensures you get products that truly complement your unique beauty.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-nude-400 rounded-full mx-auto mt-6"></div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {steps.map((item, index) => (
            <div key={item.step} className="relative group">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-12 h-0.5 bg-gradient-to-r from-rose-400 to-nude-400 transform translate-x-0"></div>
              )}

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                {/* Step Number & Icon */}
                <div className="flex items-center justify-center mb-6">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-rose-400 to-nude-500 rounded-full flex items-center justify-center text-4xl shadow-lg">
                      {item.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-brown-700 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {item.step}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-playfair text-2xl font-bold text-brown-900 mb-4 text-center">
                  {item.title}
                </h3>
                <p className="text-brown-700 text-center mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* Details */}
                <ul className="space-y-2">
                  {item.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-brown-600 text-sm">
                      <div className="w-2 h-2 bg-rose-400 rounded-full mr-3 flex-shrink-0"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <h3 className="font-playfair text-3xl font-bold text-brown-900 mb-8 text-center">
            Why Choose MatchMyMakeup?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-300 to-nude-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                🎯
              </div>
              <h4 className="font-semibold text-brown-800 mb-2">Personalized</h4>
              <p className="text-brown-600 text-sm">Tailored recommendations based on your unique features and preferences</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-300 to-nude-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                🔬
              </div>
              <h4 className="font-semibold text-brown-800 mb-2">Scientific</h4>
              <p className="text-brown-600 text-sm">Color science and skin tone analysis for accurate matches</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-300 to-nude-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                ⚡
              </div>
              <h4 className="font-semibold text-brown-800 mb-2">Quick & Easy</h4>
              <p className="text-brown-600 text-sm">Complete the quiz in just 2 minutes and get instant results</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-300 to-nude-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                👩‍💻
              </div>
              <h4 className="font-semibold text-brown-800 mb-2">Expert Approved</h4>
              <p className="text-brown-600 text-sm">Recommendations backed by professional makeup artists</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-rose-400 to-nude-400 rounded-2xl p-8 max-w-3xl mx-auto text-white">
            <h3 className="font-playfair text-3xl font-bold mb-4">
              Ready to Transform Your Beauty Routine?
            </h3>
            <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
              Join over 500,000 satisfied customers who've discovered their perfect makeup match. Your personalized beauty journey starts here.
            </p>
            <Link href="/quiz">
              <Button className="bg-white text-rose-500 hover:bg-gray-50 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                Start Your Quiz Now - It's Free!
              </Button>
            </Link>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center mt-8 text-white/80">
              <div className="flex items-center justify-center space-x-2">
                <span className="text-lg">✓</span>
                <span>100% Free Quiz</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-lg">✓</span>
                <span>Instant Results</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-lg">✓</span>
                <span>No Email Required</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="text-center mt-16">
          <blockquote className="font-playfair text-2xl text-brown-800 italic mb-4 max-w-3xl mx-auto">
            "The right makeup doesn't hide who you are, it reveals who you could be."
          </blockquote>
          <cite className="text-brown-600 font-medium">- Pat McGrath, Makeup Artist</cite>
        </div>
      </div>
    </section>
  );
}