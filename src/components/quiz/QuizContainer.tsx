"use client";

import React, { useState } from "react";
import { QuestionCard } from "./QuestionCard";
import { ProgressBar } from "./ProgressBar";
import { ResultsPage } from "./ResultsPage";
import { Button } from "@/components/ui/button";

export interface QuizAnswer {
  questionId: number;
  answer: string | string[];
}

export interface QuizQuestion {
  id: number;
  type: 'single' | 'multiple';
  question: string;
  description?: string;
  options: {
    value: string;
    label: string;
    description?: string;
  }[];
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    type: 'single',
    question: "What's your natural skin tone?",
    description: "Look at your wrist in natural light - what do you see?",
    options: [
      { value: 'fair-cool', label: 'Fair with cool undertones', description: 'Pink or blue veins visible' },
      { value: 'fair-warm', label: 'Fair with warm undertones', description: 'Green veins visible' },
      { value: 'fair-neutral', label: 'Fair with neutral undertones', description: 'Mix of pink and green veins' },
      { value: 'light-cool', label: 'Light with cool undertones', description: 'Pink or blue veins visible' },
      { value: 'light-warm', label: 'Light with warm undertones', description: 'Green veins visible' },
      { value: 'light-neutral', label: 'Light with neutral undertones', description: 'Mix of pink and green veins' },
      { value: 'medium-cool', label: 'Medium with cool undertones', description: 'Pink or blue veins visible' },
      { value: 'medium-warm', label: 'Medium with warm undertones', description: 'Green veins visible' },
      { value: 'medium-neutral', label: 'Medium with neutral undertones', description: 'Mix of pink and green veins' },
      { value: 'deep-cool', label: 'Deep with cool undertones', description: 'Pink or blue veins visible' },
      { value: 'deep-warm', label: 'Deep with warm undertones', description: 'Green veins visible' },
      { value: 'deep-neutral', label: 'Deep with neutral undertones', description: 'Mix of pink and green veins' }
    ]
  },
  {
    id: 2,
    type: 'single',
    question: "How much time do you spend on makeup daily?",
    options: [
      { value: '5-minutes', label: '5-10 minutes', description: 'Quick & natural everyday look' },
      { value: '15-minutes', label: '15-30 minutes', description: 'Polished everyday look' },
      { value: '30-minutes', label: '30-45 minutes', description: 'Full makeup routine' },
      { value: '45-minutes', label: '45+ minutes', description: 'Complete glam transformation' }
    ]
  },
  {
    id: 3,
    type: 'single',
    question: "What's your makeup experience level?",
    options: [
      { value: 'beginner', label: 'Beginner', description: 'New to makeup, prefer simple looks' },
      { value: 'intermediate', label: 'Intermediate', description: 'Comfortable with basics, learning new techniques' },
      { value: 'advanced', label: 'Advanced', description: 'Experienced, love trying new trends' },
      { value: 'expert', label: 'Expert', description: 'Very skilled, comfortable with complex looks' }
    ]
  },
  {
    id: 4,
    type: 'multiple',
    question: "Which makeup products do you use most often?",
    description: "Select all that apply",
    options: [
      { value: 'foundation', label: 'Foundation/Concealer' },
      { value: 'mascara', label: 'Mascara' },
      { value: 'lipstick', label: 'Lipstick/Lip gloss' },
      { value: 'eyeshadow', label: 'Eyeshadow' },
      { value: 'blush', label: 'Blush' },
      { value: 'bronzer', label: 'Bronzer/Contour' },
      { value: 'eyeliner', label: 'Eyeliner' },
      { value: 'brows', label: 'Eyebrow products' }
    ]
  },
  {
    id: 5,
    type: 'single',
    question: "What's your preferred makeup style?",
    options: [
      { value: 'natural', label: 'Natural & Fresh', description: 'Enhancing natural beauty' },
      { value: 'classic', label: 'Classic & Timeless', description: 'Traditional, polished looks' },
      { value: 'trendy', label: 'Trendy & Modern', description: 'Latest makeup trends' },
      { value: 'bold', label: 'Bold & Dramatic', description: 'Statement makeup looks' },
      { value: 'romantic', label: 'Romantic & Feminine', description: 'Soft, dreamy looks' }
    ]
  },
  {
    id: 6,
    type: 'single',
    question: "What's your budget range for makeup products?",
    options: [
      { value: 'budget', label: 'Budget-friendly', description: 'Under $20 per product' },
      { value: 'mid-range', label: 'Mid-range', description: '$20-50 per product' },
      { value: 'high-end', label: 'High-end', description: '$50-100 per product' },
      { value: 'luxury', label: 'Luxury', description: '$100+ per product' },
      { value: 'mixed', label: 'Mixed', description: 'Different budgets for different products' }
    ]
  },
  {
    id: 7,
    type: 'single',
    question: "What's your skin type?",
    options: [
      { value: 'oily', label: 'Oily', description: 'Shiny, especially in T-zone' },
      { value: 'dry', label: 'Dry', description: 'Tight, sometimes flaky' },
      { value: 'combination', label: 'Combination', description: 'Oily T-zone, dry cheeks' },
      { value: 'normal', label: 'Normal', description: 'Balanced, not too oily or dry' },
      { value: 'sensitive', label: 'Sensitive', description: 'Easily irritated or reactive' }
    ]
  },
  {
    id: 8,
    type: 'single',
    question: "Which lip colors do you gravitate towards?",
    options: [
      { value: 'nude', label: 'Nude & Natural', description: 'Close to natural lip color' },
      { value: 'pink', label: 'Pink tones', description: 'Soft to bright pinks' },
      { value: 'coral', label: 'Coral & Orange', description: 'Warm, vibrant tones' },
      { value: 'red', label: 'Classic Reds', description: 'Traditional red shades' },
      { value: 'berry', label: 'Berry & Plum', description: 'Deep, rich tones' },
      { value: 'brown', label: 'Browns & Mauves', description: 'Earthy, sophisticated tones' }
    ]
  },
  {
    id: 9,
    type: 'single',
    question: "How do you prefer your foundation coverage?",
    options: [
      { value: 'sheer', label: 'Sheer', description: 'Light, natural coverage' },
      { value: 'light', label: 'Light to Medium', description: 'Some coverage, skin shows through' },
      { value: 'medium', label: 'Medium', description: 'Good coverage, evens skin tone' },
      { value: 'full', label: 'Full Coverage', description: 'Complete coverage, flawless finish' }
    ]
  },
  {
    id: 10,
    type: 'single',
    question: "What occasions do you usually wear makeup for?",
    options: [
      { value: 'daily', label: 'Daily/Work', description: 'Professional, everyday looks' },
      { value: 'social', label: 'Social events', description: 'Parties, dinners, social gatherings' },
      { value: 'special', label: 'Special occasions', description: 'Weddings, formal events' },
      { value: 'all', label: 'All occasions', description: 'Various looks for different events' }
    ]
  },
  {
    id: 11,
    type: 'multiple',
    question: "Which eye makeup looks do you prefer?",
    description: "Select all that apply",
    options: [
      { value: 'natural', label: 'Natural enhancement' },
      { value: 'smoky', label: 'Smoky eyes' },
      { value: 'colorful', label: 'Colorful eyeshadow' },
      { value: 'winged', label: 'Winged eyeliner' },
      { value: 'dramatic', label: 'Dramatic lashes' },
      { value: 'subtle', label: 'Subtle definition' }
    ]
  },
  {
    id: 12,
    type: 'single',
    question: "How important is long-lasting makeup to you?",
    options: [
      { value: 'very-important', label: 'Very important', description: 'Need makeup to last 10+ hours' },
      { value: 'important', label: 'Important', description: 'Should last through work day' },
      { value: 'somewhat', label: 'Somewhat important', description: 'Okay with touch-ups' },
      { value: 'not-important', label: 'Not very important', description: 'Don\'t mind reapplying' }
    ]
  },
  {
    id: 13,
    type: 'single',
    question: "Do you have any makeup allergies or sensitivities?",
    options: [
      { value: 'none', label: 'No known allergies' },
      { value: 'fragrance', label: 'Fragrance sensitivity' },
      { value: 'ingredients', label: 'Specific ingredient allergies' },
      { value: 'sensitive', label: 'Generally sensitive skin' },
      { value: 'not-sure', label: 'Not sure/Haven\'t tested much' }
    ]
  },
  {
    id: 14,
    type: 'single',
    question: "What's your age range?",
    description: "This helps us recommend age-appropriate products",
    options: [
      { value: 'teens', label: '13-19 years' },
      { value: 'twenties', label: '20-29 years' },
      { value: 'thirties', label: '30-39 years' },
      { value: 'forties', label: '40-49 years' },
      { value: 'fifties-plus', label: '50+ years' }
    ]
  },
  {
    id: 15,
    type: 'single',
    question: "What's your main goal with makeup?",
    options: [
      { value: 'enhance', label: 'Enhance natural features', description: 'Subtle improvement of natural beauty' },
      { value: 'cover', label: 'Cover imperfections', description: 'Hide blemishes, even skin tone' },
      { value: 'transform', label: 'Transform my look', description: 'Dramatic change in appearance' },
      { value: 'express', label: 'Express creativity', description: 'Artistic and creative expression' },
      { value: 'confidence', label: 'Boost confidence', description: 'Feel more confident and put-together' }
    ]
  }
];

export function QuizContainer() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  const handleAnswer = (questionId: number, answer: string | string[]) => {
    const updatedAnswers = answers.filter(a => a.questionId !== questionId);
    updatedAnswers.push({ questionId, answer });
    setAnswers(updatedAnswers);

    // Move to next question after a short delay
    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setIsComplete(true);
      }
    }, 500);
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const startQuiz = () => {
    setShowWelcome(false);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setIsComplete(false);
    setShowWelcome(true);
  };

  if (showWelcome) {
    return (
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-rose-400 to-nude-400 p-12 text-white text-center">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              Find Your Perfect Makeup Match
            </h1>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Answer 15 personalized questions to discover makeup products perfectly tailored to your unique beauty and style preferences.
            </p>
            <div className="flex justify-center space-x-8 text-center mb-8">
              <div>
                <div className="text-3xl font-bold">2 min</div>
                <div className="text-white/80">Quick & Easy</div>
              </div>
              <div>
                <div className="text-3xl font-bold">15</div>
                <div className="text-white/80">Questions</div>
              </div>
              <div>
                <div className="text-3xl font-bold">100%</div>
                <div className="text-white/80">Free</div>
              </div>
            </div>
          </div>
          
          <div className="p-12 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-300 to-nude-400 rounded-full flex items-center justify-center mb-4 text-2xl">
                  🎯
                </div>
                <h3 className="font-semibold text-brown-800 mb-2">Personalized</h3>
                <p className="text-brown-600 text-sm">Tailored recommendations based on your unique features</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-300 to-nude-400 rounded-full flex items-center justify-center mb-4 text-2xl">
                  🔬
                </div>
                <h3 className="font-semibold text-brown-800 mb-2">Scientific</h3>
                <p className="text-brown-600 text-sm">Color science and professional makeup artist expertise</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-300 to-nude-400 rounded-full flex items-center justify-center mb-4 text-2xl">
                  ✨
                </div>
                <h3 className="font-semibold text-brown-800 mb-2">Instant Results</h3>
                <p className="text-brown-600 text-sm">Get your personalized recommendations immediately</p>
              </div>
            </div>
            
            <Button 
              onClick={startQuiz}
              className="bg-rose-400 hover:bg-rose-500 text-white px-12 py-4 text-xl font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Quiz Now
            </Button>
            
            <p className="text-brown-600 text-sm mt-4">
              No email required • Results available instantly
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (isComplete) {
    return <ResultsPage answers={answers} onRestart={restartQuiz} />;
  }

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
        <ProgressBar 
          current={currentQuestion + 1} 
          total={quizQuestions.length} 
        />
        
        <QuestionCard
          question={quizQuestions[currentQuestion]}
          onAnswer={handleAnswer}
          onPrevious={handlePrevious}
          showPrevious={currentQuestion > 0}
          currentAnswer={answers.find(a => a.questionId === quizQuestions[currentQuestion].id)?.answer}
        />
      </div>
    </div>
  );
}