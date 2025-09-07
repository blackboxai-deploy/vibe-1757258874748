"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { QuizQuestion } from "./QuizContainer";

interface QuestionCardProps {
  question: QuizQuestion;
  onAnswer: (questionId: number, answer: string | string[]) => void;
  onPrevious: () => void;
  showPrevious: boolean;
  currentAnswer?: string | string[];
}

export function QuestionCard({
  question,
  onAnswer,
  onPrevious,
  showPrevious,
  currentAnswer
}: QuestionCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | string[]>(
    currentAnswer || (question.type === 'multiple' ? [] : '')
  );

  const handleSingleSelect = (value: string) => {
    setSelectedAnswer(value);
    onAnswer(question.id, value);
  };

  const handleMultipleSelect = (value: string) => {
    const currentSelected = Array.isArray(selectedAnswer) ? selectedAnswer : [];
    const newSelected = currentSelected.includes(value)
      ? currentSelected.filter(item => item !== value)
      : [...currentSelected, value];
    
    setSelectedAnswer(newSelected);
  };

  const handleNext = () => {
    if (question.type === 'multiple' && Array.isArray(selectedAnswer)) {
      onAnswer(question.id, selectedAnswer);
    }
  };

  const isAnswered = question.type === 'single' 
    ? typeof selectedAnswer === 'string' && selectedAnswer !== ''
    : Array.isArray(selectedAnswer) && selectedAnswer.length > 0;

  return (
    <div className="p-8 md:p-12">
      {/* Question Header */}
      <div className="text-center mb-8">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brown-900 mb-4 leading-tight">
          {question.question}
        </h2>
        {question.description && (
          <p className="text-brown-600 text-lg max-w-2xl mx-auto">
            {question.description}
          </p>
        )}
      </div>

      {/* Options */}
      <div className="space-y-4 mb-8 max-w-3xl mx-auto">
        {question.options.map((option, index) => {
          const isSelected = question.type === 'single'
            ? selectedAnswer === option.value
            : Array.isArray(selectedAnswer) && selectedAnswer.includes(option.value);

          return (
            <div
              key={index}
              className={`
                relative p-4 md:p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300
                ${isSelected 
                  ? 'border-rose-400 bg-rose-50 shadow-md transform scale-105' 
                  : 'border-nude-200 bg-white hover:border-nude-400 hover:bg-nude-50'
                }
              `}
              onClick={() => question.type === 'single' 
                ? handleSingleSelect(option.value) 
                : handleMultipleSelect(option.value)
              }
            >
              <div className="flex items-start space-x-4">
                {/* Radio/Checkbox */}
                <div className="flex-shrink-0 mt-1">
                  {question.type === 'single' ? (
                    <div className={`
                      w-5 h-5 rounded-full border-2 flex items-center justify-center
                      ${isSelected 
                        ? 'border-rose-400 bg-rose-400' 
                        : 'border-nude-300'
                      }
                    `}>
                      {isSelected && (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </div>
                  ) : (
                    <div className={`
                      w-5 h-5 rounded border-2 flex items-center justify-center
                      ${isSelected 
                        ? 'border-rose-400 bg-rose-400' 
                        : 'border-nude-300'
                      }
                    `}>
                      {isSelected && (
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className={`
                    font-semibold text-lg mb-1
                    ${isSelected ? 'text-rose-700' : 'text-brown-800'}
                  `}>
                    {option.label}
                  </div>
                  {option.description && (
                    <div className={`
                      text-sm
                      ${isSelected ? 'text-rose-600' : 'text-brown-600'}
                    `}>
                      {option.description}
                    </div>
                  )}
                </div>
              </div>

              {/* Selection indicator */}
              {isSelected && (
                <div className="absolute top-4 right-4">
                  <div className="w-6 h-6 bg-rose-400 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        {showPrevious ? (
          <Button
            variant="outline"
            onClick={onPrevious}
            className="border-2 border-nude-300 text-brown-700 hover:bg-nude-100 px-6 py-3 rounded-full font-semibold"
          >
            ← Previous
          </Button>
        ) : (
          <div></div>
        )}

        {question.type === 'multiple' && (
          <div className="text-center">
            {isAnswered && (
              <Button
                onClick={handleNext}
                className="bg-rose-400 hover:bg-rose-500 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
              >
                Continue →
              </Button>
            )}
            <p className="text-brown-600 text-sm mt-2">
              {Array.isArray(selectedAnswer) && selectedAnswer.length > 0
                ? `${selectedAnswer.length} selected`
                : 'Select all that apply'
              }
            </p>
          </div>
        )}

        {question.type === 'single' && (
          <div className="text-brown-600 text-sm">
            {isAnswered ? 'Moving to next question...' : 'Select an option to continue'}
          </div>
        )}
      </div>

      {/* Question number indicator */}
      <div className="text-center mt-8">
        <div className="inline-flex items-center space-x-2 text-brown-600 text-sm">
          <span>Question {question.id}</span>
          <span>•</span>
          <span>{isAnswered ? 'Answered' : 'Not answered'}</span>
        </div>
      </div>
    </div>
  );
}