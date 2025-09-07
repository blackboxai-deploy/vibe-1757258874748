"use client";

import React from "react";

export function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, NY",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/318dac56-cdb8-4146-be6e-ccc396b08997.png",
      rating: 5,
      text: "MatchMyMakeup completely transformed my beauty routine! I finally found the perfect foundation shade that matches my skin tone perfectly. The quiz was so easy and accurate.",
      product: "Nude Glow Foundation"
    },
    {
      id: 2,
      name: "Emily Chen",
      location: "Los Angeles, CA",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/73d72b88-dfab-4554-a7f5-7885e1ff8030.png",
      rating: 5,
      text: "I've struggled with finding the right lip colors for years. The personalized recommendations were spot-on, and now I have a collection of shades that all work beautifully with my skin tone.",
      product: "Rose Lip Palette"
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      location: "Miami, FL",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1b014350-2b29-4df5-b3af-73aadc7bf87c.png",
      rating: 5,
      text: "The eyeshadow recommendations were incredible! I never knew which colors would look good on me, but now I feel so confident experimenting with different looks.",
      product: "Neutral Eyeshadow Set"
    },
    {
      id: 4,
      name: "Jessica Williams",
      location: "Chicago, IL",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f85ab201-de63-47c0-ae03-c9b2bbb65b8c.png",
      rating: 5,
      text: "As someone with deeper skin, I always had trouble finding products that worked for me. This platform made it so easy to find makeup that enhances my natural beauty.",
      product: "Bronzing Powder Duo"
    },
    {
      id: 5,
      name: "Amanda Davis",
      location: "Seattle, WA",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2887efc4-d53e-411a-9e65-4df8ae546f5d.png",
      rating: 5,
      text: "I love how the quiz considered my lifestyle and preferences. The recommendations fit perfectly with my busy schedule and natural style preferences.",
      product: "Daily Essentials Kit"
    },
    {
      id: 6,
      name: "Lisa Thompson",
      location: "Austin, TX",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0a745a54-effd-4f35-81df-5920fdb093ed.png",
      rating: 5,
      text: "At 45, I thought I knew what worked for me, but this quiz introduced me to new products and techniques that made me feel more confident than ever."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-nude-50 to-nude-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-brown-900 mb-6">
            What Our Users Say
          </h2>
          <p className="text-xl text-brown-700 max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who've discovered their perfect makeup match and transformed their beauty routine.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-nude-400 rounded-full mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              {/* Rating Stars */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-brown-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </blockquote>

              {/* Customer Info */}
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name} - satisfied customer`}
                    className="w-16 h-16 rounded-full object-cover shadow-md"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden w-16 h-16 rounded-full bg-gradient-to-br from-rose-300 to-nude-400 flex items-center justify-center shadow-md">
                    <span className="text-white text-xl">👤</span>
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-brown-800">{testimonial.name}</div>
                  <div className="text-brown-600 text-sm">{testimonial.location}</div>
                  {testimonial.product && (
                    <div className="text-rose-500 text-sm font-medium mt-1">
                      Used: {testimonial.product}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16 text-center">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl font-bold text-rose-500 mb-2">500K+</div>
            <div className="text-brown-700 font-medium">Happy Customers</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl font-bold text-rose-500 mb-2">98%</div>
            <div className="text-brown-700 font-medium">Satisfaction Rate</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl font-bold text-rose-500 mb-2">10M+</div>
            <div className="text-brown-700 font-medium">Successful Matches</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl font-bold text-rose-500 mb-2">4.9</div>
            <div className="text-brown-700 font-medium">Average Rating</div>
          </div>
        </div>

        {/* Bottom Inspirational Quote */}
        <div className="text-center mt-16 bg-gradient-to-r from-rose-400 to-nude-400 rounded-2xl p-8">
          <blockquote className="font-playfair text-2xl md:text-3xl text-white italic mb-4 max-w-3xl mx-auto">
            "Confidence is the best makeup you can wear, but the right products don't hurt either."
          </blockquote>
          <cite className="text-white/90 font-medium">- Anonymous Beauty Expert</cite>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto shadow-lg">
            <h3 className="font-playfair text-3xl font-bold text-brown-900 mb-4">
              Ready to Join Them?
            </h3>
            <p className="text-brown-700 mb-6">
              Take our free quiz and discover your perfect makeup match today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/quiz"
                className="bg-rose-400 hover:bg-rose-500 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 inline-block"
              >
                Take the Quiz Now
              </a>
              <a
                href="/testimonials"
                className="border-2 border-brown-700 text-brown-700 hover:bg-brown-700 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 inline-block"
              >
                Read More Stories
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}