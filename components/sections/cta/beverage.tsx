"use client";

import { Section } from "../../ui/section";
import { Button } from "../../ui/button";
import Glow from "../../ui/glow";
import { RocketIcon } from "lucide-react";

export default function BeverageCTA() {
  return (
    <Section id="contact" className="group relative overflow-hidden">
      <div className="relative z-10 mx-auto flex max-w-container flex-col items-center gap-6 text-center sm:gap-8">
        <h2 className="text-3xl font-semibold sm:text-5xl">Be Among the First</h2>
        <p className="text-md max-w-[600px] text-muted-foreground sm:text-xl">
          Join our early access program and transform your beverage brand into an interactive experience
        </p>
        <Button variant="default" size="lg" asChild>
          <a href="mailto:contact@vinr.io">
            <RocketIcon className="mr-2 h-5 w-5" />
            Get Early Access
          </a>
        </Button>
      </div>
      <div className="absolute left-0 top-0 h-full w-full translate-y-[1rem] opacity-80 transition-all duration-500 ease-in-out group-hover:translate-y-[-2rem] group-hover:opacity-100">
        <Glow variant="bottom" color="purple" />
      </div>
    </Section>
  );
} 