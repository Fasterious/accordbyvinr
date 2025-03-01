"use client";

import { ModeToggle } from "../../ui/mode-toggle";
import {
  Footer,
  FooterColumn,
  FooterBottom,
  FooterContent,
} from "../../ui/footer";
import { WineIcon } from "lucide-react";
import { useLanguage } from "../../contexts/language-provider";

export default function BeverageFooter() {
  const { t } = useLanguage();
  
  return (
    <footer className="w-full bg-background px-4">
      <div className="mx-auto max-w-container">
        <Footer>
          <FooterContent>
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
              <div className="flex items-center gap-2">
                <WineIcon className="h-8 w-8 text-purple-600" />
                <h3 className="text-xl font-bold">{t("accord_by_vinr")}</h3>
              </div>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold">{t("product")}</h3>
              <a
                href="https://vinr.fr/mentions-legales"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground"
              >
                {t("legal_notice")}
              </a>
              <a
                href="https://vinr.fr/politique-de-confidentialite"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground"
              >
                {t("privacy_policy")}
              </a>
              <a
                href="https://vinr.fr/conditions-generales-de-vente"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground"
              >
                {t("terms_of_sale")}
              </a>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold">{t("company")}</h3>
              <a
                href="https://vinr.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground"
              >
                {t("vinr_website")}
              </a>
              <a
                href="tel:+33648016218"
                className="text-sm text-muted-foreground"
              >
                +33 6 48 01 62 18
              </a>
              <a
                href="mailto:contact@vinr.fr"
                className="text-sm text-muted-foreground"
              >
                contact@vinr.fr
              </a>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold">{t("social")}</h3>
              <a
                href="https://www.facebook.com/VinRfrance/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/vinr_france/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/vinrfrance"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground"
              >
                LinkedIn
              </a>
            </FooterColumn>
          </FooterContent>
          <FooterBottom>
            <div>{t("all_rights_reserved")}</div>
            <div className="flex items-center gap-4">
              <a href="https://vinr.fr/politique-de-confidentialite" className="text-sm text-muted-foreground">{t("privacy_policy")}</a>
              <a href="https://vinr.fr/conditions-generales-de-vente" className="text-sm text-muted-foreground">{t("terms_of_service")}</a>
              <ModeToggle />
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
} 