import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "whatsapp" | "ghost" | "danger";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full text-center font-semibold transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-night hover:bg-brand-hover active:bg-brand-deep",
  secondary: "border border-line-strong bg-card text-fg hover:border-gold hover:text-gold",
  whatsapp: "bg-[#25d366] text-night hover:bg-[#3ee07a] active:bg-[#1fbf5b]",
  ghost: "text-fg hover:bg-tint",
  danger: "bg-danger text-white hover:opacity-90 dark:text-night",
};

const sizes: Record<Size, string> = {
  sm: "min-h-10 px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3.5 text-base",
};

export function buttonClass(variant: Variant = "primary", size: Size = "md", className?: string) {
  return cn(base, variants[variant], sizes[size], className);
}

type ButtonLinkProps = {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
  external?: boolean;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">;

export function ButtonLink({
  href,
  variant,
  size,
  className,
  children,
  external,
  ...rest
}: ButtonLinkProps) {
  const classes = buttonClass(variant, size, className);
  const isExternal = external || /^(https?:|tel:|mailto:)/.test(href);
  if (isExternal) {
    const newTab = /^https?:/.test(href);
    return (
      <a
        href={href}
        className={classes}
        {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}

type ButtonProps = {
  variant?: Variant;
  size?: Size;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ variant, size, className, type = "button", ...rest }: ButtonProps) {
  return <button type={type} className={buttonClass(variant, size, className)} {...rest} />;
}
