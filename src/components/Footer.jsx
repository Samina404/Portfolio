import React from "react";
import { Mail, Phone, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <p className="text-sm">
          © {new Date().getFullYear()} <span className="text-emerald-400 font-medium">Samina Rahman</span>. All rights reserved.
        </p>

        <div className="flex gap-6">
          {/* WhatsApp */}
          <a
            href="https://wa.me/8801882804355"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors"
          >
            <MessageCircle size={20} />
          </a>

          {/* Email */}
          <a
            href="mailto:saminarahman404@gmail.com"
            className="hover:text-emerald-400 transition-colors"
          >
            <Mail size={20} />
          </a>

        </div>
      </div>
    </footer>
  );
}
