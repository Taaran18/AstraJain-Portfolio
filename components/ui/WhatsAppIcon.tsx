import { BrandIcon } from "@/components/ui/BrandIcon";
import { cn } from "@/lib/utils";

export function WhatsAppIcon({ size = 18, className }: { size?: number; className?: string }) {
  return (
    <BrandIcon
      name="whatsapp"
      size={size}
      className={cn("text-night dark:text-white", className)}
    />
  );
}
