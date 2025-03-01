"use client";

import {
  QrCodeIcon,
  UsersIcon,
  BarChart3Icon,
  SparklesIcon,
  LayoutDashboardIcon,
  HeartIcon,
  LineChartIcon,
  MessageSquareIcon,
} from "lucide-react";
import { Item, ItemIcon, ItemTitle, ItemDescription } from "../../ui/item";
import { Section } from "../../ui/section";
import { useLanguage } from "../../contexts/language-provider";

export default function BeverageItems() {
  const { t } = useLanguage();
  
  return (
    <Section id="features">
      <div className="mx-auto flex max-w-container flex-col items-center gap-6 sm:gap-20">
        <h2 className="max-w-[560px] text-center text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
          {t("powerful_features")}
        </h2>
        <div className="grid auto-rows-fr grid-cols-2 gap-0 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <QrCodeIcon className="h-5 w-5 stroke-1" />
              </ItemIcon>
              {t("qr_code_activation_2")}
            </ItemTitle>
            <ItemDescription>
              {t("qr_code_desc_2")}
            </ItemDescription>
          </Item>
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <UsersIcon className="h-5 w-5 stroke-1" />
              </ItemIcon>
              {t("direct_connection_2")}
            </ItemTitle>
            <ItemDescription>
              {t("direct_connection_desc_2")}
            </ItemDescription>
          </Item>
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <BarChart3Icon className="h-5 w-5 stroke-1" />
              </ItemIcon>
              {t("realtime_analytics")}
            </ItemTitle>
            <ItemDescription>
              {t("realtime_analytics_desc")}
            </ItemDescription>
          </Item>
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <SparklesIcon className="h-5 w-5 stroke-1" />
              </ItemIcon>
              {t("ai_recommendations")}
            </ItemTitle>
            <ItemDescription>
              {t("ai_recommendations_desc")}
            </ItemDescription>
          </Item>
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <LayoutDashboardIcon className="h-5 w-5 stroke-1" />
              </ItemIcon>
              {t("easy_management")}
            </ItemTitle>
            <ItemDescription>
              {t("easy_management_desc")}
            </ItemDescription>
          </Item>
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <HeartIcon className="h-5 w-5 stroke-1" />
              </ItemIcon>
              {t("brand_storytelling")}
            </ItemTitle>
            <ItemDescription>
              {t("brand_storytelling_desc")}
            </ItemDescription>
          </Item>
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <LineChartIcon className="h-5 w-5 stroke-1" />
              </ItemIcon>
              {t("performance_tracking")}
            </ItemTitle>
            <ItemDescription>
              {t("performance_tracking_desc")}
            </ItemDescription>
          </Item>
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <MessageSquareIcon className="h-5 w-5 stroke-1" />
              </ItemIcon>
              {t("consumer_feedback")}
            </ItemTitle>
            <ItemDescription>
              {t("consumer_feedback_desc")}
            </ItemDescription>
          </Item>
        </div>
      </div>
    </Section>
  );
} 