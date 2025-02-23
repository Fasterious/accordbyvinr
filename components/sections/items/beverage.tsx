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

export default function BeverageItems() {
  return (
    <Section id="features">
      <div className="mx-auto flex max-w-container flex-col items-center gap-6 sm:gap-20">
        <h2 className="max-w-[560px] text-center text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
          Powerful Features for Modern Beverage Brands
        </h2>
        <div className="grid auto-rows-fr grid-cols-2 gap-0 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <QrCodeIcon className="h-5 w-5 stroke-1" />
              </ItemIcon>
              QR Code Activation
            </ItemTitle>
            <ItemDescription>
              Unique QR codes for each product, unlocking rich digital experiences
            </ItemDescription>
          </Item>
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <UsersIcon className="h-5 w-5 stroke-1" />
              </ItemIcon>
              Direct Connection
            </ItemTitle>
            <ItemDescription>
              Build direct relationships with your consumers to increase loyalty
            </ItemDescription>
          </Item>
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <BarChart3Icon className="h-5 w-5 stroke-1" />
              </ItemIcon>
              Real-time Analytics
            </ItemTitle>
            <ItemDescription>
              Track consumer behavior and sales with AI-powered insights
            </ItemDescription>
          </Item>
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <SparklesIcon className="h-5 w-5 stroke-1" />
              </ItemIcon>
              AI Recommendations
            </ItemTitle>
            <ItemDescription>
              Smart suggestions to boost engagement and optimize sales
            </ItemDescription>
          </Item>
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <LayoutDashboardIcon className="h-5 w-5 stroke-1" />
              </ItemIcon>
              Easy Management
            </ItemTitle>
            <ItemDescription>
              Intuitive dashboard for product and content management
            </ItemDescription>
          </Item>
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <HeartIcon className="h-5 w-5 stroke-1" />
              </ItemIcon>
              Brand Storytelling
            </ItemTitle>
            <ItemDescription>
              Share your unique story through multimedia experiences
            </ItemDescription>
          </Item>
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <LineChartIcon className="h-5 w-5 stroke-1" />
              </ItemIcon>
              Performance Tracking
            </ItemTitle>
            <ItemDescription>
              Monitor engagement metrics and campaign effectiveness
            </ItemDescription>
          </Item>
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <MessageSquareIcon className="h-5 w-5 stroke-1" />
              </ItemIcon>
              Consumer Feedback
            </ItemTitle>
            <ItemDescription>
              Gather and analyze customer feedback to improve products
            </ItemDescription>
          </Item>
        </div>
      </div>
    </Section>
  );
} 