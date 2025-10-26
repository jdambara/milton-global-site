'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';

interface MegaMenuItem {
  label: string;
  href?: string;
  items?: {
    title?: string;
    links: {
      label: string;
      href: string;
      description?: string;
    }[];
  }[];
}

interface MegaMenuProps {
  items: MegaMenuItem[];
  locale: string;
}

export default function MegaMenu({ items, locale }: MegaMenuProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        handleClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      // Cleanup timeout on unmount
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleClose = () => {
    if (activeMenu) {
      setIsClosing(true);
      setTimeout(() => {
        setActiveMenu(null);
        setIsClosing(false);
      }, 200);
    }
  };

  const handleMouseEnter = (label: string) => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    
    if (isClosing) return;
    setActiveMenu(label);
  };

  const handleMouseLeave = () => {
    // Add a longer delay to allow movement between menu items
    timeoutRef.current = setTimeout(() => {
      handleClose();
    }, 300);
  };

  const handleDropdownMouseEnter = () => {
    // Clear timeout when entering dropdown
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handleDropdownMouseLeave = () => {
    // Add delay when leaving dropdown to allow movement back to triggers
    timeoutRef.current = setTimeout(() => {
      handleClose();
    }, 200);
  };

  return (
    <nav ref={menuRef} className="hidden lg:block relative">
      {/* Continuous hover area for seamless menu transitions */}
      <div 
        className="absolute inset-0 z-30"
        onMouseEnter={() => {
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
          }
        }}
        onMouseLeave={handleMouseLeave}
      />
      <ul className="flex items-center space-x-8 relative z-40">
        {items.map((item) => {
          const isActive = pathname.includes(item.href || '');
          const hasDropdown = item.items && item.items.length > 0;

          return (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => hasDropdown && handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              {hasDropdown ? (
                <button
                  className={`flex items-center gap-1 py-2 text-sm font-medium transition-colors ${
                    isActive ? 'text-gray-900' : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  {item.label}
                  <ChevronDown className="h-4 w-4" />
                </button>
              ) : !hasDropdown ? (
                <Link
                  href={item.href || '#'}
                  className="px-4 py-2 bg-brand-red hover:bg-red-600 text-white text-sm font-medium rounded transition-colors shadow-sm"
                >
                  {item.label}
                </Link>
              ) : (
                <Link
                  href={item.href || '#'}
                  className={`py-2 text-sm font-medium transition-colors ${
                    isActive ? 'text-gray-900' : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  {item.label}
                </Link>
              )}

              {/* Mega Menu Dropdown */}
              {hasDropdown && activeMenu === item.label && (
                <div 
                  className="fixed left-0 right-0 z-50 mt-0 animate-in fade-in slide-in-from-top-2 duration-200"
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <div className="relative top-0 pt-2">
                    <div className="relative bg-gray-50 shadow-lg border-t border-gray-200">
                      <div className="w-full py-16">
                        <div className="max-w-6xl mx-auto px-8">
                          <div className="grid grid-cols-3 gap-16">
                            {item.items?.map((section, idx) => (
                              <div key={idx} className="space-y-6">
                                {section.title && (
                                  <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-100 pb-3">
                                    {section.title}
                                  </h3>
                                )}
                                <ul className="space-y-3">
                                  {section.links.map((link) => (
                                    <li key={link.href}>
                                      <Link
                                        href={link.href}
                                        className="block group py-2"
                                        onClick={handleClose}
                                      >
                                        <span className="text-base font-medium text-gray-900 group-hover:text-gray-700 transition-colors">
                                          {link.label}
                                        </span>
                                        {link.description && (
                                          <span className="block text-sm text-gray-500 mt-1">
                                            {link.description}
                                          </span>
                                        )}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>
          );
        })}
        
      </ul>
    </nav>
  );
}