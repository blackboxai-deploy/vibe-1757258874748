"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-nude-100 shadow-sm border-b border-nude-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-rose-300 to-nude-400 rounded-full"></div>
            <span className="font-playfair text-2xl font-bold text-brown-800">
              MatchMyMakeup
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/quiz" className="text-brown-700 hover:text-rose-600 transition-colors font-medium">
              Take Quiz
            </Link>
            <Link href="/products" className="text-brown-700 hover:text-rose-600 transition-colors font-medium">
              Products
            </Link>
            <Link href="/tutorials" className="text-brown-700 hover:text-rose-600 transition-colors font-medium">
              Tutorials
            </Link>
            <Link href="/how-it-works" className="text-brown-700 hover:text-rose-600 transition-colors font-medium">
              How It Works
            </Link>
            <Link href="/about" className="text-brown-700 hover:text-rose-600 transition-colors font-medium">
              About
            </Link>
            <Link href="/contact" className="text-brown-700 hover:text-rose-600 transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost" className="text-brown-700 hover:bg-nude-200">
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-rose-400 hover:bg-rose-500 text-white">
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-brown-700 hover:bg-nude-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-nude-200">
            <div className="flex flex-col space-y-4">
              <Link href="/quiz" className="text-brown-700 hover:text-rose-600 font-medium">
                Take Quiz
              </Link>
              <Link href="/products" className="text-brown-700 hover:text-rose-600 font-medium">
                Products
              </Link>
              <Link href="/tutorials" className="text-brown-700 hover:text-rose-600 font-medium">
                Tutorials
              </Link>
              <Link href="/how-it-works" className="text-brown-700 hover:text-rose-600 font-medium">
                How It Works
              </Link>
              <Link href="/about" className="text-brown-700 hover:text-rose-600 font-medium">
                About
              </Link>
              <Link href="/contact" className="text-brown-700 hover:text-rose-600 font-medium">
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t border-nude-200">
                <Link href="/login">
                  <Button variant="ghost" className="w-full text-brown-700 hover:bg-nude-200">
                    Login
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button className="w-full bg-rose-400 hover:bg-rose-500 text-white">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}