import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import { FaApple, FaGooglePlay, FaGamepad } from "react-icons/fa";

const pixelFont = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tessera: Classic Block Puzzle - Retro Vibes, Modern Moves!",
  description: "Ready to dominate the world of falling blocks? Tessera blends nostalgic 8-bit vibes with 7 epic game modes. Download now!",
};

const GameModeCard = ({ title, description, className = "" }: { title: string, description: string, className?: string }) => (
    <div className={`bg-gray-900/50 border border-gray-700 p-6 hover:border-green-400 transition-colors group relative overflow-hidden ${className}`}>
        <div className="absolute inset-0 bg-green-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        <div className="relative z-10">
            <h3 className="text-green-400 font-bold mb-2 text-sm md:text-base">{title}</h3>
            <p className="text-gray-400 text-xs leading-relaxed">{description}</p>
        </div>
    </div>
);

const TesseraGameLanding = () => {
  return (
    <div className={`min-h-screen bg-black text-white selection:bg-green-500 selection:text-black overflow-x-hidden ${pixelFont.className} absolute inset-0`}>
      {/* Background Starfield Effect */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random(),
            }}
          />
        ))}
      </div>

      {/* Retro Grid Floor */}
      <div className="fixed bottom-0 left-0 right-0 h-[50vh] z-0 opacity-40 pointer-events-none" 
           style={{ 
             perspective: '500px',
             transformStyle: 'preserve-3d'
           }}>
        <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent" />
        <div 
            className="absolute inset-0 w-full h-full origin-bottom"
            style={{
                backgroundImage: 'linear-gradient(transparent 95%, rgba(34, 197, 94, 0.5) 95%), linear-gradient(90deg, transparent 95%, rgba(34, 197, 94, 0.5) 95%)',
                backgroundSize: '40px 40px',
                transform: 'rotateX(60deg) scale(2)',
                animation: 'grid-move 20s linear infinite'
            }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-screen">
        
        {/* Header / Logo Section */}
        <header className="text-center mb-12 relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-green-500 via-purple-500 to-pink-500 rounded-lg opacity-20 group-hover:opacity-40 blur transition duration-500"></div>
          <div className="relative bg-black/50 border-4 border-white p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
            
            <div className="mb-6 flex justify-center">
                <Image 
                    src="/tessera-logo.png" 
                    alt="Tessera Arcade Logo" 
                    width={200} 
                    height={90} 
                    className="w-full max-w-[110px] md:max-w-[180px] h-auto object-contain pixelated"
                    style={{ imageRendering: 'pixelated' }}
                />
            </div>
            
            <h1 className="sr-only">TESSERA ARCADE</h1>

            <p className="text-green-300 text-xs md:text-sm mt-4 tracking-widest uppercase">
              Retro Vibes, Modern Moves!
            </p>
          </div>
        </header>

         {/* Download Buttons */}
        <div className="flex flex-col md:flex-row gap-6 w-full max-w-2xl justify-center items-center">
          
          {/* App Store */}
          <Link 
            href="https://apps.apple.com/vn/app/tessera-classic-block-puzzle/id6758011076"
            target="_blank"
            className="group relative w-full md:w-auto"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
            <button className="relative w-full md:w-64 bg-slate-900 border-2 border-white hover:bg-slate-800 text-white px-6 py-4 flex items-center justify-center gap-4 transition-transform active:translate-y-1 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] group-hover:translate-x-1 group-hover:-translate-y-1">
              <FaApple className="text-3xl" />
              <div className="text-left">
                <div className="text-[0.6rem] uppercase text-gray-400">Download on the</div>
                <div className="text-lg md:text-xl">App Store</div>
              </div>
            </button>
          </Link>

          {/* Play Store */}
          <Link 
            href="https://play.google.com/store/apps/details?id=com.duc_innolab.game.tetrafall"
            target="_blank"
            className="group relative w-full md:w-auto"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-lime-400 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
            <button className="relative w-full md:w-64 bg-slate-900 border-2 border-white hover:bg-slate-800 text-white px-6 py-4 flex items-center justify-center gap-4 transition-transform active:translate-y-1 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] group-hover:translate-x-1 group-hover:-translate-y-1">
              <FaGooglePlay className="text-3xl" />
              <div className="text-left">
                <div className="text-[0.6rem] uppercase text-gray-400">Get it on</div>
                <div className="text-lg md:text-xl">Google Play</div>
              </div>
            </button>
          </Link>
        </div>


        {/* Introduction */}
        <div className="max-w-3xl text-center mb-16 space-y-6 mt-12">
          <p className="text-gray-300 text-sm md:text-base leading-relaxed bg-black/80 p-6 border-2 border-dashed border-gray-700 shadow-[4px_4px_0_rgba(75,85,99,1)]">
            Ready to dominate the world of falling blocks? <strong className="text-green-400">Tessera</strong> isn't just another brick game—it’s a puzzle universe that blends nostalgic 8-bit vibes with mind-blowing new game modes.
            <br/><br/>
            Whether you’re a purist who loves the classic grind or a strategy pro looking for the next big challenge, Tessera has a mode with your name on it!
          </p>
        </div>

        {/* Game Modes Grid */}
        <div className="w-full max-w-5xl mb-16">
            <h2 className="text-2xl md:text-3xl text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 drop-shadow-[2px_2px_0_rgba(255,255,255,0.5)]">
                7 EPIC GAME MODES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <GameModeCard title="Block Slide (NEW!)" description="Slide blocks to fill gaps. Rows keep rising—keep your cool!" />
                <GameModeCard title="Block Puzzle Blast" description="The ultimate chill mode. Drag & drop, no timers, just pure strategy." />
                <GameModeCard title="Classic Mode" description="The legend is back! Stack blocks & chase high scores with retro D-Pad." />
                <GameModeCard title="Color Match" description="Connect matching colors for massive 'Color Spans' & chain reactions." />
                <GameModeCard title="Time Attack" description="2 minutes on the clock. Clear lines to 'hack' the timer & earn time." />
                <GameModeCard title="Survival Mode" description="Garbage lines rise, speed increases. Survive the 45s Surge Events!" />
                <GameModeCard title="Gravity Glitch" description="Physics gone wild! Adapt to Heavy drops or Anti-Gravity floating blocks." className="md:col-span-2 lg:col-span-3" />
            </div>
        </div>

        {/* Features Section */}
        <div className="w-full max-w-4xl mb-16 bg-slate-900/80 border-2 border-white p-8 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black px-4 text-green-400 border border-green-400 text-xs">COOL FEATURES</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm md:text-base">
                <div className="flex items-start gap-4">
                    <div>
                        <h3 className="text-yellow-400 font-bold mb-1">Pro Controls</h3>
                        <p className="text-gray-400 text-xs">Switch between modern Swipe gestures or 'old-school' D-Pad Buttons.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div>
                        <h3 className="text-yellow-400 font-bold mb-1">Flex Your Style</h3>
                        <p className="text-gray-400 text-xs">Unlock sick Brick Skins and Color Themes to match your mood.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div>
                        <h3 className="text-yellow-400 font-bold mb-1">Play Anywhere</h3>
                        <p className="text-gray-400 text-xs">No Wi-Fi? No problem. 100% offline-ready.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div>
                        <h3 className="text-yellow-400 font-bold mb-1">Retro Cyber Visuals</h3>
                        <p className="text-gray-400 text-xs">Clean, pixel-perfect graphics that look stunning on any device.</p>
                    </div>
                </div>
            </div>
        </div>

       
        {/* Footer / Copyright */}
        <footer className="mt-20 text-center text-[10px] text-gray-600">
           <p className="flex items-center justify-center gap-2">
            <FaGamepad className="animate-bounce" />
            © {new Date().getFullYear()} DUC'S INNOVATION LAB, IND. ALL RIGHTS RESERVED.
           </p>
           <div className="mt-2 space-x-4">
             <Link href="/tessera-game/privacy-policy" className="hover:text-white underline decoration-dashed">Privacy</Link>
             <Link href="/tessera-game/license" className="hover:text-white underline decoration-dashed">License</Link>
           </div>
        </footer>

      </div>
    </div>
  );
};

export default TesseraGameLanding;