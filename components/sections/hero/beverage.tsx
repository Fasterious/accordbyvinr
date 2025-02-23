"use client";

import { Button } from "../../ui/button";
import { Badge } from "../../ui/badge";
import { Section } from "../../ui/section";
import { SparklesIcon, RocketIcon } from "lucide-react";
import Link from "next/link";

export default function BeverageHero() {
  return (
    <Section className="relative overflow-hidden">
      <div className="mx-auto flex max-w-container flex-col gap-12 pt-24">
        <div className="flex flex-col items-center gap-6 text-center">
          <Badge variant="outline">
            <SparklesIcon className="h-4 w-4 mr-2" />
            <span>AI-Powered Beverage Experience</span>
          </Badge>
          
          <h1 className="relative z-10 inline-block text-4xl font-semibold leading-tight sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
            Transform Every Bottle Into a Digital Ambassador
          </h1>
          
          <p className="text-md relative z-10 max-w-[550px] font-medium text-muted-foreground sm:text-xl">
            Empower brewers, winemakers, and beverage producers with AI-driven insights and interactive consumer experiences
          </p>
          
          <Button 
            variant="default" 
            size="lg"
            asChild
          >
            <a href="mailto:contact@vinr.fr">
              <RocketIcon className="mr-2 h-5 w-5" />
              Get Early Access
            </a>
          </Button>
        </div>
      </div>
      
      {/* Purple Glow Effect */}
      <div className="absolute left-0 top-[20%] h-full w-full translate-y-[1rem] opacity-0 animate-glow-up">
        <div className="absolute left-1/2 top-0 aspect-square w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-[120px]" />
        <div className="absolute left-1/2 top-0 aspect-square w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/20 blur-[100px]" />
      </div>
    </Section>
  );
} 