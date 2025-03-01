"use client";

import React from "react";
import { Button } from "./button";
import { GlobeIcon } from "lucide-react";
import { useLanguage } from "../contexts/language-provider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";

export function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage();

  const handleLanguageChange = (lang: "fr" | "en") => {
    console.log(`Setting language to: ${lang}`);
    setLanguage(lang);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="gap-2 text-white hover:bg-purple-600/20 focus:bg-purple-600/20"
        >
          <GlobeIcon className="h-4 w-4" />
          <span>{t("language")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="z-[1000] bg-background/90 backdrop-blur-lg border border-purple-600/20"
      >
        <DropdownMenuItem 
          onSelect={(event) => {
            event.preventDefault();
            handleLanguageChange("fr");
          }}
          className={`${language === "fr" ? "bg-purple-600/20 text-white" : "hover:bg-purple-600/10"} cursor-pointer`}
        >
          🇫🇷 Français
        </DropdownMenuItem>
        <DropdownMenuItem 
          onSelect={(event) => {
            event.preventDefault();
            handleLanguageChange("en");
          }}
          className={`${language === "en" ? "bg-purple-600/20 text-white" : "hover:bg-purple-600/10"} cursor-pointer`}
        >
          🇬🇧 English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 