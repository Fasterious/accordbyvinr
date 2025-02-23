import { Section } from "../../ui/section";

export default function BeverageFlow() {
  return (
    <Section className="py-24 bg-muted/50">
      <div className="mx-auto max-w-container text-center">
        <h2 className="text-4xl font-semibold mb-16">How It Works</h2>
        <div className="relative">
          {/* Progress line */}
          <div className="absolute hidden md:block top-6 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-purple-600/20 via-purple-600/20 to-purple-600/20" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: "Product Onboarding",
                description: "Register your products and create unique digital identities"
              },
              {
                step: 2,
                title: "Consumer Engagement",
                description: "Connect with consumers through interactive experiences"
              },
              {
                step: 3,
                title: "Data Collection",
                description: "Gather valuable insights from consumer interactions"
              },
              {
                step: 4,
                title: "Growth Optimization",
                description: "Use AI-powered insights to optimize your strategy"
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