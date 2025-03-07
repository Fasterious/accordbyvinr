"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "fr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr");

  // Persistence de la langue dans le localStorage
  useEffect(() => {
    try {
      const savedLanguage = localStorage.getItem("language") as Language;
      if (savedLanguage && (savedLanguage === "fr" || savedLanguage === "en")) {
        setLanguage(savedLanguage);
      }
    } catch (error) {
      // Gestion des erreurs de localStorage (mode privé/incognito)
      console.error("localStorage error:", error);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("language", language);
    } catch (error) {
      console.error("localStorage error:", error);
    }
  }, [language]);

  // Traductions
  const translations: Record<Language, Record<string, string>> = {
    fr: {
      // Nav, Hero et CTA
      "ai_powered": "Expérience de Boisson Alimentée par l'IA",
      "transform_bottle": "Transformez Chaque Bouteille en Ambassadeur Digital",
      "empower_brewers": "Donnez aux brasseurs, vignerons et producteurs de boissons des insights basés sur l'IA et des expériences consommateur interactives",
      "get_early_access": "Accès Anticipé",
      "be_among_first": "Économisez 30% en Rejoignant les Pionniers",
      "join_early_access": "Inscrivez-vous maintenant, obtenez 30% de réduction et révolutionnez l'expérience de vos consommateurs",
      "language": "Langue",
      "key_features": "Fonctionnalités Clés",
      "accord_by_vinr": "Accord by VinR",
      
      // Features
      "qr_code_activation": "Activation par QR Code",
      "qr_code_desc": "Chaque produit est associé à un QR code unique qui déverrouille une expérience digitale immersive, présentant vidéos, images et l'histoire de votre marque.",
      "direct_connection": "Connection Directe",
      "direct_connection_desc": "Construisez des relations durables avec votre audience en créant des connexions directes qui favorisent la fidélité et la confiance.",
      "ai_analytics": "Analyse par IA",
      "ai_analytics_desc": "Suivez le comportement des consommateurs et les ventes en temps réel avec des analyses avancées par IA qui fournissent des insights actionnables.",
      
      // Items
      "powerful_features": "Fonctionnalités Puissantes pour les Marques de Boissons Modernes",
      "qr_code_activation_2": "Activation par QR Code",
      "qr_code_desc_2": "QR codes uniques pour chaque produit, déverrouillant des expériences digitales riches",
      "direct_connection_2": "Connection Directe",
      "direct_connection_desc_2": "Construisez des relations directes avec vos consommateurs pour augmenter la fidélité",
      "realtime_analytics": "Analyse en Temps Réel",
      "realtime_analytics_desc": "Suivez le comportement des consommateurs et les ventes avec des insights basés sur l'IA",
      "ai_recommendations": "Recommandations IA",
      "ai_recommendations_desc": "Suggestions intelligentes pour améliorer l'engagement et optimiser les ventes",
      "easy_management": "Gestion Simplifiée",
      "easy_management_desc": "Tableau de bord intuitif pour la gestion des produits et du contenu",
      "brand_storytelling": "Storytelling de Marque",
      "brand_storytelling_desc": "Partagez votre histoire unique à travers des expériences multimédia",
      "performance_tracking": "Suivi de Performance",
      "performance_tracking_desc": "Suivez les métriques d'engagement et l'efficacité des campagnes",
      "consumer_feedback": "Retour Consommateur",
      "consumer_feedback_desc": "Collectez et analysez les retours clients pour améliorer vos produits",
      
      // Flow
      "how_it_works": "Comment Ça Marche",
      "product_onboarding": "Intégration Produit",
      "product_onboarding_desc": "Enregistrez vos produits et créez des identités digitales uniques",
      "consumer_engagement": "Engagement Consommateur",
      "consumer_engagement_desc": "Connectez-vous avec les consommateurs à travers des expériences interactives",
      "data_collection": "Collecte de Données",
      "data_collection_desc": "Recueillez des insights précieux à partir des interactions consommateurs",
      "growth_optimization": "Optimisation de Croissance",
      "growth_optimization_desc": "Utilisez des insights basés sur l'IA pour optimiser votre stratégie",
      
      // FAQ
      "common_questions": "Questions Fréquentes",
      "qr_code_question": "Comment fonctionne le système de QR code ?",
      "qr_code_answer": "Chaque produit reçoit un QR code unique qui, lorsqu'il est scanné, mène les consommateurs vers une expérience digitale interactive. Cela inclut l'histoire de votre marque, les détails du produit, les notes de dégustation et du contenu multimédia.",
      "analytics_question": "Quel type d'analyses fournissez-vous ?",
      "analytics_answer": "Nos analyses basées sur l'IA suivent l'engagement des consommateurs, les taux de scan, l'interaction avec le contenu et le comportement d'achat. Vous obtiendrez des insights en temps réel sur les produits populaires, les préférences des consommateurs et la performance des campagnes.",
      "content_question": "Est-il facile de gérer le contenu ?",
      "content_answer": "Notre tableau de bord intuitif facilite l'ajout et la mise à jour des informations produits, le téléchargement de médias et la gestion de votre contenu digital. Aucune expertise technique requise - si vous savez utiliser les réseaux sociaux, vous saurez utiliser notre plateforme.",
      "ai_question": "Qu'est-ce qui rend les recommandations IA spéciales ?",
      "ai_answer": "Notre IA analyse les modèles de comportement des consommateurs, les tendances du marché et les données de vos produits pour fournir des recommandations personnalisées. Cela vous aide à identifier les clients potentiels et à optimiser vos stratégies marketing pour un meilleur engagement et de meilleures ventes.",
      "engagement_question": "Comment aidez-vous avec l'engagement des consommateurs ?",
      "engagement_answer": "Au-delà de l'interaction initiale avec le QR code, nous vous aidons à construire des relations durables grâce à du contenu personnalisé, des recommandations ciblées et des fonctionnalités interactives qui incitent les consommateurs à revenir pour en apprendre davantage sur vos produits.",
      
      // Footer
      "product": "Produit",
      "legal_notice": "Mentions Légales",
      "privacy_policy": "Politique de Confidentialité",
      "terms_of_sale": "Conditions de Vente",
      "company": "Entreprise",
      "vinr_website": "Site web VinR",
      "social": "Réseaux",
      "all_rights_reserved": "© 2024 VinR. Tous droits réservés",
      "terms_of_service": "Conditions d'Utilisation"
    },
    en: {
      // Nav, Hero et CTA
      "ai_powered": "AI-Powered Beverage Experience",
      "transform_bottle": "Transform Every Bottle Into a Digital Ambassador",
      "empower_brewers": "Empower brewers, winemakers, and beverage producers with AI-driven insights and interactive consumer experiences",
      "get_early_access": "Get Early Access",
      "be_among_first": "Save 30% as an Early Adopter",
      "join_early_access": "Register now, get 30% off and revolutionize how consumers experience your products",
      "language": "Language",
      "key_features": "Key Features",
      "accord_by_vinr": "Accord by VinR",
      
      // Features
      "qr_code_activation": "QR Code Activation",
      "qr_code_desc": "Each product comes with a unique QR code that unlocks an immersive digital experience, featuring videos, images, and your brand's story.",
      "direct_connection": "Direct Connection",
      "direct_connection_desc": "Build lasting relationships with your audience by creating direct connections that foster loyalty and trust.",
      "ai_analytics": "AI-Powered Analytics",
      "ai_analytics_desc": "Track consumer behavior and sales in real-time with advanced AI analytics that provide actionable insights.",
      
      // Items
      "powerful_features": "Powerful Features for Modern Beverage Brands",
      "qr_code_activation_2": "QR Code Activation",
      "qr_code_desc_2": "Unique QR codes for each product, unlocking rich digital experiences",
      "direct_connection_2": "Direct Connection",
      "direct_connection_desc_2": "Build direct relationships with your consumers to increase loyalty",
      "realtime_analytics": "Real-time Analytics",
      "realtime_analytics_desc": "Track consumer behavior and sales with AI-powered insights",
      "ai_recommendations": "AI Recommendations",
      "ai_recommendations_desc": "Smart suggestions to boost engagement and optimize sales",
      "easy_management": "Easy Management",
      "easy_management_desc": "Intuitive dashboard for product and content management",
      "brand_storytelling": "Brand Storytelling",
      "brand_storytelling_desc": "Share your unique story through multimedia experiences",
      "performance_tracking": "Performance Tracking",
      "performance_tracking_desc": "Monitor engagement metrics and campaign effectiveness",
      "consumer_feedback": "Consumer Feedback",
      "consumer_feedback_desc": "Gather and analyze customer feedback to improve products",
      
      // Flow
      "how_it_works": "How It Works",
      "product_onboarding": "Product Onboarding",
      "product_onboarding_desc": "Register your products and create unique digital identities",
      "consumer_engagement": "Consumer Engagement",
      "consumer_engagement_desc": "Connect with consumers through interactive experiences",
      "data_collection": "Data Collection",
      "data_collection_desc": "Gather valuable insights from consumer interactions",
      "growth_optimization": "Growth Optimization",
      "growth_optimization_desc": "Use AI-powered insights to optimize your strategy",
      
      // FAQ
      "common_questions": "Common Questions",
      "qr_code_question": "How does the QR code system work?",
      "qr_code_answer": "Each product gets a unique QR code that, when scanned, leads consumers to an interactive digital experience. This includes your brand story, product details, tasting notes, and multimedia content.",
      "analytics_question": "What kind of analytics do you provide?",
      "analytics_answer": "Our AI-powered analytics track consumer engagement, scan rates, content interaction, and purchase behavior. You'll get real-time insights on popular products, consumer preferences, and campaign performance.",
      "content_question": "How easy is it to manage content?",
      "content_answer": "Our intuitive dashboard makes it simple to add and update product information, upload media, and manage your digital content. No technical expertise required - if you can use social media, you can use our platform.",
      "ai_question": "What makes the AI recommendations special?",
      "ai_answer": "Our AI analyzes consumer behavior patterns, market trends, and your product data to provide personalized recommendations. This helps you identify potential customers and optimize your marketing strategies for better engagement and sales.",
      "engagement_question": "How do you help with consumer engagement?",
      "engagement_answer": "Beyond the initial QR code interaction, we help you build lasting relationships through personalized content, targeted recommendations, and interactive features that keep consumers coming back to learn more about your products.",
      
      // Footer
      "product": "Product",
      "legal_notice": "Legal Notice",
      "privacy_policy": "Privacy Policy",
      "terms_of_sale": "Terms of Sale",
      "company": "Company",
      "vinr_website": "VinR website",
      "social": "Social",
      "all_rights_reserved": "© 2024 VinR. All rights reserved",
      "terms_of_service": "Terms of Service"
    }
  };

  // Fonction de traduction
  const t = (key: string): string => {
    if (!translations[language][key]) {
      console.warn(`Missing translation for key: ${key} in language: ${language}`);
      return key;
    }
    return translations[language][key];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
} 