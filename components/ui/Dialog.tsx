"use client";

import { useEffect, useId, useRef } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

type DialogProps = {
  open: boolean;
  onClose: () => void;
  title: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  role?: "dialog" | "alertdialog";
  dismissible?: boolean;
  className?: string;
};

const widths = {
  sm: "max-w-md",
  md: "max-w-xl",
  lg: "max-w-3xl",
};

export function Dialog({
  open,
  onClose,
  title,
  description,
  children,
  footer,
  size = "sm",
  role = "dialog",
  dismissible = true,
  className,
}: DialogProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const descriptionId = useId();
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
      dialog.querySelector<HTMLElement>("[data-autofocus]")?.focus();
    }
    if (!open && dialog.open) dialog.close();
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    const handleCancel = (e: Event) => {
      e.preventDefault();
      if (dismissible) onCloseRef.current();
    };
    const handleClose = () => {
      document.documentElement.style.overflow = "";
    };
    dialog.addEventListener("cancel", handleCancel);
    dialog.addEventListener("close", handleClose);
    return () => {
      dialog.removeEventListener("cancel", handleCancel);
      dialog.removeEventListener("close", handleClose);
    };
  }, [dismissible]);

  return (
    <dialog
      ref={ref}
      role={role}
      aria-labelledby={titleId}
      aria-describedby={description ? descriptionId : undefined}
      onClick={(e) => {
        if (dismissible && e.target === e.currentTarget) onClose();
      }}
      className={cn(
        "m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] overflow-visible bg-transparent p-0 text-fg backdrop:bg-night/70 backdrop:backdrop-blur-sm",
        widths[size],
      )}
    >
      {open && (
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "flex max-h-[calc(100dvh-2rem)] flex-col overflow-hidden rounded-card border border-line bg-card shadow-lift",
            className,
          )}
        >
          <div className="flex items-start justify-between gap-4 border-b border-line px-5 py-4 md:px-6">
            <div className="min-w-0">
              <h2 id={titleId} className="font-display text-xl font-semibold">
                {title}
              </h2>
              {description && (
                <p id={descriptionId} className="mt-1.5 text-[0.95rem] text-fg-muted">
                  {description}
                </p>
              )}
            </div>
            {dismissible && (
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="-mr-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-fg-muted hover:bg-tint hover:text-fg"
              >
                <X size={20} aria-hidden="true" />
              </button>
            )}
          </div>
          {children && <div className="overflow-y-auto px-5 py-5 md:px-6">{children}</div>}
          {footer && (
            <div className="flex flex-col-reverse gap-3 border-t border-line bg-tint/60 px-5 py-4 sm:flex-row sm:justify-end md:px-6">
              {footer}
            </div>
          )}
        </motion.div>
      )}
    </dialog>
  );
}
