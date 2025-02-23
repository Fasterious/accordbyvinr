import React from "react";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const glowVariants = cva("absolute w-full", {
  variants: {
    variant: {
      top: "top-0",
      above: "-top-[128px]",
      bottom: "bottom-0",
      below: "-bottom-[128px]",
      center: "top-[50%]",
    },
    color: {
      default: "",
      purple: "purple-glow",
    }
  },
  defaultVariants: {
    variant: "top",
    color: "default",
  },
});

const Glow = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof glowVariants>
>(({ className, variant, color, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(glowVariants({ variant, color }), className)}
    {...props}
  >
    <div
      className={cn(
        "absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 scale-[2.5] rounded-[50%] opacity-20 sm:h-[512px] dark:opacity-100",
        color === "purple" 
          ? "bg-[radial-gradient(ellipse_at_center,_rgba(147,51,234,0.5)_10%,_rgba(147,51,234,0)_60%)]"
          : "bg-[radial-gradient(ellipse_at_center,_hsla(var(--brand-foreground)/.5)_10%,_hsla(var(--brand-foreground)/0)_60%)]",
        variant === "center" && "-translate-y-1/2",
      )}
    />
    <div
      className={cn(
        "absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 scale-[2] rounded-[50%] opacity-20 sm:h-[256px] dark:opacity-100",
        color === "purple"
          ? "bg-[radial-gradient(ellipse_at_center,_rgba(168,85,247,0.3)_10%,_rgba(147,51,234,0)_60%)]"
          : "bg-[radial-gradient(ellipse_at_center,_hsla(var(--brand)/.3)_10%,_hsla(var(--brand-foreground)/0)_60%)]",
        variant === "center" && "-translate-y-1/2",
      )}
    />
  </div>
));
Glow.displayName = "Glow";

export default Glow;
