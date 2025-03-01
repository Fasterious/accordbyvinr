"use client";

import React from "react";
import { Button } from "../../ui/button";
import {
  Navbar as NavbarComponent,
  NavbarLeft,
  NavbarRight,
} from "../../ui/navbar";
import { WineIcon, RocketIcon } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function BeverageNavbar() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowButton(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-lg"></div>
      <div className="relative mx-auto max-w-container px-4">
        <NavbarComponent className="h-16">
          <NavbarLeft>
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-bold"
            >
              <WineIcon className="h-8 w-8 text-purple-600" />
              <span>Accord by VinR</span>
            </Link>
          </NavbarLeft>
          <NavbarRight>
            <Button 
              variant="default" 
              size="sm"
              asChild
              className={`transition-all duration-500 ${
                showButton 
                ? "translate-y-0 opacity-100" 
                : "-translate-y-4 opacity-0 pointer-events-none"
              }`}
              style={{ zIndex: 60, position: 'relative' }}
            >
              <a 
                href="mailto:contact@vinr.fr"
                style={{ pointerEvents: 'auto', position: 'relative', zIndex: 60 }}
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.stopPropagation();
                  window.location.href = 'mailto:contact@vinr.fr';
                }}
              >
                <RocketIcon className="mr-2 h-4 w-4" />
                Get Early Access
              </a>
            </Button>
          </NavbarRight>
        </NavbarComponent>
      </div>
    </header>
  );
} 