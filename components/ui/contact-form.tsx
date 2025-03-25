"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "../contexts/language-provider";
import { RocketIcon, CheckCircle, AlertCircle, X } from "lucide-react";
import { useRouter } from "next/navigation";

export function ContactForm() {
  const { t } = useLanguage();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    sendCopy: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // API call to send the email
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit the form');
      }
      
      setSubmitStatus('success');
      // Reset form after successful submission
      setFormData({ name: "", email: "", company: "", message: "", sendCopy: false });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto space-y-6 relative">
      <button 
        type="button"
        onClick={handleGoBack}
        className="fixed top-8 right-8 p-2 rounded-full bg-background/80 hover:bg-background border border-purple-600/20 text-foreground transition-all"
        aria-label={t("go_back") || "Go back"}
      >
        <X className="h-5 w-5" />
      </button>

      {submitStatus === 'success' && (
        <div className="p-4 mb-4 bg-green-50 border border-green-200 rounded-md flex items-center text-green-800">
          <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
          <p>{t("form_submitted_success")}</p>
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="p-4 mb-4 bg-red-50 border border-red-200 rounded-md flex items-center text-red-800">
          <AlertCircle className="h-5 w-5 mr-2 text-red-500" />
          <p>{t("form_submitted_error")}</p>
        </div>
      )}
      
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-left block">
              {t("name")}
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-background/80 backdrop-blur-lg border-purple-600/20"
              placeholder={t("your_name")}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-left block">
              {t("email")}
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-background/80 backdrop-blur-lg border-purple-600/20"
              placeholder={t("your_email")}
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="company" className="text-sm font-medium text-left block">
            {t("company")}
          </label>
          <Input
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            className="bg-background/80 backdrop-blur-lg border-purple-600/20"
            placeholder={t("your_company")}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-left block">
            {t("message")}
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="bg-background/80 backdrop-blur-lg border-purple-600/20 min-h-[150px]"
            placeholder={t("your_message")}
          />
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="sendCopy"
            name="sendCopy"
            checked={formData.sendCopy}
            onChange={handleChange}
            className="h-4 w-4 rounded border-purple-600/20 text-purple-600 focus:ring-purple-600"
          />
          <label htmlFor="sendCopy" className="text-sm font-medium">
            {t("send_me_copy")}
          </label>
        </div>
      </div>
      <div className="relative" style={{ zIndex: 9999 }}>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-10 px-5 py-3 bg-purple-600 hover:bg-purple-700 text-white shadow-lg cursor-pointer"
          style={{ 
            position: 'relative',
            zIndex: 9999,
            pointerEvents: 'auto'
          }}
        >
          <RocketIcon className="mr-2 h-5 w-5" />
          {isSubmitting ? t("sending") : t("send_message")}
        </button>
      </div>
    </form>
  );
} 