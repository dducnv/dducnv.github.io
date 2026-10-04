import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Decopix: Creative Photo Studio, Doodle Borders & Retro Print',
  description: 'Transform your photos with Neo-Brutalism aesthetics, doodle borders along curves, retro instant print, digicam timestamps, and smart palette frames. 100% on-device privacy.',
};

export default function DecopixLandingPage() {
  return (
    <div className="min-h-screen bg-[#121214] text-white flex flex-col justify-between items-center p-4 md:p-8 font-sans selection:bg-[#FFE600] selection:text-black">
      {/* Decorative Neo Pop Background Accents */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#FFE600]/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 -right-28 w-96 h-96 bg-[#FF70A6]/10 rounded-full blur-[100px]" />
        <div className="absolute -bottom-24 left-1/3 w-96 h-96 bg-[#70D6FF]/10 rounded-full blur-[100px]" />
      </div>

      {/* Header / Brand Badge */}
      <header className="w-full max-w-4xl flex items-center justify-between py-4 mb-4">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 bg-[#FFE600] text-black font-black text-xs uppercase tracking-wider border-2 border-black rounded-md shadow-[2.5px_2.5px_0px_#000000]">
            POP STUDIO
          </span>
          <span className="text-xs text-zinc-400 font-mono tracking-tight hidden sm:inline">
            v2.0 • iOS &amp; Android
          </span>
        </div>
        <div className="flex items-center gap-3 text-xs font-bold">
          <Link
            href="/decopix/privacy-policy"
            className="text-zinc-400 hover:text-white transition-colors underline-offset-4 hover:underline"
          >
            Privacy
          </Link>
          <span className="text-zinc-600">•</span>
          <Link
            href="/decopix/terms-of-service"
            className="text-zinc-400 hover:text-white transition-colors underline-offset-4 hover:underline"
          >
            Terms
          </Link>
        </div>
      </header>

      {/* Main Hero Card */}
      <main className="w-full max-w-xl flex flex-col items-center text-center my-auto py-8">
        {/* App Icon Container */}
        <div className="relative mb-6 group">
          <div className="w-[124px] h-[124px] md:w-[140px] md:h-[140px] rounded-[26px] overflow-hidden border-[3px] border-black shadow-[6px_6px_0px_#FFE600] transition-transform duration-200 group-hover:scale-105 group-hover:-translate-y-1">
            <Image
              src="/decopix.png"
              alt="Decopix App Icon"
              width={280}
              height={280}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          {/* Pop Tag */}
          <div className="absolute -bottom-3 -right-3 bg-[#FF70A6] text-black font-black text-[11px] px-2.5 py-0.5 border-2 border-black rounded-md shadow-[2.5px_2.5px_0px_#000000] rotate-3">
            POP ✨
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-3">
          Decopix
        </h1>

        {/* Subtitle / Value Prop */}
        <p className="text-base md:text-lg text-zinc-300 max-w-md mb-8 leading-relaxed font-medium">
          The Neo-Brutalism creative studio for your photos. Doodle borders, retro instant prints, vintage digicam stamps, and aesthetic frames.
        </p>

        {/* Action Buttons: App Store & Google Play */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mb-10">
          {/* iOS App Store */}
          <a
            href="https://apps.apple.com/app/decopix/id6758265582"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-3 px-5 py-3.5 bg-[#FFE600] text-black font-black border-[2.5px] border-black rounded-xl shadow-[4px_4px_0px_#000000] hover:shadow-[2px_2px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all no-underline"
          >
            <img
              src="/icon/apple_logo.svg"
              alt="Apple logo"
              className="w-6 h-6"
            />
            <div className="flex flex-col text-left leading-tight">
              <span className="text-[10px] uppercase font-bold tracking-wider opacity-80">
                Download on
              </span>
              <span className="text-base font-extrabold tracking-tight">
                App Store
              </span>
            </div>
          </a>

          {/* Google Play */}
          <a
            href="https://play.google.com/store/apps/details?id=com.ducinnovalab.decopix"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-3 px-5 py-3.5 bg-[#70D6FF] text-black font-black border-[2.5px] border-black rounded-xl shadow-[4px_4px_0px_#000000] hover:shadow-[2px_2px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all no-underline"
          >
            <img
              src="/icon/android_logo.svg"
              alt="Google Play logo"
              className="w-6 h-6"
            />
            <div className="flex flex-col text-left leading-tight">
              <span className="text-[10px] uppercase font-bold tracking-wider opacity-80">
                Get it on
              </span>
              <span className="text-base font-extrabold tracking-tight">
                Google Play
              </span>
            </div>
          </a>
        </div>

        {/* Feature Highlights Grid in Neo-Brutalism POP style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full text-left">
          {/* Feature 1 */}
          <div className="p-4 bg-[#1E1E24] border-2 border-black rounded-xl shadow-[3.5px_3.5px_0px_#FFE600] flex flex-col">
            <div className="w-8 h-8 rounded-lg bg-[#FFE600] border-2 border-black flex items-center justify-center text-black font-bold text-base mb-2.5 shadow-[2px_2px_0px_#000000]">
              🎨
            </div>
            <h3 className="font-bold text-sm text-white mb-1">
              Doodle Borders &amp; Emojis
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Wrap cute stickers, emojis, wavy lines, and stamps seamlessly along photo edges or custom curves.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-4 bg-[#1E1E24] border-2 border-black rounded-xl shadow-[3.5px_3.5px_0px_#FF70A6] flex flex-col">
            <div className="w-8 h-8 rounded-lg bg-[#FF70A6] border-2 border-black flex items-center justify-center text-black font-bold text-base mb-2.5 shadow-[2px_2px_0px_#000000]">
              📸
            </div>
            <h3 className="font-bold text-sm text-white mb-1">
              Retro Print &amp; Timestamps
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Instant polaroid aesthetics, film grain, color halftone textures, and authentic Y2K digicam LED date stamps.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-4 bg-[#1E1E24] border-2 border-black rounded-xl shadow-[3.5px_3.5px_0px_#70D6FF] flex flex-col">
            <div className="w-8 h-8 rounded-lg bg-[#70D6FF] border-2 border-black flex items-center justify-center text-black font-bold text-base mb-2.5 shadow-[2px_2px_0px_#000000]">
              🪄
            </div>
            <h3 className="font-bold text-sm text-white mb-1">
              Smart Palette &amp; Frames
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Automatic palette extraction, vibrant pop gradients, customizable drop shadows, and layout freedom.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="p-4 bg-[#1E1E24] border-2 border-black rounded-xl shadow-[3.5px_3.5px_0px_#D4FF00] flex flex-col">
            <div className="w-8 h-8 rounded-lg bg-[#D4FF00] border-2 border-black flex items-center justify-center text-black font-bold text-base mb-2.5 shadow-[2px_2px_0px_#000000]">
              🔒
            </div>
            <h3 className="font-bold text-sm text-white mb-1">
              100% On-Device &amp; Private
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Zero cloud uploads. All rendering happens completely on your device hardware with maximum privacy and speed.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-4xl flex flex-col sm:flex-row items-center justify-between py-6 mt-8 border-t border-zinc-800 text-xs text-zinc-500 gap-3">
        <p>© {new Date().getFullYear()} Decopix • DucInnovaLab. All rights reserved.</p>
        <div className="flex gap-4">
          <Link
            href="/decopix/privacy-policy"
            className="hover:text-zinc-300 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/decopix/terms-of-service"
            className="hover:text-zinc-300 transition-colors"
          >
            Terms of Service
          </Link>
          <a
            href="mailto:contact.ducnv@gmail.com"
            className="hover:text-zinc-300 transition-colors"
          >
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
}
