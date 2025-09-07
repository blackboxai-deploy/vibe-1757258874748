"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Nude Glow Foundation",
      brand: "Perfect Match Beauty",
      price: "$42",
      description: "Full-coverage foundation that adapts to your skin tone",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/732fddfc-2c8e-4b3f-a1ff-cc20e0985219.png",
      category: "Foundation",
      rating: 4.8
    },
    {
      id: 2,
      name: "Rose Lip Palette",
      brand: "Nude Essentials",
      price: "$28",
      description: "6 perfectly matched lip shades in rose and nude tones",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/81e23f05-84e0-46e0-bdf5-a1b764c334ce.png",
      category: "Lips",
      rating: 4.9
    },
    {
      id: 3,
      name: "Neutral Eyeshadow Set",
      brand: "Perfect Match Beauty",
      price: "$38",
      description: "12 versatile neutral shades for any occasion",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f164c982-e9ef-4831-9b3d-334d0dac691b.png",
      category: "Eyes",
      rating: 4.7
    },
    {
      id: 4,
      name: "Bronzing Powder Duo",
      brand: "Sun-Kissed Beauty",
      price: "$35",
      description: "Contour and highlight duo for natural-looking dimension",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4b77451a-03a1-4ae7-b766-e4ada34134ba.png",
      category: "Face",
      rating: 4.6
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-brown-900 mb-6">
            Featured Products
          </h2>
          <p className="text-xl text-brown-700 max-w-3xl mx-auto leading-relaxed">
            Discover our most popular makeup products, carefully curated to complement every skin tone and style preference.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-nude-400 rounded-full mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-nude-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.description}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden bg-gradient-to-br from-nude-300 to-rose-300 w-full h-64 flex items-center justify-center">
                  <div className="text-center text-brown-700">
                    <div className="text-4xl mb-2">💄</div>
                    <p className="text-sm">{product.category}</p>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-rose-400 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {product.category}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-brown-800 text-lg">{product.name}</h3>
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-400">★</span>
                    <span className="text-sm text-brown-600">{product.rating}</span>
                  </div>
                </div>
                <p className="text-brown-600 text-sm mb-3">{product.brand}</p>
                <p className="text-brown-700 text-sm mb-4 leading-relaxed">{product.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-rose-500">{product.price}</span>
                  <Link href={`/products/${product.id}`}>
                    <Button className="bg-brown-700 hover:bg-brown-800 text-white px-4 py-2 text-sm rounded-lg transition-colors">
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-nude-100 to-nude-200 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="font-playfair text-3xl font-bold text-brown-900 mb-4">
              Not Sure Which Products Are Right for You?
            </h3>
            <p className="text-brown-700 text-lg mb-6 max-w-2xl mx-auto">
              Take our personalized quiz to get product recommendations tailored specifically to your skin tone, preferences, and lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quiz">
                <Button className="bg-rose-400 hover:bg-rose-500 text-white px-8 py-3 font-semibold rounded-full transition-all duration-300">
                  Take the Quiz
                </Button>
              </Link>
              <Link href="/products">
                <Button variant="outline" className="border-2 border-brown-700 text-brown-700 hover:bg-brown-700 hover:text-white px-8 py-3 font-semibold rounded-full transition-all duration-300">
                  Browse All Products
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Inspirational Quote */}
        <div className="text-center mt-16">
          <blockquote className="font-playfair text-2xl text-brown-800 italic mb-4 max-w-3xl mx-auto">
            "Makeup is not a mask that covers up your beauty; it's a weapon that helps you express who you are from the inside."
          </blockquote>
          <cite className="text-brown-600 font-medium">- Michelle Phan, Beauty Guru</cite>
        </div>
      </div>
    </section>
  );
}