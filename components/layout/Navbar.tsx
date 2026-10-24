"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { m } from "framer-motion";
import { ArrowUpRight, Clock, IndianRupee, Mail, Menu, Sparkles, X } from "lucide-react";
import { BrandBadge, PhoneIcon } from "@/components/ui/BrandIcon";
import { Logo } from "@/components/brand/Logo";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { buttonClass } from "@/components/ui/Button";
import { primaryPhone, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export const navLinks = [
  { href: "/services", label: "Consultations" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

function TopStrip() {
  return (
    <div className="hidden bg-night text-cream md:block">
      <div className="container-site flex h-9 items-center justify-between gap-6 text-xs">
        <p className="flex items-center gap-5 text-cream/75">
          <span className="inline-flex items-center gap-1.5">
            <Clock size={13} aria-hidden="true" className="text-brand" />
            {site.hours.label}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <IndianRupee size={13} aria-hidden="true" className="text-brand" />
            {site.consultationFee} per consultation · Online across India and abroad
          </span>
        </p>
        <p className="flex items-center gap-5">
          <a
            href={`tel:${primaryPhone.tel}`}
            className="inline-flex items-center gap-1.5 text-cream/85 hover:text-brand"
          >
            <PhoneIcon size={13} aria-hidden="true" /> {primaryPhone.display}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="hidden items-center gap-1.5 text-cream/85 hover:text-brand lg:inline-flex"
          >
            <Mail size={13} aria-hidden="true" /> {site.email}
          </a>
        </p>
      </div>
    </div>
  );
}

function MobileMenu({
  open,
  onClose,
  pathname,
}: {
  open: boolean;
  onClose: () => void;
  pathname: string;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
      document.documentElement.style.overflow = "hidden";
    }
    if (!open && dialog.open) dialog.close();
    const handleCancel = (e: Event) => {
      e.preventDefault();
      onCloseRef.current();
    };
    dialog.addEventListener("cancel", handleCancel);
    return () => {
      dialog.removeEventListener("cancel", handleCancel);
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const links = [{ href: "/", label: "Home" }, ...navLinks];

  return (
    <dialog
      ref={ref}
      aria-label="Site menu"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none rounded-none border-0 bg-card p-0 text-fg backdrop:bg-night/60"
      style={{ width: "100vw", height: "100dvh", maxWidth: "none", maxHeight: "none", margin: 0 }}
    >
      {open && (
        <m.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex h-full w-full flex-col overflow-y-auto bg-card"
        >
          <div className="flex items-center justify-between gap-4 border-b border-line px-4 py-3 sm:px-5">
            <Logo idPrefix="menu" />
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line-strong text-fg"
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>
          <nav aria-label="Mobile" className="flex-1 px-3 py-4">
            <ul className="space-y-1">
              {links.map((link, i) => {
                const active =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname === link.href || pathname.startsWith(`${link.href}/`);
                return (
                  <m.li
                    key={link.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "group flex items-center gap-4 rounded-2xl px-3 py-3.5 hover:bg-tint",
                        active && "bg-tint",
                      )}
                    >
                      <span className="w-6 font-display text-sm text-saffron">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={cn(
                          "flex-1 font-display text-xl font-semibold",
                          active ? "text-gold" : "text-fg",
                        )}
                      >
                        {link.label}
                      </span>
                      <ArrowUpRight
                        size={18}
                        aria-hidden="true"
                        className="text-fg-subtle transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </Link>
                  </m.li>
                );
              })}
            </ul>
          </nav>
          <div className="space-y-4 border-t border-line bg-tint/60 px-5 py-5">
            <Link
              href="/contact#book"
              onClick={onClose}
              className={buttonClass("primary", "lg", "w-full")}
            >
              <Sparkles size={18} aria-hidden="true" /> Book Consultation
            </Link>
            <a
              href={`tel:${primaryPhone.tel}`}
              className={buttonClass("secondary", "lg", "w-full")}
            >
              <PhoneIcon size={18} aria-hidden="true" /> {primaryPhone.display}
            </a>
            <div className="flex items-center justify-between gap-4 pt-1 text-sm text-fg-muted">
              <span className="inline-flex items-center gap-1.5">
                <Clock size={14} aria-hidden="true" className="text-gold" /> {site.hours.label}
              </span>
              <span className="flex gap-2">
                {site.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${site.name} on ${s.label}`}
                    className="block rounded-full transition-transform hover:-translate-y-0.5"
                  >
                    <BrandBadge name={s.brand} size={32} />
                  </a>
                ))}
              </span>
            </div>
          </div>
        </m.div>
      )}
    </dialog>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-[70] focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:text-night"
      >
        Skip To Content
      </a>
      <TopStrip />
      <header
        className={cn(
          "sticky top-0 z-50 py-2 transition-colors duration-300 lg:py-3",
          scrolled && "bg-paper/80 backdrop-blur-md",
        )}
      >
        <div className="container-site">
          <div
            className={cn(
              "flex h-14 items-center justify-between gap-3 rounded-full border pl-3 pr-2 transition-all duration-300 sm:pl-4 lg:h-16 lg:pl-5",
              scrolled
                ? "border-line bg-card/90 shadow-lift backdrop-blur-xl"
                : "border-line/70 bg-card/60 shadow-card backdrop-blur-md",
            )}
          >
            <Link href="/" className="shrink-0 rounded-full" aria-label="AstroJain home">
              <Logo idPrefix="hdr" compact />
            </Link>

            <nav aria-label="Main" className="hidden lg:block">
              <ul className="flex items-center gap-1">
                {navLinks.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <li key={link.href} className="relative">
                      <Link
                        href={link.href}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "relative block whitespace-nowrap rounded-full px-4 py-2 text-[0.95rem] font-medium transition-colors",
                          active ? "text-gold" : "text-fg-muted hover:text-fg",
                        )}
                      >
                        {link.label}
                        {active && (
                          <m.span
                            layoutId="nav-active"
                            aria-hidden="true"
                            className="absolute inset-x-4 -bottom-0.5 flex justify-center"
                            transition={{ type: "spring", stiffness: 380, damping: 32 }}
                          >
                            <span className="h-[2px] w-full rounded-full bg-gradient-to-r from-transparent via-brand to-transparent" />
                            <span className="absolute -top-[3px] h-2 w-2 rotate-45 rounded-[2px] bg-brand" />
                          </m.span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="flex items-center gap-1.5 sm:gap-2">
              <a
                href={`tel:${primaryPhone.tel}`}
                aria-label={`Call ${primaryPhone.display}`}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-tint-strong text-fg hover:text-gold lg:hidden"
              >
                <PhoneIcon size={18} aria-hidden="true" />
              </a>
              <ThemeToggle />
              <Link
                href="/contact#book"
                className={buttonClass("primary", "md", "hidden sm:inline-flex")}
              >
                <Sparkles size={16} aria-hidden="true" /> Book Consultation
              </Link>
              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-expanded={open}
                aria-haspopup="dialog"
                aria-label="Open menu"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-night text-cream dark:bg-tint-strong lg:hidden"
              >
                <Menu size={20} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu open={open} onClose={() => setOpen(false)} pathname={pathname} />
    </>
  );
}
