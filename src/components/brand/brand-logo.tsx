import Image from "next/image";

interface BrandLogoProps {
  className?: string;
  decorative?: boolean;
  priority?: boolean;
}

export function BrandLogo({ className = "", decorative = false, priority = false }: BrandLogoProps) {
  return (
    <Image
      className={`brand-logo${className ? ` ${className}` : ""}`}
      src="/brand/ucpinar-logo.png"
      alt={decorative ? "" : "Üçpınar Doğal Kaynak Suyu"}
      width={900}
      height={703}
      priority={priority}
      sizes="(max-width: 640px) 112px, 160px"
    />
  );
}
