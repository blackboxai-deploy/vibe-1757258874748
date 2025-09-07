"use client";

import React from "react";

interface ProgressBarProps {
  current: number;
  total: number;
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const progress = (current / total) * 100;

  return (
    <div className="bg-nude-100 px-8 py-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <span className="text-brown-800 font-semibold text-lg">
            Question {current} of {total}
          </span>
          <div className="text-brown-600 text-sm">
            {Math.round(progress)}% Complete
          </div>
        </div>
        <div className="text-brown-600 text-sm">
          About {Math.max(1, Math.ceil((total - current) * 0.1))} min remaining
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="relative">
        <div className="w-full bg-nude-200 rounded-full h-3 overflow-hidden">
          <div
            className="bg-gradient-to-r from-rose-400 to-nude-500 h-full rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        {/* Progress dots */}
        <div className="flex justify-between absolute -top-1 w-full">
          {Array.from({ length: total }, (_, index) => (
            <div
              key={index}
              className={`
                w-5 h-5 rounded-full border-2 transition-all duration-300
                ${index < current
                  ? 'bg-rose-400 border-rose-400 shadow-md'
                  : index === current - 1
                  ? 'bg-rose-300 border-rose-300 scale-110 shadow-lg'
                  : 'bg-nude-200 border-nude-300'
                }
              `}
              style={{
                left: `${(index / (total - 1)) * 100}%`,
                transform: 'translateX(-50%)'
              }}
            >
              {index < current && (
                <div className="flex items-center justify-center h-full">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Encouraging message */}
      <div className="text-center mt-6">
        <div className="text-brown-700 font-medium">
          {current <= 3 && "Great start! Let's learn about your preferences."}
          {current > 3 && current <= 8 && "You're doing great! We're getting to know your style."}
          {current > 8 && current <= 12 && "Almost there! Just a few more questions."}
          {current > 12 && "Final stretch! Your personalized results are almost ready."}
        </div>
      </div>
    </div>
  );
}