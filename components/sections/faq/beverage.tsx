"use client";

import { Section } from "../../ui/section";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../ui/accordion";

export default function BeverageFAQ() {
  return (
    <Section>
      <div className="mx-auto flex max-w-container flex-col items-center gap-8">
        <h2 className="text-center text-3xl font-semibold sm:text-5xl">
          Common Questions
        </h2>
        <Accordion type="single" collapsible className="w-full max-w-[800px]">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              How does the QR code system work?
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-4 max-w-[640px] text-balance text-muted-foreground">
                Each product gets a unique QR code that, when scanned, leads consumers to an interactive digital experience. This includes your brand story, product details, tasting notes, and multimedia content.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              What kind of analytics do you provide?
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-4 max-w-[640px] text-balance text-muted-foreground">
                Our AI-powered analytics track consumer engagement, scan rates, content interaction, and purchase behavior. You'll get real-time insights on popular products, consumer preferences, and campaign performance.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              How easy is it to manage content?
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-4 max-w-[640px] text-balance text-muted-foreground">
                Our intuitive dashboard makes it simple to add and update product information, upload media, and manage your digital content. No technical expertise required - if you can use social media, you can use our platform.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              What makes the AI recommendations special?
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-4 max-w-[640px] text-balance text-muted-foreground">
                Our AI analyzes consumer behavior patterns, market trends, and your product data to provide personalized recommendations. This helps you identify potential customers and optimize your marketing strategies for better engagement and sales.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>
              How do you help with consumer engagement?
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-4 max-w-[640px] text-balance text-muted-foreground">
                Beyond the initial QR code interaction, we help you build lasting relationships through personalized content, targeted recommendations, and interactive features that keep consumers coming back to learn more about your products.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Section>
  );
} 