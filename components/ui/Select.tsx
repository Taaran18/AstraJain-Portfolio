"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type SelectOption = { value: string; label: string; hint?: string };

type SelectProps = {
  id: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  options: readonly SelectOption[];
  placeholder: string;
  invalid?: boolean;
  describedBy?: string;
  required?: boolean;
  fieldRef?: (el: HTMLButtonElement | null) => void;
};

export function Select({
  id,
  value,
  onChange,
  onBlur,
  options,
  placeholder,
  invalid,
  describedBy,
  required,
  fieldRef,
}: SelectProps) {
  const listId = useId();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const typed = useRef({ text: "", at: 0 });
  const selectedIndex = options.findIndex((o) => o.value === value);
  const selected = selectedIndex >= 0 ? options[selectedIndex] : null;

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    return () => document.removeEventListener("pointerdown", onPointer);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    listRef.current
      ?.querySelector<HTMLElement>(`[data-index="${active}"]`)
      ?.scrollIntoView({ block: "nearest" });
  }, [open, active]);

  const openList = (index = selectedIndex >= 0 ? selectedIndex : 0) => {
    setActive(index);
    setOpen(true);
  };

  const choose = (index: number) => {
    const option = options[index];
    if (!option) return;
    onChange(option.value);
    setOpen(false);
    buttonRef.current?.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    const last = options.length - 1;
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        if (!open) openList();
        else setActive((i) => Math.min(last, i + 1));
        break;
      case "ArrowUp":
        e.preventDefault();
        if (!open) openList();
        else setActive((i) => Math.max(0, i - 1));
        break;
      case "Home":
        if (open) {
          e.preventDefault();
          setActive(0);
        }
        break;
      case "End":
        if (open) {
          e.preventDefault();
          setActive(last);
        }
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        if (open) choose(active);
        else openList();
        break;
      case "Escape":
        if (open) {
          e.preventDefault();
          setOpen(false);
        }
        break;
      case "Tab":
        if (open) setOpen(false);
        break;
      default:
        if (e.key.length === 1 && /\S/.test(e.key)) {
          const now = Date.now();
          typed.current.text = (now - typed.current.at > 700 ? "" : typed.current.text) + e.key;
          typed.current.at = now;
          const match = options.findIndex((o) =>
            o.label.toLowerCase().startsWith(typed.current.text.toLowerCase()),
          );
          if (match >= 0) {
            if (open) setActive(match);
            else openList(match);
          }
        }
    }
  };

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={(el) => {
          buttonRef.current = el;
          fieldRef?.(el);
        }}
        id={id}
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-activedescendant={open ? `${listId}-${active}` : undefined}
        aria-invalid={invalid || undefined}
        aria-required={required || undefined}
        aria-describedby={describedBy}
        onClick={() => (open ? setOpen(false) : openList())}
        onKeyDown={onKeyDown}
        onBlur={onBlur}
        className={cn(
          "flex min-h-12 w-full items-center justify-between gap-3 rounded-xl border bg-paper px-4 py-3 text-left text-base transition-colors",
          invalid
            ? "border-danger"
            : open
              ? "border-gold"
              : "border-line-strong hover:border-gold/70",
        )}
      >
        <span className={cn("min-w-0 truncate", selected ? "text-fg" : "text-fg-subtle")}>
          {selected ? selected.label : placeholder}
        </span>
        <ChevronDown
          size={18}
          aria-hidden="true"
          className={cn(
            "shrink-0 text-fg-subtle transition-transform",
            open && "rotate-180 text-gold",
          )}
        />
      </button>
      <AnimatePresence>
        {open && (
          <m.ul
            ref={listRef}
            id={listId}
            role="listbox"
            aria-labelledby={id}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className="absolute inset-x-0 top-[calc(100%+0.4rem)] z-30 max-h-72 overflow-y-auto rounded-xl border border-line bg-card p-1.5 shadow-lift"
          >
            {options.map((o, i) => {
              const isSelected = o.value === value;
              return (
                <li
                  key={o.value}
                  id={`${listId}-${i}`}
                  role="option"
                  aria-selected={isSelected}
                  data-index={i}
                  onPointerEnter={() => setActive(i)}
                  onPointerDown={(e) => e.preventDefault()}
                  onClick={() => choose(i)}
                  className={cn(
                    "flex cursor-pointer items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-[0.95rem]",
                    i === active ? "bg-tint-strong text-fg" : "text-fg-muted",
                    isSelected && "font-semibold text-fg",
                  )}
                >
                  <span className="min-w-0">
                    <span className="block">{o.label}</span>
                    {o.hint && <span className="block text-xs text-fg-subtle">{o.hint}</span>}
                  </span>
                  {isSelected && (
                    <Check size={16} aria-hidden="true" className="shrink-0 text-gold" />
                  )}
                </li>
              );
            })}
          </m.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
