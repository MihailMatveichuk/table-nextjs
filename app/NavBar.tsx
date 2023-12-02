'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { links } from '@/data/links-data';
import { FaBug } from 'react-icons/fa';

const NavBar = () => {
  const pathname = usePathname();
  return (
    <nav className="border-b px-5 h-14 flex space-x-6 mb-5 items-center">
      <Link href="/">
        <FaBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link, i) => (
          <li>
            <Link
              className={`text-zinc-400 hover:text-zinc-600 transition-colors ${
                pathname === link.href ? 'text-zinc-600' : ''
              }`}
              href={link.href}
              key={i}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
