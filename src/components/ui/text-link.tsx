import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

interface TextLinkProps extends Omit<ComponentProps<typeof Link>, "children"> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "inline";
}

export function TextLink({ children, className = "", variant = "inline", ...props }: TextLinkProps) {
  return (
    <Link className={`text-link text-link--${variant} ${className}`.trim()} {...props}>
      {children}<span aria-hidden="true">→</span>
    </Link>
  );
}
