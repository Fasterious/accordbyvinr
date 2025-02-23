import { QrCodeIcon, UsersIcon, BarChart3Icon } from "lucide-react";
import { Section } from "../../ui/section";

export default function BeverageFeatures() {
  return (
    <Section className="py-24">
      <div className="mx-auto max-w-container text-center">
        <h2 className="text-4xl font-semibold mb-16">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg border bg-card">
            <div className="mb-4">
              <QrCodeIcon className="h-8 w-8 mx-auto text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">QR Code Activation</h3>
            <p className="text-muted-foreground">Each product comes with a unique QR code that unlocks an immersive digital experience, featuring videos, images, and your brand&apos;s story.</p>
          </div>
          <div className="p-6 rounded-lg border bg-card">
            <div className="mb-4">
              <UsersIcon className="h-8 w-8 mx-auto text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Direct Connection</h3>
            <p className="text-muted-foreground">Build lasting relationships with your audience by creating direct connections that foster loyalty and trust.</p>
          </div>
          <div className="p-6 rounded-lg border bg-card">
            <div className="mb-4">
              <BarChart3Icon className="h-8 w-8 mx-auto text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">AI-Powered Analytics</h3>
            <p className="text-muted-foreground">Track consumer behavior and sales in real-time with advanced AI analytics that provide actionable insights.</p>
          </div>
        </div>
      </div>
    </Section>
  );
} 