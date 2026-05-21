import React, { useState, useEffect } from 'react'
import './index.css'
import ProfileCard from './components/ProfileCard'
import VideoGallery from './components/VideoGallery'
import MusicPlayer from './components/MusicPlayer'
import LinksSection from './components/LinksSection'
import bgDark from './assets/background.gif'
import bgLight from './assets/background-light.gif'

export default function App() {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, [isLightMode]);

  return (
    <div className="min-h-screen flex flex-col items-center py-16 px-4 sm:px-6 relative overflow-hidden">
      
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed transition-all duration-1000"
        style={{ backgroundImage: `url(${isLightMode ? bgLight : bgDark})` }}
      />
      
      {/* Theme Morphing Overlay (Dims dark mode, lightens light mode slightly) */}
      <div className={`absolute inset-0 transition-colors duration-1000 z-0 ${isLightMode ? 'bg-white/40' : 'bg-black/60'}`} />

      {/* Header */}
      <div className="w-[95%] max-w-[1200px] mb-6 flex justify-start pl-2">
        <h1 className={`text-3xl font-['Fredoka'] font-bold tracking-wide transition-colors duration-500 ${isLightMode ? 'text-slate-800' : 'text-white'}`} style={{ textShadow: isLightMode ? '0 2px 10px rgba(255,255,255,0.8)' : '0 2px 10px rgba(0,0,0,0.3)' }}>PROFILE</h1>
      </div>

      {/* Main Card */}
      <div className={`w-[95%] max-w-[1200px] rounded-[48px] p-8 sm:p-12 shadow-2xl relative z-10 border transition-all duration-700 ${isLightMode ? 'bg-white/90 backdrop-blur-xl shadow-pink-200/50 border-white/50' : 'bg-[#222431] shadow-black/20 border-white/[0.03]'}`}>

        <ProfileCard isLightMode={isLightMode} setIsLightMode={setIsLightMode} />

        {/* Bio */}
        <div className={`relative text-center mb-10 px-6 sm:px-10 py-8 rounded-[24px] border shadow-sm max-w-[800px] mx-auto transition-all duration-700 ${isLightMode ? 'bg-slate-50/50 border-slate-200 shadow-pink-100' : 'bg-white/[0.015] border-white/[0.05]'}`}>
          {/* Top highlight bar */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-gradient-to-r from-[#d946ef] to-[#8b5cf6] rounded-full" />

          <p className={`text-[17px] italic leading-[1.8] font-light tracking-wide transition-colors duration-500 ${isLightMode ? 'text-slate-600' : 'text-[#e5e7eb]'}`}>
            "hii guys! ૮꒰ ˶• ༝ •˶꒱ა I'm lorenz. Welcome to my profile where I share my love for
            <br className="hidden sm:block" />
            anime, kpop, and my dream travels to Japan and Korea!🌸 ✈️ ✨"
          </p>
        </div>

        <VideoGallery />
        <MusicPlayer isLightMode={isLightMode} />
        <LinksSection isLightMode={isLightMode} />

        {/* Footer */}
        <div className={`pt-6 border-t text-center relative mx-4 transition-colors duration-500 ${isLightMode ? 'border-slate-200' : 'border-white/[0.08]'}`}>
          <p className={`text-[10px] font-bold tracking-[0.15em] uppercase flex items-center justify-center gap-2 ${isLightMode ? 'text-slate-400' : 'text-[#a1a1aa]'}`}>
            @2026 made by lorenz <span className="text-yellow-600/80 text-[10px]">✨</span>
          </p>
        </div>
      </div>
    </div>
  )
}
