"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { QuizAnswer } from "./QuizContainer";

interface ResultsPageProps {
  answers: QuizAnswer[];
  onRestart: () => void;
}

interface ProductRecommendation {
  id: string;
  name: string;
  brand: string;
  price: string;
  description: string;
  image: string;
  category: string;
  rating: number;
  whyRecommended: string;
  shadeRecommendation?: string;
}

export function ResultsPage({ answers, onRestart }: ResultsPageProps) {
  const [showShareModal, setShowShareModal] = useState(false);

  // Analyze answers to generate personalized recommendations
  const analyzeAnswers = () => {
    const answerMap = new Map(answers.map(a => [a.questionId, a.answer]));
    
    const skinTone = answerMap.get(1) as string || 'medium-neutral';
    const timeSpent = answerMap.get(2) as string || '15-minutes';
    const experience = answerMap.get(3) as string || 'intermediate';
    const preferredProducts = answerMap.get(4) as string[] || [];
    const style = answerMap.get(5) as string || 'natural';
    const budget = answerMap.get(6) as string || 'mid-range';
    const skinType = answerMap.get(7) as string || 'normal';
    const lipColors = answerMap.get(8) as string || 'nude';
    const coverage = answerMap.get(9) as string || 'medium';
    
    // Generate profile
    const profile = {
      skinTone,
      timeSpent,
      experience,
      preferredProducts,
      style,
      budget,
      skinType,
      lipColors,
      coverage
    };

    return profile;
  };

  const profile = analyzeAnswers();

  // Generate personalized recommendations based on profile
  const recommendations: ProductRecommendation[] = [
    {
      id: '1',
      name: profile.coverage === 'full' ? 'Full Coverage Foundation' : profile.coverage === 'sheer' ? 'Tinted Moisturizer' : 'Medium Coverage Foundation',
      brand: profile.budget === 'luxury' ? 'Luxury Beauty' : profile.budget === 'budget' ? 'Affordable Beauty' : 'Perfect Match Beauty',
      price: profile.budget === 'luxury' ? '$85' : profile.budget === 'budget' ? '$18' : '$42',
      description: `Perfect ${profile.coverage} coverage foundation for ${profile.skinType} skin`,
      image: `https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/148646e8-bb5a-4228-a668-f734c5b09ff9.png}+coverage+foundation+for+${profile.skinTone}+skin+luxury+packaging+professional+photography`,
      category: 'Foundation',
      rating: 4.8,
      whyRecommended: `Based on your ${profile.skinTone} skin tone and preference for ${profile.coverage} coverage`,
      shadeRecommendation: profile.skinTone.includes('fair') ? 'Light' : profile.skinTone.includes('deep') ? 'Deep' : 'Medium'
    },
    {
      id: '2',
      name: `${profile.lipColors.charAt(0).toUpperCase() + profile.lipColors.slice(1)} Lip Collection`,
      brand: 'Nude Essentials',
      price: profile.budget === 'luxury' ? '$65' : profile.budget === 'budget' ? '$22' : '$35',
      description: `Curated collection of ${profile.lipColors} lip shades perfect for your style`,
      image: `https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/94ca2994-72a8-41fc-892b-9bcb15b0459d.png}+lip+palette+collection+luxury+makeup+professional+photography`,
      category: 'Lips',
      rating: 4.9,
      whyRecommended: `You indicated preference for ${profile.lipColors} lip colors, and this collection offers versatile options`,
      shadeRecommendation: `${profile.lipColors} tones that complement your ${profile.skinTone} undertones`
    }
  ];

  // Add eyeshadow if they use it
  if (profile.preferredProducts.includes('eyeshadow')) {
    recommendations.push({
      id: '3',
      name: profile.style === 'bold' ? 'Dramatic Eye Palette' : profile.style === 'natural' ? 'Neutral Eye Essentials' : 'Versatile Eye Collection',
      brand: 'Perfect Match Beauty',
      price: profile.budget === 'luxury' ? '$75' : profile.budget === 'budget' ? '$25' : '$45',
      description: `${profile.style} eyeshadow palette designed for ${profile.experience} users`,
      image: `https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/801f782a-bc4d-4fea-b7fc-fd2a80638e06.png}+eyeshadow+palette+${profile.skinTone}+friendly+professional+makeup+photography`,
      category: 'Eyes',
      rating: 4.7,
      whyRecommended: `Perfect for your ${profile.style} style and ${profile.experience} experience level`,
      shadeRecommendation: `Colors that enhance your ${profile.skinTone} complexion`
    });
  }

  // Add blush/bronzer if they use it
  if (profile.preferredProducts.includes('blush') || profile.preferredProducts.includes('bronzer')) {
    recommendations.push({
      id: '4',
      name: 'Sculpting & Glow Duo',
      brand: 'Sun-Kissed Beauty',
      price: profile.budget === 'luxury' ? '$68' : profile.budget === 'budget' ? '$20' : '$38',
      description: `Bronzer and blush duo perfect for ${profile.skinType} skin`,
      image: `https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/062e4c71-662c-49f9-93e7-f713657080d0.png}+skin+luxury+makeup+professional+photography`,
      category: 'Face',
      rating: 4.6,
      whyRecommended: `Ideal for adding dimension and warmth to your ${profile.skinTone} complexion`,
      shadeRecommendation: `Shades that naturally complement your undertones`
    });
  }

  const handleShare = () => {
    const text = "I just found my perfect makeup match! Take the quiz at MatchMyMakeup.com";
    if (navigator.share) {
      navigator.share({
        title: 'My Makeup Quiz Results',
        text,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(text + ' ' + window.location.href);
      setShowShareModal(true);
      setTimeout(() => setShowShareModal(false), 2000);
    }
  };

  const getStyleDescription = () => {
    switch (profile.style) {
      case 'natural': return 'Fresh & Natural Beauty';
      case 'classic': return 'Timeless & Elegant';
      case 'trendy': return 'Modern & On-Trend';
      case 'bold': return 'Dramatic & Statement-Making';
      case 'romantic': return 'Soft & Romantic';
      default: return 'Personalized Beauty';
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Header */}
      <div className="bg-gradient-to-r from-rose-400 to-nude-400 rounded-3xl p-8 md:p-12 text-white text-center mb-8">
        <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
          Your Perfect Makeup Match!
        </h1>
        <p className="text-xl text-white/90 mb-6 max-w-3xl mx-auto">
          Based on your responses, we've curated the perfect makeup products for your unique beauty and style preferences.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <div className="bg-white/20 rounded-full px-4 py-2">
            <span className="font-medium">Your Style:</span> {getStyleDescription()}
          </div>
          <div className="bg-white/20 rounded-full px-4 py-2">
            <span className="font-medium">Experience:</span> {profile.experience.charAt(0).toUpperCase() + profile.experience.slice(1)}
          </div>
          <div className="bg-white/20 rounded-full px-4 py-2">
            <span className="font-medium">Time:</span> {profile.timeSpent.replace('-', '-')} daily
          </div>
        </div>
      </div>

      {/* Profile Summary */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <h2 className="font-playfair text-3xl font-bold text-brown-900 mb-6 text-center">
          Your Beauty Profile
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-rose-300 to-nude-400 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl">
              🎨
            </div>
            <h3 className="font-semibold text-brown-800">Skin Tone</h3>
            <p className="text-brown-600 text-sm mt-1 capitalize">
              {profile.skinTone.replace('-', ' ')}
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-rose-300 to-nude-400 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl">
              ✨
            </div>
            <h3 className="font-semibold text-brown-800">Style</h3>
            <p className="text-brown-600 text-sm mt-1 capitalize">
              {getStyleDescription()}
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-rose-300 to-nude-400 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl">
              ⏱️
            </div>
            <h3 className="font-semibold text-brown-800">Routine Time</h3>
            <p className="text-brown-600 text-sm mt-1">
              {profile.timeSpent.replace('-', '-')} minutes
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-rose-300 to-nude-400 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl">
              💎
            </div>
            <h3 className="font-semibold text-brown-800">Budget Range</h3>
            <p className="text-brown-600 text-sm mt-1 capitalize">
              {profile.budget.replace('-', ' ')}
            </p>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="mb-8">
        <h2 className="font-playfair text-3xl font-bold text-brown-900 mb-8 text-center">
          Your Personalized Recommendations
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {recommendations.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.description}
                  className="w-full h-64 object-cover"
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
                  Perfect Match
                </div>
                <div className="absolute top-4 right-4 flex items-center space-x-1 bg-black/20 backdrop-blur-sm text-white px-2 py-1 rounded-full text-sm">
                  <span className="text-yellow-400">★</span>
                  <span>{product.rating}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-brown-800 text-xl mb-1">{product.name}</h3>
                    <p className="text-brown-600 text-sm">{product.brand}</p>
                  </div>
                  <span className="text-2xl font-bold text-rose-500">{product.price}</span>
                </div>

                <p className="text-brown-700 mb-4 leading-relaxed">{product.description}</p>

                {product.shadeRecommendation && (
                  <div className="bg-nude-50 rounded-lg p-4 mb-4">
                    <h4 className="font-semibold text-brown-800 mb-2">Recommended Shade:</h4>
                    <p className="text-brown-600 text-sm">{product.shadeRecommendation}</p>
                  </div>
                )}

                <div className="bg-rose-50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-rose-700 mb-2">Why We Recommend This:</h4>
                  <p className="text-rose-600 text-sm">{product.whyRecommended}</p>
                </div>

                <div className="flex space-x-3">
                  <a 
                    href="https://www.matchmymakeup.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 bg-rose-400 hover:bg-rose-500 text-white text-center py-3 rounded-lg font-semibold transition-colors"
                  >
                    Shop Now
                  </a>
                  <Link href={`/products/${product.id}`}>
                    <Button variant="outline" className="border-brown-300 text-brown-700 hover:bg-brown-50 px-6 py-3 rounded-lg">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center mb-8">
        <h3 className="font-playfair text-2xl font-bold text-brown-900 mb-6">
          What's Next?
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <a
            href="https://www.matchmymakeup.com/tutorials"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-rose-400 hover:bg-rose-500 text-white p-4 rounded-lg transition-colors"
          >
            <div className="text-2xl mb-2">📚</div>
            <div className="font-semibold">Learn Application</div>
            <div className="text-sm text-white/80">Watch tutorials for your recommended products</div>
          </a>
          
          <button
            onClick={handleShare}
            className="bg-nude-400 hover:bg-nude-500 text-white p-4 rounded-lg transition-colors"
          >
            <div className="text-2xl mb-2">📤</div>
            <div className="font-semibold">Share Results</div>
            <div className="text-sm text-white/80">Share your perfect match with friends</div>
          </button>
          
          <button
            onClick={onRestart}
            className="bg-brown-700 hover:bg-brown-800 text-white p-4 rounded-lg transition-colors"
          >
            <div className="text-2xl mb-2">🔄</div>
            <div className="font-semibold">Retake Quiz</div>
            <div className="text-sm text-white/80">Try again with different answers</div>
          </button>
        </div>

        <div className="text-center">
          <p className="text-brown-600 mb-4">
            Want to explore more products and get application tips?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button className="bg-rose-400 hover:bg-rose-500 text-white px-8 py-3 rounded-full">
                Browse All Products
              </Button>
            </Link>
            <Link href="/tutorials">
              <Button variant="outline" className="border-brown-300 text-brown-700 hover:bg-brown-50 px-8 py-3 rounded-full">
                Watch Tutorials
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Inspirational Quote */}
      <div className="bg-gradient-to-r from-nude-100 to-nude-200 rounded-2xl p-8 text-center">
        <blockquote className="font-playfair text-2xl text-brown-800 italic mb-4 max-w-3xl mx-auto">
          "Beauty is about being comfortable in your own skin—or in this case, your own makeup!"
        </blockquote>
        <cite className="text-brown-600 font-medium">- Your MatchMyMakeup Team</cite>
      </div>

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 max-w-sm mx-4">
            <div className="text-center">
              <div className="text-4xl mb-3">✓</div>
              <h3 className="font-semibold text-brown-800 mb-2">Link Copied!</h3>
              <p className="text-brown-600 text-sm">Share your results with friends and family</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}