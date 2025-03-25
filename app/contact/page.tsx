"use client";

import { Section } from "@/components/ui/section";
import { ContactForm } from "@/components/ui/contact-form";
import { useLanguage } from "@/components/contexts/language-provider";
import Glow from "@/components/ui/glow";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <Section className="group relative overflow-hidden isolate min-h-screen pt-32">
      <div 
        className="absolute inset-0 w-full h-full translate-y-[1rem] opacity-80 transition-all duration-500 ease-in-out group-hover:translate-y-[-2rem] group-hover:opacity-100 pointer-events-none"
        style={{ zIndex: 1 }}
        aria-hidden="true"
      >
        <Glow variant="bottom" color="purple" />
      </div>
      
      <div className="relative mx-auto flex max-w-container flex-col items-center gap-6 text-center sm:gap-8" style={{ zIndex: 10 }}>
        <h1 className="text-3xl font-semibold sm:text-5xl">{t("contact_us")}</h1>
        <p className="text-md max-w-[600px] text-muted-foreground sm:text-xl">
          {t("contact_description")}
        </p>
        
        <div className="w-full mt-8">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
} 