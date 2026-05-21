import React from 'react'
import 'flag-icons/css/flag-icons.min.css'
import profilePic from '../assets/profile.jpg'
import profileLightPic from '../assets/profile-light.png'

export default function ProfileCard({ isLightMode, setIsLightMode }) {
  return (
    <div className="flex flex-col sm:flex-row items-center w-full mb-12 gap-8 sm:gap-0">
      {/* 1. Avatar (Left) */}
      <div className="flex-1 flex justify-start">
        <div 
          onClick={() => setIsLightMode(!isLightMode)}
          className={`relative w-[260px] h-[260px] bg-[#1a1a20] rounded-[56px] overflow-hidden shrink-0 group cursor-pointer hover:scale-[1.03] transition-all duration-500 ${isLightMode ? 'shadow-[0_0_30px_rgba(217,70,239,0.4)]' : 'shadow-xl'}`}
        >
          {/* Base Dark Image */}
          <img 
            src={profilePic} 
            alt="Profile Dark" 
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              !isLightMode 
                ? 'opacity-100 scale-100 z-10' 
                : 'opacity-0 scale-110 blur-md z-20 group-hover:opacity-100'
            }`} 
          />
          
          {/* Light Theme Preview Image */}
          <img 
            src={profileLightPic} 
            alt="Profile Light" 
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              isLightMode 
                ? 'opacity-100 scale-100 z-10' 
                : 'opacity-0 scale-110 blur-md z-20 group-hover:opacity-100'
            }`} 
          />
          
          {/* Hover Overlay */}
          <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 z-30 ${isLightMode ? 'opacity-0 group-hover:opacity-100 bg-white/20 backdrop-blur-[2px]' : 'opacity-0 group-hover:opacity-100 bg-black/10'}`}>
            {isLightMode ? (
              // Moon Icon for switching to dark
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-slate-700 drop-shadow-md">
                <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" />
              </svg>
            ) : (
              // Sun Icon for switching to light
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">
                <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
              </svg>
            )}
          </div>
        </div>
      </div>

      {/* 2. Info / Text (Center) */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <h2 className={`text-[80px] leading-none mb-2 font-['Fredoka'] tracking-wide drop-shadow-lg transition-colors duration-500 ${isLightMode ? 'text-slate-800' : 'text-white'}`}>lorenz</h2>
        <p className={`text-[28px] font-medium transition-colors duration-500 ${isLightMode ? 'text-slate-500' : 'text-[#a1a1aa]'}`}>@shiryuu</p>
      </div>

      {/* 3. Badges (Right) */}
      <div className="flex-1 flex justify-end gap-3 sm:gap-4 flex-wrap sm:flex-nowrap">
        <div className={`w-20 h-20 shrink-0 rounded-full flex items-center justify-center border text-[16px] font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(244,114,182,0.5)] cursor-pointer ${isLightMode ? 'bg-white border-pink-200 text-slate-700 shadow-sm' : 'bg-[#323344] border-white/5 shadow-[inset_0_2px_6px_rgba(0,0,0,0.3)] text-gray-200'}`}>INFP</div>
        <div className={`w-20 h-20 shrink-0 rounded-full flex items-center justify-center border text-[40px] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(244,114,182,0.5)] cursor-pointer ${isLightMode ? 'bg-white border-pink-200 text-[#d946ef] shadow-sm' : 'bg-[#323344] border-white/5 shadow-[inset_0_2px_6px_rgba(0,0,0,0.3)] text-[#a78bfa]'}`}>♐</div>
        <div className={`fi fi-jp fis shrink-0 rounded-full border transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(244,114,182,0.5)] cursor-pointer ${isLightMode ? 'border-pink-200 shadow-sm' : 'border-white/5 shadow-[inset_0_2px_6px_rgba(0,0,0,0.3)]'}`} style={{ width: '5rem', height: '5rem', backgroundSize: 'cover', backgroundPosition: 'center', display: 'block' }} />
        <div className={`fi fi-kr fis shrink-0 rounded-full border transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(244,114,182,0.5)] cursor-pointer ${isLightMode ? 'border-pink-200 shadow-sm' : 'border-white/5 shadow-[inset_0_2px_6px_rgba(0,0,0,0.3)]'}`} style={{ width: '5rem', height: '5rem', backgroundSize: 'cover', backgroundPosition: 'center', display: 'block' }} />
      </div>
    </div>
  )
}
