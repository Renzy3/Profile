import React, { useState, useRef, useEffect } from 'react'
import myMusic from '../assets/my-music.mp3'
import albumArt from '../assets/album-art.jpg'

export default function MusicPlayer({ isLightMode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((e) => {
        // Browser might block autoplay until user interacts
        console.log("Autoplay prevented by browser, waiting for user interaction.");
      });
    }
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const volumeUp = () => {
    if (audioRef.current) {
      audioRef.current.volume = Math.min(1, audioRef.current.volume + 0.1);
    }
  };

  const volumeDown = () => {
    if (audioRef.current) {
      audioRef.current.volume = Math.max(0, audioRef.current.volume - 0.1);
    }
  };

  return (
    <div className={`rounded-[32px] p-3 sm:p-4 flex items-center gap-2 sm:gap-4 mb-8 relative shadow-lg overflow-hidden border transition-colors duration-700 ${isLightMode ? 'bg-white border-white shadow-pink-100/50 border-l-[6px] border-l-[#f472b6]' : 'bg-[#151518] border-white/[0.02]'}`}>
        
        {/* Spotify Icon (Top Right) */}
        <div className={`absolute top-4 right-4 transition-colors duration-500 ${isLightMode ? 'text-[#f472b6] hover:text-[#1DB954] hover:scale-110 transition-transform' : 'text-white/30 hover:text-[#1DB954] hover:scale-110 transition-transform'}`}>
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 cursor-pointer">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.54.6.301.96zm1.44-3.3c-.301.42-.84.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.781-.18-.6.18-1.2.78-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.239.54-.959.72-1.62.36z"/>
          </svg>
        </div>
        
      <audio ref={audioRef} src={myMusic} loop />

      {/* Vinyl CD Component */}
      <div 
        className={`w-[70px] h-[70px] sm:w-[85px] sm:h-[85px] ml-1 shrink-0 rounded-full bg-[#111] border-[4px] border-[#222] shadow-xl flex items-center justify-center relative overflow-hidden animate-[spin_4s_linear_infinite]`}
        style={{ animationPlayState: isPlaying ? 'running' : 'paused' }}
      >
        {/* Grooves */}
        <div className="absolute inset-1 rounded-full border border-white/10" />
        <div className="absolute inset-3 rounded-full border border-white/10" />
        <div className="absolute inset-5 rounded-full border border-white/10" />
        
        {/* Center Label (Album Art) */}
        <div className="w-[28px] h-[28px] sm:w-[35px] sm:h-[35px] rounded-full overflow-hidden relative">
          <img src={albumArt} alt="Album Art" className="w-full h-full object-cover" />
          {/* Spindle Hole */}
          <div className={`absolute inset-0 m-auto w-[10px] h-[10px] rounded-full shadow-inner ${isLightMode ? 'bg-white/95' : 'bg-[#151518]'}`} />
        </div>
      </div>

      <div className="flex-1 py-1 ml-1 sm:ml-2">
        <h3 className={`text-[14px] sm:text-[17px] font-bold mb-0.5 tracking-tight transition-colors duration-500 ${isLightMode ? 'text-slate-800' : 'text-white'}`}>뭐해 '라는 씨앗에서 (Official Audio)</h3>
        <p className={`text-[13px] mb-2 transition-colors duration-500 ${isLightMode ? 'text-slate-500' : 'text-[#a1a1aa]'}`}>UNIS</p>
        <div className="flex items-center gap-2">
          <button onClick={togglePlay} className={`px-4 py-1 rounded-xl text-xs font-bold transition border w-[70px] text-center ${isLightMode ? 'bg-[#fce7f3] text-[#f472b6] border-[#fbcfe8] hover:bg-pink-200' : 'bg-[#2c2d33] text-white border-white/5 hover:bg-[#383942]'}`}>
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <button onClick={volumeUp} className={`flex items-center justify-center w-[26px] h-[26px] border rounded-full text-base pb-0.5 transition ${isLightMode ? 'text-[#94a3b8] hover:text-slate-700 border-[#cbd5e1]' : 'text-[#a1a1aa] hover:text-white border-white/20'}`} title="Volume Up">+</button>
          <button onClick={volumeDown} className={`flex items-center justify-center w-[26px] h-[26px] border rounded-full text-base pb-0.5 transition ${isLightMode ? 'text-[#94a3b8] hover:text-slate-700 border-[#cbd5e1]' : 'text-[#a1a1aa] hover:text-white border-white/20'}`} title="Volume Down">-</button>
        </div>
      </div>
      <button onClick={togglePlay} className={`w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] rounded-full flex items-center justify-center mr-2 sm:mr-4 shrink-0 hover:scale-105 transition ${isLightMode ? 'bg-white text-black border-2 border-[#e2e8f0] shadow-[0_0_20px_rgba(226,232,240,0.6)]' : 'bg-white text-black hover:bg-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.05)]'}`}>
        {isPlaying ? (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <rect x="6" y="4" width="4" height="16" />
            <rect x="14" y="4" width="4" height="16" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-[26px] h-[26px] ml-1">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>
    </div>
  )
}
