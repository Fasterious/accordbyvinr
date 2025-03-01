"use client";

import { QrCodeIcon, UsersIcon, BarChart3Icon } from "lucide-react";
import { Section } from "../../ui/section";
import { useLanguage } from "../../contexts/language-provider";

export default function BeverageFeatures() {
  const { t } = useLanguage();
  
  return (
    <Section className="py-24">
      <div className="mx-auto max-w-container text-center">
        <h2 className="text-4xl font-semibold mb-16">{t("key_features")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg border bg-card">
            <div className="mb-4">
              <QrCodeIcon className="h-8 w-8 mx-auto text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{t("qr_code_activation")}</h3>
            <p className="text-muted-foreground">{t("qr_code_desc")}</p>
          </div>
          <div className="p-6 rounded-lg border bg-card">
            <div className="mb-4">
              <UsersIcon className="h-8 w-8 mx-auto text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{t("direct_connection")}</h3>
            <p className="text-muted-foreground">{t("direct_connection_desc")}</p>
          </div>
          <div className="p-6 rounded-lg border bg-card">
            <div className="mb-4">
              <BarChart3Icon className="h-8 w-8 mx-auto text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{t("ai_analytics")}</h3>
            <p className="text-muted-foreground">{t("ai_analytics_desc")}</p>
          </div>
        </div>
      </div>
    </Section>
  );
} 