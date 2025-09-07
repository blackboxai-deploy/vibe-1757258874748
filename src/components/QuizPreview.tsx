"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function QuizPreview() {
  return (
    <section className="py-20 bg-nude-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-brown-900 mb-6">
            Discover Your Perfect Makeup Match
          </h2>
          <p className="text-xl text-brown-700 max-w-3xl mx-auto leading-relaxed">
            Our scientifically-designed quiz analyzes your skin tone, preferences, and lifestyle to recommend the perfect makeup products just for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Quiz Preview Content */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-rose-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-brown-800 mb-2">Skin Tone Analysis</h3>
                <p className="text-brown-600">We'll help you identify your undertones and skin type to find the most flattering shades.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-rose-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-brown-800 mb-2">Style Preferences</h3>
                <p className="text-brown-600">Tell us about your makeup style, from natural everyday looks to bold statement makeup.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-rose-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-brown-800 mb-2">Personalized Results</h3>
                <p className="text-brown-600">Get curated product recommendations with detailed explanations and application tips.</p>
              </div>
            </div>

            <div className="pt-6">
              <Link href="/quiz">
                <Button className="bg-rose-400 hover:bg-rose-500 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Start Your Beauty Journey
                </Button>
              </Link>
            </div>
          </div>

          {/* Quiz Sample Questions */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="font-playfair text-2xl font-bold text-brown-900 mb-6 text-center">Sample Questions</h3>
            
            <div className="space-y-6">
              <div className="p-4 bg-nude-50 rounded-lg">
                <p className="font-medium text-brown-800 mb-3">What's your natural skin tone?</p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 rounded-full border-2 border-brown-400"></div>
                    <span className="text-brown-600">Fair with cool undertones</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 rounded-full border-2 border-brown-400"></div>
                    <span className="text-brown-600">Medium with warm undertones</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 rounded-full border-2 border-brown-400"></div>
                    <span className="text-brown-600">Deep with neutral undertones</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-nude-50 rounded-lg">
                <p className="font-medium text-brown-800 mb-3">How much time do you spend on makeup daily?</p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 rounded-full border-2 border-brown-400"></div>
                    <span className="text-brown-600">5-10 minutes (quick & natural)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 rounded-full border-2 border-brown-400"></div>
                    <span className="text-brown-600">15-30 minutes (polished look)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 rounded-full border-2 border-brown-400"></div>
                    <span className="text-brown-600">30+ minutes (full glam)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-6">
              <p className="text-sm text-brown-600">
                <span className="font-medium">Only 2 minutes</span> to complete • <span className="font-medium">15 questions</span> total
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-rose-400 to-nude-400 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="font-playfair text-3xl font-bold text-white mb-4">
              Ready to Find Your Perfect Match?
            </h3>
            <p className="text-white/90 text-lg mb-6">
              Join thousands of women who've discovered their ideal makeup routine.
            </p>
            <Link href="/quiz">
              <Button className="bg-white text-rose-500 hover:bg-gray-50 px-8 py-3 font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
                Take the Free Quiz
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}