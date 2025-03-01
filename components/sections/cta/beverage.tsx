"use client";

import React from "react";
import { Section } from "../../ui/section";
import Glow from "../../ui/glow";
import { RocketIcon } from "lucide-react";
import { useLanguage } from "../../contexts/language-provider";

export default function BeverageCTA() {
  const { t } = useLanguage();
  
  return (
    <Section id="contact" className="group relative overflow-hidden isolate">
      <div 
        className="absolute inset-0 w-full h-full translate-y-[1rem] opacity-80 transition-all duration-500 ease-in-out group-hover:translate-y-[-2rem] group-hover:opacity-100 pointer-events-none"
        style={{ zIndex: 1 }}
        aria-hidden="true"
      >
        <Glow variant="bottom" color="purple" />
      </div>
      
      <div className="relative mx-auto flex max-w-container flex-col items-center gap-6 text-center sm:gap-8" style={{ zIndex: 10 }}>
        <h2 className="text-3xl font-semibold sm:text-5xl">{t("be_among_first")}</h2>
        <p className="text-md max-w-[600px] text-muted-foreground sm:text-xl">
          {t("join_early_access")}
        </p>
        
        <div className="relative" style={{ zIndex: 9999 }}>
          <a 
            href="mailto:contact@vinr.fr"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-10 px-5 py-3 bg-purple-600 hover:bg-purple-700 text-white shadow-lg cursor-pointer"
            style={{ 
              position: 'relative',
              zIndex: 9999,
              pointerEvents: 'auto'
            }}
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.stopPropagation();
              window.location.href = 'mailto:contact@vinr.fr';
            }}
          >
            <RocketIcon className="mr-2 h-5 w-5" />
            {t("get_early_access")}
          </a>
        </div>
      </div>
      
      <div 
        className="absolute inset-0 w-full h-full"
        style={{ 
          zIndex: 5000, 
          pointerEvents: 'none'
        }}
        aria-hidden="true"
      ></div>
    </Section>
  );
} 