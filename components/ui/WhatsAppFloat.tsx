"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { getWhatsAppLink } from "@/lib/utils";

export default function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip */}
      {showTooltip && (
        <div className="glass-card rounded-lg px-4 py-3 max-w-[200px] text-right">
          <p className="text-xs text-cosmic-silver/80 font-inter leading-relaxed">
            Chat with Sachin Ji directly on WhatsApp
          </p>
        </div>
      )}

      {/* Button */}
      <a
        href={getWhatsAppLink(SITE_CONFIG.whatsapp)}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 hover:shadow-[0_4px_30px_rgba(37,211,102,0.6)]"
        style={{ background: "linear-gradient(135deg, #25d366 0%, #128c7e 100%)" }}
        aria-label="Chat on WhatsApp"
      >
        {/* Pulse ring */}
        <div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-green-400" />
        <MessageCircle size={26} className="text-white fill-white" />
      </a>
    </div>
  );
}
