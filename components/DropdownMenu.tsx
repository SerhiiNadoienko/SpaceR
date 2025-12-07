"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface DropdownItem {
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

interface DropdownMenuProps {
  items: DropdownItem[];
  trigger: React.ReactNode;
}

export const DropdownMenu = ({ items, trigger }: DropdownMenuProps) => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const openMenu = () => {
    setVisible(true);
    setTimeout(() => setOpen(true), 10);
  };

  const closeMenu = () => {
    setOpen(false);
    setTimeout(() => setVisible(false), 200);
  };

  const handleItemClick = (onClick?: () => void) => {
    closeMenu();
    setTimeout(() => onClick?.(), 200);
  };

  return (
    <div className="relative inline-block" ref={menuRef}>
      <div
        onClick={(e) => {
          e.stopPropagation();
          open ? closeMenu() : openMenu();
        }}
        className="cursor-pointer"
      >
        {trigger}
      </div>

      {visible && (
        <div
          className={cn(
            "absolute right-0 mt-2 w-52 bg-neutral-900 border border-neutral-800 rounded-md shadow-lg overflow-hidden z-50 p-1 transition-all duration-200",
            open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
          )}
        >
          {items.map((item, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                handleItemClick(item.onClick);
              }}
              disabled={item.disabled}
              className={cn(
                "w-full flex items-center gap-3 text-left text-sm text-neutral-200 rounded-md px-3 py-2 transition",
                "hover:bg-neutral-800",
                "disabled:text-neutral-500 disabled:hover:bg-transparent"
              )}
            >
              <span className="text-neutral-400">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
