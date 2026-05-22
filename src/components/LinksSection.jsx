import React from 'react'

export default function LinksSection({ isLightMode }) {
  const links = [
    {
      name: 'github',
      url: 'https://github.com/Renzy3',
      hoverClass: 'hover:bg-[#111] hover:border-white/60 hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]',
      lightClass: 'bg-white text-slate-700 border-slate-200 shadow-slate-200',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      )
    },
    {
      name: 'linkedin',
      url: 'https://linkedin.com/in/lorenz-baltazar-84449540b',
      hoverClass: 'hover:bg-[#0a66c2]/10 hover:border-[#0a66c2] hover:shadow-[0_0_25px_rgba(10,102,194,0.5)] hover:text-[#0a66c2] hover:drop-shadow-[0_0_8px_rgba(10,102,194,0.8)]',
      lightClass: 'bg-white text-slate-700 border-slate-200 shadow-slate-200',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      )
    },
    {
      name: 'facebook',
      url: 'https://www.facebook.com/lorenz.baltazar/',
      hoverClass: 'hover:bg-[#1877f2]/10 hover:border-[#1877f2] hover:shadow-[0_0_25px_rgba(24,119,242,0.6)] hover:text-[#1877f2] hover:drop-shadow-[0_0_8px_rgba(24,119,242,0.8)]',
      lightClass: 'bg-white text-slate-700 border-slate-200 shadow-slate-200',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      )
    },
    {
      name: 'tiktok',
      url: 'https://www.tiktok.com/@lorenz.kawaii',
      hoverClass: 'hover:bg-[#111] hover:border-transparent hover:shadow-[0_0_20px_rgba(254,9,121,0.6),0_0_20px_rgba(0,242,254,0.6)] hover:text-white hover:drop-shadow-[0_0_8px_rgba(0,242,254,0.8)]',
      lightClass: 'bg-white text-slate-700 border-slate-200 shadow-slate-200',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      )
    }
  ];

  return (
    <div className="flex flex-col gap-[14px] mb-12">
      {links.map((link) => (
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          key={link.name}
          className={`group relative w-full py-4 sm:py-[18px] flex items-center justify-center rounded-[24px] border font-['Fredoka'] font-semibold text-[15px] sm:text-[17px] lowercase tracking-wider transition-all duration-500 hover:scale-[1.03] cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.12)]
            ${isLightMode
              ? link.lightClass
              : 'bg-[#2a2b38] border-white/[0.04] text-white shadow-black/20'
            }
            ${link.hoverClass}
          `}
        >
          <div className="absolute left-4 sm:left-6 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
            {link.icon}
          </div>
          <span>{link.name}</span>
        </a>
      ))}
    </div>
  )
}
