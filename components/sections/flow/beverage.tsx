"use client";

import { Section } from "../../ui/section";
import { useLanguage } from "../../contexts/language-provider";

export default function BeverageFlow() {
  const { t } = useLanguage();
  
  return (
    <Section className="py-24 bg-muted/50">
      <div className="mx-auto max-w-container text-center">
        <h2 className="text-4xl font-semibold mb-16">{t("how_it_works")}</h2>
        <div className="relative">
          {/* Progress line */}
          <div className="absolute hidden md:block top-6 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-purple-600/20 via-purple-600/20 to-purple-600/20" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: t("product_onboarding"),
                description: t("product_onboarding_desc")
              },
              {
                step: 2,
                title: t("consumer_engagement"),
                description: t("consumer_engagement_desc")
              },
              {
                step: 3,
                title: t("data_collection"),
                description: t("data_collection_desc")
              },
              {
                step: 4,
                title: t("growth_optimization"),
                description: t("growth_optimization_desc")
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 shadow-lg shadow-purple-600/20">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
} 