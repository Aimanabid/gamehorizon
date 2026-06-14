import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  icon?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  external?: boolean;
}

const variants = {
  primary:
    "bg-blue-gradient text-white hover:opacity-90 shadow-glow-sm hover:shadow-glow",
  secondary:
    "bg-brand-primary/15 text-brand-primary border border-brand-primary/40 hover:bg-brand-primary/25 hover:border-brand-primary/70",
  ghost:
    "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20",
  outline:
    "bg-transparent text-brand-primary border border-brand-primary/60 hover:bg-brand-primary/10",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  icon = false,
  className = "",
  type = "button",
  disabled = false,
  external = false,
}: ButtonProps) {
  const baseClass = `inline-flex items-center gap-2 font-semibold rounded-lg transition-all duration-200 ${variants[variant]} ${sizes[size]} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`;

  const content = (
    <>
      {children}
      {icon && <ArrowRight className="w-4 h-4" />}
    </>
  );

  if (href) {
    const linkProps = external
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};
    return (
      <Link href={href} className={baseClass} {...linkProps}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClass}
    >
      {content}
    </button>
  );
}
