import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhone(phone: string): string {
  return phone.replace(/\s/g, "");
}

export function getWhatsAppLink(phone: string, message?: string): string {
  const cleanPhone = phone.replace(/\D/g, "");
  const encoded = message ? encodeURIComponent(message) : encodeURIComponent(
    "Hello Sachin Ji, I would like to book an astrology consultation."
  );
  return `https://wa.me/${cleanPhone}?text=${encoded}`;
}
